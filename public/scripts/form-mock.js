(() => {
  const successText = "Заявка отправлена (мок). Мы свяжемся с вами в течение 15 минут.";
  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.matches("[data-mock-submit]")) return;
    event.preventDefault();

    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = successText;
      note.classList.add("is-visible");
    }

    form.reset();
  });
})();
