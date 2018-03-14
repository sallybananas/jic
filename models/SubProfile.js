var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SubSchema = new Schema({

    // `firstname` is required and of type String
    first_name: {
        type: String,
        required: true
    },
    // `lastname` is required and of type String
    last_name: {
        type: String,
        required: true
    },

    //relationship is required and of type String
    relationship: {
        type: String,
        allowNull: false
    },

    //photo is required and of type String
    photo: {
        type: String,
        allowNull: false
    },

    //address is required and of type String
    address: {
        type: String,
        allowNull: false
    },

    //birthdate is required and of type String
    birthdate: {
        type: String,
        allowNull: false
    },

    //phone number is required and of type String
    phone: {
        type: String,
        allowNull: false
    },

    //height is required and of type String
    height: {
        type: String,
        allowNull: false
    },

    //weight is required and of type String
    weight: {
        type: String,
        allowNull: false
    },

    //hair color is required and of type String
    hair: {
        type: String,
        allowNull: false
    },

    //eye color is required and of type String
    eyes: {
        type: String,
        allowNull: false
    },
    
   subprofile: [
       {
           type: Schema.Types.ObjectId,
           ref: "SubProfile"
       }
   ]

});

// This creates our model from the above schema, using mongoose's model method
var SubProfile = mongoose.model("SubProfile", SubSchema);

// Export the Article model
module.exports = SubProfile;