const mongoose = require('mongoose');
const User = require('../models/User');

class UsersController {

    async inserirUsuario(req, res) {
        try {
            mongoose.connect('mongodb://localhost:27017/angular', { useNewUrlParser: true });
            
            let user = new User({...req.body});
            user = await user.save();
            res.json(user);

        } catch(err) {
            res.status(500).json(err);
        }
    }

    async buscarUsuarios(req, res) {
        try {
            mongoose.connect('mongodb://localhost:27017/angular', { useNewUrlParser: true });

            const query = User.find();
            const usuarios = await query.exec();
            
            res.json(usuarios);

        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new UsersController();