// ==========================
// API CONFIG (GLOBAL)
// ==========================
const API_BASE = "https://topik-backend-ae3y.onrender.com";

// ==========================
// INIT AFTER SECTIONS LOAD
// ==========================
document.addEventListener("sectionsLoaded", () => {
  initRadioLogs?.();
  initRegistrationPreview?.();
  initPhotoFileName?.();
  initPurposeSingleSelect?.();
  initTestLevelDigit?.();
  initFormSubmission?.();
});

// =======================
// TOPIK LEVEL → DIGIT LOGIC
// =======================
function initTestLevelDigit() {
  document.addEventListener("change", e => {
    if (e.target.name !== "test_level") return;

    const digits = document.querySelectorAll(".digit");
    if (!digits.length) return;

    // Kosongkan digit belakang
    digits.forEach((d, i) => {
      if (i >= 6) d.textContent = "";
    });

    const middleDigit = e.target.value === "TOPIK I" ? "7" : "8";

    if (digits[6]) {
      digits[6].textContent = middleDigit;
    }
  });
}
