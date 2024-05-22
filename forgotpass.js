function addGoofyAnimation() {
    const img = document.getElementById('goofyImg');
    img.style.transform = `rotate(${Math.random() * 360}deg) scale(${1 + Math.random() * 0.5})`;
    img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}

document.getElementById('goofyImg').addEventListener('mouseenter', addGoofyAnimation);
document.getElementById('goofyImg').addEventListener('mouseleave', () => {
    const img = document.getElementById('goofyImg');
    img.style.transform = 'rotate(0deg) scale(1)';
    img.style.filter = 'hue-rotate(0deg)';
});