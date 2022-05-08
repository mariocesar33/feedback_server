"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedbackUseCase = void 0;
//NodemailerMailAdapter
class CreateFeedbackUseCase {
    constructor(feedbacksRepository, mailAdapter) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailAdapter = mailAdapter;
    }
    ;
    async execute({ type, comment, screenshot }) {
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        });
        // exemplo só para test
        if (!type) {
            throw new Error("Type is required");
        }
        // exemplo só para test
        if (!comment) {
            throw new Error("Comment is required");
        }
        // exemplo só para test
        if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format.");
        }
        await this.mailAdapter.sendMail({
            subject: "Novo feedback",
            body: [
                `<div styles='font-family: sans-serif; font-size: 16px; color: #111'>`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}`,
                screenshot ? `<img src="${screenshot}" />` : "",
                `</div>`
            ].join('\n'),
        });
    }
}
exports.CreateFeedbackUseCase = CreateFeedbackUseCase;
