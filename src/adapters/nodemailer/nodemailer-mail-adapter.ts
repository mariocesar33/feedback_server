import nodemailer from "nodemailer";

import { MailAdapter, SendMailDTO } from "../mail-adpter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0afe0d5f9c22f2",
    pass: "123b71ad654410"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDTO) {
    await transport.sendMail({
      from: "Equipa Feedget <oi@feedget.com>",
      to: "Mário César <mcgato33g@gmail.com>",
      subject,
      html: body,
    });
  };
}