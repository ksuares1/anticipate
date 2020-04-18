import axios from "axios";

export default {

  getPatients: function() {
    return axios.get("/api/patients");
  },
  
  getPatient: function(id) {
    return axios.get("/api/patients/" + id);
  },
  
  deletePatient: function(id) {
    return axios.delete("/api/patients/" + id);
  },
  
  savePatient: function(patientData) {
    return axios.post("/api/patients", patientData);
  }
};
