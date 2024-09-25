// Interagindo com o DOM
let divMessage = document.getElementById("message");
console.log(divMessage);

divMessage.innerText = "Hello World";
divMessage.innerHTML = "Hello <b>World</b>";

let nome = "Esse cara aqui em baixo é o Victor:";
let urlImgProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZTK04q5MAb3xxGj9xiBt-rOefqwu5X4jtg&s";

divMessage.innerHTML = `<p>${nome}</p>`;
divMessage.innerHTML += `<img src="${urlImgProfile}">`;

