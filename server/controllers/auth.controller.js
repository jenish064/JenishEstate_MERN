import express from "express";
import User from "../dbmodels/user.model.js";

export const authAction = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    console.log("object tooo", req.body);
    await newUser.save();
    res.status(201).json("created the user");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
