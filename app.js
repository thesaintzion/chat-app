const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


if (process.env.NODE_ENV !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('short'));
}

app.use(express.json());
app.use(cors());

// app.get('/', function(req, res) {
//     res.send('welcome');
// });

const staticView = path.join('./public');
app.use(express.static(staticView));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Front is running on port ${PORT}`);
});