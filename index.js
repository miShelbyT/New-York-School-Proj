const navLinks = document.querySelectorAll(".navlink")
const toggleFormBtn = document.getElementById("show-form")
const form = document.querySelector("form")
const userQuestion = document.getElementById("user-question")
const greeting = document.getElementById("greeting")
let userQuestionDisplayed = false

const toggleFunc = () => {
  if(toggleFormBtn.checked) {
    if(userQuestionDisplayed){
      greeting.innerText = ""
      userQuestion.innerText = ""
      // p tag is empty string and ol innerText is empty string
    }
    form.style.display = "block"
    document.getElementById("firstName").focus();
  }
  else form.style.display = "none"
}

toggleFormBtn.addEventListener("click", toggleFunc)

form.addEventListener("submit", (e)=> {
  const emailTwo = document.getElementById("email2").value

  const data = [
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("question").value
  ]

  e.preventDefault()
  if(data[2] !== emailTwo) alert("Email fields must match. Please correct this error.")
  else if(!data[0] || !data[1] || !data[2] || !data[3]) alert("All fields are required. Please check for empty inputs.")
  else {
    greeting.innerText = `Dear ${data[0]} ${data[1]}, thank you for reaching out. We will respond to your inquiry as soon as possible.`
    data.forEach(el => {
      const entry = document.createElement("li")
      entry.innerText = el
      userQuestion.appendChild(entry)
    })
    form.reset()
    userQuestionDisplayed = !userQuestionDisplayed
    toggleFormBtn.checked = !toggleFormBtn.checked
    toggleFunc()
  }
})


const workInProgress = () => {
  alert("This feature is still under construction. Please come back later. Thank you.")
}

navLinks.forEach(link => link.addEventListener("click", () => workInProgress()))