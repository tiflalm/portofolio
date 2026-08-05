// Script sederhana untuk portofolio publik (ReadOnly / Tidak Bisa Diedit)
document.addEventListener('DOMContentLoaded', () => {
    // Menampilkan tahun saat ini di footer secara otomatis
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
