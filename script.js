const toggle = document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener("change",() => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    })
}

const words = [
    "Ethical Hacker",
    "Developer",
    "Engineer",
    "CSE Student",
    "Pentester"
]

const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, nextWordDelay);
        }else{
            setTimeout(type, typingDelay);
        }
    }else{
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex --;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1)% words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
    
};

document.addEventListener('DOMContentLoaded',() =>{
    if (words?.length) type();
})

const navlinks = document.querySelectorAll(".navlink");

const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        navlinks.forEach((l) => l.classList.remove("active"));
         
        link.classList.add('active');
        
        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName){
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }
        });

         // Close mobile menu
        if (toggle) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }

       if(tabName === 'services'){
            const serviceList = [
                {
                    id:1,
                    icon:"ph-shield-check",
                    text: "Cybersecurity",
                    para: "Learning ethical hacking, network security, vulnerability assessment, security monitoring, and defensive security.",
                }, 
                {
                    id:2,
                    icon:"ph-bug",
                    text: "Penetration Testing",
                    para: "Simulate real-world cyberattacks to discover exploitable vulnerabilities before attackers can.",
                },
                {
                    id:3,
                    icon:"ph-file-code",
                    text: "Python Development",
                    para: "Building Python programs, automation scripts, and cybersecurity-related projects while strengthening my programming skills.",
                },
                {
                    id:4,
                    icon: "ph-globe",
                    text:"Web Development",
                    para:"Creating responsive and modern websites using HTML, CSS, JavaScript, and other web technologies."
                },
                {
                    id:5,
                    icon: "ph-bug",
                    text:"Security Testing",
                    para:"Practicing authorized web and network security testing using Nmap, Wireshark, Burp Suite, Kali Linux, and more."
                },
                {
                    id:6,
                    icon: "ph-graduation-cap",
                    text:"Projects & Learning",
                    para:"Applying my knowledge through hands-on projects, CTFs, cybersecurity labs, and real-world learning."
                } ];

            const services = document.getElementsByClassName("service-list");

            const innerContent = serviceList.map((l) => {
                return `
                   <div class="box" key=${l?.id}>
                    <div class="head-icons">
                       <i class="ph ${l?.icon}"></i>
                       <span>
                        <i class="ph ph-arrow-down-right"></i>
                       </span>
                    </div>
                    <h3>${l?.text}</h3>
                    <span class="spacer"></span>
                    <p>${l?.para}</p>
                </div>
                `;
            }).join("");

            Array.from(services).forEach((ele)=>{
                ele.innerHTML = innerContent;
            });
        }

    });
});