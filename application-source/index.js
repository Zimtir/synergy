export const initApplication = () => {
  const application = document.getElementById("application");
  if (!application) {
    alert("no app box provided");
    return;
  }

  application.innerHTML = "<h1>Hello world again</h1>";
};
