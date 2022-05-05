import { Router } from "express";

import { feedbackRoutes } from "./feedbackRouters";

const routes = Router();

routes.use("/feedbacks", feedbackRoutes);

export { routes };