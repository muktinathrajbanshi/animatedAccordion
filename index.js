const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// console.log(ourItemDiv);

for (let i = 0; i<ourItemDiv.length; i++) {
    ourItemDiv[i].addEventListener("click", () => {
        ourItemDiv[i].classList.toggle("active");
    })
}
