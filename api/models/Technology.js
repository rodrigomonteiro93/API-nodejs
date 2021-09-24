const { Model, DataTypes } = require('sequelize');

class Technology extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    
    static associate(models) {
                           //Model principal             //chave no model pivo                    //Model pivo
        this.belongsToMany(models.User, {foreignKey: 'technology_id', as: 'users', through: 'UserTechnology'})
    }
    
}

module.exports = Technology;