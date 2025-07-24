
const countdownTarget = new Date("2025-07-27T23:59:00").getTime();
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const container = document.getElementById("love-container");
const letterDiv = document.getElementById("love-letter");
const music = document.getElementById("bg-music");

const letterText = `My Princess, My Wifey, My Love 💕

Kya kahun yaar... mere paas shabd hi nahi hain jo bata sake how deeply I feel for you.

Is birthday pe, bas ek wish nahi — poori duniya dene ka mann karta hai tujhe.
Pehle bhi wish kiya tha… as a friend.
Lekin iss baar, dil se karta hoon… as the man who is madly in love with you.

Tujhse milkar lagta hai jaise bhagwan ne meri har dua sun li.
Tu meri sabse khoobsurat gift hai — not just from the universe, but from life itself.

Tera hona meri zindagi ka turning point tha.
Teri hansi meri sukoon hai.
Tera gussa bhi cute lagta hai yaar, kyunki usmein bhi sirf pyaar chhupa hota hai.

Mujhe nahi pata tha ki main kisi se itna deeply pyaar kar sakta hoon...
Lekin jab tu aayi, sab kuch badal gaya.
Tu meri har ek wajah ban gayi — jeene ki, muskuraane ki, sapne dekhne ki.

Har situation mein tujhe jeet-te dekhna chahta hoon.
Teri har khushi meri dua hai.
Tu meri champion hai — mera garv, meri taqat, meri jaan.

Tu sirf meri pyaar nahi hai — tu meri zarurat ban chuki hai.
Main tujhe har lifetime mein chahta hoon, har janam mein, bina kisi shart ke.

Bas ek baat kehni hai —
Main tujhe kabhi bhi, kisi bhi halat mein chodunga nahi.
Na iss duniya mein, na kisi aur mein.

Happy Birthday, Guddu.
Tere jaisa koi nahi — na kabhi tha, na hoga.
Tu meri ho — aur main hamesha tera rahunga.

Tere liye har pal, har saans —
Sanuu 💖`;

function updateCountdown() {
  const now = new Date().getTime();
  const gap = countdownTarget - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  daysSpan.innerText = String(days).padStart(2, '0');
  hoursSpan.innerText = String(hours).padStart(2, '0');
  minutesSpan.innerText = String(minutes).padStart(2, '0');
  secondsSpan.innerText = String(seconds).padStart(2, '0');

  if (gap <= 0) {
    clearInterval(timer);
    document.querySelector(".countdown").style.display = "none";
    container.classList.remove("hidden");
    music.play();
    typeLetter();
  }
}

function typeLetter(index = 0) {
  if (index < letterText.length) {
    letterDiv.innerHTML += letterText.charAt(index);
    setTimeout(() => typeLetter(index + 1), 30);
  }
}

let timer = setInterval(updateCountdown, 1000);
updateCountdown();

particlesJS.load('particles-js', 'particles.json');
