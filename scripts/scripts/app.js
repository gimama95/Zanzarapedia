// Qui data arriva dal file data.js
const container = document.getElementById("content");

data.forEach(item => {
    const box = document.createElement("div");
    box.className = "item-box";

    box.innerHTML = `
        <h2>${item.nome}</h2>
        <p>${item.descrizione}</p>
    `;

    container.appendChild(box);
});
