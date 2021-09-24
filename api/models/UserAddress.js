const { Model, DataTypes } = require('sequelize');

class UserAddress extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = UserAddress;