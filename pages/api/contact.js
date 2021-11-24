// Get Contact Form Data and send email with nodemailer
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	return res.json({
		email: process.env.NODEMAIL_CONTACT_EMAIL,
		phone: process.env.NODEMAIL_CONTACT_PASSWORD,
	});

	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: "All fields are required" });
	}

	// Create transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.NODEMAIL_CONTACT_EMAIL,
			pass: process.env.NODEMAIL_CONTACT_PASSWORD,
		},
	});

	// Create mail options
	const mailOptions = {
		from: email,
		to: "eosabiya@gmail.com",
		replyTo: email,
		subject: `${subject} —  eniolaosabiya.com`,
		text: message,
		html: `<p>${message.replace(/(?:\r\n|\r|\n)/g, "<br>")}</p>`,
	};

	try {
		// Send email
		await transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			return res.status(200).json({ message: "Email sent" });
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}
