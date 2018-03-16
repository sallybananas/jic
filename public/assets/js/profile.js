$(document).ready(function () {

    // POST route for saving a new post



    // Adding an event listener for when the form is submitted
    $("#submit-profile").on("click", function (event) {
        console.log("function handle submit works");
        handleFormSubmit(event);
    });

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        console.log("handle submit");
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        // if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
        //   return;
        // }
        // Constructing a newPost object to hand to the database
        // console.log($('#hair').val().trim())

        var photo = $("#photoPreview").attr("src");
        var birthdate = $("#birthdate").val().trim();
        var address = $("#address").val().trim();
        var phone = $("#phone").val().trim();
        var height = $("#height").val().trim();
        var weight = $("#weight").val().trim();
        var hair = $("#hair").val().trim();
        var eyes = $("#eyes").val().trim();
        


        var newProfile = {
            photo: photo,
            birthdate: birthdate,
            address: address,
            phone: phone,
            height: height,
            weight: weight,
            hair: hair,
            eyes: eyes
        };

        
        console.log("New Profile " + JSON.stringify(newProfile))


        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        $.post("/profile", newProfile).then(function (data) {
                    // console.log("data from profile: ", data);
                    // window.location.assign = "/main/"+data._id;
                    var profileId = {id: data._id};
                    console.log("profile id: ", profileId);
                    // $.post("/getprofile", profileId).then(function (res) {
                    //     console.log("Hello");
                    //     // res.redirect(307, "profile");
                    //     window.location.href = "localhost:3000/profile";
         });
                    // window.location.href = "/main/"+data._id;

        // submitProfile(newProfile);
        // console.log("new Job");
        // console.log("new job details: " + newJob);
    


        // Submits a new post and brings user to page upon completion

        function submitProfile(newProfile) {
        
        }
    }
});