const mongoose = require("mongoose");
const db = require("../models");
var fs = require('fs');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/patientlist"
  );

  const patientSeed = [
      {
          name: "Adam Avocado",
          mrn: 345678,
          medications: ["lexapro", "ibuprofen"],
          heartRate: [81, 110, 99], 
          oxygenLevel: [99, 95, 97], 
          temperature: [97, 101, 99], 
          bloodPressure: [120/80, 180/99, 130/90],
          location: "HB 7 FL West Room 12 Bed B",
          image: "../assets/img/Avocado.jpg"
      },
      {
        name: "Tina Tomato",
        mrn: 345679,
        medications: ["nalbuphine", "morphine"],
        heartRate: [81, 110, 99],
        oxygenLevel: [99, 98, 97], 
        temperature: [97, 98, 99], 
        bloodPressure: [120/80, 130/89, 125/90],
        location: "HB 10 FL East Room 10 Bed A",
        image: "../assets/img/Tomato.jpg"
    }
  ];

