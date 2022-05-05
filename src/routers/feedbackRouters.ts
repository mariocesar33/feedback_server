import { Router } from "express";

import { CreateFeedbackUseCase } from "../modules/feedback/UseCase/CreateFeedbackUseCase";
import { PrismaFeedbacksRepository } from "../repositories/prisma/PrismaFeedbacksRepository"
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter"

const feedbackRoutes = Router();

feedbackRoutes.post("/", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const createFeedbackUseCase = new CreateFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter,
  );

  await createFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return response.status(201).send();
});

export { feedbackRoutes };