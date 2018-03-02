var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/just-in-case/upload/';
//w_100,h_190,c_fill,g-auto
var CLOUDINARY_UPLOAD_PRESET = 'tsabsfyg';

var imgPreview = document.getElementById('photoPreview');
var fileUpload = document.getElementById('photo');

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch(function (err) {
        console.error(err);
    });
});