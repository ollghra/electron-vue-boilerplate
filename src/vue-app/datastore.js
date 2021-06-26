import Datastore from "nedb";
import path from "path";
import { app } from "@electron/remote";

export default new Datastore({
	autoload: true,
	filename: path.join(app.getPath("userData"), "/data.db")
});
