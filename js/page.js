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
lang.init({
    defaultLang: 'vn'
});

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
