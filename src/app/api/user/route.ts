import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server"
import * as z from 'zod';

const userSchema = z.object({
    username: z.string()
        .min(4, 'Username must be at least 4 characters'),
    email: z.string()
        .email('Please enter a valid email address'),
    password: z.string()
        .regex(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
            'Invalid password format'
        )
 });
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);

        const existingUserByEmail = await db.user.findUnique({
            where: {
                email: email
            }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists"}, { status: 409 })
        }

        const existingUserByUsername = await db.user.findUnique({
            where: {
                username: username
            }
        });
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "User with this username already exists"}, { status: 409 })
        }

        const hashPassword = await hash(password, 15);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword,
                verified: true
            }
        });

        const { password: _newUserPassword, ...rest } = newUser;
        return NextResponse.json({ user: {
            email: rest.email,
            username: rest.username,
            createdAt: rest.createdAt
        }, message: "User created successfully"}, { status: 201 });
    } catch(error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!"}, { status: 500});
    }
}