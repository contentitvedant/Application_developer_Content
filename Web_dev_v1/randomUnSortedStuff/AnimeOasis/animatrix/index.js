const url = './anime_data_upto_mar_2023.csv';

async function fetchData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result); // Parse response as JSON
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
  if (responseData && responseData.results) {
    // Assuming responseData.results is an array of objects
    responseData.results.forEach(data => {
      const card = `
        <div class="card ud-card" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="${data.title}">
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

window.addEventListener('load', createCards);
