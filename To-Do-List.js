const input = document.querySelector("#input");
const ul = document.querySelector("#ul");
// const cross = document.querySelector("i");

input.addEventListener("keyup", (evant) => {
    if(evant.key == "Enter"){
        addto(input.value);
        // console.log(evant)
        // console.log(input.value);
        input.value = " ";
    }
})

const addto = (item) => {
    let itemlist = document.createElement("li");
    itemlist.innerHTML = `${item}
    <i class="fas fa-times" ></i>`; 

    itemlist.addEventListener("click" ,() => {
        itemlist.classList.toggle("toggle")
    })

itemlist.querySelector("i").addEventListener("click",() => {
    itemlist.remove();
    savedata();
    // console.log("Ho gya Delete")
})


    ul.appendChild(itemlist);
}

function savedata(){
    localStorage.setItem("data",ul.innerHTML);
}

function showdata(){
    ul.innerHTML = localStorage.getItem("data")
}

showdata();
