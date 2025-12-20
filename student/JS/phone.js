// ============================== //
//    Country calling code Data   //
// ============================== //
const countryCallingCodes = [
  { country: "Afghanistan", iso: "AF", code: "93" },
  { country: "Albania", iso: "AL", code: "355" },
  { country: "Algeria", iso: "DZ", code: "213" },
  { country: "American Samoa", iso: "AS", code: "1684" },
  { country: "Andorra", iso: "AD", code: "376" },
  { country: "Angola", iso: "AO", code: "244" },
  { country: "Anguilla", iso: "AI", code: "1264" },
  { country: "Antigua and Barbuda", iso: "AG", code: "1268" },
  { country: "Argentina", iso: "AR", code: "54" },
  { country: "Armenia", iso: "AM", code: "374" },
  { country: "Australia", iso: "AU", code: "61" },
  { country: "Austria", iso: "AT", code: "43" },
  { country: "Azerbaijan", iso: "AZ", code: "994" },

  { country: "Bahrain", iso: "BH", code: "973" },
  { country: "Bangladesh", iso: "BD", code: "880" },
  { country: "Belgium", iso: "BE", code: "32" },
  { country: "Brazil", iso: "BR", code: "55" },
  { country: "Brunei", iso: "BN", code: "673" },
  { country: "Bulgaria", iso: "BG", code: "359" },

  { country: "Cambodia", iso: "KH", code: "855" },
  { country: "Canada", iso: "CA", code: "1" },
  { country: "China", iso: "CN", code: "86" },
  { country: "Colombia", iso: "CO", code: "57" },
  { country: "Croatia", iso: "HR", code: "385" },

  { country: "Denmark", iso: "DK", code: "45" },
  { country: "Egypt", iso: "EG", code: "20" },
  { country: "France", iso: "FR", code: "33" },
  { country: "Germany", iso: "DE", code: "49" },
  { country: "Greece", iso: "GR", code: "30" },

  { country: "Hong Kong", iso: "HK", code: "852" },
  { country: "India", iso: "IN", code: "91" },
  { country: "Indonesia", iso: "ID", code: "62" },
  { country: "Iran", iso: "IR", code: "98" },
  { country: "Iraq", iso: "IQ", code: "964" },
  { country: "Ireland", iso: "IE", code: "353" },
  { country: "Israel", iso: "IL", code: "972" },
  { country: "Italy", iso: "IT", code: "39" },

  { country: "Japan", iso: "JP", code: "81" },
  { country: "Jordan", iso: "JO", code: "962" },
  { country: "Kazakhstan", iso: "KZ", code: "7" },
  { country: "Kenya", iso: "KE", code: "254" },
  { country: "Kuwait", iso: "KW", code: "965" },

  { country: "Laos", iso: "LA", code: "856" },
  { country: "Malaysia", iso: "MY", code: "60" },
  { country: "Maldives", iso: "MV", code: "960" },
  { country: "Mexico", iso: "MX", code: "52" },
  { country: "Myanmar", iso: "MM", code: "95" },

  { country: "Nepal", iso: "NP", code: "977" },
  { country: "Netherlands", iso: "NL", code: "31" },
  { country: "New Zealand", iso: "NZ", code: "64" },
  { country: "Nigeria", iso: "NG", code: "234" },
  { country: "Norway", iso: "NO", code: "47" },

  { country: "Pakistan", iso: "PK", code: "92" },
  { country: "Philippines", iso: "PH", code: "63" },
  { country: "Poland", iso: "PL", code: "48" },
  { country: "Portugal", iso: "PT", code: "351" },

  { country: "Qatar", iso: "QA", code: "974" },
  { country: "Russia", iso: "RU", code: "7" },
  { country: "Saudi Arabia", iso: "SA", code: "966" },
  { country: "Singapore", iso: "SG", code: "65" },
  { country: "South Africa", iso: "ZA", code: "27" },
  { country: "South Korea", iso: "KR", code: "82" },
  { country: "Spain", iso: "ES", code: "34" },
  { country: "Sri Lanka", iso: "LK", code: "94" },
  { country: "Sweden", iso: "SE", code: "46" },
  { country: "Switzerland", iso: "CH", code: "41" },

  { country: "Taiwan", iso: "TW", code: "886" },
  { country: "Thailand", iso: "TH", code: "66" },
  { country: "Turkey", iso: "TR", code: "90" },

  { country: "United Arab Emirates", iso: "AE", code: "971" },
  { country: "United Kingdom", iso: "GB", code: "44" },
  { country: "United States", iso: "US", code: "1" },

  { country: "Vietnam", iso: "VN", code: "84" },
  { country: "Yemen", iso: "YE", code: "967" },
  { country: "Zimbabwe", iso: "ZW", code: "263" }
];


// === Populate Country Code Dropdown === //
function initCountryCode() {
  const codeSelect = document.getElementById("countryCode");
  if (!codeSelect) return;

  if (codeSelect.dataset.loaded) return;
  codeSelect.dataset.loaded = "true";

  countryCallingCodes.forEach(c => {
    const option = document.createElement("option");
    option.value = c.code;
    option.textContent = `+${c.code} (${c.country})`;
    codeSelect.appendChild(option);
  });

  console.log("Country code loaded");
}

// ================= MOBILE PHONE VALIDATION ================= //
function validateMobilePhone() {
  const code = document.getElementById("countryCode");
  const mobile = document.getElementById("mobilePhone");

  if (!code || !mobile) return false;

  if (code.value === "") {
    alert("Please select country calling code.");
    code.focus();
    return false;
  }

  if (mobile.value.trim() === "") {
    alert("Please enter your mobile phone number.");
    mobile.focus();
    return false;
  }

  if (!/^\d+$/.test(mobile.value.trim())) {
    alert("Mobile number must contain digits only.");
    mobile.focus();
    return false;
  }

  return true;
}

document.addEventListener("sectionsLoaded", () => {
  initCountryCode();
});

document.addEventListener("sectionsLoaded", () => {
  const mobileInput = document.getElementById("mobilePhone");
  if (!mobileInput) return;

mobileInput.addEventListener("input", () => {
    mobileInput.value = mobileInput.value.replace(/[^0-9]/g, ""); //Alert nda keluar sebab 'mobile.value' sentiasa nombor- tapis huruf lebih awal.
  });
});

document.addEventListener("sectionsLoaded", () => {
  const homeInput = document.getElementById("homePhone");
  if (!homeInput || homeInput.dataset.bound) return;

  homeInput.dataset.bound = "true";

  homeInput.addEventListener("input", () => {
    homeInput.value = homeInput.value.replace(/[^0-9]/g, "");
  });
});