// form: Node for form elements
var form = document.querySelector(".sidebar form");

//addbook: Node for "Add Book" button
var addbook = document.querySelector(".sidebar button:first-of-type");

//Nodes for input fields
var allInputs = document.querySelectorAll(".sidebar input");

addbook.addEventListener("click",()=>
{
    form.style.visibility = 'visible';
    allInputs.forEach(singleInput=>singleInput.value="");
});

//Library functions
let myLibrary = [];
var parent = document.querySelector(".library");

//constructer function for Book objects
function Book(title,author,pages,read) {
  // the constructor...
  this.title= title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  // do stuff here
  event.preventDefault();
  console.log("HI");
  let titleinput = document.getElementsByName("title")[0];
  let authorinput = document.getElementsByName("author")[0];
  let pagesinput = document.getElementsByName("pages")[0];
  let readinput= document.getElementsByName("read")[0];

  var newBook = new Book(titleinput.value,authorinput.value,pagesinput.value,readinput.value);
  myLibrary.push(newBook);
  //making the card element
  var newCard = document.createElement("div");
  newCard.className="card";
  newCard.setAttribute("id",myLibrary.indexOf(newBook));
  newCard.innerHTML = `<h2>${titleinput.value}</h2> <p>by ${authorinput.value}. It has ${pagesinput.value} page(s)</p>
                        <div class="delete"><button id="${myLibrary.indexOf(newBook)}">Remove Book</button></div>`;
 
  form.style.visibility = 'hidden';
  console.log(newCard);
  parent.appendChild(newCard);
  var removal = document.querySelectorAll(".delete button");
    // console.log(removal);
    removal.forEach(nodey =>{
        nodey.addEventListener("click", (event)=>
    {   
        // console.log(event);
        var toremove = document.getElementById((event.target.id).toString());
        console.log(toremove);
        toremove.remove();
        delete myLibrary[parseInt(event.target.id)];


    });
    })
    
  
}

//Node for submit button
var submitBtn = document.querySelector(".sidebar form");
submitBtn.addEventListener("submit",addBookToLibrary);

