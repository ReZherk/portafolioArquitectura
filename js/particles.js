document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");

  // Ajustar el tamaño del canvas al tamaño de la ventana
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Llamar a resizeCanvas inicialmente y cada vez que se redimensione la ventana
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Clase Partícula
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Rebote en los bordes
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = "rgba(162, 123, 92, 0.3)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Array para almacenar las partículas
  const particlesArray = [];

  // Crear partículas iniciales
  function init() {
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  }

  // Animar las partículas
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }

  // Iniciar la animación
  init();
  animate();
});
