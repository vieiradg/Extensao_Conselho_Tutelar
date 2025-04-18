// Abrir modal
const openModalButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close');

openModalButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Fechar modal
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Fechar clicando fora do conteúdo
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Fechar modal ao pressionar "Esc"
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal[style="display: flex;"]');
    if (openModal) {
      openModal.style.display = 'none';
    }
  }
});
