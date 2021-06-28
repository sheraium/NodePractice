const electron = require('electron');
const remote = electron.remote;

document.getElementById('close-button')
    .addEventListener('click', (e) => {
        const currentWindow = remote.getCurrentWindow();
        currentWindow.close();
    });
