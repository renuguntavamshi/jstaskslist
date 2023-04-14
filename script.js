let data = [];
let cardId;
let itemcount=1;
// show Add card popup
// function showAddCardPop() {
//   const popup1 = document.getElementById("popup1");
//   popup1.style.display = "block";
// }
// // close Add card popup
// function closeAddCardPopup() {
//   const popup1 = document.getElementById("popup1");
//   popup1.style.display = "none";
// }

// function handleAddCard() {
//   const cardText = document.getElementById("card-input-text").value;
//   const card = {
//     id: new Date().getTime().toString(),
//     cardTitle: cardText,
//   };
//   if (cardText) {
//     data.push(card);
//     renderCards();
//   } else {
//     alert("Please add card Name");
//   }
//   document.getElementById("card-input-text").value = "";
//   closeAddCardPopup();
// }

// function renderCards() {
//   const cardcontainer = document.getElementById("card-container");
//   let child = "";
//   for (let i = 0; i < data.length; i++) {
//     console.log("data[i]:", data[i]);
//     child += `<div id="card_${data[i].id}" class="card">
//         <p class="p2">${data[i].cardTitle}</p>
//         <hr>
//         <ul id="content_list_${data[i].id}">

//         </ul>
//         <div class="container2">
//         <Button onclick="deleteCard(${data[i].id})" class="delete">D</Button>
//         <Button onclick="showAddContentToCardPopup(${data[i].id})" class="add">+</Button>
//         </div>
//         </div>`;
//   }
//   cardcontainer.innerHTML = child;
// }

// function deleteCard(id) {
//   const cardcontainer = document.getElementById("card-container");
//   const cardId = `card_${id}`;
//   const card = document.getElementById(cardId);
//   //remove child from parent node
//   card.parentNode.removeChild(card);
//   data = data.filter((item) => item.id !== cardId);
// }

// function showAddContentToCardPopup(id) {
//   const popup2 = document.getElementById("popup2");
//   popup2.style.display = "block";
//   cardId = id;
// }

// function removeAddContentToCardPopup() {
//   const popup2 = document.getElementById("popup2");
//   popup2.style.display = "none";
// }

// function addContentToCard() {
//   const contentListId = `content_list_${cardId}`;
//   const Ul = document.getElementById(contentListId);
//   const contentText = document.getElementById("card-content-input").value;
//   if (contentText) {
//     document.getElementById("card-content-input").value = "";
//     const liNode = document.createElement("li");
//     liNode.innerHTML = contentText;
//     Ul.appendChild(liNode);
//     removeAddContentToCardPopup();
//   } else {
//     alert("Please add task name");
//   }
// }

function displaypopup1(){
    let popup1=document.getElementById("popup1");
    let iscardspresent=document.getElementById("iscardspresent");
    let toptext=document.getElementById("nav");
    popup1.style.display="block";
    iscardspresent.style.display="none";


}
function displaycards(){
    
    let htmltext="";
  for(let i=0;i<data.length;i++){
  
    htmltext += `  <div class="cards" ><h1>${data[i].id},${data[i].headingofcard}</h1><hr>
    <ul id= "content_list_" class="unorderedlist"></ul><br><br><br><br><br>
    <button onclick='showpopup2()'>Add item</button>
    <button onclick='removecard(${data[i].id})'>Delete item</button>
  </div>`
  
}

  document.getElementById("maincontainer").innerHTML=htmltext;
} 

function pushdata(){
var headingofcard=document.getElementById("headingofcard").value;
let id=data.length+1;
   let z=1; 
if(headingofcard){
    data.push({headingofcard:headingofcard,id:id});
    console.log(data);
    displaycards();
    removeinputtext();
    removepopup1();
    
}
else{
    alert("Input should not be empty");
}
}
function removeinputtext(){
    document.getElementById("headingofcard").value="";
}
function removepopup1(){
    let removepp1=document.getElementById("popup1")
    removepp1.style.display="none";
}
function  removecard(num){
    console.log(num);
    var cardtoremove=data.filter((arr,index)=>{
        if(arr.id==num){
            data.splice(index,1);
            displaycards();
        }
    })
    console.log(data);
}
function showpopup2(){
    let popup2=document.getElementById("popup2");
    popup2.style.display="block";
    
}
function removepopup2(){
    let removepp2=document.getElementById("popup2")
    removepp2.style.display="none";
}
function pushitemtolist(){
   
    let ul=document.getElementById("content_list_");
    let li=document.createElement("li");
    let listtext=document.getElementById("inputoflistitem").value;
    var node=document.createTextNode(listtext);
    ul.appendChild(li);
    li.appendChild(node);
removepopup2();
document.getElementById("inputoflistitem").value=" ";
  
   
  
}
   