const { Model, DataTypes } = require('sequelize');

class UserTechnology extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            technology_id: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = UserTechnology;