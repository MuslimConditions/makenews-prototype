$(document).ready(function(){

  var configuredWebUrls = [];
  var configuredSourcesWithId = [];
  var WebUrlsListDOM = $("#webSourcesList");
  var configuredSources = JSON.parse(localStorage.getItem("configuredWebUrlsWithId")) || [];
  if(configuredSources.length>0){
    for(var source in configuredSources){
        updateConfiguredWebUrlsDOM(configuredSources[source].url,configuredSources[source].id);
    }
  }

  $("div[data-label='Add']").click(function(e){
    var url = $(this).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
    var id = $(this)[0].id.split("_")[0];
    if(configuredWebUrls.indexOf(url) === -1) {
      configuredWebUrls.push(url);
      configuredSourcesWithId.push({"url":url,"id":id});
      updateConfiguredWebUrlsDOM(url, id);
      localStorage.setItem("configuredWebUrls",JSON.stringify(configuredWebUrls));
      localStorage.setItem("configuredWebUrlsWithId", JSON.stringify(configuredSourcesWithId));
    }
  });

  function removeUrl(e, url){
    remove(configuredWebUrls, url);
    e.currentTarget.parentNode.remove();
    $("#"+e.currentTarget.parentNode.dataset.id+"_state0").css({"display": "block", "visibility": "visible"});
    $("#"+e.currentTarget.parentNode.dataset.id+"_state1").css({"display": "none", "visibility": "hidden"});
  }

  function updateConfiguredWebUrlsDOM(url, domId) {
    var li = $("<li data-id='"+domId+"'>");
    li.append("<span class='squre-box-list-style'>");
    li.append(url);
    li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>").click(".remove-selected-url", function(e){removeUrl(e, url)}));
    WebUrlsListDOM.append(li);

    $("#"+domId+"_state0").css({"display": "none", "visibility": "hidden"});
    $("#"+domId+"_state1").css({"display": "block", "visibility": "visible"});
  }

  function remove(arr, item) {
      for(var i = arr.length; i--;) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }
  }
});
