let iframe = document.createElement('iframe');
iframe.src = new URL('./inner/index.html', import.meta.url);
document.body.appendChild(iframe);
