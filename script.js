// Add your real contact links below. Keep the full international number for WhatsApp, without + or spaces.
const CONTACTS = {
  whatsapp: "", // Example: https://wa.me/923001234567
  gmail: "",    // Example: mailto:yourname@gmail.com
  instagram: "",// Example: https://instagram.com/yourusername
  linkedin: "", // Example: https://linkedin.com/in/yourusername
  facebook: ""  // Example: https://facebook.com/yourusername
};

const slides = [
  { title: 'Ideas into <span>visual stories.</span>', subtitle: 'Video Editing · Photo Editing', text: 'Creative edits that help your content stand out. Explore my services and get in touch to discuss your next project.' },
  { title: 'Make every frame <span>matter.</span>', subtitle: 'Creative edits for modern brands', text: 'From short videos to polished photos, bring your ideas to life with a clean, consistent visual style.' },
  { title: 'Your vision, <span>beautifully edited.</span>', subtitle: 'Let’s build something memorable', text: 'Browse the portfolio, explore the services, and contact Bilal Enterprises about your next creative project.' }
];
let currentSlide = 0;
const title = document.getElementById('heroTitle');
const subtitle = document.getElementById('heroSubtitle');
const text = document.getElementById('heroText');
const dots = [...document.querySelectorAll('#sliderDots button')];
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  title.innerHTML = slides[currentSlide].title;
  subtitle.textContent = slides[currentSlide].subtitle;
  text.textContent = slides[currentSlide].text;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
document.getElementById('prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
document.getElementById('year').textContent = new Date().getFullYear();

function applyContactLinks() {
  document.querySelectorAll('[data-link], [data-contact]').forEach(el => {
    const key = el.dataset.link || el.dataset.contact;
    if (CONTACTS[key]) {
      el.href = CONTACTS[key];
      if (key !== 'gmail') { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    } else {
      el.href = '#contact';
      el.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Please add your ' + key + ' link in script.js first.');
      });
    }
  });
}
applyContactLinks();
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(link => link.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));
