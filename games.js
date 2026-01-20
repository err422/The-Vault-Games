// Vault test: dynamically add an iframe
export function testIframe() {
    const container = document.getElementById('iframe-container');
    if (!container) {
        console.error('No iframe container found');
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com'; // replace with any site you want to test
    iframe.width = '300';
    iframe.height = '200';
    iframe.style.border = '2px solid red';

    container.appendChild(iframe);

    console.log('Iframe injected via external JS');
}

export function consoleTest() {
    console.log("hello world");
}
