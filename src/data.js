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
        resume: "keerthi_resume.pdf",
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
            title: "NEXUS — Real-Time Multimodal Spatial Assistant",
            year: "2025",
            technologies: ["Python", "Computer Vision (YOLO)", "OpenCV", "Speech Processing", "Edge AI"],
            problem: "Visually impaired users often lack real-time understanding of dynamic surroundings. Traditional navigation aids fail to provide instantaneous, detailed environmental feedback.",
            approach: "The system performs real-time object detection and converts visual information into audio feedback for spatial awareness. The architecture emphasizes offline inference to reduce latency and preserve privacy while maintaining real-time performance.",
            implementation: "Built using Python and OpenCV for vision processing, with YOLO integration for object detection. The system runs on edge devices to ensure low latency.",
            results: "Provides real-time spatial awareness with minimal latency, effectively assisting visually impaired users in navigating complex environments.",
            githubUrl: "https://github.com/keerthi2436/NEXUS-Real-Time-Multimodal-Spatial-Assistant-",
            image: "/portfolio/nexus.svg"
        },
        {
            title: "Memora — Multimodal Cognitive Support System",
            year: "2025",
            technologies: ["TypeScript", "LLM Integration", "Vector Databases", "Semantic Search", "RAG"],
            problem: "Users experiencing memory difficulties struggle with maintaining conversational and contextual continuity, leading to disjointed interactions and loss of critical information.",
            approach: "The system stores interaction embeddings and retrieves relevant context using semantic similarity. This enables context-aware assistance through retrieval-based LLM responses.",
            implementation: "Developed with TypeScript and Vector Databases for efficient embedding storage. Integrated LLMs with RAG (Retrieval-Augmented Generation) for accurate context retrieval.",
            results: "Significantly improves conversational continuity and memory recall, providing a seamless and supportive user experience.",
            githubUrl: "https://github.com/keerthi2436/memora",
            image: "/portfolio/network_game.png"
        },
        {
            title: "Green Corridor System — AI-Based Traffic Optimization",
            year: "2024",
            technologies: ["Python", "AI/ML Logic", "Traffic Simulation", "Optimization Algorithms"],
            problem: "Emergency vehicles lose critical time due to static traffic signal control, often leading to delayed response times in life-critical situations.",
            approach: "The system simulates dynamic signal prioritization by predicting optimal traffic flow paths and adjusting signal timing to minimize travel delay and congestion.",
            implementation: "Utilizes Python for traffic simulation and optimization algorithms. The system dynamically adjusts signal states based on real-time vehicle location data.",
            results: "Reduces delays for emergency vehicles by dynamically clearing paths, potentially saving lives through faster response times.",
            githubUrl: "https://github.com/keerthi2436/green-corridor-system",
            image: "/portfolio/green_corridor.svg"
        }
    ],
    skills: {
        programming: ["Python", "C", "Java", "HTML/CSS", "JavaScript", "Data Structures"],
        ai_ml: ["Machine Learning", "NLP", "Speech Recognition", "TensorFlow", "scikit-learn", "RAG"],
        tools: ["AWS", "SQL", "Flask", "React.js", "GitHub", "Google Translate API"]
    }
};
