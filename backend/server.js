const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://personal-portfolio-website-blue-theta.vercel.app/",
      process.env.FRONTEND_URL
    ],
    credentials: true
  })
);

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});