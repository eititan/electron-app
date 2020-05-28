const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");


    require('electron-reload')(__dirname, {
      // Note that the path to electron may vary according to the main file
      electron: require(`${__dirname}/node_modules/electron`)
    });

    // require('electron-reload')(
    //   [
    //     __dirname,
    //     '${__dirname}/../../html/**/*.html',
    //     '${__dirname}/../../js/**/*.js',
    //     '${__dirname}/../../ts/**/*.ts',
    //     '${__dirname}/../../css/**/*.css'
    //   ],
    //    {
    //   electron: require('${__dirname}/../../node_modules/electron')
    // })


    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL('http://localhost:4200/');
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })