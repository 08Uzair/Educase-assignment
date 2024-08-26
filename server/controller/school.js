import { haversineDistance } from "../helpers/haversine.js";
import {connection} from "../db/connection.js"; 

// Get list of schools sorted by proximity
export const getSchools = (req, res) => {
  const { userLatitude, userLongitude } = req.query;

  let sql = "SELECT * FROM school_table;";
  connection.query(sql, (err, results) => {
    if (err) throw err;

    if (userLatitude && userLongitude) {
      // Sort schools by distance from the user's location
      const sortedSchools = results
        .map((school) => ({
          ...school,
          distance: haversineDistance(
            parseFloat(userLatitude),
            parseFloat(userLongitude),
            school.latitude,
            school.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance);

      return res.status(200).json(sortedSchools);
    } else {
      // Return schools without sorting if no user location is provided
      res.status(200).json(results);
    }
  });
};

// Add a new school
export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Ensure all required fields are provided
  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json("Missing required fields");
  }

  // Check for duplicate school by name
  const checkDuplicate = "SELECT * FROM school_table WHERE name = ?";
  connection.query(checkDuplicate, [name], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json("School already exists");
    } else {
      const add =
        "INSERT INTO school_table (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
      const values = [name, address, latitude, longitude];

      connection.query(add, values, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json("Error adding school");
        }
        res.json("SCHOOL ADDED SUCCESSFULLY");
      });
    }
  });
};
