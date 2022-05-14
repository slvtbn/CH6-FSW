const {
    cars
} = require('../models')

module.exports = class {
    static async createCar(req, res, next) {
        cars.create({
                tipe: req.body.tipe,
                model: req.body.model,
                tarif: req.body.tarif,
                available: true,
                createdby: req.adminlogin.id,
                updatedby: req.adminlogin.id
            })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'Car baru terupload!',
                    data: result
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static async getCarsAvail(req, res, next) {
        cars.findAll({
                where: {
                    available: true
                }
            })
            .then((result) => {
                res.status(200).send({
                    status: 200,
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static async updateCar(req, res, next) {
        try {
            const neUpdate = await cars.update({
                ...req.body,
                updatedby: req.adminlogin.id
            }, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(201).send({
                status: 201,
                message: 'Data car diupdate!',
                data: neUpdate
            })
        } catch (err) {
            res.status(500).send(err)
        }
    }
    static async deleteCar(req, res, next) {
        try {
            const delCars = await cars.update({
                deletedby: req.adminlogin.id,
                available: false
            }, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(201).send({
                status: 201,
                message: 'Data cars dihapus!',
                data: delCars
            })
        } catch (err) {
            res.status(500).send(err)
        }
    }

}