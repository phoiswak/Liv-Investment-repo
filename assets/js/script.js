/* ===== NAVIGATION ===== */
function showPage(page) {
  window.location.href = page === "home" ? "index.html" : page + ".html";
}

/* Set active nav link based on current page */
document.addEventListener("DOMContentLoaded", function () {
  const filename = window.location.pathname.split("/").pop() || "index.html";
  const navMap = {
    "index.html": "nav-home",
    "": "nav-home",
    "about.html": "nav-about",
    "ict.html": "nav-ict",
    "cleaning.html": "nav-cleaning",
    "security.html": "nav-security",
    "contact.html": "nav-contact",
  };
  const el = document.getElementById(navMap[filename]);
  if (el) el.classList.add("active");
});

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
}

function closeMobileMenu() {
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("hamburger").classList.remove("open");
}

/* ===== CHATBOT ===== */
function toggleChat() {
  const w = document.getElementById("chatWindow");
  w.classList.toggle("open");
}

function chatSelect(type) {
  const body = document.getElementById("chatBody");
  const responses = {
    ict: "Great! Our ICT Solutions include Web Development, Network Infrastructure, Cyber Security, Cloud Services, and IT Consulting. Would you like to request a consultation?",
    cleaning:
      "Our Cleaning Services cover Residential, Commercial, Industrial, Post-Construction, and Contract Cleaning. What type of cleaning do you need?",
    security:
      "We offer CCTV Installation, Access Control, Alarm Systems, Electric Fencing, and Gate Automation. Would you like a site inspection?",
    quote:
      "I'll connect you to our quote form right away! You can also call us at +27 (0) 12 345 6789.",
    consultant:
      "A consultant will contact you shortly. Please share your name and number and we'll call you back within 1 business hour.",
  };
  const div = document.createElement("div");
  div.className = "chat-msg";
  div.style.marginTop = "8px";
  div.innerHTML = responses[type];
  body.appendChild(div);
  if (type === "quote") {
    setTimeout(() => {
      window.location.href = "contact.html";
    }, 800);
    toggleChat();
  }
  body.scrollTop = body.scrollHeight;
}

function sendChatMsg() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  const body = document.getElementById("chatBody");
  const userMsg = document.createElement("div");
  userMsg.style.cssText = "text-align:right;margin-bottom:12px;";
  userMsg.innerHTML = `<span style="background:var(--navy);color:white;padding:10px 14px;border-radius:12px 12px 2px 12px;font-size:14px;display:inline-block;max-width:80%;">${text}</span>`;
  body.appendChild(userMsg);
  input.value = "";
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-msg";
    botMsg.textContent =
      "Thank you for your message! Our team will respond shortly. For urgent queries, please call +27 (0) 12 345 6789.";
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;
  }, 800);
  body.scrollTop = body.scrollHeight;
}

/* ===== CONTACT FORM ===== */
function submitForm() {
  alert(
    "Thank you! Your message has been sent. We will contact you within 1 business day."
  );
}
