const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const iconPath = path.join(__dirname, 'assets/images/favicon.ico');
  mainWindow.setIcon(iconPath);

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.titleBarOverlay = {
    color: '#FF0000',
  };
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('open-animation', (event, animationName) => {
    const animationWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    animationWindow.loadFile('animation.html');
    animationWindow.webContents.on('did-finish-load', () => {
      animationWindow.webContents.send('animation-name', animationName);
    });

    animationWindow.on('closed', () => {
      animationWindow = null;
    });
  });
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
