import { UserModel } from "@/models";
import { UserDocument } from "@/types";

class UserService {
    static async createUser(data: Partial<UserDocument>): Promise<UserDocument>{
        return await UserModel.create(data);
    }

    static async findUserByEmail(email): Promise<UserDocument | null>{
        return await UserModel.findOne({ email });
    }

}

export default UserService;