import express from "express";

import { addSchool, getSchools } from "../controller/school.js";

export const schoolRouter = express.Router();
schoolRouter.post("/addSchool", addSchool);
schoolRouter.get("/listSchool", getSchools);
 