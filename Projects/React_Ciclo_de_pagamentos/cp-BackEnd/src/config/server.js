import bodyParser from "body-parser";
import express from "express";

const server = express();
server.use(bodyParser.urlencoded({ extended:true }));

export default server;
