const nodemailer = require('nodemailer');
const fs = require('fs');
const util = require('util');

module.exports = class Email {
  constructor(email) {
    this.to = email;
    this.from = 'bial.app';
  }
  createTransport() {
    return nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '790c809bd7a47e',
        pass: 'a4ee3ccce39e33'
      }
    });
  }
  async send(html, subject) {
    const EmailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html
    };
    await this.createTransport().sendMail(EmailOptions);
  }

  async sendEmailConfirmation(email) {
    let emailTemplate = await util.promisify(fs.readFile)(
      `./Email/mail.html`,
      'utf-8'
    );
    await this.send(emailTemplate, 'By:' + email);
  }
};
