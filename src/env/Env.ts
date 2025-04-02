class Env {
    static readonly PORT = process.env.PORT || "4001";

    static readonly SALT_FACTOR = process.env.SALT_FACTOR || 10;

    static readonly MONGODB_URI = process.env.MONGODB_URI || "";

    static readonly NODE_ENV = process.env.NODE_ENV || "development";

    static readonly ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || "defaultAccessTokenSecret";
    static readonly REFRESH_TOKN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || "defaultRefreshTokenSecret";
    static readonly ACCESS_TOKEN_EXPIRY: string = process.env.ACCESS_TOKEN_EXPIRY || "365d";
    static readonly REFRESH_TOKEN_EXPIRY: string = process.env.REFRESH_TOKEN_EXPIRY || "7d";

}

export default Env;