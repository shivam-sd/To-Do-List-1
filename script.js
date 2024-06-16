const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const listcontainer = document.querySelector("ul");
let cross = "&#10060";

function addTask(){
    btn.addEventListener("click",(e) => {
        if(input.value === ""){
  alert("Pleace Write Something Eles");
}
        else{
            let li = document.createElement("li");
            li.innerHTML = ` ${input.value}`;
            li.classList.add("li");
            listcontainer.appendChild(li);
            input.value = "";

            let span = document.createElement("span");
            span.innerHTML = "&#10060";
            span.classList.add("cross");
            li.appendChild(span)
            
            span.addEventListener("click",(e) => {
                // console.log(e.target)
                li.remove();
            })
            listcontainer.appendChild(li);
            
          


            
        }
    })
}

addTask()

function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}
saveData();

function showData(){
    listcontainer.innerHTML =localStorage.getItem("data");
}
showData();