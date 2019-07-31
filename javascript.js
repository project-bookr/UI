

const bookImg = document.querySelector('.book1');
bookImg.src = 'images/three-books.jpg';
const booksImg1 = document.querySelector('.open-book');
booksImg1.src = 'images/book.jpeg';




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.signbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
  }
}
// const hColor = document.querySelectorAll('h2');
// hColor.style.color = 'pink';
