

const bookImg = document.querySelector('.book1');
bookImg.src = 'images/three-books.jpg';
const booksImg1 = document.querySelector('.open-book');
booksImg1.src = 'images/book.jpeg';



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.signbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// const hColor = document.querySelectorAll('h2');
// hColor.style.color = 'pink';
