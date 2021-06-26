import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

export default new Datastore({
	autoload: true,
	filename: path.join(remote.app.getPath('userData'), '/data.db')
})
/*const Datastore = require("nedb")
	, db = new Datastore({ filename: "app.db" });

export default db;*/
