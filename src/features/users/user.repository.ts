import {
  User,
  PassParams,
  OtpParams,
  UserFilter,
} from "../../types/user.types";
import { UserModel } from "./user.model";

export default class UserRepository {
  async create(userParams: User): Promise<any> {
    try {
      const data = new UserModel(userParams);
      await data.save();
      return data;
    } catch (error: any) {
      throw error;
    }
  }

  async getUser(filter: UserFilter): Promise<User | null> {
    try {
      const user: User | null = await UserModel.findOne(filter);
      return user;
    } catch (error: any) {
      throw error;
    }
  }
  async changePassword(changePassData: PassParams): Promise<any> {}
  async sendOTP(sendOtpParams: OtpParams): Promise<any> {}
  async validateOTP(validateOtpParams: OtpParams): Promise<any> {}
  async resetPassword(resetPassData: PassParams): Promise<any> {}
}
