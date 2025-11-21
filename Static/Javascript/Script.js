// ---------------------------
//  TEXT SCRAMBLE EFFECT
// ---------------------------
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const exploreEl = document.querySelector(".Explore");

if (exploreEl) {
    exploreEl.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.dataset.value
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
}


// ---------------------------
//  SECTION SCROLLER
// ---------------------------
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}


// ---------------------------
//  SKILL IMAGE + TEXT SWAP
// ---------------------------
function changeImage(imageName, text) {
    const imageContainer = document.querySelector('.My_Skills');
    const textBox = document.querySelector('#Details');

    if (!imageContainer || !textBox) return;

    imageContainer.style.backgroundImage = `url(${imageName})`;
    imageContainer.style.transition = '1s';

    textBox.innerHTML = text;
    textBox.style.transition = '0.25s';
}


// ---------------------------
//  INTERACTIVE BLOB MOVEMENT
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;

    let curX = 0, curY = 0;
    let tgX = 0, tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        interBubble.style.transform = `translate(${curX}px, ${curY}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
    });

    move();
});
