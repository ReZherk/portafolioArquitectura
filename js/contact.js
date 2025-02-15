document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const whatsappBtn = document.getElementById("whatsappBtn");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aquí puedes agregar código para enviar el formulario por email o a un servidor
    console.log("Formulario enviado:", { name, email, message });

    // Limpia el formulario después de enviar
    contactForm.reset();
  });

  whatsappBtn.addEventListener("click", () => {
    const phoneNumber = "51922680412";
    const message = encodeURIComponent(
      "Hola, me gustaría obtener más información sobre tus servicios de arquitectura."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  });
});
