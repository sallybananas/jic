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
        console.log($('#hair').val().trim())

        var hair = $("#hair").val().trim();


        var newProfile = {
            hair: hair
        };

        // console.log("newJob: " , newJob);

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        $.post("/profile", newProfile).then(function () {
                    window.location.href = "/main.html";

                });
        // submitProfile(newProfile);
        // console.log("new Job");
        // console.log("new job details: " + newJob);
    }


    // Submits a new post and brings user to page upon completion

    function submitProfile(newProfile) {
      
    }
})