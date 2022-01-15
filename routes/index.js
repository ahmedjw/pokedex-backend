var express = require('express');
var router = express.Router();
const fs = require('fs');
const path =require('path');
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/:id',function(req,res,next){
    let file_path = path.join(__dirname,'../data.json');
    fs.readFile(file_path,'utf-8',(err,data)=>{
        js_object = JSON.parse(data);
        let id = req.params.id;
        res.json({test:id});
    });
});
router.get('/search/:id',function(req,res,next){
    let file_path = path.join(__dirname,'../data.json');
    fs.readFile(file_path,'utf-8',(err,data)=>{
        js_object = JSON.parse(data);
        let id = req.params.id;
        res.json({test:id});
    });
});
module.exports = router;