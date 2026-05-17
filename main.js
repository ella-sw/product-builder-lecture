document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

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