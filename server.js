const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// MIddleware 
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactForm.html')
})

app.post('/', (req, res) => {
    console.log(req,body)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})