var img = document.querySelector(".dado");
var btn = document.querySelector(".btn");
var resultado =document.querySelector(".resultado");


function sorteia(){
    btn.addEventListener("click", function(){
        var aleatorio = Math.random()*6+1
        var inteiro = Math.round(aleatorio)
        
        if(inteiro ===1){
            img.classList.add("dado1")
            img.classList.remove("dado2")
            img.classList.remove("dado3")
            img.classList.remove("dado4")
            img.classList.remove("dado5")
            img.classList.remove("dado6")
            resultado.innerHTML = ` ${inteiro}<br />`;
        }
        else if(inteiro ===2){
            img.classList.add("dado2")
            img.classList.remove("dado1")
            img.classList.remove("dado6")
            img.classList.remove("dado5")
            img.classList.remove("dado4")
            img.classList.remove("dado3")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
        else if(inteiro ===3){
            img.classList.add("dado3")
            img.classList.remove("dado2")
            img.classList.remove("dado1")
            img.classList.remove("dado6")
            img.classList.remove("dado5")
            img.classList.remove("dado4")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
        else if(inteiro ===4){
            img.classList.add("dado4")
            img.classList.remove("dado3")
            img.classList.remove("dado2")
            img.classList.remove("dado1")
            img.classList.remove("dado6")
            img.classList.remove("dado5")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
        else if(inteiro ===5){
            img.classList.add("dado5")
            img.classList.remove("dado4")
            img.classList.remove("dado3")
            img.classList.remove("dado2")
            img.classList.remove("dado1")
            img.classList.remove("dado6")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
        else if(inteiro ==6){
            img.classList.add("dado6")
            img.classList.remove("dado5")
            img.classList.remove("dado4")
            img.classList.remove("dado3")
            img.classList.remove("dado2")
            img.classList.remove("dado1")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
        else if(inteiro >=7){
            img.classList.add("dado6")
            img.classList.remove("dado5")
            img.classList.remove("dado4")
            img.classList.remove("dado3")
            img.classList.remove("dado2")
            img.classList.remove("dado1")
            resultado.innerHTML = ` ${inteiro}<br />`;

        }
    })
    }
    sorteia()

