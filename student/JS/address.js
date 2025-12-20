// ================= ADDRESS VALIDATION ================= //

function validateAddress() {
  const addressInput = document.getElementById("address");

  if (!addressInput) {
    console.error("Address input not found");
    return false;
  }

  const address = addressInput.value.trim();

  if (address === "") {
    alert("Please enter your address.");
    addressInput.focus();
    return false;
  }

  return true;
}
