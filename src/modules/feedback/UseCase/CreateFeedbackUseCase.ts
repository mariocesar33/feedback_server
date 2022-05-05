import { MailAdapter } from "../../../adapters/mail-adpter";
import { FeedbacksRepository } from "../../../repositories/IFeedbacksRepository";

interface CreateFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

//NodemailerMailAdapter
export class CreateFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { };

  async execute({ type, comment, screenshot }: CreateFeedbackRequest) {
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div styles='font-family: sans-serif; font-size: 16px; color: #111'>`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}`,
        `</div>`
      ].join('\n'),
    });
  }
}