// ================= EMAIL COMBINE ================= //
document.addEventListener("DOMContentLoaded", () => {
  const user = document.querySelector(".email-user");
  const domain = document.querySelector(".email-domain");
  const hiddenEmail = document.getElementById("email");

  if (!user || !domain || !hiddenEmail) return;

  function updateEmail() {
    if (user.value && domain.value) {
      hiddenEmail.value = `${user.value}@${domain.value}`;
    } else {
      hiddenEmail.value = "";
    }
  }

  user.addEventListener("input", updateEmail);
  domain.addEventListener("input", updateEmail);
});

// Fungsi 'Email combine' is sistem perlu gabungkan [Ace] @ [gmail.com] to Ace@gmail.com


// ================= EMAIL VALIDATION ================= //
function validateEmail() {
  const email = document.getElementById("email");
  if (!email || email.value.trim() === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value.trim())) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  return true;
}
