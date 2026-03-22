import { Router } from "express";
import { JobController } from "../controllers/job.controller.js";

const router = Router();

router.get("/jobs", JobController.getAll);
router.get("/jobs/:id", JobController.getById);

export default router;