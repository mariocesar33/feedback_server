interface IFeedbackCreateDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

interface FeedbacksRepository {
  create({ type, comment, screenshot }: IFeedbackCreateDTO): Promise<void>;
}

export { IFeedbackCreateDTO, FeedbacksRepository }