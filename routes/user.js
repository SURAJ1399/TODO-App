const express= require('express');
const router=express.Router();

const User= require('../model/User');
const bcrypt=require('bcryptjs');

