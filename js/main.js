const box = document.querySelector('.box');
const btn = document.querySelector(".btn");

const  modal = document.querySelector(".modal");
const  box_one = document.querySelector(".box_one");

btn.addEventListener('click', () => { 
    let parol = document.querySelector(".box_one").value;

    if(modal.value == "Husanboy") {
      modal.style.borderBottom = "4px solid green";
    }

    if(parol == "0709") {
      box_one.style.borderBottom = "4px solid green";
    }

    if(modal.value != "Husanboy") {
      modal.style.borderBottom = "4px solid red";
    }

    if(parol != "0709") {
      box_one.style.borderBottom = "4px solid red";
    }
})
// alert("Login Pagega xush keldingiz")