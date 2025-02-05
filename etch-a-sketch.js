document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const resizeButton = document.getElementById('resize-button');
    let gridSize = 16; // Tamanho inicial da grade

    function createGrid(size) {
        // Limpar a grade existente
        container.innerHTML = '';
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        const totalSquares = size * size;

        for (let i = 0; i < totalSquares; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            container.appendChild(gridItem);

            // Adicionar event listener para o evento mouseenter
            gridItem.addEventListener('mouseenter', function() {
                gridItem.style.backgroundColor = 'black'; // Muda a cor de fundo para preto
            });
        }
    }

    resizeButton.addEventListener('click', function() {
        let newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
        newSize = parseInt(newSize);

        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            gridSize = newSize;
            createGrid(gridSize);
        }
    });

    // Criar a grade inicial
    createGrid(gridSize);
});
