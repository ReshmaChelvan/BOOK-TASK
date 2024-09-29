//Creating A new Division
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container-fluid");
document.body.append(newDiv);

//new Row For a Navigation
let newrowtop = document.createElement("div");
newrowtop.setAttribute("class", "row bg-dark");
newDiv.appendChild(newrowtop);

//creating a New div For Column
let navCol = document.createElement("div");
navCol.setAttribute("class", "col-sm-12");
newrowtop.appendChild(navCol);

//creating new logo
let newhead = document.createElement("h1");
newhead.innerHTML = "Buy Book.com";
newhead.setAttribute("class", "font text-center text-white dark ms-2");
navCol.appendChild(newhead);

//Creating The new Row
let newRow = document.createElement("div");
newRow.setAttribute("class", "row");
newDiv.appendChild(newRow);

async function ApiCall() {
  let URL = "https://www.anapioficeandfire.com/api/books?pageSize=12";
  let ApiData = await fetch(URL);
  let RecivedData = await ApiData.json();
  RecivedData.map((result) => {
    //creating a new div for the column
    let newcol = document.createElement("div");
    newcol.setAttribute("class", "col-sm-4 card");
    newRow.append(newcol);

    //Creating a img
    let img = document.createElement("img");
    img.setAttribute("class", "image-fluid card-header images");
    newcol.appendChild(img);

    //Creating A h1 Tag For Book book Section
    let newh1 = document.createElement("h5");
    newh1.innerText = `${result.name}`;
    newh1.setAttribute(
      "class",
      "card-header bg-dark text-white rounded-1 text-center"
    );
    newcol.appendChild(newh1);

    //Creating The Ul tag
    let newul = document.createElement("ul");
    newul.setAttribute("class", "list-group list-group-flush");
    newcol.append(newul);

    //Creating a p for showing isbg number
    let newli = document.createElement("li");
    newli.innerHTML = `<abbr title="The International Standard Book Number">${result.isbn}</abbr>`;
    newli.setAttribute("class", "list-group-item");
    newli.setAttribute("id", "remove-line");
    newul.appendChild(newli);

    let newli1 = document.createElement("li");
    newli1.innerText = `Number Of Pages: ${result.numberOfPages}`;
    newli1.setAttribute("class", "list-group-item");
    newul.appendChild(newli1);

    let newli2 = document.createElement("li");
    newli2.innerText = `Author Name: ${result.authors}`;
    newli2.setAttribute("class", "list-group-item");
    newul.appendChild(newli2);

    let newli3 = document.createElement("li");
    newli3.innerText = `Publisher: ${result.publisher}`;
    newli3.setAttribute("class", "list-group-item");
    newul.appendChild(newli3);

    let newli4 = document.createElement("li");
    newli4.innerText = `Release Date: s${result.released}`;
    newli4.setAttribute("class", "list-group-item");
    newul.appendChild(newli4);
  });
}
ApiCall();
