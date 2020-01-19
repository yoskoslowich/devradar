const express  = require('express');
const mongoose = require('mongoose');
const cors 	   = require('cors');
const routes   = require('./routes')

const app = express();
//mongodb+srv://yoskos:omnistack@cluster0-uzgfk.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect('mongodb://yoskos:omnistack@cluster0-shard-00-00-uzgfk.mongodb.net:27017,cluster0-shard-00-01-uzgfk.mongodb.net:27017,cluster0-shard-00-02-uzgfk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);