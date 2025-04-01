window.onload = function () {
    emailjs.init("1DMYwocjZ2KbsU9hx"); // Replace with your EmailJS public key
};

document.getElementById("your-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents the form from refreshing

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        industrytype: document.getElementById("industrytype").value,
        message: document.getElementById("message").value,
    };

    // Construct email data
    const emailData = {
        to_name: "Vspaze Technologies", // Replace with your recipient's name
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        industrytype: formData.industrytype,
        message: formData.message,
    };

    // Send email using EmailJS
    emailjs.send("service_3snix8r", "template_x1ciusq", emailData)
        .then((response) => {
            console.log("✅ SUCCESS!", response.status, response.text);
            document.getElementById("your-form").reset();
            showPopup(); // Show a success message (optional)
        })
        .catch((err) => {
            console.error("❌ FAILED...", err);
            alert("Submission failed, please try again.");
        });
});
function showPopup() {
    document.getElementById("popup-overlay").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}

document.getElementById("your-form").addEventListener("submit", handleSubmit);
