const bcrypt = require('bcryptjs');
const express = require('express');
const db = require("../models/db");
const session = require('express-session');
const customer = db.Customer;
const app = express();

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false
}));

// REGISTER 
exports.register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newCustomer = {
        customer_name: req.body.name,
        customer_email: req.body.email, 
        customer_password: hashedPassword
    }; 
    customer.findOrCreate({
        where: { customer_email: req.body.email },
        defaults: newCustomer
      })
      .then(([customer, created]) => {
        if (created) {
          console.log('Customer created:', customer.toJSON());
          res.status(200).json(newCustomer.customer_email);
        } else {
          console.log('Customer already exists:', customer.toJSON());
        }
      })
      .catch(error => {
        console.log('Error creating customer:', error);
      });
    console.log("data = ",req.body);
}

// LOGIN
exports.login = async (req, res) => {
    console.log(req.body);
    const customer_email = req.body.email;
    const customer_pwd = req.body.password;

    // Find the customer with the given email address
    const customersearch = await customer.findOne({ where: { customer_email } });
     // If the customer is not found, return an error
     if (!customersearch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }else{
      // Compare the password hash with the input password
    const isPasswordMatch = await bcrypt.compare(customer_pwd, customersearch.customer_password);
    // If the passwords do not match, return an error
    if (!isPasswordMatch) {
         return res.status(401).json({ message: 'Invalid email or password' });
    }
    else{
       // If the login is successful, redirect to the home component
      res.status(200).json(customersearch.customer_email);

    }
    }
    


}