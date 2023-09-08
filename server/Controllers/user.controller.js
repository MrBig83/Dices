const { initStripe } = require("../Controllers/stripe.controller")
const stripe = initStripe();
const fs = require("fs");
const bcrypt = require("bcrypt")


const getAllUsers = async (req, res) => {
    fs.readFile("../server/data/users.json", (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
      });
  };
  
const saveToStripe = async (req) => {
  const customer = await stripe.customers.create({
    name: req.body.name, 
    email: req.body.userEmail,
    description: req.body.description
  })
  return customer
}

const saveUser = async (req, res) => {
  const customer = await saveToStripe(req)
  const hashedPassword = await bcrypt.hash(req.body.userPassword, 10)
   let customerObj = new Object()
   customerObj.id = customer.id;
   customerObj.name = customer.name;
   customerObj.email = customer.email;
   customerObj.password = hashedPassword;
   customerObj.description = customer.description;
  
    fs.readFile("../server/data/users.json", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data)
        data.push(customerObj)

        fs.writeFile("../server/data/users.json", JSON.stringify(data, null, 2), err => {
            if(err) {
                console.error(err);
            }
            res.status(200).json("New user added")
        })
      });
};

const loginUser = async (req, res) => {
  await fs.readFile("../server/data/users.json", (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);

    users.forEach(user => {
      if(req.body.userEmail == user.email){
        bcrypt.compare(req.body.userPassword, user.password, function(err, result) {
          if(result == true){
            req.session = user
            res.status(200).json(req.session)
          }
        });
      } 
      
      
    });
  });
}

const logoutUser = async (req, res) => {
  req.session = null
  res.status(204).json(null)
}

  module.exports = {
    getAllUsers,
    saveUser, 
    loginUser, 
    logoutUser
  };