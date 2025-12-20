// ================= PHOTO VALIDATION ================= //

function validatePhoto() {
  const photoInput = document.getElementById("photoInput"); 

  if (!photoInput) {
    console.error("Photo input not found");
    return false;
  }

  // mesti pilih fail
  if (photoInput.files.length === 0) {
    alert("Please upload your photograph (JPG only).");
    photoInput.focus();
    return false;
  }

  const file = photoInput.files[0];

  // jenis fail
  const allowedTypes = ["image/jpeg", "image/jpg"];
  if (!allowedTypes.includes(file.type)) {
    alert("Only JPG/JPEG image is allowed.");
    photoInput.value = ""; // reset file
    return false;
  }

  // OPTIONAL: saiz fail (contoh max 2MB)
  const maxSize = 2 * 1024 * 1024; // 2MB
  if (file.size > maxSize) {
    alert("Photo size must not exceed 2MB.");
    photoInput.value = "";
    return false;
  }

  return true;
}

// ================= PHOTO FILE NAME DISPLAY ================= //
function initPhotoFileName() {
  const photoInput = document.getElementById("photoInput");
  const fileNameSpan = document.getElementById("fileName");

  if (!photoInput || !fileNameSpan) {
    console.log("Waiting for photo input...");
    return false;
  }

  console.log("PHOTO INPUT READY");

  photoInput.addEventListener("change", () => {
    if (photoInput.files.length > 0) {
      fileNameSpan.textContent = photoInput.files[0].name;
      fileNameSpan.style.color = "#000";
      fileNameSpan.style.fontWeight = "bold";
    } else {
      fileNameSpan.textContent = "No file chosen";
      fileNameSpan.style.color = "#999";
      fileNameSpan.style.fontWeight = "normal";
    }
  });

  return true;
}

// Retry until photo input exists
const photoInterval = setInterval(() => {
  if (initPhotoFileName()) {
    clearInterval(photoInterval);
  }
}, 300);


