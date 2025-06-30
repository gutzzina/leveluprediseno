
/* ---------- Filtros ---------- */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // activar botón
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.trailer-item').forEach(item => {
            const visible = filter === 'all' || item.dataset.category === filter;
            item.style.display = visible ? 'block' : 'none';
        });
    });
});

/* ---------- Popup video ---------- */
const modal = document.getElementById('trailer-modal');
const iframe = modal.querySelector('iframe');

document.querySelectorAll('.trailer-item img').forEach(img => {
    img.addEventListener('click', () => {
        iframe.src = img.dataset.youtube;
        modal.classList.add('open');
    });
});

// Cerrar modal
modal.addEventListener('click', e => {
    if (e.target === modal || e.target.classList.contains('close-modal')) {
        iframe.src = ''; // detener reproducción
        modal.classList.remove('open');
    }
});

