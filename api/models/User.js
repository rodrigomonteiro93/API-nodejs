const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.UserAddress, {foreignKey: 'user_id', as: 'addresses'}),
                           //Model principal             //chave no model pivo                    //Model pivo
        this.belongsToMany(models.Technology, {foreignKey: 'user_id', as: 'technologies', through: 'UserTechnology'})
    }
    
}

module.exports = User;