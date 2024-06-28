import type { Request, Response } from "express";
import { db } from "../database/db";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import { comparePassword, hashPassword, randomizedSalt } from "../utils/hash";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const hashedPassword: string = await hashPassword(password, await randomizedSalt(5, 10));

  try {
    const newUser = await db.insert(users).values({
      username: username,
      email,
      password: hashedPassword,
      role: "user",
    });
    if (!newUser) {
      return res.status(500).json({ message: "Failed to register user" });
    }

    return res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Failed to register user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: {
    email: string,
    password: string
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const [getUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await comparePassword(password, getUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: getUser.id }, process.env.JWT_SECRET!, {
        expiresIn: 3600,
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        expires: new Date(Date.now() + 3600000),
    })

    return res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try{
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
    })

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to logout" });
  } 
};
