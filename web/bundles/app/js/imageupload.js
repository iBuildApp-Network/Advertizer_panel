$('#save_changes').click(function(){
    $('#image_file').click();
});

window.onload = function() {
    var input = document.getElementById('image_file');
    input.addEventListener('change', handleFiles);
}

function handleFiles(e) {
    $("#loadingModal").modal({backdrop: 'static', keyboard: false});
    var preview = document.getElementById('preview_img');
    var myCanvas = document.getElementById('canvas');
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.onload = function(){
        myCanvas.height = 50;
        myCanvas.width = 320;
        ctx.drawImage(img, 0, 0);
        var photo = myCanvas.toDataURL('image/jpeg');
        $("#ad_campaign_ad_image").val(photo);
        setTimeout(function(){
            $("#loadingModal").modal('hide');
        }, 500);
        preview.src = photo;
        $("#preview_img").show();
    };
    img.src = URL.createObjectURL(e.target.files[0]);
}

$("#fake_submit").click(function(){
    if (!$("#preview_img").attr('src')) {
        showError("Please choose an image for your ad campaign!");
        return false;
    }
    $("#ad_campaign_submit").click();
});

function showError(error, is_static = false) {
    $("#error-text").html(error);
    if (is_static) {
        $("#error-close").hide();
        $("#errorModal").modal({backdrop: 'static', keyboard: false});
    } else {
        $("#error-close").show();
        $("#errorModal").modal("show");
    }
}