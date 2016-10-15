$(document).ready(function(){

  var WebUrlsListDOM = $("#webSourcesList");
  var configuredWebUrls = JSON.parse(localStorage.getItem("configuredWebUrls")) || [];
  var configuredSourcesWithId = JSON.parse(localStorage.getItem("configuredWebUrlsWithId")) || [];
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
      updateConfiguredWebUrlsDOM(url, id);
      localStorage.setItem("configuredWebUrls",JSON.stringify(configuredWebUrls));
      localStorage.setItem("configuredWebUrlsWithId", JSON.stringify(configuredSourcesWithId));
    }
  });

  $("#u267").click(function() {
//        var configuredWebUrl = JSON.parse(localStorage.getItem("configuredWebUrls")) || [];
        var configuredWebUrlLength = configuredWebUrls.length;
        if(!configuredWebUrlLength>0){
    //         window.location.href="web.html";
             $("#Message").css({'display':'block'});
        }
        else{
//            var configuredProfile =  JSON.parse(localStorage.getItem("Profiles")) || [];
            var configuredProfile = JSON.parse(localStorage.getItem("Profiles")) || [];
            var configuredProfileLength = configuredProfile.length;
            if(configuredProfileLength > 0){
                window.location.href = "makenews_fb.html";
            }
            else{
                window.location.href = "fb.html";
            }
        }
   });

   $("#u272_input").on('input',function() {
        var searchVal = $("#u272_input").val();
        if(searchVal.length >= 3)
        {
            if(searchVal !== 'The' &&  searchVal !== 'The ' && searchVal !== 'the' && searchVal !== 'the ' && searchVal !== 'wire' && searchVal !== 'dna' && searchVal !== 'DNA' && searchVal !== 'DNA ' && searchVal !== 'dna '){
                $("#u49_state0").css({'visibility' : 'hidden', 'display':'none'});
                $("#u49_state1").css({'visibility' : 'hidden', 'display':'none'});
                $("#u49_state2").css({'visibility' : 'hidden', 'display':'none'});
                $("#u49_state3").css({'visibility' : 'hidden', 'display':'none'});
                $("#u49_state4").css({'visibility' : 'visible', 'display':'block'});
            }
        }
   });

    $("#rightArrow").click(function() {
        $("#secondBox").css({'display': 'block'});
        $("#firstBox").css({'display': 'none'});
    });

    $(".remove-message").click(function() {
        $("#u49_state0").css({'visibility' : 'visible', 'display':'block'});
        $("#u49_state4").css({'visibility' : 'hidden', 'display':'none'});
        $("#secondBox").css({'display': 'none'});
        $("#firstBox").css({'display': 'block'});
        $("#u272_input").value = "";
    });

  function removeUrl(e, url){
    remove(configuredWebUrls, url);
    e.currentTarget.parentNode.remove();
    localStorage.setItem("configuredWebUrls",JSON.stringify(configuredWebUrls));
    localStorage.setItem("configuredWebUrlsWithId", JSON.stringify(configuredSourcesWithId));
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

   $("#removeMessage").click(function() {
      $("#Message").css({'display':'none'});
   });
});
