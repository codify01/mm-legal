const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// Routes
const contentRoutes = require('./src/routes/content.routes');
app.use('/api/content', contentRoutes)




mongoose.connect("mongodb+srv://mindsmakingbrands:Xy1ayvgFIux7dEpO@cluster0.f2ylxo5.mongodb.net/mm-legal?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("✅ Connected to MongoDB successfully");
    
    app.listen(3000, () => {
        console.log("🚀 Server is running on port 3000");
    });
})
.catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
});




app.listen(3000, () => {
    console.log("Server is running on port 3000")
    // mongoose.connect("mongodb+srv://amoleuthman:Jhmaarsof@cluster0.xkg3cvj.mongodb.net/mindsmaking-legal?retryWrites=true&w=majority&appName=Cluster0")
    // mongoose.connect("mongodb+srv://mindsmakingbrands:Xy1ayvgFIux7dEpO@cluster0.f2ylxo5.mongodb.net/mm-legal?retryWrites=true&w=majority&appName=Cluster0")
    // .then(() => {
    //     console.log("Connected to MongoDB successfully");
    // })
    // .catch((error) => {
    //     console.error("Error connecting to MongoDB:", error);
    // });
    // // mongoose.connect("mongodb://admin:Mindsmaking&234!@127.0.0.1:27017/mm-legal")c
    // // Xy1ayvgFIux7dEpO
    
})