// --- CONT DE IDMA---

const btnToggle = document.getElementById('lang-toggle');
const textPT = document.getElementById('manifesto-pt');
const textEN = document.getElementById('manifesto-en');

if (btnToggle && textPT && textEN) {
  btnToggle.addEventListener('click', () => {
    textPT.classList.toggle('hidden');
    textEN.classList.toggle('hidden');

    if (textPT.classList.contains('hidden')) {
      btnToggle.innerText = 'Mudar para Português';
    } else {
      btnToggle.innerText = 'Read in English';
    }
  });
}

// --- CONT CAVE ---

const btnLoot = document.getElementById('btn-loot');
const lootLoading = document.getElementById('loot-loading');
const lootGrid = document.getElementById('loot-grid');

if (btnLoot && lootLoading && lootGrid) {
  btnLoot.addEventListener('click', () => {
    
    lootLoading.classList.remove('hidden');
    lootGrid.classList.add('hidden');
    btnLoot.disabled = true;

    
    setTimeout(() => {
     
      lootLoading.classList.add('hidden');
      lootGrid.classList.remove('hidden');
      btnLoot.disabled = false;
    }, 1000);
  });
}