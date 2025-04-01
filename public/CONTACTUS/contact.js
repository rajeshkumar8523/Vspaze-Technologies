document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("1DMYwocjZ2KbsU9hx"); // Replace with your actual EmailJS public key

    const form = document.getElementById("your-form"); // Ensure form has the correct ID
    const button = form.querySelector("button");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // 🔥 Prevent the page from refreshing

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            contact: document.getElementById("contact").value.trim(),
            message: document.getElementById("message").value.trim(),
        };

        if (!formData.name || !formData.email || !formData.contact || !formData.message) {
            alert("Please fill in all the fields.");
            return;
        }

        const emailData = {
            to_name: "Vspaze Technologies",
            from_name: formData.name,
            reply_to: formData.email, // If EmailJS template requires this
             name: formData.name,
             email: formData.email,
             contact: formData.contact,
            message: formData.message,
        };

        // Disable button while sending
        button.textContent = "Sending...";
        button.disabled = true;
        button.style.opacity = "0.7";

        try {
            const response = await emailjs.send("service_3snix8r", "template_x1ciusq", emailData);
            console.log("✅ SUCCESS!", response.status, response.text);

            button.textContent = "Message Sended"; // Change button text after success
            button.style.opacity = "0.8";
            button.style.cursor = "default";

            form.reset(); // Clear form fields
        } catch (error) {
            console.error("❌ FAILED...", error);
            alert("Submission failed, please try again.");

            // Re-enable button on failure
            button.textContent = "Send Message";
            button.disabled = false;
            button.style.opacity = "1";
        }
    });
});
