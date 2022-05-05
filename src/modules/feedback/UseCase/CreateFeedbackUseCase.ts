interface CreateFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class CreateFeedbackUseCase {
  async execute({ }: CreateFeedbackRequest) {

  }
}