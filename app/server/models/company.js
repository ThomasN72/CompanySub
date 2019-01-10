module.exports = function (sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      companyCity: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      companyState: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      companyCountry: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [1]
      }
    });


    return Company;
};
