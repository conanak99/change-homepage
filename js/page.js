(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-90376405-1', 'auto');
ga('send', 'pageview');

$.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
}

function checkLanguage() {
    $('#vn, #en').removeClass('active');
    if (lang.currentLang == 'vn') {
        $('#vn').addClass('active');
    } else {
        $('#en').addClass('active');
    }
}

var lang = new Lang();
lang.init({defaultLang: 'vn'});

$(function() {
    checkLanguage();

    $('#vn').click(function() {
        lang.change('vn');
        checkLanguage();
    });

    $('#en').click(function() {
        lang.change('en');
        checkLanguage();
    });
})
