"use strict";

module.exports = (sequelize, DataTypes) => {
  const email = sequelize.define(
    "email",
    {
      email_address: { type: DataTypes.STRING, allowNull: false },
      contact_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "contact",
          key: "id",
        },
      },
    },
    { freezeTableName: true, underscored: true }
  );

  email.associate = (models) => {
    email.belongsTo(models.contact, { foreignKey: "contact_id" });
  };

  return email;
};

// module.exports = (sequelize, DataTypes) => {
//   class email extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   email.init(
//     {
//       email_address: { type: DataTypes.STRING, allowNull: false },
//       contact_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: contact, // 'Movies' would also work
//           key: "id",
//         },
//       },
//     },
//     {
//       sequelize,
//       modelName: "email",
//     }
//   );
//   return email;
// };
