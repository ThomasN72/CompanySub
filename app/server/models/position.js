module.exports = function (sequelize, DataTypes) {
    var Position = sequelize.define("Position", {
        positionTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Position.associate = function (models) {
        Position.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    Position.associate = function(models) {
      Position.belongsTo(models.Company, {
           foreignKey: { 
               allowNull: false 
            }
        });
    };
    return Position;
};
