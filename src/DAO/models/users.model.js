//@ts-check
import { Schema, model } from "mongoose";

const usersSchema = new Schema({ /* El Schema lo que hace es definir los campos que tiene la coleccion. En el create y update obliga a seguir esta arq */
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
})

export const UsersModel = model("users", usersSchema)
