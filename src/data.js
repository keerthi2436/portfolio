export const portfolioData = {
    personalInfo: {
        name: "KEERTHI MEDHA MOTHUKURI",
        title: "AI/ML Undergraduate",
        focus: "Scalable AI Systems | Reinforcement Learning | NLP & Generative AI",
        email: "keerthimedha6@gmail.com",
        phone: "+91 89197 34138",
        location: "Guntur District, Andhra Pradesh, India",
        linkedin: "https://www.linkedin.com/in/keerthi-medha-7506b32a7",
        github: "https://github.com/keerthi2436",
        resume: "/keerthi_resume.pdf", // Ensure you have a resume.pdf in public folder or update this
        summary: "I am an <strong>AI/ML</strong> undergraduate at Vasireddy Venkatadri Institute of Technology, ranked in the <strong>Top 20%</strong> of my entire branch. My work bridges the gap between theoretical machine learning and scalable, real-world software, spanning <strong>Generative AI, Reinforcement Learning, and Machine Learning</strong>. Passionate about how AI behaves in dynamic environments, I am dedicated to engineering deployable, intelligent solutions that solve complex problems."
    },
    services: [
        {
            id: "01",
            title: "Generative AI & LLMs",
            description: "Designing RAG architectures and fine-tuning Large Language Models for domain-specific applications like legal analysis."
        },
        {
            id: "02",
            title: "Computer Vision",
            description: "Building real-time offline perception systems using YOLO and geometric depth estimation for assistive technology."
        },
        {
            id: "03",
            title: "Backend Engineering",
            description: "Developing robust full-stack applications with Flask, React, and SQL, focusing on latency optimization and security."
        },
        {
            id: "04",
            title: "Cloud Architecture",
            description: "Designing scalable cloud solutions on AWS, utilizing serverless computing and efficient storage strategies."
        }
    ],
    achievements: [
        { title: "AWS Solutions Architecture", desc: "Forage Job Simulation (2025)" },
        { title: "Generative AI Professional", desc: "Oracle Certified (2025)" },
        { title: "LLM Certification", desc: "NPTEL (2025)" },
        { title: "Academic Excellence", desc: "8.23/10 CGPA (B.Tech)" }
    ],
    experience: [
        {
            role: "AI Intern",
            company: "Infosys Springboard",
            duration: "Sept 2025 - Nov 2025",
            type: "Virtual Internship",
            description: [
                "Architected a high fidelity RAG (Retrieval Augmented Generation) engine that processes complex legal statutes to deliver hallucination free, citation backed legal analysis using vector embeddings and GPT-4.",
                "Engineered specialized AI agents for autonomous Legal Drafting, Case Summarization, and Adaptive Quizzing.",
                "Delivered a production ready Full-Stack application featuring hybrid search logic (Vector + Keyword) and robust cryptographic authentication."
            ],
            github: "https://github.com/keerthi2436/AI-based-legal-referance-and-retreival-system-"
        }
    ],
    projects: [
        {
            title: "NEXUS: Real-Time Multimodal Spatial Assistant",
            year: "2025",
            technologies: ["Quantized YOLOv3", "Monocular Depth Est.", "Edge AI", "OpenCV"],
            problem: "Visually impaired navigation relies heavily on passive aids (canes) or high-latency cloud APIs, failing to provide real-time <strong>'Time-to-Collision'</strong> data. LIDAR solutions remain cost-prohibitive for mass adoption.",
            approach: "We proposed a <strong>'Perception-Action Loop'</strong> architecture that decouples sensory input (Vision/Voice) from logic processing. The system implements a Monocular Depth Estimation algorithm using a Pinhole Camera Model ($D = (H_{real} \cdot f) / H_{pixel}$) to convert 2D bounding boxes into 3D spatial semantics without stereo sensors.",
            implementation: "The core engine runs a <strong>Quantized YOLOv3-Tiny model</strong> on an Edge CPU (~15 FPS). A custom 'Vision Controller' fuses bounding box centroids with depth scalars to filter obstacles within a <strong>5-meter safety radius</strong>. The output layer triggers haptic feedback and TTS directives only when imminent collision trajectories are detected.",
            challenges: "Running concurrent object detection and depth calculus on a CPU caused thermal throttling. We mitigated this by implementing an <strong>asynchronous threading model</strong> that prioritizes the 'Safety Loop' over the 'Semantic Loop'.",
            results: "Validated in controlled environments with a distance error margin of <strong>± 15cm</strong>. The system achieves <strong><50ms inference latency</strong>, ensuring privacy-first, offline operability compliant with GDPR standards.",
            githubUrl: "https://github.com/keerthi2436/NEXUS-Real-Time-Multimodal-Spatial-Assistant-",
            image: "/nexus.svg"
        },
        {
            title: "Intelligent Green Corridor System",
            year: "2024",
            technologies: ["Geospatial Telemetry", "Graph Algorithms", "IoT / MQTT", "Python"],
            problem: "Urban emergency response is critically hampered by static traffic signal phasing, where pre-timed cycles fail to adapt to high-priority ambulance transit, causing avoidable fatalities.",
            approach: "Designed a <strong>'Dynamic Green Wave'</strong> protocol that utilizes real-time GPS telemetry to create a rolling corridor of green signals. Unlike local sensor-based preemption, this system uses a centralized <strong>Look-Ahead algorithm</strong> to clear intersections *before* the vehicle arrives.",
            implementation: "Developed a Python-based Simulation Controller that maps city intersections as a <strong>directed graph</strong>. The routing engine calculates optimal paths using real-time density weights and communicates with signal nodes via a simulated <strong>Vehicle-to-Infrastructure (V2I) MQTT layer</strong> to override phases dynamically.",
            challenges: "Balancing the 'recovery time' of the traffic network post-preemption. Aggressive clearing caused gridlock in perpendicular arteries. We tuned the algorithm to implementing a <strong>'soft-return' phase</strong> to gradually restore entropy.",
            results: "Simulations demonstrated a <strong>40% reduction</strong> in emergency transit time across dense urban grids. The system visualizes live fleet tracking and provides a scalable dashboard for centralized traffic infrastructure control.",
            githubUrl: "https://github.com/keerthi2436/green-corridor-system",
            image: "/green_corridor.svg"
        }
    ],
    skills: {
        programming: ["Python", "C", "Java", "HTML/CSS", "JavaScript", "Data Structures"],
        ai_ml: ["Machine Learning", "NLP", "Speech Recognition", "TensorFlow", "scikit-learn", "RAG"],
        tools: ["AWS", "SQL", "Flask", "React.js", "GitHub", "Google Translate API"]
    }
};
