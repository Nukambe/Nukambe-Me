const express = require("express");
const router = express.Router();

const aplus = {
  id: 1,
  title: "CompTIA A+ ce",
  issuer: "CompTIA",
  issueDate: "2019-01-01",
  expirationDate: "2022-01-01",
  image: "https://www.comptia.org/images/default-source/logos/comptia-logo.png",
};

const itilf = {
  id: 2,
  title: "ITIL Foundation",
  issuer: "AXELOS",
  issueDate: "2019-01-01",
  expirationDate: "2022-01-01",
  image: "https://www.axelos.com/Themes/Axelos/images/logo.png",
};

const securityplus = {
  id: 3,
  title: "CompTIA Security+ ce",
  issuer: "CompTIA",
  issueDate: "2019-01-01",
  expirationDate: "2022-01-01",
  image: "https://www.comptia.org/images/default-source/logos/comptia-logo.png",
};

router.get("/", (req, res) => {
  res.status(200).json([aplus, itilf, securityplus]);
});

module.exports = router;
