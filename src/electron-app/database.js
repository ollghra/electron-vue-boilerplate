const Datastore = require("nedb")
	, db = new Datastore({ filename: "app.db" });

export default db;
