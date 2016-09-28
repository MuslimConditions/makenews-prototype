$(window).load(function() {
    var configuredProfiles = JSON.parse(localStorage.getItem("Profiles")) || [];
    var configuredWebUrls = JSON.parse(localStorage.getItem("configuredWebUrls")) || [];
    var configuredProfilesLength = configuredProfiles.length;
    var configuredWebUrlsLength = configuredWebUrls.length;

    if(configuredWebUrlsLength <= 0){
       window.location.href = "web.html";
       $("#Message").css({'display':'block'});
    }

    else if(configuredProfilesLength > 0){
        window.location.href = "makenews_fb.html";
    }
});