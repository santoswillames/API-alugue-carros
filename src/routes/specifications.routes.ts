import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createSpecificationController.hanlde(req, res);
});

export { specificationsRoutes };
