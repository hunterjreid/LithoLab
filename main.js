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
  lessonContent
  mainWindow.titleBarOverlay = {
    color: '#FF0000',
  };
}



app.whenReady().then(() => {
  const loadingWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false, // Hide the frame for the loading window
    webPreferences: {
      nodeIntegration: true
    },
    titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
        height: 60
      },
    trafficLightPosition: { x: 10, y: 10 }
  });

  loadingWindow.loadFile('loading.html');

  // Create main window after a short delay to simulate loading
  setTimeout(() => {
    loadingWindow.close(); // Close the loading window
    createWindow(); // Create the main window
  }, 2000); // Adjust the delay as needed
});

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1000,
      height: 1200,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },

    });
  
    // ... (rest of your existing code)
  
    mainWindow.loadFile('index.html');
  
    // ... (rest of your existing code)
  
    // Apply your custom header bar styling
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.insertCSS(`
        /* Add your custom header bar styles here */
        .custom-header {
          height: 40px;
          background-color: #333;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
        }
      `);
    });
  }
  
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
