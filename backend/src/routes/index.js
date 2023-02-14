const axios = require('axios');
const { Op } = require("sequelize");
const { Router } = require('express');
const { User, Job, Service , conn } = require('../connection/db');

const router = Router();

app.get('/jobs', async (req, res) => {
   
    const jobs = await Job.findAll();
    
    res.send(jobs);
  });

  app.get('/User', async (req, res) => {
    
    const Users = await User.findAll();
    
    res.send(Users);
  });

  app.get('/Service', async (req, res) => {
   
    const Services = await Service.findAll();
    
    res.send(Services); 
  });