$(window).load(function() {
    var configuredProfiles = JSON.parse(localStorage.getItem("Profiles")) || [];
    var configuredWebUrls = JSON.parse(localStorage.getItem("configuredWebUrls")) || [];
    var configuredProfilesLength = configuredProfiles.length;
    var configuredWebUrlsLength = configuredWebUrls.length;

    if(configuredWebUrlsLength <= 0){
       $("#Message").css({'display':'block'});
       window.location.href = "web.html";
    }

    else if(configuredProfilesLength > 0){
        window.location.href = "makenews_fb.html";
    }
});