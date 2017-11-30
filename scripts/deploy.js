var client = require('scp2')

client.scp('/Users/allan/projects/amazon/index.js', 'root:laochen123@222.128.114.177:/usr/local/nginx/html/', function(err) {
    console.log(ip, err);
});