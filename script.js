// Typing animation
const roles = ["Application Developer | Java • Flutter • Dart"];
let roleIndex = 0, charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex <= roles[roleIndex].length) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex++);
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 3000);
  }
}

function erase() {
  if (charIndex >= 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex--);
    setTimeout(erase, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Projects data
const projects = [
  { 
    title: "RouteSync", 
    img: "assets/sih.jpg", 
    desc: "Real-time GPS tracking application built for Smart India Hackathon to solve urban bus tracking challenges. Features efficient UI design, continuous location tracking, and deployed for live usage.",
    features: ["Real-time GPS tracking", "Live bus location updates", "Station notifications", "Efficient and responsive UI", "Deployed for production use"],
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "GPS Integration"],
    github: "http://github.com/fatbrain96/RouteSync" 
  },
  { 
    title: "Flappy Bird Clone", 
    img: "assets/flappy.png", 
    desc: "Classic 2D game recreation with custom physics engine. Implements gravity simulation, precise collision detection, and a custom game loop for smooth gameplay experience.",
    features: ["Gravity physics simulation", "Collision detection system", "Custom game loop", "Score tracking", "Smooth animations"],
    tech: ["Java", "Swing", "Game Development", "Custom Physics"],
    github: "https://github.com/fatbrain96/Flappy-Bird-Game" 
  },
  { 
    title: "Hospital Management System", 
    img: "https://via.placeholder.com/400x220/1a1f3a/60a5fa?text=Hospital+Management+System", 
    desc: "Console-based management system for healthcare facilities. Manages patient records, doctor information, and appointments with file handling for data persistence.",
    features: ["Patient record management", "Doctor information system", "Appointment scheduling", "File handling for data storage", "Menu-driven interface"],
    tech: ["C", "File Handling", "Data Structures", "Console Application"],
    github: "https://github.com/fatbrain96/hospital-management" 
  },
  { 
    title: "Splitwise Clone", 
    img: "assets/split.png", 
    desc: "Expense sharing application for managing group expenses and settling debts efficiently using advanced algorithms.",
    features: ["Expense tracking", "Group management", "Debt calculation", "Settlement suggestions", "Split optimization"],
    tech: ["Java", "Data Structures", "Algorithms", "OOP"],
    github: "https://github.com/fatbrain96/SplitWise"
  },
  { 
    title: "2D Racing Game", 
    img: "assets/car.png", 
    desc: "Engaging racing game with obstacle avoidance mechanics and immersive sound effects.",
    features: ["Dynamic obstacles", "Sound effects", "Score tracking", "Increasing difficulty", "Smooth controls"],
    tech: ["Java", "Swing", "Game Logic", "Audio Integration"],
    github: "https://github.com/fatbrain96/2dracegame" 
  },
  { 
    title: "Online Quiz Application", 
    img: "assets/quiz.png", 
    desc: "Interactive quiz platform with timer functionality and comprehensive score tracking system.",
    features: ["Multiple choice questions", "Timer system", "Score calculation", "Result analytics", "User-friendly interface"],
    tech: ["Java", "Swing", "OOP", "Event Handling"],
    github: "https://github.com/fatbrain96/CODING-SAMURAI-INTERNSHIP-TASK/tree/main/OnlineQuizApplication" 
  }
];

// Projects are now hardcoded in HTML for better performance

// Skills data
const skillsData = {
  languages: ["Java", "Python", "Dart"],
  frameworks: ["Flutter", "HTML", "CSS"],
  tools: ["VS Code", "Android Studio", "IntelliJ IDEA", "Eclipse", "Postman"],
  concepts: ["OOP", "Data Structures", "Algorithms", "Debugging", "Problem Solving"]
};

function renderSkills() {
  Object.keys(skillsData).forEach(category => {
    const container = document.getElementById(category);
    container.innerHTML = skillsData[category].map(skill => 
      `<div class="skill-tag">${skill}</div>`
    ).join('');
  });
}



// Certificates data
const certificates = [
  {
    title: "Python Training",
    issuer: "IIT Kanpur",
    date: "2024",
    icon: "fa-python"
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2025",
    icon: "fa-java"
  },
  {
    title: "Programming with Generative AI",
    issuer: "NPTEL",
    date: "2025",
    icon: "fa-robot"
  },
  {
    title: "Software Engineering Virtual Experience",
    issuer: "Accenture",
    date: "2025",
    icon: "fa-laptop-code"
  },
  {
    title: "Data Visualization",
    issuer: "TATA",
    date: "2025",
    icon: "fa-chart-bar"
  },
  {
    title: "Generative AI",
    issuer: "TATA",
    date: "2025",
    icon: "fa-brain"
  }
];

function renderCertificates() {
  const container = document.getElementById("certificates-container");
  container.innerHTML = certificates.map((cert, index) => `
    <div class="certificate-card" data-index="${index}">
      <div class="cert-icon">
        <i class="fas ${cert.icon}"></i>
      </div>
      <h3>${cert.title}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <span class="cert-date">${cert.date}</span>
    </div>
  `).join("");
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function observeElements() {
  document.querySelectorAll('.project-card, .timeline-item, .certificate-card, .skill-category').forEach(el => {
    observer.observe(el);
  });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  type();
  renderSkills();
  renderCertificates();
  setTimeout(observeElements, 100);
  
  // Animate project cards on load
  setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.add('animate');
    });
  }, 100);
});


// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:srivastavparakhkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form
    contactForm.reset();
  });
}


