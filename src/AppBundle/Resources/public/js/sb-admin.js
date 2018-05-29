(function($) {
  "use strict"; // Start of use strict
  // Configure tooltips for collapsed side navigation
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  
    $(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-success').trigger('click');
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#prev')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $(document).ready(function() {
        $('input[type=radio][name=gridRadios]').change(function() {
            if (this.value === 'option1') {
                $("#handset-groups").fadeOut();
            }
            else if (this.value === 'option2') {
                $("#handset-groups").fadeIn();
            }
        });
        $('input[type=radio][name=catRadios]').change(function() {
            if (this.value === 'catRadios1') {
                $("#categories").fadeOut();
            }
            else if (this.value === 'catRadios2') {
                $("#categories").fadeIn();
            }
        });
        $('input[type=radio][name=catLanguage]').change(function() {
            if (this.value === 'catLanguage1') {
                $("#languages").fadeOut();
            }
            else if (this.value == 'catLanguage2') {
                $("#languages").fadeIn();
            }
        });
    });
})(jQuery); // End of use strict

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
                    myCanvas.height = 320;
                    myCanvas.width = 50;
                    ctx.drawImage(img, 0, 0);
                    var photo = myCanvas.toDataURL('image/jpeg');
                    $.ajax({
                        type:'POST',
                        dataType: 'json',
                        data: 'photo=' + encodeURIComponent(photo)
                    });
                };
                img.src = URL.createObjectURL(e.target.files[0]);
            }


            function savePhoto() {
                var preview = document.getElementById('preview_img');
                var file    = document.getElementById('image_file').files[0];
                var reader  = new FileReader();

                reader.onloadend = function () {
                    var photo = reader.result;
                    $.ajax({
                        type:'POST',
                        dataType: 'json',
                        data: 'photo=' + encodeURIComponent(photo),
                    });
                }

                if (file) {
                    reader.readAsDataURL(file);
                    $("#preview_img").show();
                } else {}
            }
