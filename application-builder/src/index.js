const application = document.getElementById("application");
if (!application) {
  alert("no app box provided");
  return;
}

application.innerHTML = "<h1>Hello</h1>";
