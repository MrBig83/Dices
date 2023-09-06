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
  
const saveUser = async (req, res) => {
    
    fs.readFile("../server/data/users.json", (err, data) => {
        if (err) throw err;
        data = JSON.parse(data)
        
        
        data.push(req.body) //Hindra två användare med samma mailadress? 
        
        fs.writeFile("../server/data/users.json", JSON.stringify(data, null, 2), err => {
            if(err) {
                console.error(err);
            }
            //res.status(200).json(data)
            res.status(200).json("New user added")
        })
      });
    // const users = JSON.parse(oldUsers)
    // users.push(req.body)
    // console.log(users);

    // fs.writeFileSync("../server/data/users.json", JSON.stringify(users, null, 2), err => {
    //     if(err) {
    //         console.error(err);
    //     }
    //     res.status(200).json(user);
    // })
};

  module.exports = {
    getAllUsers,
    saveUser
  };