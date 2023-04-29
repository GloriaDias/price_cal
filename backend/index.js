const express = require('express');
// const ip = require("ip");
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const Cors = require('cors');
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");

const router = express.Router();
const db = require('./models/db');
const Topic = require('./models/Topic')(db.sequelize, DataTypes);

app.use(Cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(session({
  secret: 'abc123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // change this to true if using HTTPS
}));

app.use("/user", userRoute);
app.use("/product", productRoute);
app.get("/", (req, res) => {
    databaseRun();
    res.json({ message: "Welcome to Union Price Calculator" });
});


app.post('/addlesson', (req, res) => {
  // create a new topic using the request body
  Topic.create({
    course_id: req.body.course_id,
    topic_name: req.body.topic_name,
    description: req.body.description,
    duration:req.body.duration
  })
  .then(topic => {
    res.json(topic);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Internal server error');
  });
});

app.get('/lessons',  (req, res) => {
  // const constumer = req.session;
  db.Course.findAll().then(rescourses => {
        db.Topic.findAll().then(restopics => {
            res.setHeader('Content-Type', 'application/json');
            let data = {
              courses:rescourses,

              lessons:restopics,
              // customer:sessionStorage.getItem("customer")
            }
            // console.log(data);
            res.status(200).json(data);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Error retrieving Topics from database');
        });
       

}).catch(error => {
    console.error(error);
    res.status(500).send('Error retrieving courses from database');
});


});
app.listen(3001, () => {
    console.log("Backend server running");
});


function databaseRun(){
    db.sequelize.authenticate()
  .then((result)=>{
    console.log('Connection has been established successfully.'+result);
  })
  .catch((err)=>{
    console.error('Unable to connect to the database:', err);
  });
  
  db.sequelize.sync({logging:console.log}).then(() => {
    console.log('Drop and Resync Database with { force: true }');
  });
  
  }
module.exports = app;