$(document)
    .ready(function() {

        // Semantic UI Initializing
        $('.ui.checkbox').checkbox();
        $('.ui.dropdown').dropdown();

        // Glide Initializing
        var hero = $('#hero').glide({
            type: 'carousel',
        });

        // Smooth Scroll
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });

    })
;