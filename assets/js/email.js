(function () {
  // Wait until DOM is ready
  document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    if (!form) return; // page without form → do nothing

    // Init EmailJS (safe to call once)
    emailjs.init("jOk_vJGpNdAP746AA");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      const submitBtn = form.querySelector('input[type="submit"]');
      const originalText = submitBtn.value;

      submitBtn.disabled = true;
      submitBtn.value = "Envoi...";

      emailjs.sendForm(
        "service_bmswb2u",
        "template_vuqyoff",
        form
      ).then(
        function () {
          alert("Message envoyé avec succès ✅");
          form.reset();
        },
        function (error) {
          console.error("EmailJS error:", error);
          alert("Une erreur est survenue ❌");
        }
      ).finally(function () {
        submitBtn.disabled = false;
        submitBtn.value = originalText;
      });
    });
  });
})();
