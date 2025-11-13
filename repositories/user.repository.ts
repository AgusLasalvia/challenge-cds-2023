import { Schema, model } from "mongoose";

const userSchema = new Schema({

    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })

const UserModel = model('User', userSchema);

export default class UserRepository {
    public static async addUser(userBody: any): Promise<any> {
        const newUser = new UserModel(userBody);
        return await newUser.save();
    }

    public static async findByEmail(email: string): Promise<any> {
        return await UserModel.findOne({ email: email });
    }
}
