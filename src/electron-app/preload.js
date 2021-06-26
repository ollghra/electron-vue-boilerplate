
/*
// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
	'electron',
	{
		doThing: () => ipcRenderer.send('do-a-thing')
	}
);
const { contextBridge } = require("electron");

// DB
import db from "./database";
db.loadDatabase(function(err) {
	console.log(`Loaded app db with (poss. none) errors: ${err}`);
	console.log(`DB: ${db}`);
	// Accessible as window.db
});

contextBridge.exposeInMainWorld('db', db);
contextBridge.exposeInMainWorld('eofis', {db:true});

contextBridge.exposeInMainWorld('myAPI', {
	  desktop: true
});

window.sss = 'fff';

console.log("PRELOAD");
*/
