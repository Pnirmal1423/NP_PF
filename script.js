const words = [
  "Full Stack Developer",
  "UI Designer",
  "Mobile App Developer"
];

let i = 0, j = 0, deleting = false;
const textElement = document.getElementById("typingText");

function typingEffect(){
  const current = words[i];

  if(!deleting){
    textElement.textContent = current.slice(0, j++);
    if(j > current.length){
      deleting = true;
      setTimeout(()=>{},800);
    }
  } else {
    textElement.textContent = current.slice(0, j--);
    if(j === 0){
      deleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typingEffect, deleting ? 60 : 100);
}
typingEffect();

/* Apple-style parallax */
const hero = document.querySelector(".hero");
document.addEventListener("mousemove", e=>{
  const x = (window.innerWidth/2 - e.clientX)/40;
  const y = (window.innerHeight/2 - e.clientY)/40;
  hero.style.transform = `translate(${x}px,${y}px)`;
});

/* ===============================
   CURSOR BLUE BUBBLES
================================ */

const bubbleLayer = document.getElementById("bubble-layer");

document.addEventListener("mousemove", e => {
  const bubble = document.createElement("span");
  bubble.className = "cursor-bubble";

  const size = Math.random() * 18 + 8;
  bubble.style.width = bubble.style.height = size + "px";

  bubble.style.left = e.clientX + "px";
  bubble.style.top = e.clientY + "px";

  bubbleLayer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 4000);
});

