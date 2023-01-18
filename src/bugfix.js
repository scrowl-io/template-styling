
// Force repaint on load and orientation changes
const repaint = () => {
  setTimeout(function() {
    document.body.style.webkitTransform = 'translateX(0)';
  },20);
}

window.addEventListener("orientationchange", (event) => {
  repaint();
}, false);

window.addEventListener('DOMContentLoaded', (event) => {
  repaint();
}, false);
