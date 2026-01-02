const content = document.getElementById("content");
const experienceYears = new Date().getFullYear() - 2023;

const galleryData = [

    { title: "Nature", category: "nature", img: "assets/gallery/nature1.jfif" },
    { title: "Nature", category: "nature", img: "assets/gallery/nature2.webp" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain1.avif" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain2.avif" },
    { title: "Mountains", category: "nature", img: "assets/gallery/mountain3.avif" },

    { title: "Sunset", category: "nature", img: "assets/gallery/sunset1.jfif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset2.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset3.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset4.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset5.avif" },
    { title: "Sunset", category: "nature", img: "assets/gallery/sunset6.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel1.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel2.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel3.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel4.avif" },
    { title: "Travel", category: "travel", img: "assets/gallery/travel5.avif" },


    { title: "Street", category: "travel", img: "assets/gallery/street1.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street2.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street3.avif" },
    { title: "Street", category: "travel", img: "assets/gallery/street4.avif" },

    { title: "People", category: "people", img: "assets/gallery/people1.avif" },
    { title: "People", category: "people", img: "assets/gallery/people2.avif" },
    { title: "People", category: "people", img: "assets/gallery/people3.avif" },
    { title: "People", category: "people", img: "assets/gallery/people4.avif" },
    { title: "People", category: "people", img: "assets/gallery/people5.webp" },

    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture1.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture2.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture3.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture4.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture5.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture6.avif" },
    { title: "Architecture", category: "architecture", img: "assets/gallery/architecture7.avif" },

        { title: "Animals", category: "animals", img: "assets/gallery/animal1.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal2.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal3.avif" },
    { title: "Animals", category: "animals", img: "assets/gallery/animal4.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports1.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports2.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports3.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports4.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports5.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports8.avif" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports7.webp" },
    { title: "Sports", category: "sports", img: "assets/gallery/sports6.avif" }


];

function loadSection(section, el) {
    setActiveMenu(el);

    switch (section) {
       case "home":
       content.innerHTML = `
       <div class="home-hero">

         <!-- LEFT CONTENT -->
         <div class="hero-text">
           <span class="hero-badge">Backend & Telecom Engineer</span>

           <h1>
             Hi, I'm <span class="highlight">Rasesh Kumar Dash</span>
           </h1>

           <p class="hero-subtitle">
             Java • Spring Boot • Oracle ASAP Developer
           </p>

           <p class="hero-desc">
             I design and build <b>enterprise-grade backend systems</b> for
             telecom provisioning, focusing on performance, reliability,
             and clean architecture.
           </p>

           <div class="hero-actions">
             <button class="btn primary" onclick="downloadResume()">📄 Download Resume</button>
             <button class="btn" onclick="loadSection('contact', document.querySelector('[data-label=Contact]'))">
               Contact Me
             </button>
           </div>
         </div>

         <!-- RIGHT STATS -->
         <div class="hero-stats">
           <div class="stat-card">
             <h3>3+</h3>
             <p>Years Experience</p>
           </div>
           <div class="stat-card">
             <h3>Telecom</h3>
             <p>Domain Expertise</p>
           </div>
           <div class="stat-card">
             <h3>ASAP</h3>
             <p>Provisioning Systems</p>
           </div>
           <div class="stat-card">
             <h3>REST</h3>
             <p>API Integrations</p>
           </div>
         </div>

       </div>

       <!-- WHAT I DO -->
       <div class="home-services">

         <div class="service-card">
           <i class="bi bi-diagram-3"></i>
           <h4>Backend Architecture</h4>
           <p>
             Designing scalable backend systems using Java & Spring Boot
             with clean, maintainable architecture.
           </p>
         </div>

         <div class="service-card">
           <i class="bi bi-hdd-network"></i>
           <h4>Telecom Provisioning</h4>
           <p>
             Developing and supporting Oracle ASAP SRT & CRT cartridges
             for high-volume ISP provisioning.
           </p>
         </div>

         <div class="service-card">
           <i class="bi bi-shield-check"></i>
           <h4>Production Support</h4>
           <p>
             Debugging ASAP logs, FLISTs, and resolving critical
             production issues under SLA.
           </p>
         </div>

       </div>

       <!-- TECH STACK STRIP -->
       <div class="home-tech">
         <span>Java</span>
         <span>Spring Boot</span>
         <span>Oracle ASAP</span>
         <span>SRT</span>
         <span>CRT</span>
         <span>BRM</span>
         <span>PL/SQL</span>
         <span>Git</span>
         <span>Linux</span>
       </div>
       `;
       break;


     case "about":
     content.innerHTML = `
     <div class="about-wrapper">

       <!-- LEFT: PROFILE CARD -->
       <div class="about-profile">
         <img src="assets/profile.png" alt="Rasesh Kumar Dash">
         <h3>Rasesh Kumar Dash</h3>
         <p class="role">Java | Spring Boot | Oracle ASAP</p>

         <div class="quick-stats">
           <div>
<span>${experienceYears}+</span>
             <small>Years Experience</small>
           </div>
           <div>
             <span>Telecom</span>
             <small>Domain</small>
           </div>
           <div>
             <span>Backend</span>
             <small>Specialist</small>
           </div>
         </div>

         <button class="btn full" onclick="downloadResume()">📄 Resume</button>
       </div>

       <!-- RIGHT: ABOUT DETAILS -->
       <div class="about-details">
         <h2>About Me</h2>

         <p>
           I am a <b>Software Engineer</b> with 3+ years of experience building
           enterprise-grade backend systems in the telecom domain.
         </p>

         <p>
           I currently work on <b>Oracle ASAP</b> provisioning systems, developing
           and supporting SRT & CRT cartridges and integrating BRM and external
           platforms using REST APIs.
         </p>

         <p>
           I enjoy debugging production issues, optimizing performance, and writing
           clean, maintainable backend code.
         </p>
         <p>
           I regularly work on live production issues, taking ownership
           of critical fixes under tight SLAs.
         </p>
         <h3 class="section-title">Currently Exploring</h3>
         <div class="tag-group">
           <span>System Design</span>
           <span>Spring Microservices</span>
           <span>Docker</span>
           <span>Cloud Basics</span>
           <span>Clean Architecture</span>
         </div>
<h3 class="section-title">Career Focus</h3>
<p>
  I am currently focused on <b>backend-heavy roles</b> in the telecom or product
  domain, where I can contribute to large-scale systems and continue
  growing as a software engineer.
</p>

<h3 class="section-title">Beyond Work</h3>
<p>
  Outside of work, I enjoy exploring new places, photography,
  and continuously learning new technologies through hands-on projects.
</p>


         <!-- SKILLS -->
         <h3 class="section-title">Core Skills</h3>

         <div class="skill-grid">
           <div class="skill-box">
             <span>Java</span>
             <div class="bar"><div style="width:90%"></div></div>
           </div>

           <div class="skill-box">
             <span>Spring Boot</span>
             <div class="bar"><div style="width:85%"></div></div>
           </div>

           <div class="skill-box">
             <span>Oracle ASAP</span>
             <div class="bar"><div style="width:80%"></div></div>
           </div>

           <div class="skill-box">
             <span>REST APIs</span>
             <div class="bar"><div style="width:85%"></div></div>
           </div>
         </div>

         <!-- TECH TAGS -->
         <h3 class="section-title">Tech Stack</h3>

         <div class="tag-group">
           <span>Java</span>
           <span>Spring Boot</span>
           <span>Oracle ASAP</span>
           <span>SRT</span>
           <span>CRT</span>
           <span>BRM</span>
           <span>PL/SQL</span>
           <span>Git</span>
           <span>Linux</span>
         </div>

         <div class="about-actions">
           <button class="btn" onclick="loadSection('contact', document.querySelector('[data-label=Contact]'))">
             Contact Me
           </button>
         </div>
       </div>

     </div>
     `;


                     animateSkills();

          break;


     case "gallery":
         content.innerHTML = `
             <div class="card-custom">
                 <h2>My Gallery</h2>
                 <p class="subtitle">Captured moments & memories</p>

                 <!-- FILTER BUTTONS -->
                 <div class="gallery-filters">
                     <button class="filter-btn active" onclick="filterGallery('all', this)">All</button>
                     <button class="filter-btn" onclick="filterGallery('nature', this)">Nature</button>
                     <button class="filter-btn" onclick="filterGallery('travel', this)">Travel</button>
                     <button class="filter-btn" onclick="filterGallery('people', this)">People</button>
                 </div>

                 <div class="gallery-grid" id="galleryGrid"></div>
             </div>
         `;

         renderGallery("all");
         initLazyLoading();
         break;



      case "experience":
      content.innerHTML = `
      <div class="timeline-wrapper">

        <h2 class="section-heading">Education</h2>

        <div class="timeline">

          <div class="timeline-item">
            <span class="dot"></span>
            <div class="timeline-card">
              <h4>Master of Computer Applications (MCA)</h4>
              <span class="timeline-date">2021 – 2023</span>
              <p><b>MPC Autonomous College, Baripada</b></p>
              <ul>
                <li>Specialization in Software Development</li>
                <li>Strong foundation in Java, Data Structures & Databases</li>
                <li>Built academic projects using Java & SQL</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <span class="dot"></span>
            <div class="timeline-card">
              <h4>Bachelor’s Degree (B.Sc / Equivalent)</h4>
              <span class="timeline-date">2018 – 2021</span>
              <p>University Affiliated College</p>
              <ul>
                <li>Mathematics & Computer Science background</li>
                <li>Developed analytical and problem-solving skills</li>
              </ul>
            </div>
          </div>

        </div>

        <h2 class="section-heading">Professional Experience</h2>

        <div class="timeline">

          <div class="timeline-item highlight-item">
            <span class="dot"></span>
            <div class="timeline-card">
              <h4>Software Engineer – Oracle ASAP Developer</h4>
              <span class="timeline-date">2023 – Present</span>
              <p>
                Working in a telecom enterprise environment, building and supporting
                large-scale provisioning systems.
              </p>
              <ul>
                <li>Designed and enhanced SRT & CRT cartridges for ISP provisioning</li>
                <li>Integrated BRM and external systems using REST APIs</li>
                <li>Handled production issues by debugging ASAP logs & FLISTs</li>
                <li>Optimized provisioning flows to reduce order failures</li>
              </ul>

              <div class="badge-group">
                <span>Oracle ASAP</span>
                <span>Java</span>
                <span>REST APIs</span>
                <span>Telecom</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <span class="dot"></span>
            <div class="timeline-card">
              <h4>Java Backend Developer (Intern / Project)</h4>
              <span class="timeline-date">2022 – 2023</span>
              <p>
                Worked on backend services using Java and Spring Boot.
              </p>
              <ul>
                <li>Built RESTful APIs using Spring Boot</li>
                <li>Implemented CRUD operations with SQL & PL/SQL</li>
                <li>Integrated frontend with backend services</li>
              </ul>

              <div class="badge-group">
                <span>Spring Boot</span>
                <span>Java</span>
                <span>SQL</span>
              </div>
            </div>
          </div>

        </div>

        <h2 class="section-heading">Key Projects</h2>

        <div class="project-grid">

          <div class="project-card">
            <h4>ISP Provisioning System</h4>
            <p>
              Enterprise provisioning solution built on Oracle ASAP for
              automated ISP service activation.
            </p>
            <span class="tech">Oracle ASAP · Java · PL/SQL</span>
          </div>

          <div class="project-card">
            <h4>Portfolio Website</h4>
            <p>
              Single Page Application with modern UI and keyboard navigation.
            </p>
            <span class="tech">HTML · CSS · JavaScript</span>
          </div>

          <div class="project-card">
            <h4>Prabhat Makeup Website</h4>
            <p>
              Business website with backend gallery management and email alerts.
            </p>
            <span class="tech">Spring Boot · REST · JavaScript</span>
          </div>

        </div>

      </div>
      `;
      break;



      case "contact":
          content.innerHTML = `
              <div class="card">
                  <h2>Contact Me</h2>

                  <!-- CONTACT DETAILS -->
                  <p>
                      <b>Email:</b> raseshdash.hathway@gmail.com
                      <button class="btn" onclick="navigator.clipboard.writeText('raseshdash.hathway@gmail.com')">
                          Copy
                      </button>
                  </p>

                  <p>
                      <b>Phone:</b> +91-7377786824
                      <button class="btn" onclick="navigator.clipboard.writeText('7377786824')">
                          Copy
                      </button>
                  </p>

                  <!-- SOCIAL -->
                  <div style="margin:15px 0">
                      <a href="https://linkedin.com/in/your-profile" target="_blank" class="btn">
                          LinkedIn
                      </a>
                      <a href="https://github.com/your-username" target="_blank" class="btn">
                          GitHub
                      </a>
                  </div>

                  <hr style="margin:25px 0">

                  <!-- CONTACT FORM -->
                  <h3>Send me a message</h3>

                  <form id="contact-form" style="max-width:500px">
                      <input type="hidden" name="access_key" value="b4f59c83-d815-442a-827b-2f9cdd9298c9">

                      <div style="margin-bottom:12px">
                          <input type="text" name="name" placeholder="Your Name" required class="form-input">
                      </div>

                      <div style="margin-bottom:12px">
                          <input type="email" name="email" placeholder="Your Email" required class="form-input">
                      </div>
                         <div style="margin-bottom:12px">
                                                <input type="number" name="number" placeholder="Your number" required class="form-input">
                                            </div>

                      <div style="margin-bottom:12px">
                          <textarea name="message" rows="4" placeholder="Your Message" required class="form-input"></textarea>
                      </div>
   <div class="h-captcha" data-captcha="true"></div>

                      <!-- Anti-spam -->
                      <input type="checkbox" name="botcheck" style="display:none">

                      <button type="submit" class="btn">Send Message</button>

                      <p id="form-status" style="margin-top:10px;"></p>
                  </form>
              </div>
          `;

          initContactForm();
              setTimeout(reloadWeb3Forms, 100);
          break;

           case "why":
               content.innerHTML = `
                   <div class="card">
                       <h2>Why Hire Me?</h2>
                       <ul>
                           <li>✔ Strong backend fundamentals</li>
                           <li>✔ Real production experience</li>
                           <li>✔ Telecom domain expertise</li>
                           <li>✔ Fast learner & reliable team member</li>
                       </ul>

                   </div>
                    <p>© 2025 <b>Rasesh Kumar Dash</b>. All rights reserved.</p>
                                                  <p class="footer-note">
                                                      Built with ❤️ using HTML, CSS & JavaScript.<br>
                                                      Open-source & free to use.
                                                  </p>
                                                  <p class="footer-ack">
                                                      Acknowledgements: Bootstrap Icons · Community Tutorials
                                                  </p>
               `;


    }
}
function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/test.pdf";
    link.download = "test.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setActiveMenu(el) {
    document.querySelectorAll('.menu li').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

/* THEME TOGGLE */
function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.querySelector('.theme-btn i');
    const light = document.body.classList.contains('light');

    icon.className = light ? 'bi bi-sun' : 'bi bi-moon';
    localStorage.setItem('theme', light ? 'light' : 'dark');
}

/* LOAD SAVED THEME */
(() => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        document.querySelector('.theme-btn i').className = 'bi bi-sun';
    }
})();

/* DEFAULT LOAD */
loadSection("home", document.querySelector(".menu li.active"));
const menuItems = document.querySelectorAll('.menu li');
let currentIndex = 0;

/* Highlight focus */
menuItems.forEach((item, index) => {
    item.addEventListener('focus', () => {
        currentIndex = index;
    });
});

/* Keyboard navigation */
document.addEventListener('keydown', (e) => {

    // Ignore typing inside inputs
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {

        // Arrow Down
        case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
            break;

        // Arrow Up
        case 'ArrowUp':
            e.preventDefault();
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
            break;

        // Enter key
        case 'Enter':
            e.preventDefault();
            menuItems[currentIndex].click();
            break;

        // Number shortcuts (1–6)
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            const index = parseInt(e.key) - 1;
            if (menuItems[index]) {
                menuItems[index].focus();
                menuItems[index].click();
            }
            break;
    }
});
function animateSkills() {
    const bars = document.querySelectorAll('.skill-progress');

    bars.forEach(bar => {
        bar.style.width = '0'; // reset (important)
        const value = bar.getAttribute('data-progress');

        // slight delay for smooth animation
        setTimeout(() => {
            bar.style.width = value;
        }, 150);
    });
}
async function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Sending...";
        status.style.opacity = "0.8";

        // ✅ hCaptcha validation
        const hCaptcha = form.querySelector(
            'textarea[name="h-captcha-response"]'
        )?.value;

        if (!hCaptcha) {
            status.textContent = "❌ Please verify the captcha.";
            status.style.color = "red";
            return;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "var(--accent)";
                form.reset();
            } else {
                status.textContent = "❌ Submission failed.";
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "❌ Network error. Please try later.";
            status.style.color = "red";
        }
    });
}

function renderGallery(category) {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";

    const items = category === "all"
        ? galleryData
        : galleryData.filter(i => i.category === category);

    items.forEach((item, index) => {
        grid.innerHTML += `
            <div class="gallery-item" onclick="openSlideshow('${item.img}')">
                <img
                    data-src="${item.img}"
                    alt="${item.title}"
                    class="lazy-img"
                >
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
    });
}

function filterGallery(category, btn) {
    document.querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderGallery(category);
    initLazyLoading();
}


let slideIndex = 0;
let slideTimer = null;


function openSlideshow(imageSrc) {
    slideIndex = galleryData.findIndex(i => i.img === imageSrc);

    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
        <span class="close-btn">&times;</span>
        <button class="nav prev">‹</button>
        <img id="slideImage" src="${imageSrc}">
        <button class="nav next">›</button>
    `;

    modal.querySelector(".close-btn").onclick = () => modal.remove();
    modal.querySelector(".next").onclick = nextSlide;
    modal.querySelector(".prev").onclick = () => {
        slideIndex = (slideIndex - 1 + galleryData.length) % galleryData.length;
        showSlide();
    };

    document.body.appendChild(modal);
}

function initLazyLoading() {
    const imgs = document.querySelectorAll(".lazy-img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.2 });

    imgs.forEach(img => observer.observe(img));
}


function showSlide() {
    const img = document.getElementById("slideImage");
    img.src = galleryData[slideIndex].img;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % galleryData.length;
    showSlide();
}

function reloadWeb3Forms() {
    // Remove existing script if any
    const oldScript = document.querySelector('script[src*="web3forms.com"]');
    if (oldScript) oldScript.remove();

    // Inject again
    const script = document.createElement("script");
    script.src = "https://web3forms.com/client/script.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}
