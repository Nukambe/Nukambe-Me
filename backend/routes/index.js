const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
require("dotenv").config();

router.use("/api", apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === "production" || true) {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (_req, res) => {
    console.log("Serving index.html");
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (_req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
} else {
  router.get("/", (_req, res) => {
    res.send(`Server is running in ${process.env.NODE_ENV} mode.`);
  });
}

module.exports = router;
