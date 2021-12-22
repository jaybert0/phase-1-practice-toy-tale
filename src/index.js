getToys()

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// function handleForm(){
//   // access form element on the DOM.
//   const newToyForm = document.getElementById("toy-form")
//   // add 'event' everntLister to that form.
//   newToryForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//   //grab values from the two inputs
//     const toyName = event.target.value
//     const toyImg = event.target.value
//   const newToy = {
//     name: toyName,
//     image: toyImg,
//     likes: 0
//   }
//   renderToy(newToy);
//   event.target.reset()
// })


// function getToys(){
// fetch("http://localhost:3000/toys/")
//   .then((response) => response.json())
//   .then((data) =>  data.forEach(displayToys))}


// function displayToys(toyObj) {
//       const toyCard = document.createElement('div');
//       toyCard.className = "card";
      
//       const h2s = document.createElement('h2');
//       h2s.textContent = toyObj.name;
      

//       const image = document.createElement('img');
//       image.src = toyObj.image;
//       image.className = 'toy-avatar';
      

//       const p = document.createElement('p');
//       p.textContent = `${toyObj.likes} Likes`;
      
//       const likebutton = document.createElement('button');
//       likebutton.innerText = '<3'
//       // document.querySelector('#like-btn').addEventListener("click", console.log('Liked'))
//       likebutton.addEventListener("click", () => {
//         const newLikes = +likes.innerText + 1
//         likes.innerText = newLikes


//       toyCard.append(h2s, image, p, likebutton)

//       // toyCard.appendChild(h2s) 
//       // toyCard.appendChild(image)
//       // toyCard.appendChild(p) 
//       // toyCard.appendChild(likebutton)

//       document.querySelector('#toy-collection').appendChild(toyCard);

//       }
  
// // }

// function displayToys(toy){
//   let div = document.createElement('div')
//   div.className = "card"
//   div.innerHTML = `<h1> ${toy.name}</h1>
//                     <img src = "${toy.image}>"
//                     <p>${toy.likes} likes</p>`
//   document.querySelector("#toy-collection").appendChild(div)
// }

      // )}

function getToys(){
fetch("http://localhost:3000/toys/")
  .then(function(response){
  return response.json();})
  .then((data) =>  data.forEach(displayToys))}


function displayToys(toyObj) {
      const toyCard = document.createElement('div');
      toyCard.className = "card";
      
      const h2s = document.createElement('h2');
      h2s.textContent = toyObj.name;
      

      const image = document.createElement('img');
      image.src = toyObj.image;
      image.className = 'toy-avatar';
      

      const p = document.createElement('p');
      p.textContent = toyObj.likes;
      
      const likebutton = document.createElement('button');
      likebutton.className = 'like-btn';
      likebutton.innerText = '<3'
      likebutton.id = toyObj.id;
      likebutton.addEventListener("click", () => console.log("WOO"))

      toyCard.append(h2s, image, p, likebutton)

      document.querySelector('#toy-collection').appendChild(toyCard);

    }
  