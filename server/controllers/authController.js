import User from "../models/userModel.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }


        const newUser = new User({ name, email, password });


        await newUser.save();

        // console.log(name);
        // console.log(email);
        // console.log(password);

        res.status(201).json({ message: "User signed up successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};