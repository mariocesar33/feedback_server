"use strict";
// test("sum 2 + 2", () => {
//   expect(2 + 2).toBe(4)
// });
Object.defineProperty(exports, "__esModule", { value: true });
const CreateFeedbackUseCase_1 = require("./CreateFeedbackUseCase");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const createFeedbackUseCase = new CreateFeedbackUseCase_1.CreateFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe("Create feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(createFeedbackUseCase.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,v654f654gffg4s55",
        })).resolves.not.toThrow();
    });
    expect(createFeedbackSpy).toHaveBeenCalled();
});
describe("Should not be able to create feedback without type", () => {
    it("should be able to submit a feedback", async () => {
        await expect(createFeedbackUseCase.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,v654f654gffg4s55",
        })).rejects.toThrow();
    });
});
describe("Should not be able to create feedback without commit", () => {
    it("should be able to submit a feedback", async () => {
        await expect(createFeedbackUseCase.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,v654f654gffg4s55",
        })).rejects.toThrow();
    });
});
describe("Should not be able to create feedback with an invalid screenshot", () => {
    it("should be able to submit a feedback", async () => {
        await expect(createFeedbackUseCase.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "",
        })).rejects.toThrow();
    });
});
