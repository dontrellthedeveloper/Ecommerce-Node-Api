const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mern-ecommerce-59f8c.firebaseio.com"
});