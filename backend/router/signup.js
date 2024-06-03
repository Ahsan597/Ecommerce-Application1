const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../Model/User.js");
// const { default: Signup } = require("../../frontend/my-app/src/components/Signup.js");
// const { default: Signup } = require("../../front/frontsales/src/components/Signup.js");

router.get('/getsignup', getsignupid)
router.post('/postsignup', postsignup)
router.post('/postsignin', postsignin)


async function getsignupid(req, res) {
  try {
    let form = await Signup.findById({_id: req.query.id},{
    })
    console.log(form)
    res.status(200).send(form)
  } catch (error) {
    res.send("am out of a route")
  }
}

async function getsignup(req,res){
  try {
    let form = await Signup.find();
    console.log(form)
    res.status(300).send({form: form})
  } catch (error) {
    res.send("am out of a route")
  }
}

async function postsignup(req, res) {
  try {
    let user = {};

      user.name = req.body.name,
      user.name1 = req.body.name1,
      user.pass = req.body.pass,
      user.email = req.body.email

      let data = new User(user);
      const salt = await bcrypt.genSalt(10);
      // now we set data password to hashed password
      data.pass = await bcrypt.hash(data.pass, salt);
      data.save().then((doc) => res.status(201).send(doc))
      .catch((error)=>{
        res.send("email already saved")
      });
  } catch (error) {
    res.send("am out of route")
  }
};
async function postsignin(req, res){
  try {
    const body = req.body
    let data1 = await User.findOne({ email: body.email });
    console.log({"data1": data1})
    if (!data1 ) {
      res.status(200).send({message: "email is invalid"});
    }
    else{
      const validPassword = await bcrypt.compare(body.pass, data1.pass);
      // console.log("pass", data1.pass, body.pass)
      if (!validPassword) {
        res.status(200).send({message: "password is invalid"});
      }
      else {
        res.status(250).send({message: "login"})
      }
    }
  } catch (error) {
    console.log(error)
    res.send({message: "am out of a route"})
  }
}
module.exports = router;