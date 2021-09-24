const Technology = require('../models/Technology');

module.exports = {

    async index(req, res) {
        const technologies = await Technology.findAll(
            {
                include: [
                    {
                        association: 'users',
                        through: {
                            attributes: []
                        }
                    }
                ]
            }
        );

        return res.status(200).json(technologies);
    },

    async store(req, res) {
        const created = await Technology.create(req.body);

        return res.status(200).json(created);
    },

    async update(req, res) {
        const { id } = req.params;
        const technology = await Technology.findByPk(id)
        if (!technology) return res.status(404).json('Technology not found!');
        
        const updated = await technology.update(req.body)
        return res.status(200).json(updated);
    },

    async show(req, res) {
        const { id } = req.params;
        const technology = await Technology.findByPk(id)
        if (!technology) return res.status(404).json('Technology not found!');

        return res.status(200).json(technology);
    },

    async delete(req, res) {
        const { id } = req.params;
        const technology = await Technology.findByPk(id)
        if (!technology) return res.status(404).json('Technology not found!');

        await technology.destroy();
        return res.status(200).json('Technology deleted!');
    }
}