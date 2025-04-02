interface EmailOptions {
    to: string;
    subject: string;
    message?: string;
    html?: string;
}

const sendEmail = ({ to, subject, message, html }: EmailOptions) => {
    return new Promise((resolve) => {
        console.log(`📧 Sending email to: ${to}`);
        console.log(`📌 Subject: ${subject}`);

        if (html) {
            console.log(`🖥️ HTML Content: ${html}`);
        } else if (message) {
            console.log(`✉️ Plain Text Message: ${message}`);
        } else {
            console.log("⚠️ No email content provided!");
            resolve({ success: false, message: "No content to send." });
            return;
        }

        // Simulating email sending delay
        setTimeout(() => {
            console.log("✅ Email sent successfully!");
            resolve({ success: true, message: "Email sent successfully!" });
        }, 2000);
    });
};

export default sendEmail;
