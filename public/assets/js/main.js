console.log("yo");
var user
//grab id from session
$.get("/api/session").then(function (session) {
  console.log(session)
  user = session;
  $.get(`/api/main/${user.currentUser.id}`).then(function (userData) {
    
    for (var i = 0; i < userData.Profile.length; i++) {
      var cardDiv = $(`<div class="card horizontal"></div>`)
      var cardImgDiv = $(`<div class="card-image"></div>`).append(`<img src="${userData.Profile[i].photo}">`)
      var cardStackedDiv = $(`<div class="card-stacked"></div>`)
  
      var cardContentDiv = $(`<div class="card-content"></div>`)
      var cardContentdelete = $(`<i class="material-icons small right tooltipped delete" data-position="top" id="test" data-delay="50" data-tooltip="Delete my Account" data-id="${userData.Profile[i]._id}" >remove_circle</i>`)
      var cardContentH5 = $(`<h5 class="your-name">${userData.Profile[i].first_name ? userData.Profile[i].first_name : userData.first_name} ${userData.Profile[i].last_name ? userData.Profile[i].last_name : userData.last_name}</h5>`)
      var cardContentRow = $(`<div class="row"></div>`)
  
      var cardContentRowDiv1 = $(`<div class="col s6"></div>`)
      var cardContentRowDiv1P1 = $(`<p>DOB: ${userData.Profile[i].birthdate}</p>`)
      var cardContentRowDiv1P2 = $(`<p>Height: ${userData.Profile[i].height}</p>`)
      var cardContentRowDiv1P3 = $(`<p>Hair: ${userData.Profile[i].hair}</p>`)
  
      var cardContentRowDiv2 = $(`<div class="col s6"></div>`)
      var cardContentRowDiv2P1 = $(`<p>AGE: ${calulateAge(userData.Profile[i].birthdate)}</p>`)
      var cardContentRowDiv2P2 = $(`<p>Weight: ${userData.Profile[i].weight}</p>`)
      var cardContentRowDiv2P3 = $(`<p>Eye: ${userData.Profile[i].eyes}</p>`)
      var cardContentRowDiv2P4 = $(`<p>Relationship: ${userData.Profile[i].relationship ? userData.Profile[i].relationship : "Account Owner"}</p>`)
  
      var cardContentLastDiv = $(`<p class="black-text text-darken-4"><a href="profile.html"><i class="material-icons right tooltipped" data-position="top" data-delay="50" data-tooltip="more info" data-id="${userData.Profile[i]._id}">more_horiz</i></a></p>`)
  
      cardContentRowDiv1.append(cardContentRowDiv1P1).append(cardContentRowDiv1P2).append(cardContentRowDiv1P3)
      cardContentRowDiv2.append(cardContentRowDiv2P1).append(cardContentRowDiv2P2).append(cardContentRowDiv2P3).append(cardContentRowDiv2P4)
  
      cardContentRow.append(cardContentRowDiv1).append(cardContentRowDiv2)
  
      cardContentDiv.append(cardContentdelete).append(cardContentH5).append(cardContentRow)
      cardStackedDiv.append(cardContentDiv).append(cardContentLastDiv)
  
      cardDiv.append(cardImgDiv).append(cardStackedDiv)
      $(`#cardStuff`).append(cardDiv)
  
    }
  })
})
//query the db Prfile for users id
//generate a card with data
function calulateAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
//sudo request made to backend for user
// var user = {
//   userData: {
//     firstName: "ahhhhhh",
//     lastName: "qoooooo"
//   },
//   _id: "5aac14432e838fa643d51d88",
//   photo: './images/addform/addformperson.jpg',
//   birthdate: '12/08/2112',
//   address: 'qwerqwerqwer',
//   phone: 'asdfasdfasd',
//   height: 'vzxcvzxcvzc',
//   weight: 'sdfgs',
//   hair: 'qwerqwe',
//   eyes: 'sfgsdf'
// }
  // < div class="card horizontal" >
  //   <div class="card-image">
  //     <img src="./images/profile/you.JPG">
  //             </div>
  //     <div class="card-stacked">
  //       <div class="card-content">
  //         <h5 class="your-name">JoEllen D. Giani</h5>
  //         <div class="row">
  //           <div class="col s6">
  //             <p>DOB: 12/7/80</p>
  //             <p>Height: 5' 9"</p>
  //             <p>Hair: Brown</p>
  //           </div>
  //           <div class="col s6">
  //             <p>AGE: 36</p>
  //             <p>Weight: 150 lbs</p>
  //             <p>Eye: Brown</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="">
  //         <p class="black-text text-darken-4">YOU<a href="profile.html"><i class="material-icons right tooltipped" data-position="top" data-delay="50" data-tooltip="more info">more_horiz</i></a></p>
  //       </div>
  //     </div>
  //   </div>
  


// $("#test").on("click", function (event) {
//   console.log("this clicked");
//   // var id = $(this).data("id");
//   var id = $(this).attr("data-id");
  
//   // $.delete(`/delete/profile/${sessionUser.currentUser.id}
//   // Send the DELETE request.
//   $.ajax({
//     type: "DELETE",
//     url: "/delete/profile/" + id,
//   }).then(
//     function () {
//       console.log("deleted profile", id);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });
