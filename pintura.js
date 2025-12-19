document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    const colors = [
        '#7b39ed', '#a387ff', '#c7b9ff', '#f19c05', '#ffd13a', '#ff4081', '#f06292',
        '#f44336', '#00c853', '#2196f3', '#5c6bc0', '#263238', '#ffffff'
    ];

    let painting = false;
    let brushSize = 8;
    let brushColor = '#7b39ed';

    // Ajustar tamanho do canvas
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Iniciar desenho
    function startPosition(e) {
        painting = true;
        draw(e);
    }

    // Finalizar desenho
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    // Função principal de desenhar
    function draw(e) {
        if (!painting) return;

        // Pega as coordenadas corretas (Touch ou Mouse)
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || (e.touches ? e.touches[0].clientX : 0)) - rect.left;
        const y = (e.clientY || (e.touches ? e.touches[0].clientY : 0)) - rect.top;

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = brushColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // Eventos de Mouse
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    // Eventos de Touch (Tablet/Celular)
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startPosition(e);
    });
    canvas.addEventListener('touchend', finishedPosition);
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        draw(e);
    });

    // Paleta de Cores
    const paletteContainer = document.getElementById('palette');
    colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch');
        swatch.style.backgroundColor = color;
        if (color === brushColor) swatch.classList.add('active');
        
        swatch.addEventListener('click', () => {
            brushColor = color;
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            document.getElementById('size-preview').style.color = color;
        });
        paletteContainer.appendChild(swatch);
    });

    // Controles de Tamanho
    document.getElementById('increase-size').addEventListener('click', () => {
        if (brushSize < 50) brushSize += 2;
        updateSizeDisplay();
    });

    document.getElementById('decrease-size').addEventListener('click', () => {
        if (brushSize > 2) brushSize -= 2;
        updateSizeDisplay();
    });

    function updateSizeDisplay() {
        document.getElementById('size-text').innerText = `${brushSize}px`;
    }

    // Botão Limpar
    document.getElementById('clear-btn').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});