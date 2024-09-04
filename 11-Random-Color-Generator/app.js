const body = document.querySelector('body') 
const div = body.querySelector('div');
const heading = div.querySelector('h1');
const button = div.querySelector('button');

function randomRgbGenerator() {
    function randomCode() {
        return Math.floor(Math.random()*256)
    }
    const [r,g,b] = [randomCode(),randomCode(),randomCode()];
    return `rgb(${r},${g},${b})`;
}

button.addEventListener('click', () => {
    const colorCode = randomRgbGenerator();
    heading.innerHTML = colorCode;
    body.style.backgroundColor = colorCode; 
})