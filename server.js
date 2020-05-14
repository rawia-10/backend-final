require('rootpath')();
const express=require("express")
const bodyParser=require("body-parser")
var cors=require("cors")

const path = require('path')
const config = require('./config/index');
require("dotenv").config({
  path: path.join(__dirname, '.env')
});

// const userrouter=require("./routers/userrouter")
const patientrouter=require("./routers/patientrouter")
const medecinrouter=require("./routers/medecinrouter")
const secretairerouter=require("./routers/secretairerouter")
const rendezvousrouter=require("./routers/rendezvousrouter")
const rolerouter=require("./routers/role")
const adminrouter=require("./routers/adminrouter")

const db=require("./models/db")
const app=express()
const customMiddleware=(req,res,next)=>
{
  console.log('ok')
  next()
}

app.set('secretKey','test')//nal9awouha fi authentification



// global error handler

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors())


app.use("/patient",patientrouter)
app.use("/medecin",medecinrouter)
app.use("/rdv",rendezvousrouter)
app.use("/role",rolerouter)
app.use("/secretaire",secretairerouter)
app.use("/admin",adminrouter)

app.listen(config.express_port, function () {
  console.log(`App running on port ${config.express_port}`);
});
