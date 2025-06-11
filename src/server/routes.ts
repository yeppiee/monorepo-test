import {  Router } from "express";
import ServerConfig from "./config";
import loadData from "./load-data";

export async function createRouter(cfg: ServerConfig): Promise<Router> {
  const router = Router();
  const seeds = await loadData()
  router.get("/seeds", (req, res) => {
    cfg.logger.info("Responding with seed list")
    res.json(seeds);
  });
  return router;
}