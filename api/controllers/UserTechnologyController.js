const UserTechnology = require('../models/UserTechnology');
const Technology = require('../models/Technology');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        console.log('1234')
        const { userId } = req.params;
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userTechnology = await UserTechnology.findAll({
            where: {
                user_id: userId
            }
        });
        if (!userTechnology.length) return res.status(404).json('Technologies not found!');

        return res.status(200).json(userTechnology);
    },

    async store({ body, params: { userId } }, res) {
        
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        if (!await Technology.findByPk(body.technology_id)) return res.status(404).json('Technology not found!');
        body.user_id = userId;

        const created = await UserTechnology.create(body);

        return res.status(200).json(created);
    },

    async delete(req, res) {
        const { userId, id } = req.params;
        if (!await User.findByPk(userId)) return res.status(404).json('User not found!');
        const userTechnology = await UserTechnology.findOne({
            where: {
                id: id,
                user_id: userId
            }
        });
        if (!userTechnology) return res.status(404).json('Technology not found!');

        await userTechnology.destroy();
        return res.status(200).json('Address deleted!');
    }
}