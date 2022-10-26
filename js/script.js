const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
]

const output = document.querySelector('.output');

// creare const del bottone add e add event listener con click, addNewMember

drawTeam();

function drawTeam(){
  // resetto il contenuto dell'output

  output.innerHTML = '';

  team.forEach((teamMember) => drawTeamMember(teamMember));
  
}

function drawTeamMember(teamMember){

  let prevContent = output.innerHTML;

  const name = teamMember.name;
  const role = teamMember.role;
  const image = teamMember.image;

  // const qualities = teamMember.qualities;


  // add <p>${qualities.join(' - ')}</p> sotto testo
  prevContent += `
  <div class="card m-4 p-0" style="width: 18rem; border: none;">
  <div class="card-img-container"><img src="../img/${image}" class="card-img-top" alt="${name}"></div>
  <div class="card-body">
    <h5 class="card-title text-secondary">${name}</h5>
    <p class="card-text text-secondary">${role}</p>
    
  </div>
  </div>
  `;

  output.innerHTML = prevContent;

}

// creare form html

// function addNewMember() {
//   const name = document.getElementById('name').value;
//   const role = document.getElementById('role').value;
//   const image = document.getElementById('image').value;
//   const qualities = document.getElementById('qualities').value;

//   const arrNewQualities = qualities.split(',');

//   const cleanNewQualities = arrNewQualities.map( quality => quality.trim())

//   const newTeamMember = {
//     name: name,
//     role: role,
//     image: image,
//     qualities: cleanNewQualities
//   }

//   drawTeamMember(newTeamMember);

//   team.push(newTeamMember);

//   resetForm();

// }

// function resetForm(){
//   document.getElementById('name').value = '';
//   document.getElementById('role').value = '';
//   document.getElementById('image').value = '';
//   document.getElementById('qualities').value = '';
// }