import bcrypt from "bcrypt";

export async function randomizedSalt(min: number, max: number) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const salt = await bcrypt.genSalt(number);
    return salt;
}

export async function hashPassword(password: string, salt: string) {
    const hash = bcrypt.hash(password, salt)
    return hash;
}

export async function comparePassword(password: string, hash: string) {
    const match = bcrypt.compare(password, hash)
    return match;
}