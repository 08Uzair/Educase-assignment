import { connection } from "../db/connection.js";

// GET USER
export const getUsers = (req, res) => {
  let sql = "SELECT * FROM users;";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error fetching users");
    }
    res.send(results);
  });
};

// ADD USER
export const addUser = (req, res) => {
  const { userName, userAddress, userLatitude, userLongitude } = req.body;

  // Ensure all required fields are provided
  if (
    !userName ||
    !userAddress ||
    userLatitude === undefined ||
    userLongitude === undefined
  ) {
    return res.status(400).json("Missing required fields");
  }

  // Check for duplicate user by name
  const checkDuplicateUser = "SELECT * FROM users WHERE userName = ?";
  connection.query(checkDuplicateUser, [userName], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error checking for duplicate user");
    }

    if (results.length > 0) {
      return res.status(400).json("User already exists");
    } else {
      const addUser =
        "INSERT INTO users (userName, userAddress, userLatitude, userLongitude) VALUES (?, ?, ?, ?)";
      const values = [userName, userAddress, userLatitude, userLongitude];

      connection.query(addUser, values, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json("Error adding user");
        }
        res.json("USER ADDED SUCCESSFULLY");
      });
    }
  });
};
