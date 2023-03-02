import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ status: "Bad Request", success: false });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "Message From Portfolio Web",
        html: `<h1>Message From Portfolio Web</h1> </br> <p>${data.name}</p> </br> <p>${data.email}</p> </br> <p>${data.message}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ status: error.message });
    }
  }

  return res.status(400).json({ status: "Bad Request" });
};
