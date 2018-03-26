let MongoClient = require('mongodb').MongoClient;

module.exports = (app) => {
	app.post('/addcontact', (req, res) => {
		if(req.body.name && req.body.email && req.body.phone) {
			let name = req.body.name;
			let email = req.body.email;
			let phone = req.body.phone;

			MongoClient.connect(
                'mongodb://localhost:27017/easyme',
                (err, db) => {
                    if(err) res.status(500).json({message: 'error in database'});
                    else {
                        let collection = db.collection('contacts');
                        let xmlString = {name: name, email: email, phone: phone};
                        collection.insert(xmlString, (err, result) => {
                            if(err) {
                                res.status(500).json({message: 'error'});
                                // always close db after use, always
                                db.close();
                            }
                            else {
                                res.status(200).json({message: 'Okay!'});
                                db.close();
                            }
                        });
                    }
                }
            );
		}
		else {
			res.status(500).json({message: 'NO!'});
		}
	});
	app.post('/addmemo', (req, res) => {
		if(req.body.memo) {
			let memo = req.body.memo;

			MongoClient.connect(
                'mongodb://localhost:27017/easyme',
                (err, db) => {
                    if(err) res.status(500).json({message: 'error in database'});
                    else {
                        let collection = db.collection('memos');
                        let xmlString = {memo};
                        collection.insert(xmlString, (err, result) => {
                            if(err) {
                                res.status(500).json({message: 'error'});
                                // always close db after use, always
                                db.close();
                            }
                            else {
                                res.status(200).json({message: 'Okay! '});
                                db.close();
                            }
                        });
                    }
                }
            );
		}
		else {
			res.status	(500).json({message: 'NO!'});
		}
	});
	app.get('/getcontacts', (req, res) => {
		if(true) {
			let memo = req.body.memo;

			MongoClient.connect(
                'mongodb://localhost:27017/easyme',
                (err, db) => {
                    if(err) res.status(500).json({message: 'error in database'});
                    else {
                        let collection = db.collection('contacts');
                        collection.find({}, {}).toArray(function(err, dataOne) {
                            res.status(200).json({ status: 'success', data: dataOne});
                        });
                    }
                }
            );
		}
		else {
			res.sendStatus(500).json({message: 'NO!'});
		}
	});
	app.get('/getmemos', (req, res) => {
		if(true) {
			let memo = req.body.memo;

			MongoClient.connect(
                'mongodb://localhost:27017/easyme',
                (err, db) => {
                    if(err) res.status(500).json({message: 'error in database'});
                    else {
                        let collection = db.collection('memos');
                        collection.find({}, {}).toArray(function(err, dataOne) {
                            res.status(200).json({ status: 'success', data: dataOne});
                        });
                    }
                }
            );
		}
		else {
			res.sendStatus(500).json({message: 'NO!'});
		}
	});
}
