const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const UserSchema = new mongoose.Schema({
 

  name: String,
  email: String,
  //password: String,
  cpassword: String,
  tokens:[
    {
        token: {
         type: String,
         required:true

       }
    }
  ]

});

//we are hashing the password!!


UserSchema.pre('save' , async function (next) {
  console.log("hii from inside");
   if (this.isModified('cpassword')) {  

     //this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();   

});


//We are generating token

UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY  )
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;  

  } catch (err){
    console.log(err);
  }

}


const User = mongoose.model('USER', UserSchema); 
module.exports= User ;
