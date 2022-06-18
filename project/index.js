// Toggle the button
const btn = document.getElementById("btn")
const errorMsg = document.querySelector("#error")
const inputValue = document.querySelector("input")

// console.log(btn)
// console.log(errorMsg)


function callAlert () {
    
    if(inputValue.value === "") {
        errorMsg.style.display = "block"
        setTimeout(() => {
            errorMsg.style.display = "none"
    }, 3000);
    }

    if(inputValue.value == "") {
        
    }

}

btn.addEventListener("click", callAlert)