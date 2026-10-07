/* =====================================================
   SWARNA BIRTHDAY WEBSITE
   COMPLETE INTERACTION
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const loader = document.getElementById("loader");

const introScreen =
    document.getElementById("introScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const messageScreen =
    document.getElementById("messageScreen");

const finalScreen =
    document.getElementById("finalScreen");

const openBtn =
    document.getElementById("openBtn");

const messageBtn =
    document.getElementById("messageBtn");

const finalBtn =
    document.getElementById("finalBtn");

const replayBtn =
    document.getElementById("replayBtn");

const typingText =
    document.getElementById("typingText");

const confetti =
    document.getElementById("confetti");

const hearts =
    document.getElementById("hearts");


/* =====================================================
   SETTINGS
===================================================== */

const birthdayMessage =
    "Hope this year brings you lots of happiness, beautiful memories, and everything you've been wishing for. And honestly... you make smiling look pretty easy.";


const finalMessage =
    "Okay, enough cheesiness for now. Just stay happy, keep smiling, and stay exactly the way you are... because you're already pretty adorable. ♡";


/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1400);

});


/* =====================================================
   SCREEN SWITCHER
===================================================== */

function showScreen(screen) {

    const screens = [
        introScreen,
        birthdayScreen,
        messageScreen,
        finalScreen
    ];

    screens.forEach(item => {

        if (item) {
            item.classList.remove("active");
        }

    });

    screen.classList.add("active");
}


/* =====================================================
   OPEN SURPRISE
===================================================== */

openBtn.addEventListener("click", () => {

    showScreen(birthdayScreen);

    createConfetti(80);

    createHearts(12);

});


/* =====================================================
   SECOND SCREEN
===================================================== */

messageBtn.addEventListener("click", () => {

    showScreen(messageScreen);

    createHearts(15);

    setTimeout(() => {

        typeMessage(
            typingText,
            birthdayMessage,
            35
        );

    }, 500);

});


/* =====================================================
   TYPEWRITER
===================================================== */

function typeMessage(
    element,
    text,
    speed = 40
) {

    element.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            setTimeout(() => {

                finalBtn.classList.add("visible");

            }, 600);

        }

    }

    type();
}


/* =====================================================
   FINAL BUTTON
===================================================== */

finalBtn.addEventListener("click", () => {

    showScreen(finalScreen);

    createConfetti(120);

    createHearts(25);

});


/* =====================================================
   REPLAY
===================================================== */

replayBtn.addEventListener("click", () => {

    finalBtn.classList.remove("visible");

    typingText.textContent = "";

    showScreen(introScreen);

});


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(amount = 80) {

    const colors = [
        "#df718c",
        "#ffc2d1",
        "#ffffff",
        "#f6c453",
        "#9eddf0",
        "#d9a7b5"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );


        /* Position */

        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.top =
            "-30px";


        /* Color */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /* Size */

        const width =
            Math.random() * 7 + 4;

        const height =
            Math.random() * 12 + 7;


        piece.style.width =
            width + "px";

        piece.style.height =
            height + "px";


        /* Rotation */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /* Animation */

        piece.style.animationDuration =
            `${2.5 + Math.random() * 3}s`;


        piece.style.animationDelay =
            `${Math.random() * 0.8}s`;


        confetti.appendChild(piece);


        /* Remove */

        setTimeout(() => {

            piece.remove();

        }, 6500);

    }

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHearts(amount = 15) {

    const symbols = [
        "♡",
        "♥",
        "♡",
        "♡"
    ];


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /* Position */

        heart.style.left =
            Math.random() * 100 + "vw";


        /* Size */

        heart.style.fontSize =
            `${14 + Math.random() * 18}px`;


        /* Animation */

        heart.style.setProperty(
            "--duration",
            `${5 + Math.random() * 5}s`
        );


        heart.style.animationDelay =
            `${Math.random() * 1.5}s`;


        hearts.appendChild(heart);


        /* Remove */

        setTimeout(() => {

            heart.remove();

        }, 11000);

    }

}


/* =====================================================
   RANDOM BACKGROUND PARTICLES
===================================================== */

function createParticles() {

    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("span");


        particle.style.position =
            "fixed";

        particle.style.width =
            `${2 + Math.random() * 4}px`;

        particle.style.height =
            particle.style.width;

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "rgba(255,255,255,0.65)";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex =
            "1";


        particle.style.animation =
            `particleFloat ${5 + Math.random() * 8}s ease-in-out infinite`;


        particle.style.animationDelay =
            `${Math.random() * 5}s`;


        document.body.appendChild(
            particle
        );

    }

}


/* =====================================================
   PARTICLE ANIMATION
===================================================== */

const particleStyle =
    document.createElement("style");


particleStyle.textContent = `

@keyframes particleFloat {

    0% {

        transform:
            translateY(0)
            scale(1);

        opacity: .2;

    }

    50% {

        transform:
            translateY(-30px)
            scale(1.5);

        opacity: .8;

    }

    100% {

        transform:
            translateY(0)
            scale(1);

        opacity: .2;

    }

}

`;


document.head.appendChild(
    particleStyle
);


/* =====================================================
   PHOTO 3D EFFECT
===================================================== */

const photo =
    document.querySelector(".photo");


if (photo) {

    photo.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                photo.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 30;


            const rotateY =
                (centerX - x) / 30;


            photo.style.transform =
                `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
                `;

        }
    );


    photo.addEventListener(
        "mouseleave",
        () => {

            photo.style.transform =
                "";

        }
    );

}


/* =====================================================
   MOUSE LIGHT
===================================================== */

const mouseLight =
    document.createElement("div");


mouseLight.style.position =
    "fixed";

mouseLight.style.width =
    "250px";

mouseLight.style.height =
    "250px";

mouseLight.style.borderRadius =
    "50%";

mouseLight.style.pointerEvents =
    "none";

mouseLight.style.zIndex =
    "0";

mouseLight.style.background =
    `
    radial-gradient(
        circle,
        rgba(255,255,255,0.12),
        transparent 70%
    )
    `;

mouseLight.style.transform =
    "translate(-50%, -50%)";

mouseLight.style.transition =
    "left .15s ease, top .15s ease";


document.body.appendChild(
    mouseLight
);


document.addEventListener(
    "mousemove",
    (event) => {

        mouseLight.style.left =
            event.clientX + "px";

        mouseLight.style.top =
            event.clientY + "px";

    }
);


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            introScreen.classList.contains("active")
        ) {

            openBtn.click();

        }


        if (
            event.key === "Escape"
        ) {

            showScreen(introScreen);

        }

    }
);


/* =====================================================
   INITIAL PARTICLES
===================================================== */

createParticles();