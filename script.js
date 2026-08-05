// Interactive Script for Portfolio
document.getElementById('year').textContent = new Date().getFullYear();

let isEditMode = false;

// Toggle Content Editable Mode for Owner
function toggleEditMode() {
    isEditMode = !isEditMode;
    document.body.classList.toggle('edit-mode', isEditMode);
    
    const btn = document.getElementById('toggleEditBtn');
    const badge = document.getElementById('modeBadge');
    
    if (isEditMode) {
        btn.innerHTML = '<i class="fa-solid fa-eye"></i> Lihat Mode Publik';
        badge.textContent = 'EDITING MODE ACTIVE';
        badge.style.background = '#f59e0b';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Mode Edit Owner';
        badge.textContent = 'PUBLIC LIVE';
        badge.style.background = '#22c55e';
    }
}

// Save Content locally
function saveContent() {
    const editables = document.querySelectorAll('[contenteditable="true"]');
    editables.forEach((el) => {
        if (el.id) {
            localStorage.setItem('gh_portfolio_' + el.id, el.innerHTML);
        }
    });
    alert('Perubahan portofolio berhasil disimpan secara lokal di browser Anda!');
}

// Restore saved content from LocalStorage
window.addEventListener('DOMContentLoaded', () => {
    const editables = document.querySelectorAll('[contenteditable="true"]');
    editables.forEach((el) => {
        if (el.id && localStorage.getItem('gh_portfolio_' + el.id)) {
            el.innerHTML = localStorage.getItem('gh_portfolio_' + el.id);
        }
    });
});
