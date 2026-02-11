import './style.css';
import { portfolioData } from './data.js';

const renderApp = () => {
    document.querySelector('#app').innerHTML = `
      <div class="magic-cursor"></div>
      <!-- NAV -->
      <nav class="custom-nav">
          <div class="nav-logo">Keerthi</div>
          <div class="nav-links">
            <a href="#experience" class="nav-btn">EXPERIENCE</a>
            <a href="#projects" class="nav-btn">PROJECTS</a>
            <a href="#contact" class="nav-btn">CONTACT</a>
          </div>
      </nav>

      <main>
        <!-- HERO -->
        <section class="hero-new">
            <h1 class="hero-big-text">KEERTHI</h1>
            
            <div class="container hero-split-layout">
                <!-- Left Side -->
                <div class="hero-col-left animate-on-scroll stagger-1">
                    <h2 class="hero-stat">5+ <span>Real World Projects</span></h2>
                    <p class="hero-subtext">Hands-on experience delivering real-world AI, ML, and Web Dev solutions.</p>
                </div>

                <!-- Center Image -->
                <div class="hero-col-center animate-on-scroll">
                    <div class="hero-img-card">
                        <img src="profile.jpg" alt="Keerthi Medha">
                    </div>
                </div>

                <!-- Right Side -->
                <div class="hero-col-right animate-on-scroll stagger-2">
                    <p class="hero-bio">
                        Hi, I'm <strong>Keerthi Medha</strong>, a passionate Computer Science Engineer dedicated to building intelligent systems through AI, ML, and IoT innovations.
                    </p>
                    <a href="${portfolioData.personalInfo.resume}" target="_blank" class="hero-resume-btn">RESUME</a>
                </div>
            </div>
        </section>

        <!-- ABOUT ME SECTION -->
        <section id="about-me" class="about-section">
            <div class="container">
                <div class="about-content animate-on-scroll">
                    <h2>Behind the Code</h2>
                    <p class="about-text">
                        ${portfolioData.personalInfo.summary}
                    </p>
                    <div class="about-stats">
                        <div class="stat-item">
                            <span class="stat-num">3+</span>
                            <span class="stat-lbl">Years Coding</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-num">10+</span>
                            <span class="stat-lbl">Projects Built</span>
                        </div>
                         <div class="stat-item">
                            <span class="stat-num">Top 20%</span>
                            <span class="stat-lbl">Branch Rank</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- EXPERIENCE -->
        <section id="experience">
            <div class="container">
                <h2 class="animate-on-scroll">Professional Experience</h2>
                <div class="experience-list">
                    ${portfolioData.experience.map((exp, i) => `
                        <div class="experience-card animate-on-scroll stagger-${(i % 2) + 1}">
                            <div class="exp-header">
                                <div>
                                    <h3>${exp.role}</h3>
                                    <span class="exp-company">${exp.company}</span>
                                    <span class="exp-type">${exp.type}</span>
                                </div>
                                <div class="exp-meta">
                                    <span class="exp-date">${exp.duration}</span>
                                    ${exp.github ? `<a href="${exp.github}" target="_blank" class="exp-github"><i class="fa-brands fa-github"></i> View Work</a>` : ''}
                                </div>
                            </div>
                            <ul class="exp-desc">
                                ${exp.description.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- ACHIEVEMENTS -->
        <section>
            <div class="container">
                <h2 class="animate-on-scroll">Achievements & Certifications</h2>
                <div class="achievements-list">
                    ${portfolioData.achievements.map((a, i) => `
                        <div class="achievement-row animate-on-scroll stagger-${(i % 2) + 1}">
                            <span class="achievement-title">${a.title}</span>
                            <span class="achievement-desc">${a.desc}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- SKILLS -->
        <section>
            <div class="container">
                <h2 class="animate-on-scroll">Technical Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category animate-on-scroll stagger-1">
                        <h3>Programming</h3>
                        <ul class="skill-list">
                            ${portfolioData.skills.programming.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="skill-category animate-on-scroll stagger-2">
                        <h3>AI / ML</h3>
                        <ul class="skill-list">
                            ${portfolioData.skills.ai_ml.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="skill-category animate-on-scroll stagger-3">
                        <h3>Cloud & Tools</h3>
                        <ul class="skill-list">
                            ${portfolioData.skills.tools.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROJECTS -->
        <section id="projects">
            <div class="container">
                <h2 class="animate-on-scroll">Selected Projects</h2>
                <div class="projects-wrapper">
                    ${portfolioData.projects.map((p, i) => `
                        <div class="project-row animate-on-scroll ${i % 2 !== 0 ? 'reverse' : ''}">
                            <div class="project-img-wrapper">
                                 <div class="project-overlay"></div>
                                 <img src="${p.image}" class="project-img" alt="${p.title}">
                                 <span class="project-year">${p.year}</span>
                            </div>
                            <div class="project-content">
                                <span class="project-number">0${i + 1}</span>
                                <h3 class="project-title">${p.title}</h3>
                                <div class="project-tech-stack">
                                    ${p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                                </div>
                                <p class="project-desc">${p.problem.substring(0, 180)}...</p>
                                <div class="project-actions">
                                    <button class="view-case-study-btn" data-index="${i}">Read Case Study</button>
                                    <a href="${p.githubUrl}" target="_blank" class="github-icon-link"><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer id="contact">
            <div class="container footer-content animate-on-scroll">
                <div class="footer-left">
                    <h3>Contact</h3>
                    <a href="mailto:${portfolioData.personalInfo.email}" class="footer-email">
                        ${portfolioData.personalInfo.email}
                    </a>
                </div>
                <div class="socials">
                    <a href="${portfolioData.personalInfo.linkedin}" target="_blank">LinkedIn</a>
                    <a href="${portfolioData.personalInfo.github}" target="_blank">GitHub</a>
                </div>
            </div>
        </footer>
      </main>
    <!-- CASE STUDY OVERLAY -->
    <div class="case-study-overlay" id="case-study-overlay">
        <div class="cs-header">
             <button class="close-case-study" id="close-case-study-btn">Close_</button>
        </div>
        <div class="cs-content-scroll">
            <div class="cs-container">
                <span class="cs-year" id="cs-year">2025</span>
                <h1 class="cs-title" id="cs-title">Project Title</h1>
                <div class="cs-tech-row" id="cs-tech"></div>
                
                <div class="cs-hero-img-wrapper">
                     <img id="cs-image" src="" alt="Project Content">
                </div>

                <div class="cs-linear-layout">
                    <div class="cs-block">
                        <h3>01. The Challenge</h3>
                        <p id="cs-problem"></p>
                    </div>
                    <div class="cs-block">
                        <h3>02. The Approach</h3>
                        <p id="cs-approach"></p>
                    </div>
                    <div class="cs-block">
                        <h3>03. Implementation</h3>
                        <p id="cs-implementation"></p>
                    </div>
                    <div class="cs-block">
                        <h3>04. Key Results</h3>
                        <p id="cs-results"></p>
                    </div>
                    
                    <div class="cs-footer-action">
                        <a href="#" id="cs-github" target="_blank" class="cs-github-btn">
                            View Repository <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // --- CASE STUDY LOGIC ---
    const overlay = document.getElementById('case-study-overlay');
    const closeBtn = document.getElementById('close-case-study-btn');
    const elements = {
        title: document.getElementById('cs-title'),
        year: document.getElementById('cs-year'),
        tech: document.getElementById('cs-tech'),
        img: document.getElementById('cs-image'),
        problem: document.getElementById('cs-problem'),
        approach: document.getElementById('cs-approach'),
        imp: document.getElementById('cs-implementation'),
        res: document.getElementById('cs-results'),
        github: document.getElementById('cs-github')
    };

    const openCaseStudy = (index) => {
        const p = portfolioData.projects[index];
        elements.title.innerText = p.title;
        elements.year.innerText = p.year || '2025';

        // Tech tags
        elements.tech.innerHTML = p.technologies.map(t => `<span class="cs-tag">${t}</span>`).join('');

        elements.img.src = p.image;
        elements.problem.innerText = p.problem;
        elements.approach.innerText = p.approach;
        elements.imp.innerText = p.implementation;
        elements.res.innerText = p.results;
        elements.github.href = p.githubUrl;

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeCaseStudy = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeCaseStudy);
    document.querySelectorAll('.view-case-study-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openCaseStudy(btn.getAttribute('data-index'));
        });
    });

    // --- MAGIC CURSOR ---
    const cursor = document.querySelector('.magic-cursor');
    const links = document.querySelectorAll('a, button, .service-card, .project-row, .hero-profile-img');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // --- 3D TILT EFFECT (Safety Wrapped) ---
    const heroCard = document.querySelector('.hero-img-card');

    if (heroCard) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Subtle tilt
            const xRot = (y / rect.height) * -10;
            const yRot = (x / rect.width) * 10;

            heroCard.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
        });

        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.transition = 'transform 0.5s ease-out';
            heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });

        heroCard.addEventListener('mouseenter', () => {
            heroCard.style.transition = 'transform 0.1s ease-out';
        });
    }

    // --- SCROLL ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));


};

renderApp();
