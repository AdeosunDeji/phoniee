function country_code() {
  var i = document.getElementById("country").value;

  if (i === "select country") {
    document.getElementById('output').value = "";
  }
  else if (i === "Argentina") {
    document.getElementById("output").value = "+54";
  }
  else if (i === "Australia") {
    document.getElementById("output").value = "+61";
  }
  else if (i === "Belgium") {
    document.getElementById("output").value = "+32";
  }
  else if (i === "Brazil") {
    document.getElementById("output").value = "+55";
  }
  else if (i === "Canada") {
    document.getElementById("output").value = "+1";
  }
  else if (i === "Cyprus") {
    document.getElementById("output").value = "+357";
  }
  else if (i === "Denmark") {
    document.getElementById("output").value = "+45";
  }
  else if (i === "France") {
    document.getElementById("output").value = "+33";
  }
  else if (i === "Ghana") {
    document.getElementById("output").value = "+233";
  }
  else if (i === "Italy") {
    document.getElementById("output").value = "+39";
  }
  else if (i === "Mexico") {
    document.getElementById("output").value = "+52";
  }
  else if (i === "Nigeria") {
    document.getElementById("output").value = "+234";
  }
  else if (i === "Zambia") {
    document.getElementById("output").value = "+260";
  }
}


function num() {
  let val = document.getElementById("output").value;
  if (
    val.startsWith("+234809")
    || val.startsWith("+234817")
    || val.startsWith("+234818")
    || val.startsWith("+234908")
    || val.startsWith("+234909")
  ) {
    alert('Invalid. Please enter a valid carrier');
  }
  else if (
    val.startsWith("+234803")
    || val.startsWith("+234806")
    || val.startsWith("+234814")
    || val.startsWith("+234810")
    || val.startsWith("+234813")
    || val.startsWith("+234814")
    || val.startsWith("+234816")
    || val.startsWith("+234703")
    || val.startsWith("+234706")
    || val.startsWith("+234903")
    || val.startsWith("+234906")
  ) {
    alert('Invalid. Please enter a valid carrier');
  }
  else if (
    val.startsWith("+234802")
    || val.startsWith("+234808")
    || val.startsWith("+234812")
    || val.startsWith("+234708")
    || val.startsWith("+234701")
    || val.startsWith("+234902")
    || val.startsWith("+234901")
    || val.startsWith("+234907")
  ) {
    alert('AIRTEL!   Submitted.');
  }
  else if (
    val.startsWith("+234805")
    || val.startsWith("+234807")
    || val.startsWith("+234811")
    || val.startsWith("+234815")
    || val.startsWith("+234705")
    || val.startsWith("+234905")
  ) {
    alert('Invalid. Please enter a valid carrier');
  }
}

