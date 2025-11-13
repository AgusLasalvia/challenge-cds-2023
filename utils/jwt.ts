import { SignJWT, jwtVerify } from "jose";

export async function generateJWT(userId: string): Promise<string> {
    const token = await new SignJWT({ 'userId': userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    return token;
}

export async function verificarToken(token: string): Promise<boolean> {
    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return true;
    } catch (error) {
        // If the jwtVerify failes raises an error, returns false
        return false;
    }
}