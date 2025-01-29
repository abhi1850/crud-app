import express from "express";
import {
    getAllPersonalInfo,
    getPersonalInfoById,
    addPersonalInfo,
    updatePersonalInfo,
    deletePersonalInfo,
} from "../controllers/personalInfoController.js";

const router = express.Router();

// Personal Info Routes
router.get("/", getAllPersonalInfo);
router.get("/:id", getPersonalInfoById);
router.post("/", addPersonalInfo);
router.put("/:id", updatePersonalInfo);
router.delete("/:id", deletePersonalInfo);

export default router;
