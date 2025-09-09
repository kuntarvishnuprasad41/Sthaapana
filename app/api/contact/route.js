export async function POST(req) {
    try {
        const data = await req.json();

        // Honeypot check (if "website" is filled, likely a bot)
        if (data.website && data.website.trim() !== "") {
            return Response.json({ success: false, bot: true }, { status: 400 });
        }

        // Map form fields to your Google Form entry IDs
        // Replace these IDs with your own Google Form input "entry.xxxxx"
        const formBody = new URLSearchParams({
            "entry.382402243": data.name,
            "entry.1489392737": data.email,
            "entry.1395841341": data.contact,
            "entry.1296811649": data.location,
            "entry.1665094489": data.message,
        });

        // Replace <FORM_ID> with your own form ID
        const googleFormUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLScx-9sPp2FO4FWSIIHynE1dGtFUC4M6ccnmhLmyaP8LC1HQ4w/formResponse";

        const response = await fetch(googleFormUrl, {
            method: "POST",
            body: formBody,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        // Google Forms always returns 200 even for errors, so just assume success
        return Response.json({ success: true });
    } catch (err) {
        console.error("❌ API error:", err);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
