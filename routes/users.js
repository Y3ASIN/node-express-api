import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 23,
  },
  {
    firstName: "Petar",
    lastName: "Parker",
    age: 24,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

export default router;
