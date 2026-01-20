// games.js
export function startSnakeGame(canvasId) {
    // ...snake code...
}

export function testIframe() {
    const container = document.getElementById('iframe-container');
    if (!container) return;

    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com';
    iframe.width = '300';
    iframe.height = '200';
    iframe.style.border = '2px solid red';
    container.appendChild(iframe);
}
