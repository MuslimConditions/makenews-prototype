$(document).ready(function(){

  var configuredWebUrls = {};
  var WebUrlsListDOM = $("#webSourcesList");

  $(".add-url").click(function(e){
    var url = $($(this).parent().children()[1])[0].innerText.trim();
    if(!configuredWebUrls.hasOwnProperty(url)) {
      configuredWebUrls[url] = $(this)[0].id;
      updateConfiguredWebUrlsDOM();
    }
    console.log(configuredWebUrls)
  });

  function removeUrl(e, url){
    console.log("removeing url==>", url, configuredWebUrls)
    delete configuredWebUrls[url];
    updateConfiguredWebUrlsDOM();
  }

  WebUrlsListDOM.click(function(e) {
    console.log($(e.target).parents("li"));
  })

  function updateConfiguredWebUrlsDOM() {
    WebUrlsListDOM.empty();
    for(var url in configuredWebUrls){
      var li = $("<li>");
      li.append(url);
      li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>"));
      // li.find(".remove-selected-url").click(function(e){removeUrl(e, url)});
      WebUrlsListDOM.append(li);
    }
  }
});
