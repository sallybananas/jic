var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MedicalSchema = new Schema({

    //Resuscitate is not required and of type String
    resuscitate: {
        type: String,
        allowNull: true
    },

    //Organ Donor is not required and of type String
    organDonor: {
        type: String,
        allowNull: true
    },

    //religion is not required and of type String
    religion: {
        type: String,
        allowNull: true
    },

    //allergies is not required and of type String
    allergies: {
        type: String,
        allowNull: true
    },

    //blood type is not required and of type String
    blood: {
        type: String,
        allowNull: true
    },

    //surgeries is not required and of type String
    surgeries: {
        type: String,
        allowNull: true
    },

    //diagnosed conditions is not required and of type String
    diagnosis: {
        type: String,
        allowNull: true
    },

    //other medical items is not required and of type String
    other: {
        type: String,
        allowNull: true
    },
    
    Profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}

});

// This creates our model from the above schema, using mongoose's model method
var Medical = mongoose.model("Medical", MedicalSchema);

// Export the Article model
module.exports = Medical;