import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

export async function comparePassword(incommingPassword: string, storedPassword: string): Promise<boolean> {
    return await bcrypt.compare(incommingPassword, storedPassword);
}