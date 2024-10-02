import jwt from "jsonwebtoken";
export default class Token {
  static generateAccessToken(id: string): string {
    try {
      const { ACCESS_TOKEN_SECRET_KEY } = process.env;
      const token = jwt.sign({ id }, ACCESS_TOKEN_SECRET_KEY as string);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static generateRefreshToken(id: string): string {
    try {
      const { REFRESH_TOKEN_SECRET_KEY } = process.env;
      const token = jwt.sign({ id }, REFRESH_TOKEN_SECRET_KEY as string);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static validateToken(token: string, tokenType: "Access" | "Refresh"): any {
    try {
      const { REFRESH_TOKEN_SECRET_KEY, ACCESS_TOKEN_SECRET_KEY } = process.env;
      const payload = jwt.verify(
        token,
        tokenType == "Access"
          ? (ACCESS_TOKEN_SECRET_KEY as string)
          : (REFRESH_TOKEN_SECRET_KEY as string)
      );
      return payload;
    } catch (error) {
      throw error;
    }
  }
}
