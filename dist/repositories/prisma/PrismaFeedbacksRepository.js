"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksRepository = void 0;
const PrismaClient_1 = require("../../database/PrismaClient");
class PrismaFeedbacksRepository {
    async create({ type, comment, screenshot }) {
        await PrismaClient_1.prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    }
    ;
}
exports.PrismaFeedbacksRepository = PrismaFeedbacksRepository;
