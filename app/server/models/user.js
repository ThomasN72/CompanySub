module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }, 
    firstName: {
        type: DataTypes.STRING,  
        allowNull: false
    },
    lastName: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  });

//   Post.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Post.belongsTo(models.Author, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return User;
};
