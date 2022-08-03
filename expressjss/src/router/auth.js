const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate= require('../middleware/authenticate');



require('../db/conne');
const User = require("../model/userSchema");











//register or sign up route
router.get("/", (req , res) => {
    res.send('salo ye sabkya ho rha hai be');
});





router.post('/register', async(req, res) => {

        const {name, email , cpassword} = req.body;

        if (!name || !email || !cpassword) {
            return res.status(422).json({ error:"plz fill the form properly"});
        }
        try{
            const userExist = await  User.findOne({ email:email   })
            if (userExist) {
                return res.status(422).json({ error:"Email already Exist"});
              }  else {
                const user = new User({name , email ,  cpassword});

                await  user.save();
  
                return res.status(201).json({ message:"user register successfully"});
              }
            
        }
         catch (err) { console.log (err);
         }
});




//About us ka page
router.get("/about", authenticate , (req , res) => {
  console.log("hello my about");
  res.send(req.rootUser);
});











//signing(Login route) route


router.post('/signin', async(req, res) =>
 {
    try{
        let token;
    const {email, cpassword} = req.body;

    if (!email || !cpassword) {
        return res.status(400).json({ error:"plz filled the data"});
    }
    const userLogin = await User.findOne({email : email});

    if ( userLogin) {
          const isMatch = await bcrypt.compare (cpassword ,  userLogin.cpassword ) ;
          
          token = await userLogin.generateAuthToken() ;
          console.log(token);
          res.cookie("jwtoken", token);
          //,  {
             // expires:new Date(Date.now+25666783200),
             // httpOnly:true
       //   });

          if (!isMatch) {
            res.status(400).json({ error:"Invalid Incrediels"});
          } else {
            res.json({"jwtoken":token})
            res.json({message:"user signing successfully"});
          }
        } else {
            res.status(400).json({ error:"Invalid Incrediels"});
        }

    }catch(err) { console.log (err);
    }
});



//logout ka page
router.post("/logout", (req , res) => {
  console.log('hello my logout page');
  // res.clearCookie('jwtoken' , {path:'/home'});
  // res.status(200).send('user Logout');
});



module.exports = router;
