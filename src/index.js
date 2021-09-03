const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;


server.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
})