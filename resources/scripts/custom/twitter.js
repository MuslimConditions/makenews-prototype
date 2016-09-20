$(document).ready(function(){

  var configuredWebUrls = [];
  var WebUrlsListDOM = $("#twitterSourcesList");

  $("div[data-label='Add']").click(function(e){
    var url = $(this).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
    if(configuredWebUrls.indexOf(url) === -1) {
      configuredWebUrls.push(url);
      updateConfiguredWebUrlsDOM(url, $(this)[0].id.split("_")[0]);
    }
  });

  function removeUrl(e, url){
    console.log(e+"url:: "+url);
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

  $("div[data-label='Add All']").click(function(x){
    let addParent = this.parentElement;
    let parentSiblings = addParent.parentElement.children;
    for(var i=1; i<=21;i++){
        var child = parentSiblings[i];
        var add = (child.children)[4];
            var url = $((add.children)[0]).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
        if(configuredWebUrls.indexOf(url) === -1) {
            configuredWebUrls.push(url);
            updateConfiguredWebUrlsDOM(url, $((child.children)[4])[0].id.split
            ("_")[0]);
        }
    }
  });

   $("div[data-label='Remove all']").click(function(y){
        configuredWebUrls=[];
        $("#twitterSourcesList").empty();
   });
});
