const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "../img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "../img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "../img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "../img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "../img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "../img/barbara-ramos-graphic-designer.jpg"
  }
]

const output = document.querySelector('.output');

for (let member of team){
  console.log('name: ' + member.name);
  console.log('role: ' + member.role);
  console.log('image tag: ' + member.image);
}

for (let member of team){
  const card = `
  <div class="card m-4 p-0" style="width: 18rem; border: none;">
  <img src="${member.image}" class="card-img-top" alt="${member.name}">
  <div class="card-body">
    <h5 class="card-title text-secondary">${member.name}</h5>
    <p class="card-text text-secondary">${member.role}</p>
  </div>
  </div>
  `;

  output.innerHTML += card;
}

