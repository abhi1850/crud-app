import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, password, isAdminUser } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ Message: "Username and Password are required" });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
            isAdminUser: isAdminUser || false,
        });

        await newUser.save();
        res.status(201).json({ Message: "User Registered Successfully" });
    } catch (error) {
        res.status(500).json({ Message: "Error inside server", Error: error });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ Message: "Username and Password are required" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ Message: "Invalid Username or Password" });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ Message: "Invalid Username or Password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdminUser },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            Message: "Login Successful",
            user: {
                id: user._id,
                username: user.username,
                isAdminUser: user.isAdminUser,
            },
            token,
        });
    } catch (error) {
        res.status(500).json({ Message: "Error inside server", Error: error });
    }
};
