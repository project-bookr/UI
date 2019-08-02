

// const bookImg = document.querySelector('.book1');
// bookImg.src = 'images/three-books.jpg';
// const booksImg1 = document.querySelector('.open-book');
// booksImg1.src = 'images/book.jpeg';



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


const team = [
  { name: "Oksana Kril", 
  job: "UI Developer", 
  img: "Images/oksana.png" },
  { name: "Adam Penman", 
  job: "UI Developer", 
  img: "Images/adam.png" },
  { name: "Tucker Wray", 
  job: "Front-End Dev", 
  img: "Images/tucker.png" },
  { name: "Leslie Thompson", 
  job: "Inspirational TL", 
  img: "Images/leslie.png" }
]

let aboutUs = document.getElementById("the-team")

function teamPerson(cohort) {
  const div = document.createElement("div")
  const memberDetails = `
   <div>
    <h3>${cohort.name}</h3>
    <h4>${cohort.job}</h4>
  </div>
  <img src="${cohort.img}"/>
 `
  div.innerHTML = memberDetails
  div.classList.add('person-id')
  return div
}

team.forEach((cohort) => {
  let newPerson = teamPerson(cohort)
  aboutUs.appendChild(newPerson)
})


// let list = document.getElementById("the-team");
// function shuffleTeam() {
//   let people = list.children, i = 0;
//   people = Array.prototype.sort.call(people);
//   while( i < people.length) { 
//     list.appendChild(people[i]);
//     i++;
//   }
// }
// shuffleTeam();


// function changeButtonColor() {

// document.getElementById("myButton").style.backgroundColor = "green";

// }