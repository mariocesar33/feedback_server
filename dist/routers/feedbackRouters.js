"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const CreateFeedbackUseCase_1 = require("../modules/feedback/UseCase/CreateFeedbackUseCase");
const PrismaFeedbacksRepository_1 = require("../repositories/prisma/PrismaFeedbacksRepository");
const nodemailer_mail_adapter_1 = require("../adapters/nodemailer/nodemailer-mail-adapter");
const feedbackRoutes = (0, express_1.Router)();
exports.feedbackRoutes = feedbackRoutes;
feedbackRoutes.post("/", async (request, response) => {
    const { type, comment, screenshot } = request.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const createFeedbackUseCase = new CreateFeedbackUseCase_1.CreateFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
    await createFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });
    return response.status(201).send();
});
