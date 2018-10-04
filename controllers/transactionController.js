const Transaction = require('../models/transaction');

module.exports = {
    showAll: (req, res) => {
        Transaction.find({}).populate('booklist member').exec().then((transactions) => {
            res.status(200).json(transactions);
        }).catch((err) => {
            res.status(500).json(err);
        });
    },

    create: (req, res) => {
        let  {member, days, out_date,due_date,in_date,fine,booklist} = req.body
        let newTransaction = new Transaction({member, days, out_date,due_date,in_date,fine,booklist});

        newTransaction.save().then(() => {
            res.status(200).json({
                message: 'a new transaction has been added'
            })
        }).catch((err) => {
            res.status(500).json(err);
        });
    },

    update: (req, res) => {
        let {member, days, out_date,due_date,in_date,fine,booklist} = req.body;
        console.log('masul');
        Transaction.updateOne({_id: req.params.id}, {member, days, out_date,due_date,in_date,fine,booklist})
            .then((raw) => {
                res.status(200).json(raw);
            }).catch((err) => {
                res.status(500).json(err);
            });
    },

    delete: (req, res) => {
        Transaction.deleteOne({_id: req.params.id}).then(() => {
            res.status(200).json({
                message: `${req.params.id} has been deleted`
            });
        }).catch((err) => {
            res.status(500).json(err);
        });
    },

    findById: (req, res) => {
        Transaction.findById(req.params.id).then((transaction) => {
            console.log('masukkkkkkk id');
            res.status(200).json(transaction);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
};

/* 
if err try this
sudo rm /var/lib/mongodb/mongod.lock
sudo mongod --repair
sudo service mongodb restart
sudo service mongod status*/
