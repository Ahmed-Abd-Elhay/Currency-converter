// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cccd35cbb4404fccad17e102894dff97


let selectOne = document.querySelector(".select-one");
let selectOpOne = document.querySelectorAll(".select-one option");

let showOne = document.querySelector(".bas p");
let showSpanOne = document.querySelector(".bas span");


let inputVildOne = document.querySelector(".vildOne");
let inputVildTwo = document.querySelector(".vildTwo");

let selectTwo = document.querySelector(".select-two");
let selectOpTwo = document.querySelectorAll(".select-two option");
let showTwo = document.querySelector(".adva p");
let showSpanTwo = document.querySelector(".adva span");

window.onload = function(){
    selectOpOne.forEach((e) => {
        if(selectOne.value === e.value){
            showOne.innerHTML = e.innerHTML + " :";
        }
    });
    selectOpTwo.forEach((e) => {
        if(selectTwo.value === e.value){
            showTwo.innerHTML = e.innerHTML + " :";
        }
    })
}
selectOne.addEventListener("click", function(){
    selectOpOne.forEach((el) => {
        if(selectOne.value === el.value){
            showOne.innerHTML = el.innerHTML + " :";
            console.log(el.innerHTML);
        }
    })
});


selectTwo.addEventListener("click", function(){
    selectOpTwo.forEach((el) => {
        if(selectTwo.value === el.value){
            showTwo.innerHTML = el.innerHTML + " :";
        }
    })
})

inputVildTwo.onkeyup = function(){
    if(selectTwo.value === "EGP"){
        inputVildOne.value = (inputVildTwo.value * 0.032).toFixed(2);
        showSpanOne.innerHTML = inputVildOne.value;
        showSpanTwo.innerHTML = inputVildTwo.value;
    }else if(selectTwo.value === "USD"){
        inputVildOne.value = (inputVildTwo.value * 1).toFixed(2);
        showSpanOne.innerHTML = inputVildOne.value
        showSpanTwo.innerHTML = inputVildTwo.value;
    }else if(selectTwo.value === "GBP"){
        inputVildOne.value = (inputVildTwo.value * 1.22).toFixed(2);
        showSpanOne.innerHTML = inputVildOne.value;
        showSpanTwo.innerHTML = inputVildTwo.value;
    }else if(selectTwo.value === "EUR"){
        inputVildOne.value = (inputVildTwo.value * 1.06).toFixed(2);
        showSpanOne.innerHTML = inputVildOne.value;
        showSpanTwo.innerHTML = inputVildTwo.value;
    }
}


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cccd35cbb4404fccad17e102894dff97").then(
    (resolve =>{
        let myData =  resolve.json();
        return myData;
    })
    ).then((result) => {
    inputVildOne.onkeyup = function(){
    showSpanOne.innerHTML = inputVildOne.value;
    inputVildTwo.value =  (inputVildOne.value * result.rates[selectTwo.value]).toFixed(2);
    showSpanTwo.innerHTML = (inputVildOne.value * result.rates[selectTwo.value]).toFixed(2);
    }
});