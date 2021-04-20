const db = require('../database/models');

module.exports = {
    index : (req,res) => {
        res.render('admin/index')
    },
    products : (req,res) => {
        res.render('admin/products')
    },
}