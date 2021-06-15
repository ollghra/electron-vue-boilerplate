import Datastore from "nedb";
import path from "path";
import { remote } from "electron";

const dbFactory = file =>
	new Datastore({
		autoload: true,
		filename: `${path.join(remote.app.getPath("userData"))}/data/${file}`
	});

const db = {
	app: dbFactory("app.db")
};

export default db;
