// https://api.jikan.moe/v4/top/characters

const url = "https://api.jikan.moe/v4/top/characters";

async function fetchData() {
  try {
    const response = await fetch(url);
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
    if (responseData && responseData.data) {
      responseData.data.forEach((anime) => {
        const card = `
          <div class="d-flex justify-content-center g-4 lh-sm">
            <div class="card ud-card" style="width: 17rem; height: 25rem;">
              <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="${anime.name}">
              <div class="card-body">
                <h5 class="card-title">${anime.name}</h5>
                <p class="card-text fs-6">Favorites: ${anime.favorites}</p>
                
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
