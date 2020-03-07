var admin = require('firebase-admin');

 var Users = function() {
     var self = {};
     var db = admin.firestore();

     /**
     * Get user from user_id
     * @param {string} user_id
     * @returns {Promise} - user_id
     */
    self.getUser = function(userID) {
        return new Promise(function(resolve, reject) {
            db.container('users').doc(userID).then((data) => {
                resolve(data);
            }, function(err) {
                console.error(err);
                reject();
            });
        });
    }

    return self;
 }

 module.exports = Users();