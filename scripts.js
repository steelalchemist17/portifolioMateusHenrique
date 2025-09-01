// scripts.js
// Pequeno JavaScript para alternar menu móvel e validar o formulário de contato.
// Comentários explicam a função principal.

// Mobile menu toggle: adiciona/remova classe para mostrar o menu em telas pequenas.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('mobile-menu-toggle');
  var nav = document.querySelector('.main-nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  }

  // Form validation (visual): impede envio real e mostra uma mensagem simulada.
  var form = document.getElementById('contact-form');
  var result = document.getElementById('form-result');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // nenhuma requisição ao servidor será feita
      // validação simples:
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      if (!name || !email || !message) {
        result.hidden = false;
        result.textContent = 'Por favor, preencha todos os campos antes de enviar.';
        result.style.color = '#b00020';
        return;
      }
      // validação básica do e-mail (não perfeita)
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        result.hidden = false;
        result.textContent = 'Insira um e-mail válido.';
        result.style.color = '#b00020';
        return;
      }
      // simulação de envio bem-sucedido
      result.hidden = false;
      result.textContent = 'Obrigado! Sua mensagem foi enviada (simulação).';
      result.style.color = '#0a7a2b';
      form.reset();
    });
  }
});
