process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const app = require('../app');

// dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai