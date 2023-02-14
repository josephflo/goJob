const express = require("express")
const { Op } = require("sequelize");
const { Router } = require('express');
const { User, Job, Service , conn } = require('../connection/db');


const app = express()

app.get('/jobs', async (req, res) => {
   
    const jobs = await Job.findAll();
    
    res.send(jobs);
  });

  app.get('/user', async (req, res) => {
    
    const Users = await User.findAll();
    
    res.send(Users);
  });

  app.get('/service', async (req, res) => {
   
    const Services = await Service.findAll();
    
    res.send(Services); 
  });

  app.get('/servicesjobs', async (req, res) => {
    
    const Jobs = await Job.findAll({
      include: Service
    });
    
    res.send(Jobs);
  });

  app.get('/userjobs', async (req, res) => {
    
    const users = await User.findAll({
      include: Job
    });
   
    res.send(users);
  });
  