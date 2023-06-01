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
  
  newCard.setAttribute("id",myLibrary.indexOf(newBook));
  // console.log("the read value is ", readinput.value)
  if(readinput.value === "true")
  {
    newCard.className="card";
    newCard.innerHTML = `<h2>${titleinput.value} <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Z"/></svg></h2> <p>by ${authorinput.value}. It has ${pagesinput.value} page(s)</p>
                        <div class="delete"><button id="${myLibrary.indexOf(newBook)}">Remove Book</button></div>`;
  }
  else
  {
    newCard.className="cardnoread";
    newCard.innerHTML = `<h2>${titleinput.value} <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Z"/></svg></h2> <p>by ${authorinput.value}. It has ${pagesinput.value} page(s)</p>
                        <div class="delete"><button id="${myLibrary.indexOf(newBook)}">Remove Book</button></div>`;
  }
  
 
  form.style.visibility = 'hidden';
  // console.log(newCard);
  parent.appendChild(newCard);
  var removal = document.querySelectorAll(".delete button");
    // console.log(removal);
    removal.forEach(nodey =>{
        nodey.addEventListener("click", (event)=>
    {   
        // console.log(event);
        var toremove = document.getElementById((event.target.id).toString());
        // console.log(toremove);
        toremove.remove();
        delete myLibrary[parseInt(event.target.id)];
        // console.log(myLibrary);


    });
    })
    //toggle for read or no read
    var toggle = document.querySelectorAll("svg");
    toggle.forEach(nodey =>{
      nodey.addEventListener("click",(event)=>
      {
        var tochange=document.getElementById((event.target.parentElement.parentElement.parentElement.id).toString());
        // console.log('element needed is',event.target.parentElement.parentElement.parentElement);
        // console.log('the id is', parseInt(event.target.parentElement.parentElement.id));
        if(myLibrary[parseInt(event.target.parentElement.parentElement.parentElement.id)].read)
        {
          tochange.classList = "cardnoread";
          myLibrary[parseInt(event.target.parentElement.parentElement.parentElement.id)].read = false;
        }
        else{
          tochange.classList = "card";
          myLibrary[parseInt(event.target.parentElement.parentElement.parentElement.id)].read = true;
        }
      })
    })
    
  
}

//Node for submit button
var submitBtn = document.querySelector(".sidebar form");
submitBtn.addEventListener("submit",addBookToLibrary);

