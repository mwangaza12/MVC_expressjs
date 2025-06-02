import { eq } from "drizzle-orm";
import db from "./drizzle/db";
import { TUserInsert, TUserSelect, userTable } from "./drizzle/schema";
 
//CRUD Operations for User entity
 
//Get all users
export const getUsersModel = async():Promise<TUserSelect[] | null> => {
     return await  db.query.userTable.findMany();
}
 
//Get user by ID
export const getUserByIdModel = async(userId: number):Promise<TUserSelect | undefined>=> {
      return await db.query.userTable.findFirst({
        where: eq(userTable.id,userId)
      })
}
// Create a new user
export const createUserModel = async(user:TUserInsert):Promise<string> => {
       await db.insert(userTable).values(user).returning();
        return "User Created Successfully 😎"
}
 
// Update an existing user
export const updateUserModel = async(userId: number, user:TUserInsert):Promise<string> => {
    await db.update(userTable).set(user).where(eq(userTable.id,userId));
    return "User Updated Succeffully 😎";
}
 
// Delete a user 
export const deleteUserModel = async(userId: number):Promise<string> => {
   await db.delete(userTable).where(eq(userTable.id,userId));
   return "User Delete Sucessfully";
}