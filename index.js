import express from 'express';
import router from  './routes/index.js'
import db from './config/db.js'

const app = express();

db.authenticate()
    .then(() => console.log("DB Funcionando"))
     .catch(() => console.log(" DB Funcionando"))


app.set('view engine','pug')

app.use( (req, res, next) => {
    res.locals.actualYear = new Date().getFullYear()
    next()
})
//habilitar formulario
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/', router);
app.use('/viajes', express.static('public'));
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`puerto ${port}`)
})
