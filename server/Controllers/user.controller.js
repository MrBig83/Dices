const { initStripe } = require("../Controllers/stripe.controller")
const stripe = initStripe();
const fs = require("fs");


const getAllUsers = async (req, res) => {
  // let customer = await stripe.customers.retrieve(
  //   "cus_OaAhzaTjeTWA3d",
  //   {
  //     apiKey: process.env.STRIPE_SECRET_KEY
  //   }
  // )
  //   res.status(200).json(customer);
  // };
    fs.readFile("../server/data/users.json", (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
      });

  };
  const verifyUnique = async (req, res, next) => {
    console.log("Kontrollera om unik");
    fs.readFile("../server/data/users.json", (err, data) => {
      if (err) throw err;

    const nyData = JSON.parse(data)

    if(nyData.length > 0){
      nyData.forEach(user => {
        if(req.body.email != user.email){
          return next();
        } else {
          console.log("ABORT MISSION!!");
          res.status(403).json("Mission aborted!")
          // return;
        }
      });   // Gör kontrollen på front end istället för backend. 
    }
    next();
    });
  }
  
const saveToStripe = async (req) => {
  const customer = await stripe.customers.create({
    name: req.body.name, 
    email: req.body.email,
    description: req.body.description
  })
  return customer
}

const saveUser = async (req, res) => {

  const customer = await saveToStripe(req)

  // console.log(customer);
  
    // const customer = await stripe.customers.create({
    //   name: req.body.name, 
    //   email: req.body.email,
    //   description: req.body.description
    // })

   let customerObj = new Object()
   customerObj.id = customer.id;
   customerObj.name = customer.name;
   customerObj.email = customer.email;
   customerObj.description = customer.description;
  //  console.log(customerObj);
  

    fs.readFile("../server/data/users.json", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data)

        
          // data.forEach(single => {
          //   if(req.body.email != single.email){

          //     console.log("Detta funkar ju fint... men sen då? ");
              
          //   }
          // });
          
          data.push(customerObj)
          // if(req.body.email == data.email){ //Måste man mappa ut datan?
          //   console.log("Nej du");
          // }
        

        
        
        fs.writeFile("../server/data/users.json", JSON.stringify(data, null, 2), err => {
            if(err) {
                console.error(err);
            }
            res.status(200).json("New user added")
        })
      });

};

  module.exports = {
    verifyUnique,
    getAllUsers,
    saveUser
  };