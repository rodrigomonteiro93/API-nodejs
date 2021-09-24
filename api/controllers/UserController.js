const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { Op } = require("sequelize");
        const users = await User.findAll({
            where: {
                id: {
                    [Op.gte]: 14, 
                }
            },
            order: [
                ['id', 'ASC'],
            ],
            include: [
                {
                    association: 'addresses'
                },
                {
                    association: 'technologies',
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        return res.status(200).json(users);
    },

    async store(req, res) {
        const created = await User.create(req.body);

        return res.status(200).json(created);
    },

    async update(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id)
        if (!user) return res.status(404).json('User not found!');
        
        const updated = await user.update(req.body)
        return res.status(200).json(updated);
    },

    async show(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            include: [
                {
                    association: 'addresses'
                },
                {
                    association: 'technologies',
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        if (!user) return res.status(404).json('User not found!');

        return res.status(200).json(user);
    },

    async delete(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id)
        if (!user) return res.status(404).json('User not found!');

        await user.destroy();
        return res.status(200).json('User deleted!');
    }
}