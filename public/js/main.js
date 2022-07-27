
let addressInput = document.querySelector("#address");
console.log(addressInput);
addressInput.addEventListener("change", (event) => {
    console.log(event.target.value);
});


let buttons = document.querySelectorAll(".target-btn");
for (const button of buttons) {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.innerText);
    });
};

