import { FeedbacksRepository } from "../../../repositories/IFeedbacksRepository";

interface CreateFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class CreateFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) { };

  async execute({ type, comment, screenshot }: CreateFeedbackRequest) {
    // const { type, comment, screenshot } = request.body;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}