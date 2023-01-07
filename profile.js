const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');

favColor.addEventListener('click', () => {
    alert(`Chris's favorite colors are white and purple`);
});

favPlace.addEventListener('click', () => {
    alert(`Chris's favorite place is Maui`);
});

favRitual.addEventListener('click', () => {
    alert(`Chris's favorite ritual is opening presents with his fiancé on Christmas eve.`);
});