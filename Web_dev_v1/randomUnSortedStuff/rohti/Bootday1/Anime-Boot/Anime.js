const url = 'https://anihub.p.rapidapi.com/upcomingAnimeAniList';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d26e6e810mshf5ff20159464a18p15e173jsnf052f1af35d5',
    'X-RapidAPI-Host': 'anihub.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result) // Parse response as JSON
    return result; // Return the parsed JSON
  } catch (error) {
    console.error(error);
    return null; // Return null if there's an error
  }
}

async function createCards() {
  const cardRow = document.getElementById('cardRow');
  const responseData = await fetchData();

  // Check if responseData is not null or undefined
  if (responseData) {
    // Assuming responseData is an array of objects
    responseData.forEach(data => {
      const card = `
        <div class="card ud-card" style="width: 18rem;">
          <img src="${data.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${data.title}</p>
          </div>
        </div>
      `;
      cardRow.innerHTML += card;
    });
  } else {
    // Handle the case where responseData is null or undefined
    console.error("Failed to fetch data.");
  }
}

window.onload = createCards;
