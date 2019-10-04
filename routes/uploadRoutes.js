const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.put('/uploads', function(req,res){
    if(req.files){
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se selecciono'
                }
            });
        }
})