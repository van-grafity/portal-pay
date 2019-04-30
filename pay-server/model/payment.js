var pool = require('./dbConfig.js');

var paymentDb = {

    sendPayment: function (no_customer, date_payment, total, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");
                var sql = 'INSERT INTO tb_payment (no_customer, date_payment, total) values (?,?,?)';
                conn.query(sql, [no_customer, date_payment, total], function (err, result) {
                    conn.release();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });

    } /* send by payment */
}

module.exports = paymentDb;