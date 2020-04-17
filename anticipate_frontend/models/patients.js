const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {type: String, required: true },
    mrn: {type: Number, required: true},
    medications: {type: String},
    heartRate: {type: Number},
    oxygenLevel: {type: Number},
    temperature: {type: Number},
    bloodPressure: {type: String},
    location: {type: String},
    image: {type: String},
    contactName: {type: String},
    contactType: {type: String},
    contactNumber: {type: Number},

})




const Patient = mongoose.model("Patient", patientSchema); 

module.exports = Patient; 


