$(document).ready(function(){

  var configuredWebUrls = [];
  var WebUrlsListDOM = $("#webSourcesList");

  $(".add-url").click(function(e){
    var url = $($(this).parent().children()[1])[0].innerText.trim();
    if(configuredWebUrls.indexOf(url) === -1) {
      configuredWebUrls.push(url);
      updateConfiguredWebUrlsDOM(url, $(this)[0].id);
    }
  });

  function removeUrl(e, url){
    console.log(e.currentTarget.parentNode.dataset.id);
    remove(configuredWebUrls, url);
    e.currentTarget.parentNode.remove();
    $("#"+e.currentTarget.parentNode.dataset.id+"_state0").css({"display": "block", "visibility": "visible"});
    $("#"+e.currentTarget.parentNode.dataset.id+"_state1").css({"display": "none", "visibility": "hidden"});
  }

  function updateConfiguredWebUrlsDOM(url, domId) {
    var li = $("<li data-id='"+domId+"'>");
    li.append(url);
    li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>").click(".remove-selected-url", function(e){removeUrl(e, url)}));
    WebUrlsListDOM.append(li);
  }

  function remove(arr, item) {
      for(var i = arr.length; i--;) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }
  }

});
