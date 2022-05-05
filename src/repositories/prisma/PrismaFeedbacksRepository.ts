import { prisma } from "../../database/PrismaClient";
import { FeedbacksRepository, IFeedbackCreateDTO } from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: IFeedbackCreateDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
}