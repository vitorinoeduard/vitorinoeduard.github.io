const btnToggle = document.getElementById('lang-toggle');
const textPT = document.getElementById('manifesto-pt');
const textEN = document.getElementById('manifesto-en');

btnToggle.addEventListener('click', () => {
   
    textPT.classList.toggle('hidden');
    textEN.classList.toggle('hidden');

    if (textPT.classList.contains('hidden')) {
        btnToggle.innerText = 'Mudar para Português';
    } else {
        btnToggle.innerText = 'Read in English';
    }
});