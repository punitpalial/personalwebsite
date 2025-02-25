document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const response = document.getElementById("response");
    response.classList.remove("hidden");
    response.classList.add("visible");
    this.value = "";
  }
});
