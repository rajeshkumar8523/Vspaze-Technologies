window.onload = function () {
    emailjs.init("1DMYwocjZ2KbsU9hx"); // Replace with your actual public key
};

async function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from refreshing

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        industrytype: document.getElementById("industrytype").value,
        message: document.getElementById("message").value,
    };

    const emailData = {
        to_name: "Vspaze Technologies",
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        industrytype: formData.industrytype,
        message: formData.message,
    };

    emailjs.send("service_3snix8r", "template_x1ciusq", emailData)
        .then((response) => {
            console.log("✅ SUCCESS!", response.status, response.text);
            document.getElementById("your-form").reset();
            showPopup();
        })
        .catch((err) => {
            console.error("❌ FAILED...", err);
            alert("Submission failed, please try again.");
        });
}

function showPopup() {
    document.getElementById("popup-overlay").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}

document.getElementById("your-form").addEventListener("submit", handleSubmit);

// Get industry from URL and update form title
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var industry = getQueryParam("industry");
if (industry) {
    document.getElementById("formTitle").innerText = industry + " Application Form";
    document.getElementById("industryInput").value = industry;
}