export interface SendMailDTO {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: ({ subject, body }: SendMailDTO) => Promise<void>;
}

