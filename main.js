document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');

    generateBtn.addEventListener('click', () => {
        generateNumbers();
    });

    function generateNumbers() {
        numbersDisplay.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const numberDiv = document.createElement('div');
                numberDiv.className = 'number';
                numberDiv.textContent = number;
                numbersDisplay.appendChild(numberDiv);
            }, index * 300);
        });
    }
});