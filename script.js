// script.js
// script.js
function showMessage() {
  const message = `Meu amor,

Desde que a gente se viu pela primeira vez, sempre observei você e vi que você era uma pessoa totalmente especial, madura e diferente de todas as outras.
quanto mais tempo eu passo com você, me apaixono por você. Aprendo a amar você e a amar o que fazemos juntos, mesmo sendo coisas simples, como assistir a um filme ou cozinhar juntos.
Adoro fazer caipirinhas pra você, seu jeito... "Ta, se você me odeia, me fala", seu sorriso, nossa conexão, sua maturidade, seu carinhho, seus choros quando está triste de tpm kkkkkkk e que não gosta de ser contrariada. 


Você é tudo pra mim. 💖`;

  const surpriseEl = document.getElementById('surprise');
  surpriseEl.innerText = '';

  let i = 0;
  const typing = setInterval(() => {
    surpriseEl.innerText += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(typing);
  }, 50);
}

function playMusic() {
  const music = document.getElementById('romanticMusic');
  music.play();
}

// Linha do tempo interativa
const timelineItems = document.querySelectorAll('.timeline li');
timelineItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    alert(`Você clicou no marco: "${item.textContent.trim()}"`);
    item.classList.toggle('highlight');
  });
});
