const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;

app.get("/test", (req, res) =>
{
    res.send("hello");
});

app.listen(PORT, () =>
{
    console.log(`Server running on PORT : ${PORT}`);
})