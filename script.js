const orderForm = document.querySelector("#orderForm");
const formNote = document.querySelector("#formNote");

const orderEmail = "sugarsharktreats@gmail.com";

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(orderForm);
  const name = data.get("name")?.trim() || "New customer";
  const contact = data.get("contact")?.trim() || "";
  const date = data.get("date") || "Flexible";
  const treats = data.get("treats") || "Custom assortment";
  const message = data.get("message")?.trim() || "No extra message included.";

  const subject = `Sugar Shark order request from ${name}`;
  const body = [
    "Hi Sugar Shark,",
    "",
    "I would like to request treats for an event.",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Event date: ${date}`,
    `Treats needed: ${treats}`,
    "",
    "Theme, colors, and message:",
    message,
  ].join("\n");

  const mailto = `mailto:${orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  formNote.textContent = "Your email app should open with the order details ready to send.";
});
