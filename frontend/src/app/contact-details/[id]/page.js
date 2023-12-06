"use client";

import React from "react";
import styles from "./ContactDetails.module.css";
import {
  Cake,
  Mail,
  Briefcase,
  Baby,
  Phone,
  Gamepad2,
  PersonStanding,
  Heart,
} from "lucide-react";
import useSWR from "swr";
import NavBarDetails from "@/components/NavBarDetails";
import InitialsAvatar from "@/components/InitialsAvatar";
import { capitalizeFirstLetter } from "@/utils";

export default function Page({ params }) {
  const { id } = params;

  const targetElement = React.useRef();
  const [showNameInNav, setShowNameInNav] = React.useState(false);
  const [nameInNavOpacity, setNameInNavOpacity] = React.useState(0);

  const fetcher = async (...args) =>
    fetch(...args).then((res) => {
      if (!res.ok) {
        const error = new Error();
        error.message = "An error occurred while loading user details page";
        throw error;
      }
      return res.json();
    });

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/contacts/${id}`,
    fetcher
  );

  const {
    birthday = "",
    is_parent,
    is_employed,
    contact_phone_numbers = [],
    emails = [],
    first_name,
    last_name,
    hobbies,
    categories,
    marital_status,
  } = data ?? {};

  const company_industry = data?.employment_detail?.company_industry;
  const role = data?.employment_detail?.role;
  const company_name = data?.employment_detail?.company_name;
  const daughter_count = data?.parenthood_detail?.daughter_count;
  const son_count = data?.parenthood_detail?.son_count;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.01, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const [fontColor, setFontColor] = React.useState("black");

  let observer = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    entry.target.style.opacity = entry.intersectionRatio;
    if (entry.intersectionRatio > 0.2) {
      setShowNameInNav(false);
      setNameInNavOpacity(entry.intersectionRatio);
    } else {
      setShowNameInNav(true);
      entry.target.style.opacity = 0;
    }
  }, options);

  React.useEffect(() => {
    const target = targetElement.current;
    if (!target) {
      return;
    }
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [isLoading]);

  if (error) {
    console.log("error");
    return <div>failed to load</div>;
  }
  if (isLoading) {
    console.log("loading");
    return <div>loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <NavBarDetails
        name={{ first_name, last_name }}
        showNameInNav={showNameInNav}
        opacity={nameInNavOpacity}
      />

      <div className={styles.greyBG}>
        <div ref={targetElement} className={styles.userSummary}>
          <InitialsAvatar
            firstName={first_name}
            lastName={last_name}
            circleSize="70px"
            fontSize="30px"
            className={styles.avatar}
            fontClassName={styles.avatarFont}
          ></InitialsAvatar>
          <div className={styles.fullName} style={{ color: fontColor }}>
            {capitalizeFirstLetter(first_name)}{" "}
            {capitalizeFirstLetter(last_name)}
          </div>
          <div className={styles.jobInfo}>
            <span className={styles.jobText}>
              {role}
              {!role || !company_name ? " " : ", "}
              {company_name}
            </span>
          </div>
        </div>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="var(--color-gray-2)"
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,128C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}

      <main className={styles.whiteBG}>
        <section className={styles.section}>
          <Cake className={styles.icon} />
          <div className={styles.row}>
            <span>{new Date(birthday).toLocaleDateString()}</span>
            <span className={styles.smallText}>Birthday | dd/mm/yyyy</span>
          </div>
        </section>
        <section className={styles.section}>
          <Phone className={styles.icon} />
          {contact_phone_numbers.map(({ phone_number }, idx) => {
            let className = `${styles.row}`;
            if (idx != 0) className = `${styles.row} ${styles.indented}`;
            return (
              <div key={idx} className={className}>
                {phone_number}
              </div>
            );
          })}
        </section>
        <section className={styles.section}>
          <Mail className={styles.icon} />
          {emails.map(({ email_address }, idx) => {
            let className = `${styles.row}`;
            if (idx != 0) className = `${styles.row} ${styles.indented}`;
            return (
              <div key={idx} className={className}>
                {email_address}
              </div>
            );
          })}
        </section>
        {is_employed === "employed" && (
          <section className={styles.section}>
            <Briefcase className={styles.icon} />
            <div className={styles.row}>
              <span>{company_industry}</span>
              <span className={styles.smallText}>Job industry</span>
            </div>
          </section>
        )}
        <section className={styles.section}>
          <Heart className={styles.icon} />
          <div className={styles.row}>
            <span>{marital_status}</span>
            <span className={styles.smallText}>Marital status</span>
          </div>
        </section>
        {is_parent === "parent" ? (
          <section className={styles.section}>
            <Baby className={styles.icon} />
            <div className={styles.row}>
              <span>{son_count}</span>
              <span className={styles.smallText}>Son(s)</span>
            </div>
            <div className={`${styles.row} ${styles.indented}`}>
              <span>{daughter_count}</span>
              <span className={styles.smallText}>Daughter(s)</span>
            </div>
          </section>
        ) : (
          <section className={styles.section}>
            <Baby className={styles.icon} />
            <div className={styles.row}>Not a parent</div>
          </section>
        )}

        <section className={styles.section}>
          <Gamepad2 className={styles.icon} />
          {hobbies.map(({ hobby_name }, idx) => {
            let className = `${styles.row}`;
            if (idx != 0) className = `${styles.row} ${styles.indented}`;
            return (
              <div key={idx} className={`${styles.row} ${styles.indented}`}>
                <span>{hobby_name}</span>
                <span className={styles.smallText}>Hobby {idx + 1}</span>
              </div>
            );
          })}
        </section>

        <section className={styles.section}>
          <PersonStanding className={styles.icon} />
          {categories?.map(({ category_name }, idx) => {
            let className = `${styles.row}`;
            if (idx != 0) className = `${styles.row} ${styles.indented}`;
            return (
              <div key={idx} className={`${className} ${styles.row}`}>
                <span>{category_name}</span>
                <span className={styles.smallText}>
                  Contact category {idx + 1}
                </span>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
