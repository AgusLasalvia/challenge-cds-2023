import UserModel from "../models/user.model";

export default class UserRepository {
    public static async addUser(userBody: any): Promise<any> {
        const newUser = new UserModel(userBody);
        return await newUser.save();
    }

    public static async findByEmail(email: string): Promise<any> {
        return await UserModel.findOne({ email: email });
    }
}
