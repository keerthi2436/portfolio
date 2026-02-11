(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const a={personalInfo:{email:"keerthimedha6@gmail.com",linkedin:"https://www.linkedin.com/in/keerthi-medha-7506b32a7",github:"https://github.com/keerthi2436",resume:"keerthi_resume.pdf",summary:"I am an <strong>AI/ML</strong> undergraduate at Vasireddy Venkatadri Institute of Technology, ranked in the <strong>Top 20%</strong> of my entire branch. My work bridges the gap between theoretical machine learning and scalable, real-world software, spanning <strong>Generative AI, Reinforcement Learning, and Machine Learning</strong>. Passionate about how AI behaves in dynamic environments, I am dedicated to engineering deployable, intelligent solutions that solve complex problems."},achievements:[{title:"AWS Solutions Architecture",desc:"Forage Job Simulation (2025)"},{title:"Generative AI Professional",desc:"Oracle Certified (2025)"},{title:"LLM Certification",desc:"NPTEL (2025)"},{title:"Academic Excellence",desc:"8.23/10 CGPA (B.Tech)"}],experience:[{role:"AI Intern",company:"Infosys Springboard",duration:"Sept 2025 - Nov 2025",type:"Virtual Internship",description:["Architected a high fidelity RAG (Retrieval Augmented Generation) engine that processes complex legal statutes to deliver hallucination free, citation backed legal analysis using vector embeddings and GPT-4.","Engineered specialized AI agents for autonomous Legal Drafting, Case Summarization, and Adaptive Quizzing.","Delivered a production ready Full-Stack application featuring hybrid search logic (Vector + Keyword) and robust cryptographic authentication."],github:"https://github.com/keerthi2436/AI-based-legal-referance-and-retreival-system-"}],projects:[{title:"NEXUS — Real-Time Multimodal Spatial Assistant",year:"2025",technologies:["Python","Computer Vision (YOLO)","OpenCV","Speech Processing","Edge AI"],problem:"Visually impaired users often lack real-time understanding of dynamic surroundings. Traditional navigation aids fail to provide instantaneous, detailed environmental feedback.",approach:"The system performs real-time object detection and converts visual information into audio feedback for spatial awareness. The architecture emphasizes offline inference to reduce latency and preserve privacy while maintaining real-time performance.",implementation:"Built using Python and OpenCV for vision processing, with YOLO integration for object detection. The system runs on edge devices to ensure low latency.",results:"Provides real-time spatial awareness with minimal latency, effectively assisting visually impaired users in navigating complex environments.",githubUrl:"https://github.com/keerthi2436/NEXUS-Real-Time-Multimodal-Spatial-Assistant-",image:"/portfolio/nexus.svg"},{title:"Memora — Multimodal Cognitive Support System",year:"2025",technologies:["TypeScript","LLM Integration","Vector Databases","Semantic Search","RAG"],problem:"Users experiencing memory difficulties struggle with maintaining conversational and contextual continuity, leading to disjointed interactions and loss of critical information.",approach:"The system stores interaction embeddings and retrieves relevant context using semantic similarity. This enables context-aware assistance through retrieval-based LLM responses.",implementation:"Developed with TypeScript and Vector Databases for efficient embedding storage. Integrated LLMs with RAG (Retrieval-Augmented Generation) for accurate context retrieval.",results:"Significantly improves conversational continuity and memory recall, providing a seamless and supportive user experience.",githubUrl:"https://github.com/keerthi2436/memora",image:"/portfolio/network_game.png"},{title:"Green Corridor System — AI-Based Traffic Optimization",year:"2024",technologies:["Python","AI/ML Logic","Traffic Simulation","Optimization Algorithms"],problem:"Emergency vehicles lose critical time due to static traffic signal control, often leading to delayed response times in life-critical situations.",approach:"The system simulates dynamic signal prioritization by predicting optimal traffic flow paths and adjusting signal timing to minimize travel delay and congestion.",implementation:"Utilizes Python for traffic simulation and optimization algorithms. The system dynamically adjusts signal states based on real-time vehicle location data.",results:"Reduces delays for emergency vehicles by dynamically clearing paths, potentially saving lives through faster response times.",githubUrl:"https://github.com/keerthi2436/green-corridor-system",image:"/portfolio/green_corridor.svg"}],skills:{programming:["Python","C","Java","HTML/CSS","JavaScript","Data Structures"],ai_ml:["Machine Learning","NLP","Speech Recognition","TensorFlow","scikit-learn","RAG"],tools:["AWS","SQL","Flask","React.js","GitHub","Google Translate API"]}},u=()=>{document.querySelector("#app").innerHTML=`
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
                    <a href="${a.personalInfo.resume}" target="_blank" class="hero-resume-btn">RESUME</a>
                </div>
            </div>
        </section>

        <!-- ABOUT ME SECTION -->
        <section id="about-me" class="about-section">
            <div class="container">
                <div class="about-content animate-on-scroll">
                    <h2>Behind the Code</h2>
                    <p class="about-text">
                        ${a.personalInfo.summary}
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
                    ${a.experience.map((e,t)=>`
                        <div class="experience-card animate-on-scroll stagger-${t%2+1}">
                            <div class="exp-header">
                                <div>
                                    <h3>${e.role}</h3>
                                    <span class="exp-company">${e.company}</span>
                                    <span class="exp-type">${e.type}</span>
                                </div>
                                <div class="exp-meta">
                                    <span class="exp-date">${e.duration}</span>
                                    ${e.github?`<a href="${e.github}" target="_blank" class="exp-github"><i class="fa-brands fa-github"></i> View Work</a>`:""}
                                </div>
                            </div>
                            <ul class="exp-desc">
                                ${e.description.map(r=>`<li>${r}</li>`).join("")}
                            </ul>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ACHIEVEMENTS -->
        <section>
            <div class="container">
                <h2 class="animate-on-scroll">Achievements & Certifications</h2>
                <div class="achievements-list">
                    ${a.achievements.map((e,t)=>`
                        <div class="achievement-row animate-on-scroll stagger-${t%2+1}">
                            <span class="achievement-title">${e.title}</span>
                            <span class="achievement-desc">${e.desc}</span>
                        </div>
                    `).join("")}
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
                            ${a.skills.programming.map(e=>`<li>${e}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="skill-category animate-on-scroll stagger-2">
                        <h3>AI / ML</h3>
                        <ul class="skill-list">
                            ${a.skills.ai_ml.map(e=>`<li>${e}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="skill-category animate-on-scroll stagger-3">
                        <h3>Cloud & Tools</h3>
                        <ul class="skill-list">
                            ${a.skills.tools.map(e=>`<li>${e}</li>`).join("")}
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
                    ${a.projects.map((e,t)=>`
                        <div class="project-row animate-on-scroll ${t%2!==0?"reverse":""}">
                            <div class="project-img-wrapper">
                                 <div class="project-overlay"></div>
                                 <img src="${e.image}" class="project-img" alt="${e.title}">
                                 <span class="project-year">${e.year}</span>
                            </div>
                            <div class="project-content">
                                <span class="project-number">0${t+1}</span>
                                <h3 class="project-title">${e.title}</h3>
                                <div class="project-tech-stack">
                                    ${e.technologies.slice(0,4).map(r=>`<span class="tech-tag">${r}</span>`).join("")}
                                </div>
                                <p class="project-desc">${e.problem.substring(0,180)}...</p>
                                <div class="project-actions">
                                    <button class="view-case-study-btn" data-index="${t}">Read Case Study</button>
                                    <a href="${e.githubUrl}" target="_blank" class="github-icon-link"><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer id="contact">
            <div class="container footer-content animate-on-scroll">
                <div class="footer-left">
                    <h3>Contact</h3>
                    <a href="mailto:${a.personalInfo.email}" class="footer-email">
                        ${a.personalInfo.email}
                    </a>
                </div>
                <div class="socials">
                    <a href="${a.personalInfo.linkedin}" target="_blank">LinkedIn</a>
                    <a href="${a.personalInfo.github}" target="_blank">GitHub</a>
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
    `;const m=document.getElementById("case-study-overlay"),l=document.getElementById("close-case-study-btn"),n={title:document.getElementById("cs-title"),year:document.getElementById("cs-year"),tech:document.getElementById("cs-tech"),img:document.getElementById("cs-image"),problem:document.getElementById("cs-problem"),approach:document.getElementById("cs-approach"),imp:document.getElementById("cs-implementation"),res:document.getElementById("cs-results"),github:document.getElementById("cs-github")},d=e=>{const t=a.projects[e];n.title.innerText=t.title,n.year.innerText=t.year||"2025",n.tech.innerHTML=t.technologies.map(r=>`<span class="cs-tag">${r}</span>`).join(""),n.img.src=t.image,n.problem.innerText=t.problem,n.approach.innerText=t.approach,n.imp.innerText=t.implementation,n.res.innerText=t.results,n.github.href=t.githubUrl,m.classList.add("active"),document.body.style.overflow="hidden"},s=()=>{m.classList.remove("active"),document.body.style.overflow=""};l.addEventListener("click",s),document.querySelectorAll(".view-case-study-btn").forEach(e=>{e.addEventListener("click",()=>{d(e.getAttribute("data-index"))})});const i=document.querySelector(".magic-cursor"),c=document.querySelectorAll("a, button, .service-card, .project-row, .hero-profile-img");document.addEventListener("mousemove",e=>{i.style.left=e.clientX+"px",i.style.top=e.clientY+"px"}),c.forEach(e=>{e.addEventListener("mouseenter",()=>i.classList.add("hovered")),e.addEventListener("mouseleave",()=>i.classList.remove("hovered"))});const o=document.querySelector(".hero-img-card");o&&(o.addEventListener("mousemove",e=>{const t=o.getBoundingClientRect(),r=e.clientX-t.left-t.width/2,h=(e.clientY-t.top-t.height/2)/t.height*-10,g=r/t.width*10;o.style.transform=`perspective(1000px) rotateX(${h}deg) rotateY(${g}deg) scale(1.02)`}),o.addEventListener("mouseleave",()=>{o.style.transition="transform 0.5s ease-out",o.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"}),o.addEventListener("mouseenter",()=>{o.style.transition="transform 0.1s ease-out"}));const p=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-on-scroll").forEach(e=>p.observe(e)),document.querySelectorAll(".animate-on-scroll").forEach(e=>p.observe(e))};u();
