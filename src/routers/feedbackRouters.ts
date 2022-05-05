import { Router } from "express";
import nodemailer from "nodemailer";

import { CreateFeedbackUseCase } from "../modules/feedback/UseCase/CreateFeedbackUseCase";
import { PrismaFeedbacksRepository } from "../repositories/prisma/PrismaFeedbacksRepository"

const feedbackRoutes = Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0afe0d5f9c22f2",
    pass: "123b71ad654410"
  }
});

feedbackRoutes.post("/", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const createFeedbackUseCase = new CreateFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await createFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  // await transport.sendMail({
  //   from: "Equipa Feedget <oi@feedget.com>",
  //   to: "Mário César <mcgato33g@gmail.com>",
  //   subject: "Novo feedback",
  //   html: [
  //     `<div styles='font-family: sans-serif; font-size: 16px; color: #111'>`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comentário: ${comment}`,
  //     `</div>`
  //   ].join('\n'),
  // });

  return response.status(201).send();
});

export { feedbackRoutes };