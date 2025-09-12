export async function POST(req) {
    try {
        const data = await req.json();

        // Honeypot check (if "website" is filled, likely a bot)
        if (data.website && data.website.trim() !== "") {
            return Response.json({ success: false, bot: true }, { status: 400 });
        }

        // ----------------------------
        // Google Form Submission
        // ----------------------------
        const formBody = new URLSearchParams({
            "entry.382402243": data.name,
            "entry.1489392737": data.email,
            "entry.1395841341": data.contact,
            "entry.1296811649": data.location,
            "entry.1665094489": data.message,
        });

        const googleFormUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLScx-9sPp2FO4FWSIIHynE1dGtFUC4M6ccnmhLmyaP8LC1HQ4w/formResponse";

        const googlePromise = fetch(googleFormUrl, {
            method: "POST",
            body: formBody,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        // ----------------------------
        // MailerSend Email
        // ----------------------------
        const mailerSendPromise = fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${process.env.MAILERSEND_API_TOKEN}`,
            },
            body: JSON.stringify({
                from: {
                    email: "MS_bopXhZ@test-dnvo4d90q69g5r86.mlsender.net"
                }, // must be verified sender in MailerSend
                to: [{
                    email: "ecohomes.sa@gmail.com"
                }],
                subject: `New Enquiry from ${data.name} For Riyash`,
                text: `
                Name: ${data.name}
                Email: ${data.email}
                Contact: ${data.contact}
                Location: ${data.location}
                Message: ${data.message}
                                `,
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #4CAF50; color: white; padding: 16px; text-align: center;">
                    <h2 style="margin: 0;">🌱 New Enquiry Received For Riyash</h2>
                    </div>
                    <div style="padding: 20px; background-color: #f9f9f9;">
                    <p style="font-size: 16px; margin-bottom: 20px;">You have received a new enquiry. Here are the details:</p>
                    <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                        <tr>
                        <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
                        <td style="padding: 8px; background-color: #ffffff; border: 1px solid #ddd;">${data.name}</td>
                        </tr>
                        <tr>
                        <td style="padding: 8px; font-weight: bold;">Email:</td>
                        <td style="padding: 8px; background-color: #ffffff; border: 1px solid #ddd;">${data.email}</td>
                        </tr>
                        <tr>
                        <td style="padding: 8px; font-weight: bold;">Contact:</td>
                        <td style="padding: 8px; background-color: #ffffff; border: 1px solid #ddd;">${data.contact}</td>
                        </tr>
                        <tr>
                        <td style="padding: 8px; font-weight: bold;">Location:</td>
                        <td style="padding: 8px; background-color: #ffffff; border: 1px solid #ddd;">${data.location}</td>
                        </tr>
                        <tr>
                        <td style="padding: 8px; font-weight: bold;">Message:</td>
                        <td style="padding: 8px; background-color: #ffffff; border: 1px solid #ddd;">${data.message}</td>
                        </tr>
                    </table>
                    </div>
                    <div style="background-color: #4CAF50; color: white; text-align: center; padding: 12px; font-size: 14px;">
                    <p style="margin: 0;">Riyash • Enquiry Notification</p>
                    </div>
                </div>
                `,
            }),
        });

        // Run both in parallel + inspect responses
        const results = await Promise.allSettled([googlePromise, mailerSendPromise]);

        // Log full results
        for (let i = 0; i < results.length; i++) {
            if (results[i].status === "fulfilled") {
                const res = await results[i].value;
                const text = await res.text();
                console.log(`✅ [Task ${i}] status: ${res.status}, response:`, text);
            } else {
                console.error(`❌ [Task ${i}] failed:`, results[i].reason);
            }
        }

        return Response.json({ success: true });
    } catch (err) {
        console.error("❌ API error:", err);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
