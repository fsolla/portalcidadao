import { Router } from "express";
import { rateLimiterLowest } from "../../lib/rateLimiter";

export const createOfficerRouter = Router().post(
  "/create",
  rateLimiterLowest,
  async (req, res) => {
    const name = req.body.name?.trim();
  }
);
