import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    phoneType,
    office,
    message,
    source,
  } = req.body;

  try {
    const ghlRes = await axios.post(
      "https://rest.gohighlevel.com/v1/contacts/",
      {
        firstName,
        lastName,
        email,
        phone,
        phoneType: phoneType || "mobile",
        tags: [office, source || "Website Contact Form"],
        customFields: [
          { id: process.env.GHL_MESSAGE_ID, value: message },
          { id: process.env.GHL_OFFICE_ID, value: office },
          { id: process.env.GHL_SOURCE_ID, value: source || "Website Contact Form" },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (err) {
    console.error("GHL Error:", err?.response?.data || err.message);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error submitting your form. Please try again later.",
    });
  }
}
