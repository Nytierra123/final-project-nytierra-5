
const API_URL = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&rating=3';


const charityList = document.getElementById('charity-list');
const errorMessage = document.getElementById('error-message');


async function fetchCharityData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    
    errorMessage.textContent = '';

    
    charityList.innerHTML = '';

    
    data.forEach(charity => {
      const charityItem = document.createElement('li');
      charityItem.classList.add('charity-item');

      charityItem.innerHTML = `
        <h3>${charity.charityName}</h3>
        <p>Rating: ${charity.rating ? charity.rating : 'Not rated'}</p>
        <p>Website: <a href="${charity.charityUrl}" target="_blank">${charity.charityUrl}</a></p>
      `;

      charityList.appendChild(charityItem);
    });
  } catch (error) {
    
    errorMessage.textContent = 'Sorry, we were unable to load charity data at the moment. Please try again later.';
    console.error(error);
  }
}


fetchCharityData();
