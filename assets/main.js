$(document)
    .ready(function() {
        var carousel = $('#Carousel1').glide({
            type: 'carousel',
        });

        var carousel = $('#Carousel2').glide({
            type: 'carousel',
        });

        var $root = $('html, body');

        // $('a[href^="#"]').click(function() {
        //     var href = $.attr(this, 'href');
        //
        //     $root.animate({
        //         scrollTop: $(href).offset().top
        //     }, 500, function () {
        //         window.location.hash = href;
        //     });
        //
        //     return false;
        // });

        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });

        // // fix menu when passed
        // $('.masthead')
        //     .visibility({
        //         once: false,
        //         onBottomPassed: function() {
        //             $('.fixed.menu').transition('fade in');
        //         },
        //         onBottomPassedReverse: function() {
        //             $('.fixed.menu').transition('fade out');
        //         }
        //     })
        // ;
        //
        // // create sidebar and attach to menu open
        // $('.ui.sidebar')
        //     .sidebar('attach events', '.toc.item')
        // ;

    })
;