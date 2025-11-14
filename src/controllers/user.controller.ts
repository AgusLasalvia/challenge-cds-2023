import type { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';
import { comparePassword, hashPassword } from '../utils/bcrypt';
import { generateJWT } from '../utils/jwt';
import { SuccessfulLoginDTO } from '../DTO/user.dto';

export default class UserController {

    // Implementing createUser and loginUser methods
    public static async createUser(req: Request, res: Response) {
        const { email, firstName, lastName, password } = req.body;
        try {
            // Hash the password before saving
            const hashedPassword: string = await hashPassword(password);

            // Save the new user to the database
            UserRepository.addUser({ email, firstName, lastName, hashedPassword })
                .then((newUser) => {
                    // If user creation failed, return 400 Bad Request
                    if (!newUser) {
                        return res.status(400).json({ message: 'Error creating user' });
                    }
                    return res.status(201).json({ message: 'User created successfully', user: newUser });
                })
        } catch (error) {
            // Handle any unexpected errors with 500 server error
            return res.status(500).json({ message: 'Internal server error' });
        }
    }


    public static async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            // Find the user by email
            const user = await UserRepository.findByEmail(email);

            // if null user, return 404
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Compare passwords
            if (await comparePassword(password, user.password)) {
                const token = await generateJWT(user._id);

                // Create response DTO without the password
                const responseData = new SuccessfulLoginDTO(user.email, user.firstName, user.lastName, token);

                // Successful login
                return res.status(200).json({ message: 'Login successful', data: responseData });
            }

            return res.status(401).json({ message: 'Invalid credentials' });
        } catch (error) {
            // Handle any unexpected errors with 500 server error
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}