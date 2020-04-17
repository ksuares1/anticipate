const mongoose = require("mongoose");
const db = require("../models");
var fs = require('fs');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/anticipatesignup"
  );

  const patientSeed = [
      {
         name: "Adam Avocado",
         mrn: "345678",
         medications: "Ibuprofen",
         heartRate: 81, 
         oxygenLevel: 97, 
         temperature: 99, 
         bloodPressure: "130/90",
         location: "HB 7 FL West Room 12 Bed B",
         contactName: "Ana Avocado",
         contactType: "Mom",
         contactNumber: 2128675309,
         image: "../assets/img/Avocado.jpg"
      },
      {
        name: "Tina Tomato",
        mrn: 345679,
        medications:"Ibuprofen", 
        heartRate: 110, 
        oxygenLevel: 97, 
        temperature: 99, 
        bloodPressure: "125/90",
        location: "HB 10 FL East Room 10 Bed A",
        contactName: "Maria Tomato",
        contactType: "Mom",
        contactNumber: 2128675309,
        image: "../assets/img/Tomato.jpg"
    }
  ];

  db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });