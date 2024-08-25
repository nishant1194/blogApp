const express = require("express");
const router = express.Router();
const User = require("../../models/auth");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user signup

router.post("/user/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    } else {
      const newUser = new User({
        fullName: req.body.fullName,
        password: hash,
        email: req.body.email,
      });

      newUser
        .save()
        .then((result) => {
          res.status(201).json({
            newuser: result,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    }
  });
});

// login

router.post("/login", (req, res) => {
  User.find({ email : req.body.email }).then((user) => {
    console.log(user);
    if (user.length < 1) {

      return res.status(201).json({
        msg: "User not found",
      });
    } else {

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {

        if (!result) {

          return res.status(201).json({
            msg: "Password not matched",
          });
        } else {
          const token = jwt.sign(
            {
              email: user[0].email,
              fullName: user[0].fullName,
              userType: user[0].userType
            },
            "jaiShreeRam",
            { expiresIn: "60m" }
          );

          res.status(201).json({
            email: user[0].email ,
            fullName: user[0].fullName,
            token: token 

          })
        }
      });
    }
  })
  .catch(err=>{
    console.log(err);
    res.status(401).json({
        error:err
    })
  })


});

module.exports = router;
