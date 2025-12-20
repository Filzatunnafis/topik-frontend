let isSubmitting = false;

// =======================
// INIT (AFTER SECTIONS LOADED)
// =======================
document.addEventListener("sectionsLoaded", initFormSubmission);

function initFormSubmission() {
  const form = document.getElementById("topikForm");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    // Prevent double submit
    if (isSubmitting) return;

    // ================= VALIDATION =================
    if (!validateForm()) return;

    // ================= CONFIRM =================
    if (!confirm("Submit TOPIK application?")) return;

    isSubmitting = true;

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    const formData = buildFormData();

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Submit failed");

      alert(
        "Application submitted successfully.\n\n" +
        "A confirmation email will be sent shortly."
      );

      resetFormUI(form);

    } catch (err) {
      console.error("SUBMISSION ERROR:", err);
      alert("Submission failed. Please try again.");
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    }
  });
}

// =======================
// BUILD FORM DATA
// =======================
function buildFormData() {
  const fd = new FormData();

  fd.append(
    "test_level",
    document.querySelector('input[name="test_level"]:checked')?.value || ""
  );

  fd.append(
    "englishName",
    document.querySelector('input[name="englishName"]')?.value || ""
  );

  fd.append(
    "koreanName",
    document.getElementById("koreanName")?.value || ""
  );

  fd.append(
    "gender",
    document.querySelector('input[name="gender"]:checked')?.value || ""
  );

  fd.append(
    "nationality",
    document.getElementById("nationality")?.value || ""
  );

  fd.append(
    "dobIntl",
    document.getElementById("dobIntl")?.value || ""
  );

  fd.append(
    "address",
    document.getElementById("address")?.value || ""
  );

  fd.append(
    "home_phone",
    document.getElementById("homePhone")?.value || ""
  );

  fd.append(
    "mobile_phone",
    document.getElementById("mobilePhone")?.value || ""
  );

  fd.append(
    "email",
    document.getElementById("email")?.value || ""
  );

  fd.append(
    "occupation",
    document.querySelector('input[name="occupation"]:checked')?.value || ""
  );

  const motives = Array.from(
    document.querySelectorAll('input[name="motive"]:checked')
  ).map(i => i.value);

  fd.append("motive", motives.join(", "));

  fd.append(
    "purpose",
    document.querySelector('input[name="purpose"]:checked')?.value || ""
  );

  const photoInput = document.getElementById("photoInput");
  if (photoInput?.files.length) {
    fd.append("photo", photoInput.files[0]);
  }

  return fd;
}

// =======================
// RESET UI
// =======================
function resetFormUI(form) {
  form.reset();

  const fileName = document.getElementById("fileName");
  if (fileName) {
    fileName.textContent = "No file chosen";
  }

  document.querySelectorAll(".digit").forEach(d => {
    d.textContent = "";
  });
}
