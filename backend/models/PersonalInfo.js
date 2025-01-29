import mongoose from "mongoose";

const PersonalInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    qualification: { type: String, required: true },
    occupation: { type: String, required: true },
    website: { type: String },
    updatedDate: { type: Date, default: Date.now },
});

export default mongoose.model("PersonalInfo", PersonalInfoSchema);
