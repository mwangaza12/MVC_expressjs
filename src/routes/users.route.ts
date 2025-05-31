import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/users.controller";

export const userRouter = Router();
// Define a route to get user information  


userRouter.get("/users", getUsers);
// Define a route to get user by ID
userRouter.get("/users/:id", getUserById);
// Define a route to create a new user
userRouter.post("/users", createUser);
// Define a route to update an existing user
userRouter.put("/users/:id", updateUser);
// Define a route to delete a user
userRouter.delete("/users/:id", deleteUser);  
