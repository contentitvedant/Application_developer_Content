const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    return null;
  }
}
// Create and display cards
function createCards() {
  const cardRow = document.getElementById("cardRow");

  fetchData().then((responseData) => {
    if (responseData && responseData.results) {
      responseData.results.forEach((data) => {
        const card = `
          <div class="col-md-4 d-flex justify-content-center mb-4">
            <div class="card ud-card" style="width: 18rem; height: 27rem;">
              <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="${data.title}">
              <div class="card-body">
                <p class="card-text">${data.title}</p>
              </div>
            </div>
          </div>
        `;
        cardRow.innerHTML += card;
      });
    } else {
      console.error("Failed to fetch data.");
    }
  });
}

window.addEventListener("load", createCards);
