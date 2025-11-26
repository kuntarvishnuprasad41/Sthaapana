export async function POST(req) {
    try {
        const data = await req.json();

        // Honeypot check (if "website" is filled, likely a bot)
        if (data.website && data.website.trim() !== "") {
            return Response.json({ success: false, bot: true }, { status: 400 });
        }

        // ----------------------------
        // Google Form Submission (updated to use curl payload's form keys & endpoint)
        // ----------------------------
        // NOTE: I mapped your existing fields to the entry IDs from the curl.
        // If mapping is incorrect, change the entry.* keys below as needed.
        const formBody = new URLSearchParams({
            // best-effort mapping:
            "entry.828757510": data.name ?? "",        // mapped -> name
            "entry.1144342477": data.message ?? "",    // mapped -> message
            "entry.1287438886": data.location ?? "",   // mapped -> location
            "entry.49268164": data.email ?? "",        // mapped -> email
            "entry.514077915": data.contact ?? "",     // mapped -> contact

            // static values included in the curl
            "hud": "true",
            "fvv": "1",
            "pageHistory": "0",

            // fbzx and submissionTimestamp in curl — we send a generated value for timestamp
            "fbzx": String(Math.floor(Math.random() * 1e18) * -1), // random negative-like value similar to the curl sample
            "submissionTimestamp": String(Date.now()),

            // partialResponse is optional/complex. Sending a minimal partialResponse-like value may help some forms,
            // but if you need the exact curl partialResponse (with indices) paste it here.
            // Below is a simple safe placeholder (uncomment and adapt if the Form expects a more complex structure):
            // "partialResponse": JSON.stringify([[ [null,828757510,[data.name],0],[null,1144342477,[data.message],0],[null,1287438886,[data.location],0],[null,49268164,[data.email],0],[null,514077915,[data.contact],0] ], null, "0" ])
        });

        const googleFormUrl =
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdutpt4P9WIXka4isyCS80ubIMduwRStlpR78RvYII-KF8Akg/formResponse";

        // include a couple of headers similar to your curl (Origin/Referer can be useful)
        const googlePromise = fetch(googleFormUrl, {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://docs.google.com",
                "Referer": "https://docs.google.com/forms/d/e/1FAIpQLSdutpt4P9WIXka4isyCS80ubIMduwRStlpR78RvYII-KF8Akg/viewform",
            },
        });

        // ----------------------------
        // MailerSend Email (unchanged)
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
                    email: "MS_UarSHX@test-69oxl5ewxekl785k.mlsender.net"
                }, // must be verified sender in MailerSend
                to: [{
                    email: "sthaapanaconstructions@gmail.com"
                }],
                subject: `New Enquiry from ${data.name} For Sthaapana`,
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
                    <h2 style="margin: 0;">🌱 New Enquiry Received For Sthaapana</h2>
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
                    <p style="margin: 0;">Sthaapana • Enquiry Notification</p>
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
