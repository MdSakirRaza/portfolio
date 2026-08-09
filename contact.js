const media = document.querySelector(".contact-media");

const contactList = [
    {
        id:1,
        icon:"ph ph-phone-call",
        name:"Phone",
        value:"+91 6299719384",
        href:"tel:+916299719384",
    },
    {
        id:2,
        icon:"ph ph-envelope",
        name:"E-Mail",
        value:"mdsakirraza37@gmail.com",
        href:"mailto:mdsakirraza37@gmail.com",
    },
    {
        id:3,
        icon:"ph ph-map-pin",
        name:"Country",
        value:"India",
        href:"#",
    },
];

const contactContent = contactList.map((ele)=>{
    return `
        <div class="media" key=${ele?.id}>
            <span>
                <i class="${ele?.icon}"></i>
            </span>
            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href=${ele?.href}>${ele?.value}</a>
            </div>
        </div>
    `;
}).join("");

if (media){
    media.innerHTML = contactContent;
}

//send contact message

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;

const originalStyle = {
    backgroundColor:sendBtn.style.backgroundColor,

    color:sendBtn.style.color,
    border:sendBtn.style.border,
    boxShadow:sendBtn.style.boxShadow,
}

document.getElementById("contact-form").addEventListener("submit",(event)=>{
    event.preventDefault();

    sendBtn.innerHTML = "sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";

    sendBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if(!name || !email || !phone || !message){

        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style, originalStyle);

        sendBtn.disabled = false;

        return Toastify({
            text: "All fill are mandatory !",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            close:true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "rgb(206,16,16)",
            },
        }).showToast();
    }

    emailjs.send("service_9hnn9qh","template_3ogv4um", {
        name,
        email,
        phone,
        message,
    }).then(() => {
                    Toastify({
                        text: "Message Send !",
                        duration: 3000,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        close:true,
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                        background: "rgb(9,222,38)",
                        },
                    }).showToast();
                    
                    setTimeout(()=>{
                        sendBtn.innerHTML = originalText;

                        Object.assign(sendBtn.style, originalStyle);

                        sendBtn.disabled = false;
                    },2000);
                    
                    }, (error) => {
                        Toastify({
                        text: "Message Failed !",
                        duration: 3000,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        close:true,
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                        background: "rgb(206,16,16)",
                        },
                    }).showToast();
                        console.log('FAILED...', error);
                    });
});