(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const a={personalInfo:{email:"keerthimedha6@gmail.com",linkedin:"https://www.linkedin.com/in/keerthi-medha-7506b32a7",github:"https://github.com/keerthi2436",resume:"keerthi_resume.pdf",summary:"I am an <strong>AI/ML</strong> undergraduate at Vasireddy Venkatadri Institute of Technology, ranked in the <strong>Top 20%</strong> of my entire branch. My work bridges the gap between theoretical machine learning and scalable, real-world software, spanning <strong>Generative AI, Reinforcement Learning, and Machine Learning</strong>. Passionate about how AI behaves in dynamic environments, I am dedicated to engineering deployable, intelligent solutions that solve complex problems."},achievements:[{title:"AWS Solutions Architecture",desc:"Forage Job Simulation (2025)"},{title:"Generative AI Professional",desc:"Oracle Certified (2025)"},{title:"LLM Certification",desc:"NPTEL (2025)"},{title:"Academic Excellence",desc:"8.23/10 CGPA (B.Tech)"}],experience:[{role:"AI Intern",company:"Infosys Springboard",duration:"Sept 2025 - Nov 2025",type:"Virtual Internship",description:["Architected a high fidelity RAG (Retrieval Augmented Generation) engine that processes complex legal statutes to deliver hallucination free, citation backed legal analysis using vector embeddings and GPT-4.","Engineered specialized AI agents for autonomous Legal Drafting, Case Summarization, and Adaptive Quizzing.","Delivered a production ready Full-Stack application featuring hybrid search logic (Vector + Keyword) and robust cryptographic authentication."],github:"https://github.com/keerthi2436/AI-based-legal-referance-and-retreival-system-"}],projects:[{title:"NEXUS: Real-Time Multimodal Spatial Assistant",year:"2025",technologies:["Quantized YOLOv3","Monocular Depth Est.","Edge AI","OpenCV"],problem:"Visually impaired navigation relies heavily on passive aids (canes) or high-latency cloud APIs, failing to provide real-time <strong>'Time-to-Collision'</strong> data. LIDAR solutions remain cost-prohibitive for mass adoption.",approach:"We proposed a <strong>'Perception-Action Loop'</strong> architecture that decouples sensory input (Vision/Voice) from logic processing. The system implements a Monocular Depth Estimation algorithm using a Pinhole Camera Model ($D = (H_{real} cdot f) / H_{pixel}$) to convert 2D bounding boxes into 3D spatial semantics without stereo sensors.",implementation:"The core engine runs a <strong>Quantized YOLOv3-Tiny model</strong> on an Edge CPU (~15 FPS). A custom 'Vision Controller' fuses bounding box centroids with depth scalars to filter obstacles within a <strong>5-meter safety radius</strong>. The output layer triggers haptic feedback and TTS directives only when imminent collision trajectories are detected.",challenges:"Running concurrent object detection and depth calculus on a CPU caused thermal throttling. We mitigated this by implementing an <strong>asynchronous threading model</strong> that prioritizes the 'Safety Loop' over the 'Semantic Loop'.",results:"Validated in controlled environments with a distance error margin of <strong>± 15cm</strong>. The system achieves <strong><50ms inference latency</strong>, ensuring privacy-first, offline operability compliant with GDPR standards.",githubUrl:"https://github.com/keerthi2436/NEXUS-Real-Time-Multimodal-Spatial-Assistant-",image:"/portfolio/nexus.svg"},{title:"Intelligent Green Corridor System",year:"2024",technologies:["Geospatial Telemetry","Graph Algorithms","IoT / MQTT","Python"],problem:"Urban emergency response is critically hampered by static traffic signal phasing, where pre-timed cycles fail to adapt to high-priority ambulance transit, causing avoidable fatalities.",approach:"Designed a <strong>'Dynamic Green Wave'</strong> protocol that utilizes real-time GPS telemetry to create a rolling corridor of green signals. Unlike local sensor-based preemption, this system uses a centralized <strong>Look-Ahead algorithm</strong> to clear intersections *before* the vehicle arrives.",implementation:"Developed a Python-based Simulation Controller that maps city intersections as a <strong>directed graph</strong>. The routing engine calculates optimal paths using real-time density weights and communicates with signal nodes via a simulated <strong>Vehicle-to-Infrastructure (V2I) MQTT layer</strong> to override phases dynamically.",challenges:"Balancing the 'recovery time' of the traffic network post-preemption. Aggressive clearing caused gridlock in perpendicular arteries. We tuned the algorithm to implementing a <strong>'soft-return' phase</strong> to gradually restore entropy.",results:"Simulations demonstrated a <strong>40% reduction</strong> in emergency transit time across dense urban grids. The system visualizes live fleet tracking and provides a scalable dashboard for centralized traffic infrastructure control.",githubUrl:"https://github.com/keerthi2436/green-corridor-system",image:"/portfolio/green_corridor.svg"},{title:"Reinforcement Learning Game Environment",year:"2024",technologies:["PyTorch","OpenAI Gym","Q-Learning","Matplotlib"],problem:"Standard benchmarks for RL often lack the customizability needed to test specific <strong>multi-agent decision-making</strong> hypotheses, creating a gap between theoretical policy design and observable agent behaviors.",approach:"Built a custom <strong>Grid-World Environment</strong> from scratch that simulates resource-constrained scenarios. The environment supports modular reward functions, allowing for the comparative analysis of <strong>Epsilon-Greedy vs. Softmax</strong> exploration strategies.",implementation:"Implemented a <strong>Deep Q-Network (DQN)</strong> agent with experience replay to stabilize training. The system features a real-time rendering engine using Matplotlib to visualize agent trajectories and heatmaps of value functions ($V(s)$) across the state space.",challenges:"Addressing the <strong>'Sparse Reward'</strong> problem where the agent failed to converge. I engineered a <strong>Reward Shaping</strong> mechanism that introduces intermediate sub-goals, reducing convergence time by 60%.",results:"The agent achieved a <strong>95% success rate</strong> in optimal pathfinding after 500 episodes. The framework is now used as a teaching tool for demonstrating the <strong>Exploration-Exploitation trade-off</strong>.",githubUrl:"https://github.com/keerthi2436",image:"/portfolio/network_game.png"},{title:"Neural Speech Recognition Pipeline",year:"2023",technologies:["TensorFlow","Librosa","Wav2Vec 2.0","Python"],problem:"Traditional HMM-based speech systems struggle with accents and background noise. The goal was to build a robust <strong>End-to-End ASR</strong> system capable of transcribing noisy audio with high fidelity.",approach:"Leveraged <strong>Transfer Learning</strong> by fine-tuning a pre-trained <strong>Wav2Vec 2.0</strong> model. The pipeline includes a <strong>Spectrogram Augmentation</strong> stage (SpecAugment) to artificially introduce noise during training, forcing the model to learn robust acoustic features.",implementation:"Developed a preprocessing pipeline using <strong>Librosa</strong> to extract Mel-frequency cepstral coefficients (MFCCs). The model output is decoded using a <strong>CTC (Connectionist Temporal Classification)</strong> beam search decoder to align acoustic frames with text characters without explicit alignment data.",challenges:"Handling variable-length audio sequences efficiently in batches. Implemented <strong>dynamic padding and masking</strong> mechanisms to ensure batched tensor operations remained memory-efficient on limited GPU resources.",results:"Achieved a <strong>Word Error Rate (WER) of 12%</strong> on a custom noisy dataset, outperforming baseline HMM models by a significant margin. The system supports real-time inference for short command phrases.",githubUrl:"https://github.com/keerthi2436",image:"/portfolio/speech_rec.png"}],skills:{programming:["Python","C","Java","HTML/CSS","JavaScript","Data Structures"],ai_ml:["Machine Learning","NLP","Speech Recognition","TensorFlow","scikit-learn","RAG"],tools:["AWS","SQL","Flask","React.js","GitHub","Google Translate API"]}},u=()=>{document.querySelector("#app").innerHTML=`
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
                        <img src="/profile.jpg" alt="Keerthi Medha">
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
    `;const g=document.getElementById("case-study-overlay"),l=document.getElementById("close-case-study-btn"),n={title:document.getElementById("cs-title"),year:document.getElementById("cs-year"),tech:document.getElementById("cs-tech"),img:document.getElementById("cs-image"),problem:document.getElementById("cs-problem"),approach:document.getElementById("cs-approach"),imp:document.getElementById("cs-implementation"),res:document.getElementById("cs-results"),github:document.getElementById("cs-github")},d=e=>{const t=a.projects[e];n.title.innerText=t.title,n.year.innerText=t.year||"2025",n.tech.innerHTML=t.technologies.map(r=>`<span class="cs-tag">${r}</span>`).join(""),n.img.src=t.image,n.problem.innerText=t.problem,n.approach.innerText=t.approach,n.imp.innerText=t.implementation,n.res.innerText=t.results,n.github.href=t.githubUrl,g.classList.add("active"),document.body.style.overflow="hidden"},s=()=>{g.classList.remove("active"),document.body.style.overflow=""};l.addEventListener("click",s),document.querySelectorAll(".view-case-study-btn").forEach(e=>{e.addEventListener("click",()=>{d(e.getAttribute("data-index"))})});const i=document.querySelector(".magic-cursor"),c=document.querySelectorAll("a, button, .service-card, .project-row, .hero-profile-img");document.addEventListener("mousemove",e=>{i.style.left=e.clientX+"px",i.style.top=e.clientY+"px"}),c.forEach(e=>{e.addEventListener("mouseenter",()=>i.classList.add("hovered")),e.addEventListener("mouseleave",()=>i.classList.remove("hovered"))});const o=document.querySelector(".hero-img-card");o&&(o.addEventListener("mousemove",e=>{const t=o.getBoundingClientRect(),r=e.clientX-t.left-t.width/2,p=(e.clientY-t.top-t.height/2)/t.height*-10,h=r/t.width*10;o.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${h}deg) scale(1.02)`}),o.addEventListener("mouseleave",()=>{o.style.transition="transform 0.5s ease-out",o.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"}),o.addEventListener("mouseenter",()=>{o.style.transition="transform 0.1s ease-out"}));const m=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-on-scroll").forEach(e=>m.observe(e)),document.querySelectorAll(".animate-on-scroll").forEach(e=>m.observe(e))};u();
