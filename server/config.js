require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 6;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "event_finder_test"
        : process.env.DATABASE_URL || "event_finder";
}

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri
};