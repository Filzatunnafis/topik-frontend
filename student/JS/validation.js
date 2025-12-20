// =======================
// MASTER VALIDATION
// =======================
function validateForm() {
  console.log("VALIDATION START");

  if (typeof validatePhoto === "function") {
    if (!validatePhoto()) return false;
  }

  if (!validateTestLevel()) return false;
  if (!validateName()) return false;
  if (!validateGender()) return false;
  if (!validateNationality()) return false;

  if (typeof validateDOB === "function") {
    if (!validateDOB()) return false;
  }

  if (!validateAge()) return false;
  if (!validateOccupation()) return false;
  if (!validateMotive()) return false;
  if (!validatePurpose()) return false;
  if (!validateEmail()) return false;

  if (typeof validateAddress === "function") {
    if (!validateAddress()) return false;
  }

  if (typeof validateMobilePhone === "function") {
    if (!validateMobilePhone()) return false;
  }

  console.log("VALIDATION PASSED");
  return true;
}

// =======================
// BASIC VALIDATORS  
// =======================

function validateTestLevel() {
  if (!document.querySelector('input[name="test_level"]:checked')) {
    alert("Please select TOPIK level.");
    return false;
  }
  return true;
}

function validateName() {
  const english = document.querySelector('input[name="englishName"]')?.value.trim();
  const korean = document.getElementById("koreanName")?.value.trim();

  if (!english && !korean) {
    alert("Please enter your name (English or Korean).");
    return false;
  }
  return true;
}

function validateGender() {
  if (!document.querySelector('input[name="gender"]:checked')) {
    alert("Please select gender.");
    return false;
  }
  return true;
}

function validateNationality() {
  const nationality = document.getElementById("nationality")?.value;
  if (!nationality) {
    alert("Please select nationality.");
    return false;
  }
  return true;
}

function validateAge() {
  const age = document.getElementById("age")?.value;
  if (!age || isNaN(age) || age <= 0) {
    alert("Please enter a valid age.");
    return false;
  }
  return true;
}

function validateOccupation() {
  if (!document.querySelector('input[name="occupation"]:checked')) {
    alert("Please select occupation.");
    return false;
  }
  return true;
}

function validateMotive() {
  if (!document.querySelector('input[name="motive"]:checked')) {
    alert("Please select at least one motive of application.");
    return false;
  }
  return true;
}

function validatePurpose() {
  if (!document.querySelector('input[name="purpose"]:checked')) {
    alert("Please select purpose of application.");
    return false;
  }
  return true;
}

function validateEmail() {
  const email = document.getElementById("email")?.value.trim();

  if (!email) {
    alert("Please enter email.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}


// =======================
// TOPIK LEVEL 
// =======================
function initTopikRegNo() {
  const radios = document.querySelectorAll('input[name="test_level"]');
  const digits = document.querySelectorAll(".digit");

  if (radios.length === 0 || digits.length < 7) {
    console.log("Waiting for digit boxes...");
    return false;
  }

  console.log("TOPIK READY");
  console.log("RADIOS:", radios.length);
  console.log("DIGITS:", digits.length);

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      console.log("CLICKED:", radio.value);

      if (radio.value === "TOPIK I") {
        digits[6].textContent = "7";
      } else if (radio.value === "TOPIK II") {
        digits[6].textContent = "8";
      }
    });
  });

  return true;
}

// Retry until digits exist
const topikInterval = setInterval(() => {
  if (initTopikRegNo()) {
    clearInterval(topikInterval);
  }
}, 300);
