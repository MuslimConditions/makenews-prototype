$(document).ready(function(){

  var WebUrlsListDOM = $("#twitterSourcesList");
  var configuredWebUrls = JSON.parse(localStorage.getItem("configuredTwitterUrls")) || [];
  var configuredSourcesWithId = JSON.parse(localStorage.getItem("configuredTwitterUrlsWithId")) || [];
    if(configuredSourcesWithId.length>0){
      for(var source in configuredSourcesWithId){
          updateConfiguredWebUrlsDOM(configuredSourcesWithId[source].url,configuredSourcesWithId[source].id);
      }
    }

  $("div[data-label='Add']").click(function(e){
     $("#Message").css({'display':'none'});
    var url = $(this).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $(this)[0].id.split("_")[0];

    if(configuredWebUrls.indexOf(url) === -1) {
      configuredWebUrls.push(url);
        configuredSourcesWithId.push({"url":url,"id":id});
      localStorage.setItem("configuredTwitterUrls", JSON.stringify(configuredWebUrls));
        localStorage.setItem("configuredTwitterUrlsWithId", JSON.stringify(configuredSourcesWithId));
      updateConfiguredWebUrlsDOM(url,id);
    }
  });

  function removeUrl(e, url){
    remove(configuredWebUrls, url);
    e.currentTarget.parentNode.remove();
     localStorage.setItem("configuredTwitterUrls", JSON.stringify(configuredWebUrls));
    localStorage.setItem("configuredTwitterUrlsWithId", JSON.stringify(configuredSourcesWithId));
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
            configuredSourcesWithId.splice(i,1);
          }
      }
  }

  $("div[data-label='Add All']").click(function(x){
     $("#Message").css({'display':'none'});
    var addParent = this.parentElement;
    var parentSiblings = addParent.parentElement.children;
    for(var i=1; i<=21;i++){
        var child = parentSiblings[i];
        var add = (child.children)[4];
        var url = $((add.children)[0]).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $((add.children))[0].id.split("_")[0];
        if(configuredWebUrls.indexOf(url) === -1) {
            configuredWebUrls.push(url);
            configuredSourcesWithId.push({"url":url,"id":id});
            localStorage.setItem("configuredTwitterUrls", JSON.stringify(configuredWebUrls));
            localStorage.setItem("configuredTwitterUrlsWithId", JSON.stringify(configuredSourcesWithId));
            updateConfiguredWebUrlsDOM(url, $((child.children)[4])[0].id.split("_")[0]);
        }
    }
  });

   $("div[data-label='Remove all']").click(function(y){
        configuredWebUrls=[];
        configuredSourcesWithId = [];
        localStorage.setItem("configuredTwitterUrls", JSON.stringify(configuredWebUrls));
        localStorage.setItem("configuredTwitterUrlsWithId", JSON.stringify(configuredSourcesWithId));
        $("#twitterSourcesList").empty();
   });

    $("#u1873").click(function() {
        var configuredTwitterUrlLength = configuredWebUrls.length;
        if(!configuredTwitterUrlLength>0){
             $("#Message").css({'display':'block'});
        }
        else{
            window.location.href="news_board__web.html";
        }
    });

    $("#removeMessage").click(function() {
        $("#Message").css({'display':'none'});
    });
});
