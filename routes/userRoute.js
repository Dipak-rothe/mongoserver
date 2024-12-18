import { create_User, deleteUser,getall,update,getUser } from "../controllers/userControllers.js";
import express from 'express';

const route=express.Router();

route.post("/create",create_User);

route.post("/find/:id",getUser)

route.post("/getallUser",getall);

route.post("/update",update);

route.post("/delete",deleteUser);

export default route;