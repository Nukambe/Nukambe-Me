const router = require("express").Router();
const sessionRouter = require("./session.js");
const certificationsRouter = require("./certifications.js");
const profileRouter = require("./profile.js");
const projectsRouter = require("./projects.js");
const skillsRouter = require("./skills.js");
const testimonialsRouter = require("./testimonials.js");
const contactRouter = require("./contact.js");

// router.use("/session", sessionRouter);
// router.use("/certifications", certificationsRouter);
// router.use("/profile", profileRouter);
// router.use("/projects", projectsRouter);
// router.use("/skills", skillsRouter);
// router.use("/testimonials", testimonialsRouter);
router.use("/contact", contactRouter);

module.exports = router;
