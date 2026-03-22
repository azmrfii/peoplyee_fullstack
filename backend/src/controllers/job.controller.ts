import { Request, Response } from "express";
import { JobService } from "../services/job.service.js";

export const JobController = {
  getAll: async (req: Request, res: Response) => {
    const { search, location, page = 1 } = req.query;

    const jobs = await JobService.findAll({
      search: String(search || ""),
      location: String(location || ""),
      page: Number(page),
    });

    res.json(jobs);
  },

  getById: async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const job = await JobService.findById(id);

    if (!job) return res.status(404).json({ error: "Not found" });

    res.json(job);
  },
};