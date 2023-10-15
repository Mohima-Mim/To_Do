let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let Add = document.querySelector(".Add");


Add.addEventListener("click" , function () {
    if(inputs.value == ""){
        alert("Please enter your task");
    }else{

        let ul = document.createElement("ul");
        text.appendChild(ul);

        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML=`<i class="fa-regular fa-circle circle "></i>${inputs.value} <i class="fa-solid fa-trash delete"></i>`;
        inputs.value= "";
        li.querySelector(".delete").addEventListener("click" , function(){
            li.remove();
        });
       




    };
});


