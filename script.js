// ================================
// WELCOME MESSAGE
// ================================

window.addEventListener("load", function () {
    alert("👋 Welcome to Aishwarya's Interactive Profile!");
});


// ================================
// TYPING ANIMATION
// ================================

const text = "Computer Science Student | Tech Enthusiast | Future Developer";
const typingText = document.getElementById("typingText");

let index = 0;

function typeText() {

    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 70);
    }
}

typeText();


// ================================
// DARK / LIGHT MODE
// ================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});


// ================================
// SHOW / HIDE ABOUT SECTION
// ================================

const aboutButton = document.getElementById("aboutButton");
const moreAbout = document.getElementById("moreAbout");

aboutButton.addEventListener("click", function () {

    if (moreAbout.style.display === "none") {

        moreAbout.style.display = "block";
        aboutButton.textContent = "Show Less";

    } else {

        moreAbout.style.display = "none";
        aboutButton.textContent = "Learn More About Me";

    }

});


// ================================
// SKILL INTERACTION
// ================================

const skills = document.querySelectorAll(".skill");
const skillMessage = document.getElementById("skillMessage");

skills.forEach(function (skill) {

    skill.addEventListener("click", function () {

        const selectedSkill = skill.textContent;

        if (selectedSkill === "HTML") {
            skillMessage.textContent =
                "HTML is used to create the structure of a website.";
        }

        else if (selectedSkill === "CSS") {
            skillMessage.textContent =
                "CSS is used to design and style a website.";
        }

        else if (selectedSkill === "JavaScript") {
            skillMessage.textContent =
                "JavaScript makes websites interactive and dynamic.";
        }

    });

});


// ================================
// MOTIVATION BUTTON
// ================================

const motivationButton =
    document.getElementById("motivationButton");

const motivationMessage =
    document.getElementById("motivationMessage");

const quotes = [

    "🚀 Keep learning. Every small step counts!",

    "💻 Great developers are made through practice.",

    "🔥 Don't compare your Chapter 1 with someone else's Chapter 20.",

    "⭐ Your future self will thank you for not giving up.",

    "🌱 Learn today, build tomorrow."

];


motivationButton.addEventListener("click", function () {

    const randomNumber =
        Math.floor(Math.random() * quotes.length);

    motivationMessage.textContent =
        quotes[randomNumber];

});


// ================================
// SHOW / HIDE EMAIL
// ================================

const emailButton =
    document.getElementById("emailButton");

const email =
    document.getElementById("email");


emailButton.addEventListener("click", function () {

    if (email.style.display === "none" ||
        email.style.display === "") {

        email.style.display = "block";

        emailButton.textContent =
            "📧 Hide Email";

    }

    else {

        email.style.display = "none";

        emailButton.textContent =
            "📧 Show Email";

    }

});


// ================================
// LIKE COUNTER
// ================================

const likeButton =
    document.getElementById("likeButton");

const likeCount =
    document.getElementById("likeCount");

let likes = 0;


likeButton.addEventListener("click", function () {

    likes++;

    likeCount.textContent =
        "Likes: " + likes;

    likeButton.textContent =
        "❤️ Liked!";

});


// ================================
// CONTACT FORM VALIDATION
// ================================

const sendButton =
    document.getElementById("sendButton");

const userName =
    document.getElementById("userName");

const userMessage =
    document.getElementById("userMessage");

const formMessage =
    document.getElementById("formMessage");


sendButton.addEventListener("click", function () {

    if (userName.value === "" ||
        userMessage.value === "") {

        formMessage.textContent =
            "⚠️ Please fill in all fields.";

    }

    else {

        formMessage.textContent =
            "✅ Thank you, " +
            userName.value +
            "! Your message has been sent.";

        userName.value = "";
        userMessage.value = "";

    }

});


// ================================
// LINKEDIN INTERACTION
// ================================

const linkedin =
    document.getElementById("linkedin");

linkedin.addEventListener("click", function () {

    alert("🚀 Opening Aishwarya's LinkedIn profile!");

});


// ================================
// SCROLL TO TOP BUTTON
// ================================

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});