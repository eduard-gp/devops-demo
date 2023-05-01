const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(process.env.PORT, () => {
    console.log(`Node app is listening on port ${process.env.PORT}`);
    console.log(`PostgresSQL database: ${process.env.AZURE_POSTGRESQL_DATABASE}`);
    console.log(`PostgresSQL host: ${process.env.AZURE_POSTGRESQL_HOST}`);
});
