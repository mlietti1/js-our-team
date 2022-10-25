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
  output.innerHTML += `name: ${member.name} <br> role: ${member.role} <br> photo: <img src="${member.image}" alt="${member.image}"</img>`;
}

