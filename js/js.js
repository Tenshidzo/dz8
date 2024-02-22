//task1
document.querySelector('.wrapper ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const proverb = event.target.innerText;
        const reversedProverb = proverb.split('').reverse().join('');
        document.getElementById('output').innerText = reversedProverb;
    }
});

//task2
const tableDiv = document.getElementById('table');
const sumDiv = document.getElementById('sum');
let numbers = [];
let currentSum = 0;
let expression = '';
const table = document.createElement('table');
for (let i = 0; i < 4; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 4; j++) {
        const cell = row.insertCell();
        if (i === 3 && j === 3) {
            cell.textContent = 'SUM';
            cell.addEventListener('click', function () {
                currentSum = numbers.reduce((a, b) => a + b, 0);
                sumDiv.textContent = `SUM = ${currentSum}`;
                expression = '';
            });
        } else {
            const number = Math.floor(Math.random() * 90 + 10);
            cell.textContent = number;
            cell.dataset.number = number;
            cell.addEventListener('click', function () {
                const clickedNumber = parseInt(this.dataset.number);
                numbers.push(clickedNumber);
                expression += (expression === '') ? `${clickedNumber}` : ` + ${clickedNumber}`;
                sumDiv.textContent = `SUM = ${currentSum} + ${expression}`;
            });
        }
    }
}
tableDiv.appendChild(table);

const choiceContainer = document.querySelector('.choice');
choiceContainer.addEventListener('click', function(event) {
event.preventDefault();
const target = event.target;
if (target.tagName === 'A') {
    const links = choiceContainer.querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));
    target.classList.add('active');
    const color = target.dataset.color;
    const price = target.dataset.price;
    const circles = choiceContainer.querySelectorAll('.circle');
    circles.forEach(circle => circle.style.backgroundColor = 'transparent');
    target.querySelector('.circle').style.backgroundColor = color;
    const productImage = document.getElementById('product-image');
    productImage.src = `img/${color}.webp`;
    const priceElement = document.querySelector('.price');
    priceElement.textContent = price;
    }
else if (target.classList.contains('circle')) {
    const link = target.closest('a');
    link.click();
    }
});