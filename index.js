const navLinks = document.querySelectorAll(".navlink")


const workInProgress = () => {
  alert("This feature is still under construction. Please come back later. Thank you.")
}

navLinks.forEach(link => link.addEventListener("click", () => workInProgress()))