document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawing-board');
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let isPainting = false;
    let lineWidth = 5;

    toolbar.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log('Canvas cleared');
        }
    });

    toolbar.addEventListener('change', e => {
        if (e.target.id === 'stroke') {
            ctx.strokeStyle = e.target.value;
            console.log('Stroke color changed to:', e.target.value);
        }

        if (e.target.id === 'lineWidth') {
            lineWidth = e.target.value;
            console.log('Line width changed to:', lineWidth);
        }
    });

    const draw = (e) => {
        if (!isPainting) {
            return;
        }
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(`Drawing at: ${x}, ${y}`);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', (e) => {
        isPainting = true;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
        console.log(`Mouse down at: ${x}, ${y}`);
    });

    canvas.addEventListener('mouseup', (e) => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath(); 
        console.log(`Mouse up`);
    });

    canvas.addEventListener('mousemove', draw);


    console.log(`Canvas width: ${canvas.width}, height: ${canvas.height}`);
});
