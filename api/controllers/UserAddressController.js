const UserAddress = require('../models/UserAddress');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { userId } = req.params;
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userAddress = await UserAddress.findAll({
            where: {
                user_id: userId
            }
        });
        if (!userAddress.length) return res.status(404).json('Address not found!');

        return res.status(200).json(userAddress);
    },

    async show({ params: { userId, id } }, res) {
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userAddress = await UserAddress.findAll({
            where: {
                id: id,
                user_id: userId
            }
        });
        if (!userAddress.length) return res.status(404).json('Address not found!');

        return res.status(200).json(userAddress);
    },

    async store({ body, params: { userId } }, res) {
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        body.user_id = userId;

        const created = await UserAddress.create(body);

        return res.status(200).json(created);
    },

    async update(req, res) {
        const { userId, id } = req.params;
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userAddress = await UserAddress.findOne({
            where: {
                id: id,
                user_id: userId
            }
        });
        if (!userAddress) return res.status(404).json('Address not found!');
        
        const updated = await userAddress.update(req.body)
        return res.status(200).json(updated);
    },

    async delete(req, res) {
        const { userId, id } = req.params;
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userAddress = await UserAddress.findOne({
            where: {
                id: id,
                user_id: userId
            }
        });
        if (!userAddress) return res.status(404).json('Address not found!');

        await userAddress.destroy();
        return res.status(200).json('Address deleted!');
    }
}