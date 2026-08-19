import app from "./server.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`STAT Scientific server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});