// ================= DOB MASKING ================= //
document.addEventListener("sectionsLoaded", () => {

  const dobInput = document.getElementById("dobIntl"); // INPUT DOB
  const ageInput = document.getElementById("age");     // INPUT AGE (MANUAL)

  if (!dobInput) {
    console.error("dobIntl not found");
  } else {

    dobInput.addEventListener("input", () => {
      let raw = dobInput.value.replace(/[^0-9]/g, ""); // buang non-number //

      // YEAR (4 digit) //
      let year = raw.slice(0, 4);
      let rest = raw.slice(4);

      let month = "";
      let day = "";

      // MONTH (1–12, 1 atau 2 digit, NO leading zero) //
      if (rest.length >= 1) {
        month = rest.slice(0, 2);
        let m = parseInt(month, 10);
        if (m > 12) month = rest.slice(0, 1);
      }

      // DAY (1–31, 1 atau 2 digit, NO leading zero) //
      let dayStart = month.length;
      if (rest.length > dayStart) {
        day = rest.slice(dayStart, dayStart + 2);
        let d = parseInt(day, 10);
        if (d > 31) day = day.slice(0, 1);
      }

      // BUILD yyyy/m/d //
      let formatted = year;
      if (month) formatted += "/" + parseInt(month, 10);
      if (day) formatted += "/" + parseInt(day, 10);

      // Jangan paksa overwrite kalau value sama //
      if (dobInput.value !== formatted) {
        dobInput.value = formatted;
      }
    });

  }

})

// ================= DOB VALIDATION ================= //
function validateDOB() {
  const dob = document.getElementById("dobIntl");
  if (!dob) return false;

  const value = dob.value.trim();

  // wajib ada yyyy/m/d sekurang-kurangnya
  const regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;

  if (!regex.test(value)) {
    alert("Date of Birth must be in yyyy/mm/dd format.");
    dob.focus();
    return false;
  }

  const [y, m, d] = value.split("/").map(Number);

  if (m < 1 || m > 12) {
    alert("Invalid month in Date of Birth.");
    dob.focus();
    return false;
  }

  if (d < 1 || d > 31) {
    alert("Invalid day in Date of Birth.");
    dob.focus();
    return false;
  }

  return true;
}