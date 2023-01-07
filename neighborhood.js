
const button = document.querySelector('#btn-recommend');


button.addEventListener('click', () => {
  getRecommendation();
});

const restaurants = [
    'Los Aribertos Mexican Food',
    'Westside Pizza',
    'McDonalds'
  ];
  
  function getRecommendation() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const recommendation = restaurants[randomIndex];
  
    alert(`We recommend trying ${recommendation}!`);
  }
  