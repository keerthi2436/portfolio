export const portfolioData = {
    personalInfo: {
        name: "KEERTHI MEDHA MOTHUKURI",
        title: "AI/ML Undergraduate",
        focus: "LLMs | RAG Architectures | NLP & Multimodal Pipelines",
        email: "keerthimedha6@gmail.com",
        phone: "+91 8919734138",
        location: "Guntur, India",
        linkedin: "https://www.linkedin.com/in/keerthi-medha-7506b32a7",
        github: "https://github.com/keerthi2436",
        resume: "resume.html",
        summary: "Third-year AI/ML undergraduate with hands-on experience building production-grade systems using LLMs, RAG architectures, NLP, and multimodal pipelines. Developed and deployed an AI-powered legal analysis platform during an industry Internship at Infosys Springboard, and independently built a cognitive support system for dementia patients using vector databases and large language models. Experienced in end-to-end AI development from model building and integration to deploying live applications using Streamlit and Flask."
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
        { title: "Cloud Foundations", desc: "AWS Academy (2026)" },
        { title: "Generative AI Professional", desc: "Oracle Certified (2025)" },
        { title: "Large Language Models", desc: "NPTEL (2025)" },
        { title: "Academic Excellence", desc: "8.34/10 GPA (B.Tech)" }
    ],
    experience: [
        {
            role: "AI Intern",
            company: "Infosys Springboard",
            duration: "Sept 2025 - Nov 2025",
            type: "Virtual Internship",
            description: [
                "Architected a high-fidelity RAG engine using vector embeddings and GPT-4, achieving a 40% reduction in hallucination rates.",
                "Engineered specialized AI agents for autonomous Legal Drafting and Case Summarization, streamlining cross-document synthesis.",
                "Delivered a production-ready application featuring hybrid search (Vector + Keyword) and latency-optimized inference pipelines."
            ],
            github: "https://github.com/keerthi2436/AI-based-legal-referance-and-retreival-system-"
        }
    ],
    projects: [
        {
            title: "Memora: A Cognitive Prosthetic for Dementia Care",
            year: "2025",
            technologies: ["Next.js", "TypeScript", "Qdrant", "RAG", "Multi-Agent Systems"],
            problem: "Dementia patients struggle to retain independence due to memory loss and conversational discontinuity.",
            approach: "Developed an 'External Hippocampus' using a Multi-Agent system for hybrid RAG context retrieval.",
            implementation: "Utilized multimodal inputs to store and recall human-centric context via semantic vector search. Built with Next.js and Qdrant.",
            results: "Significantly improves conversational continuity and memory recall for dementia patients.",
            githubUrl: "https://github.com/keerthi2436/Memora",
            image: "network_game.png"
        },
        {
            title: "AI-Based English Proficiency Assessment & TOEFL/GRE Prediction",
            year: "Ongoing",
            technologies: ["Python", "NLP", "Machine Learning", "Supervised Learning"],
            problem: "Assessing linguistic proficiency accurately requires complex analysis of vocabulary, grammar, and syntax.",
            approach: "Architecting a comprehensive ML framework to map linguistic features to TOEFL/GRE benchmark levels.",
            implementation: "Developing an NLP pipeline for feature extraction and leveraging supervised learning models for multi-class proficiency categorization.",
            results: "Optimizing classification reliability for accurate proficiency mapping.",
            githubUrl: "https://github.com/keerthi2436",
            image: "english_proficiency.png"
        }
    ],
    skills: {
        programming: ["Python", "C", "Java", "JavaScript", "HTML/CSS"],
        ai_ml: ["NLP", "RAG Systems", "Computer Vision (YOLO)", "TensorFlow", "scikit-learn", "Speech Recognition"],
        tools: ["AWS", "SQL", "Flask", "React.js", "Git/GitHub", "Docker", "Google Translate API"]
    }
};
