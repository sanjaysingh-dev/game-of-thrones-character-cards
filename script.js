import { got } from "./got-data.js";

console.log("JavaScript is running!");

const gotData = got;

const characterContainer = document.querySelector("#characterContainer");
const template = document.querySelector("#characterCard");
const searchInput = document.querySelector("#searchInput");
const heading = document.querySelector("#heading");

// Character Cards
gotData.houses.forEach((house) => {
  house.people.forEach((person) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".character-image").src = person.image;
    card.querySelector(".character-image").alt = person.name;
    card.querySelector(".character-name").textContent = person.name;
    card.querySelector(".character-house").textContent = house.name;
    card.querySelector(".character-description").textContent =
      person.description;
    card.querySelector(".character-link").href = person.wikiLink;

    characterContainer.appendChild(card);
  });
});

// Heading

heading.addEventListener("click", () => {
  gotData.houses.forEach((house) => {
    house.people.forEach((person) => {
      const card = template.content.cloneNode(true);

      card.querySelector(".character-image").src = person.image;
      card.querySelector(".character-image").alt = person.name;
      card.querySelector(".character-name").textContent = person.name;
      card.querySelector(".character-house").textContent = house.name;
      card.querySelector(".character-description").textContent =
        person.description;
      card.querySelector(".character-link").href = person.wikiLink;

      characterContainer.appendChild(card);
    });
  });
});

// Search Functionality

searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  characterContainer.innerHTML = "";

  gotData.houses.forEach((house) => {
    house.people.forEach((person) => {
      if (
        person.name.toLowerCase().includes(searchValue) ||
        house.name.toLowerCase().includes(searchValue)
      ) {
        const card = template.content.cloneNode(true);

        card.querySelector(".character-image").src = person.image;
        card.querySelector(".character-image").alt = person.name;
        card.querySelector(".character-name").textContent = person.name;
        card.querySelector(".character-house").textContent = house.name;
        card.querySelector(".character-description").textContent =
          person.description;
        card.querySelector(".character-link").href = person.wikiLink;

        characterContainer.appendChild(card);
      }
    });
  });
});

// Filtering tabs

const houseTabs = document.querySelectorAll(".house-tab");

houseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedHouse = tab.dataset.house;

    characterContainer.innerHTML = "";

    gotData.houses.forEach((house) => {
      if (house.name === selectedHouse) {
        house.people.forEach((person) => {
          const card = template.content.cloneNode(true);

          card.querySelector(".character-image").src = person.image;
          card.querySelector(".character-image").alt = person.name;
          card.querySelector(".character-name").textContent = person.name;
          card.querySelector(".character-house").textContent = house.name;
          card.querySelector(".character-description").textContent =
            person.description;
          card.querySelector(".character-link").href = person.wikiLink;

          characterContainer.appendChild(card);
        });
      }
    });
  });
});
