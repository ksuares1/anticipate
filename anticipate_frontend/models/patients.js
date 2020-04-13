const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {type: String, required: true },
    mrn: {type: Number, min: 6, max: 6, required: true},
    medications: {medicationSchema},
    heartRate: {type: Array},
    oxygenLevel: {type: Array},
    temperature: {type: Array},
    bloodPressure: {type: Array},
    location: {type: String},
    image: {patientImg},
    familyContact: {contactSchema}

})

const contactSchema = new Schema ({
    contactName: {type: String},
    contactType: {type: String},
    contactNumber: {type: Number},
})

const medicationSchema = new Schema ({
    medName: {type: String},
    medLevel: {type: String},
    lastGiven: {type: Date } 
})

const patientImg = new Schema ({
    image: { data: Buffer, contentType: String }
})
const Patient = mongoose.model("Patient", patientSchema); 

module.exports = Patient; 


