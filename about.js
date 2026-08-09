const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs.length > 0) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all tabs
        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        // Add active to clicked tab
        tab.classList.add("active");

        // Hide all content
        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        // Get clicked tab section
        const activeTab = tab.dataset.section;

        const activeContent = document.getElementById(activeTab);

        if (activeContent) {
            activeContent.classList.add("active");
        }

        // =========================
        // EXPERIENCE
        // =========================
        if (activeTab === "experience") {

            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "2024 - Present",
                    position: "B.Tech CSE Student",
                    company: "Guru Kashi University",
                    details:
                        "Learning and developing practical skills in Python programming, cybersecurity, web development, and computer applications. Building projects and strengthening problem-solving and technical skills."
                },
                {
                    id: 2,
                    date: "2024 - 2025",
                    position: "Cybersecurity Learner",
                    company: "Self-Learning & Practical Labs",
                    details:
                        "Learned fundamentals of cybersecurity, ethical hacking, network security, vulnerability assessment, and security tools. Practiced concepts through cybersecurity labs and hands-on exercises."
                },
                {
                    id: 3,
                    date: "2023 - 2024",
                    position: "Python Programming Learner",
                    company: "Self-Learning & Projects",
                    details:
                        "Learned Python fundamentals including variables, conditions, loops, functions, data structures, file handling, and basic automation. Applied programming concepts through small practical projects."
                },
                {
                    id: 4,
                    date: "2023 - 2024",
                    position: "Web Development Learner",
                    company: "Self-Learning & Projects",
                    details:
                        "Developed responsive websites using HTML, CSS, and JavaScript. Worked on frontend layouts, navigation, forms, animations, and responsive web design through practical projects."
                },
                {
                    id: 5,
                    date: "2022 - 2023",
                    position: "Computer Applications & Editing",
                    company: "Academic & Personal Projects",
                    details:
                        "Developed skills in MS Excel, PowerPoint, WordPad, and digital editing. Created spreadsheets, presentations, documents, and edited digital content with a focus on clean and professional presentation."
                }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                    <div class="experience-box">
                        <h4>${ele.date}</h4>
                        <h3>${ele.position}</h3>

                        <div class="company-name">
                            <span></span>
                            <p>${ele.company}</p>
                        </div>

                        <p>${ele.details}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        }

        // =========================
        // EDUCATION
        // =========================
        else if (activeTab === "education") {

            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2024 - 2028",
                    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
                    institution: "Guru Kashi University",
                    details:
                        "Currently pursuing B.Tech in Computer Science & Engineering. Developing skills in Python, Cybersecurity, Web Development, Data Structures, and other core computer science subjects. Expected to graduate in 2028."
                },
                {
                    id: 2,
                    date: "2021 - 2023",
                    degree: "Higher Secondary Education (12th)",
                    institution: "L.S. College, Muzaffarpur",
                    details:
                        "Completed Higher Secondary Education with 72.4% marks. Built a strong foundation in academics, logical thinking, problem-solving, and computer-related concepts."
                },
                {
                    id: 3,
                    date: "2020 - 2021",
                    degree: "Secondary Education (10th)",
                    institution: "Madhya Vidyalaya, Sonbarsa Shah",
                    details:
                        "Completed Secondary Education with 81.2% marks. Developed a strong academic foundation and an early interest in computers and technology."
                }
            ];

            const educationContent = educationList.map((ele) => {
                return `
                    <div class="experience-box">
                        <h4>${ele.date}</h4>
                        <h3>${ele.degree}</h3>

                        <div class="company-name">
                            <span></span>
                            <p>${ele.institution}</p>
                        </div>

                        <p>${ele.details}</p>
                    </div>
                `;
            }).join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        }

        // =========================
        // Skills
        // =========================
        else if (activeTab === "skills") {

            const skills = document.querySelector(".skill-list");

            const skillList = [
                {
                    id: 1,
                    name: "Python",
                    icon: "assets/icons8-python-64.png"
                },
                {
                    id: 2,
                    name: "Kali Linux",
                    icon: "assets/icons8-kali-linux-48.png"
                },
                {
                    id: 3,
                    name: "Burp Suite",
                    icon: "assets/icons8-burp-suite-50.png"
                },
                {
                    id: 4,
                    name: "Nmap",
                    icon: "assets/icons8-nmap-48.png"
                },
                {
                    id: 5,
                    name: "Wireshark",
                    icon: "assets/icons8-wireshark-64.png"
                },
                {
                    id: 6,
                    name: "Metasploit",
                    icon: "assets/icons8-metasploit-48.png"
                },
                {
                    id: 7,
                    name: "C++",
                    icon: "assets/icons8-c-48.png"
                },
                {
                    id: 8,
                    name: "HTML",
                    icon: "assets/icons8-html-64.png"
                },
                {
                    id: 9,
                    name: "Firewall",
                    icon: "assets/icons8-firewall-48.png"
                }
            ];

            const skillContent = skillList.map((ele) => {
                return `
                    <div class="skill-box">
                        <img
                            src="${ele.icon}"
                            alt="${ele.name}"
                            title="${ele.name}"
                            loading="lazy"
                        >
                        <h4>${ele.name}</h4>
                    </div>
                `;
            }).join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        }

        // =========================
        // about me
        // =========================
        else if(activeTab === "about-me"){
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key :"Name : ",
                    value:"Md Sakir Raza",
                },
                {
                    id: 2,
                    key :"Country : ",
                    value:"India",
                },
                {
                    id: 3,
                    key :"Industry : ",
                    value:"Learning Computer Science & Cybersecurity",
                },
                {
                    id: 4,
                    key :"Experience : ",
                    value:"B.Tech CSE Student(Fresher)",
                },
                {
                    id: 1,
                    key :"Address : ",
                    value:"sonbarsa shah, muzaffarpur, bihar",
                }
            ];

            const infoContent = infoList.map((ele)=>{
                return `
                    <div class= "info-box" key =${ele?.id}>
                        <span>${ele?.key}</span>
                        <span>${ele?.value}</span>
                    </div>
                `;
            }).join("");

            if (myInfo){
                myInfo.innerHTML = infoContent;
            }
        }
    });
});