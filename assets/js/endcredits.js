/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

    $('.creditos').click(function (e) {
        console.log("testing the credits");
        e.preventDefault();
        
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titles').fadeIn(1000);
        $('#titles').fadeTo("slow");
        $('#titles').fadeIn();
        $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + (maskHeight) + "px");
        $('#credits').show('slow');

        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 10000,
            complete: function () {
                $('#titles').fadeOut();
                $('.window').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
        $('#titles').hide();
        $('.window').hide();
    });

    $('#titles').click(function () {
        $(this).hide();
        $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
        $('.window').hide();
    });
});
