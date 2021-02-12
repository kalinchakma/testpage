const box = document.querySelector('.box');

const setStyle = (box,obj) => {
    for (let i in obj) {
       box.style[i] = obj[i];
    }
};

console.dir(box);
const style = {
    backgroundColor: "red",
    height: "200px",
    width: "200px",
    margin: "0 auto",
    textAlign: "center"
};
// box.style.backgroundColor = "blue";
// box.style.width = "200px";
// box.style.height = "200px";
// box.style.margin = "0 auto";
box.innerHTML = "<p>Wow this is work!!</p>"
setStyle(box,style);