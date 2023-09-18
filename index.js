const {app, BrowserWindow} = require('electron');
const path = require('path') ;

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600 ,
        fullscreen: true,
        frame: false,
        autoHideMenuBar: true,
        transparent: true,
        alwaysOnTop: true
    });
    mainWindow.setIgnoreMouseEvents(true)

    // and load the index. html of the app.
    mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.on('ready', createWindow);