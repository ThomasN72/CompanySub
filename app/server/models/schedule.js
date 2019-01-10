module.exports = function (sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
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

    // Post.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Post.belongsTo(models.Author, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Schedule;
};
