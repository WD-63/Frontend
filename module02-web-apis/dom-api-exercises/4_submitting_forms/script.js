const form = document.getElementById("contact-form");
const outputParagraph = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    outputParagraph.textContent = "Please fill in all fields.";
    outputParagraph.classList.remove("bg-green-500");
    outputParagraph.classList.add("bg-red-500");
    return;
  }

  const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                      </ul>`;

  outputParagraph.innerHTML = template;
  outputParagraph.classList.remove("bg-red-500");
  outputParagraph.classList.add("bg-green-500");

  form.reset();
});

// -----------------------
// ------Alternative------
// -----------------------

// const contactForm = document.getElementById("contact-form");
// const nameInput = document.getElementById("name");
// const messageInput = document.getElementById("message");
// const emailInput = document.getElementById("email");

// const output = document.getElementById("output");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!nameInput.value || !messageInput.value || !emailInput.value) {
//     output.classList.remove("bg-green-500");
//     output.classList.add("bg-red-500");
//     output.textContent = "Please fill out all fields!";
//   } else {
//     output.innerHTML = `<ul>
//         <li>${nameInput.value}</li>
//         <li>${emailInput.value}</li>
//         <li>${messageInput.value}</li>
//         </ul>`;
//     output.classList.remove("bg-red-500");
//     output.classList.add("bg-green-500");
//   }
//   contactForm.reset();
// });
