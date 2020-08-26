const expree = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// Path Lovcation Startegy

app.get('/*', function(re, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');