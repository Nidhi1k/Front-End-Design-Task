


import "./styles.css";

 
 
let myJson=`{
  "title1":"cosmetics",
  "nameFirst":"Hair-oil",
  "priceFirst":122 , 
  "shopItem":["hairOil","fashWash"],
  "title2":"Household",
  "nameSecond":"Fash-Wash",
  "priceSecond":123
}`;

let parsedJson = JSON.parse(myJson);
let ele1 = parsedJson["shopItem"][0];
console.log(ele1);

var cosmeticsProductFirst = document.getElementById('cosmeticsfirst');
cosmeticsProductFirst.innerHTML=parsedJson["title1"];

var householdProductSecond = document.getElementById('householdsecond');
householdProductSecond.innerHTML=parsedJson["title2"];

var productNameOne = document.getElementById('product-name-one');
productNameOne.innerHTML=parsedJson["nameFirst"];

var productNameSecond = document.getElementById('product-name-second');
productNameSecond.innerHTML=parsedJson["nameSecond"];

var productPriceOne = document.getElementById('product-price-one');
productPriceOne.innerHTML=parsedJson["priceFirst"];

var productPriceSecond = document.getElementById('product-price-second');
productPriceSecond.innerHTML=parsedJson["priceSecond"];
 
 
// const btnAdd = document.querySelector('.btnAdd');
//  function productadded(){
//    btnAdd.innerText="button clicked";
//    document.getElementById("btnAdd").innerHTML="product added"; 
//  }
//  btnAdd.onclick=productadded();

 
//  const btnRemove = document.querySelector('.btnRemove');
//  function productremoved(){
//    btnRemove.innerText="button clicked";
//    document.getElementById("btnRemove").innerHTML="product removed"; 
//  }
//  btnAdd.onclick=productremoved();




// const btnAdd = document.querySelector('.btnAdd');
// const btnRemove = document.querySelector('.btnRemove');
// const url='product.json';
// let output=document.getElementById("data");
// btnAdd.onclick = ()=>{
//   output.innerHTML='connecting.......';
//   getData();
// }
//  function getData(){
//    fetch(url)
//    .then(rep=>rep.json())
//    .then(data=>{
//      console.log(data.friends);
//    })
//  }

//  function outData(val){
   
//    console.log(val);
//    let html='';
//    val.forEach(ele =>{
//      console.log(ele);
//      html+=`<div>${ind+1}.${ele.first}${ele.last}(${ele.id})</div>`;
//    })
//    html+=`$<small>{JSON.stringify(val)}`;
//    output.innerHTML=html;
//  }
