Script sederhana untuk portofolio publik (ReadOnly / Tidak Bisa Diedit)
document.addEventListener('DOMContentLoaded', () => {
    Menampilkan tahun saat ini di footer secara otomatis
   const yearEl = document.getElementById('year');
   if (yearEl) {
       yearEl.textContent = new Date().getFullYear();
   }
});
// Mengatur highlight active state pada menu navigasi saat di-scroll
// window.addEventListener('scroll', () => {
//     let current = '';
//     const sections = document.querySelectorAll('section, header');
//     const navLinks = document.querySelectorAll('.nav-link');

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= (sectionTop - 150)) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href').includes(current)) {
//             link.classList.add('active');
//         }
//     });
// });
