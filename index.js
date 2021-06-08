const { app, BrowserWindow } = require('electron');

let win;

function createWindow(){
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html'); //what to display in the browser window
  //win.loadURL('http://localhost:3000')

  win.webContents.openDevTools(); //opens browser console

  win.on('closed', () => {
    console.log('window closed');
    win = null;
  })
}

app.on('ready', createWindow); //only run the createWindow function once electron is ready
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit(); //Windows' process platform is 'win32'. mac uses 'darwin'.
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})