"use strict";
const { userValidate } = require("../helper/validation");
const createError = require("http-errors");
const usersModel = require("../models/users.models");

//Services
const { createUser } = require("../services/user.services");

var that = (module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { username, email, password, userId } = req.body;
      const { error } = userValidate(req.body);

      if (error) {
        console.log("Message: ", error.details[0].message);
        res.json({
          Message: error.details[0].message,
        });
      }
      
      const isExits = await usersModel.findOne({
        email,
      });
      if (isExits) {
        console.log(`Message: ${email} is ready been registered`);
        res.json({
          Message: `${email} is ready been registered`,
        });
      }c
      res.json({
          elements: await createUser({
              userId,
              username,
              password,
              email
          })
      })
    } catch (error) {
      console.error(error);
    }
  },
});
