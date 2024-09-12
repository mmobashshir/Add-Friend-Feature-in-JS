var statuss = document.querySelector("h5")

var addfrnd = document.querySelector("#add")
var removefrnd = document.querySelector("#remove")



addfrnd.addEventListener("click",function(){
    statuss.innerHTML = "Friends"
    statuss.style.color = "green"
})

removefrnd.addEventListener("click",function(){
    statuss.innerHTML = "Stranger"
    statuss.style.color = "red"
})

// single btn ke liye h agar ekhi btn se add or remove krna ho to


// var check = 0

// addfrnd.addEventListener("click",function(){
//     if(check == 0){
//         statuss.innerHTML = "Friends"
//         statuss.style.color = "green"

//         check = 1
//     }else{
//         statuss.innerHTML = "Stranger"
//         statuss.style.color = "red"

//         check = 0
//     }
// })
