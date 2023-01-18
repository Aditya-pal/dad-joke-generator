const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "K346DzHGbqzrzy+f/OJdXQ==tE8QuBRWffJZ9KX2";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEL.innerText = "Updating...";
    btnEl.disable = true;
    btnEl.innerText = "Please wait <3 ....!";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";

    jokeEL.innerText = data[0].joke;
  } catch (error) {
    jokeEL.innerText = "An erroe occured...try later";
  }
}

btnEl.addEventListener("click", getJoke);
