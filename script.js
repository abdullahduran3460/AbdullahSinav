const btn = document.getElementById('changeColor');
let randomNumber = () => {
    let randomnum = (Math.floor(Math.random()* 256));
    return randomnum;
}
let changeColor = () =>{
    let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    document.body.style.backgroundColor = randomColor;
}

btn.addEventListener('click',changeColor);
window.addEventListener('load',changeColor);