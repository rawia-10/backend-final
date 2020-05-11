const roleModel  = require ('../models/role');




module.exports = {


    ajouterRole: function (req, res) {
        const role = new roleModel({

            nom: req.body.nom,

        });
        role.save(function (err) {

            if (err) {

                res.json({state: 'no', msg: 'vous avez un erreur'})
            }
            else {
                res.json({state: 'ok', msg: 'cat ajouter'})

            }


        })


    },



};