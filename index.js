const navLinks = document.querySelectorAll(".navlink")
const toggleForm = document.getElementById("show-form")
const form = document.querySelector("form")


toggleForm.addEventListener("click", ()=> {
  if(toggleForm.checked) form.style.display = "block"
  else form.style.display = "none"
})

form.addEventListener("submit", (e)=> {
  const firstName = document.getElementById("firstName").value
  const lastName = document.getElementById("lastName").value
  const email = document.getElementById("email").value
  const emailTwo = document.getElementById("email2").value
  const question = document.getElementById("question").value

  e.preventDefault()
  if(email !== emailTwo) alert("Email fields must match. Please correct this error.")
  else {
    alert(`Dear ${firstName} ${lastName}, thank you for reaching out. We will respond to your inquiry at ${email} as soon as possible.`)
    form.reset()
  }
})


const workInProgress = () => {
  alert("This feature is still under construction. Please come back later. Thank you.")
}

navLinks.forEach(link => link.addEventListener("click", () => workInProgress()))