$(document).ready(function(){
    //fb profiles
    var count = 1;var countPage = 1;var countGroup = 1;
    var configuredProfiles = [];
    var configuredGroups =[];
    var configuredPages =[];
    var configuredFbProfiles=JSON.parse(localStorage.getItem("Profiles")) || [];

    var configuredFbGroups=JSON.parse(localStorage.getItem("Groups")) || [];
    var configuredFbPages=JSON.parse(localStorage.getItem("Pages")) || [];
    var fbProfilesList = $("#selected_fb_profiles");
    var fbGroupsList = $("#selected_fb_groups");
    var fbPagesList = $("#selected_fb_pages");

    fbGroupsList.hide();
    fbPagesList.hide();
     for(var i in configuredFbProfiles){
        configuredProfiles.push(configuredFbProfiles[i].url);
        add_to_profile_configured(configuredFbProfiles[i].url, configuredFbProfiles[i].id);
      }

      for(var j in configuredFbGroups){
        configuredGroups.push(configuredFbGroups[j].url);
        add_to_group_configured(configuredFbGroups[j].url, configuredFbGroups[j].id);
      }

      for(var k in configuredFbPages){
        configuredPages.push(configuredFbPages[k].url);
        add_to_pages_configured(configuredFbPages[k].url, configuredFbPages[k].id);
      }

    $(".add_to_fb_profile_configured").click(function(){
        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $(this)[0].id.split("_")[0];
        if(configuredProfiles.indexOf(url)=== -1){
            configuredProfiles.push(url);
            var temp = "profile" + count;
            configuredFbProfiles.push({"url":url, "id":id});
            localStorage.setItem("Profiles",JSON.stringify(configuredFbProfiles));
            localStorage.setItem(temp, url);
            localStorage.setItem("count", count);
            count++;
            add_to_profile_configured(url,id)
        }
    });

    function add_to_profile_configured(url,id){
        var li = $("<li data-id='"+id+"'>");
        li.append("<span class='squre-box-list-style'>");
        li.append(url);
        li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>")
        .click(".remove-selected-url", function(e) {removeConfiguredProfile(e, url)}));
        fbProfilesList.append(li);
    }

    function removeConfiguredProfile(e,url){
        remove(configuredFbProfiles, url);
        removeOnArray(configuredProfiles,url);
        e.currentTarget.parentNode.remove();
        localStorage.setItem("Profiles",JSON.stringify(configuredFbProfiles));
        $("#"+e.currentTarget.parentNode.dataset.id+"_state0").css({"display": "block", "visibility": "visible"});
        $("#"+e.currentTarget.parentNode.dataset.id+"_state1").css({"display": "none", "visibility": "hidden"});
    }
    $(".profile_down").click(function(){
        $(this).parent().siblings().show();
        $(".profile_up").css({"display": "block","visibility": "visible"});
        $(".profile_down").css({"display": "none","visibility": "hidden"});
    });
    $(".profile_up").click(function(){
        $(this).parent().siblings().hide();
        $(".profile_down").css({"display": "block","visibility": "visible"});
        $(".profile_up").css({"display": "none","visibility": "hidden"});
    });
    $(".add_all_friends").click(function(x){
        var addParent = this.parentElement;
        var parentSiblings = addParent.parentElement.children;
        for(var i=1; i<=21;i++){
            var child = parentSiblings[i];
            var add = (child.children)[4];
            var url = $((add.children)[0]).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
            var id = $((child.children)[4])[0].id.split("_")[0];
            if(configuredProfiles.indexOf(url) === -1) {
                 configuredProfiles.push(url);
                configuredFbProfiles.push({"url":url,"id":id});
                var temp = "profile" + count;
                localStorage.setItem(temp, url);
                localStorage.setItem("count", count);
                count++;
                add_to_profile_configured(url,id );
            }
        }
         localStorage.setItem("Profiles",JSON.stringify(configuredFbProfiles));
    });

    $(".remove_all_friends").click(function(){
       configuredFbProfiles=[];
       configuredProfiles=[];
       localStorage.setItem("Profiles",JSON.stringify(configuredFbProfiles));
       fbProfilesList.empty();
    });


    //fb groups

    $(".add_to_fb_group_configured").click(function(){
        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $(this)[0].id.split("_")[0];
        if(configuredGroups.indexOf(url)=== -1){
            configuredGroups.push(url);
            var temp = "group" + countGroup;
            configuredFbGroups.push({"url":url, "id":id});
            localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
            localStorage.setItem(temp, url);
            localStorage.setItem("count", countGroup);
            countGroup++;
            add_to_group_configured(url,id)
        }
    });

    function add_to_group_configured(url,id){
       var li = $("<li data-id='"+id+"'>");
       li.append("<span class='squre-box-list-style'>");
       li.append(url);
       li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>")
       .click(".remove-selected-url", function(e) {removeConfiguredGroup(e, url)}));

        fbGroupsList.append(li);

    }
    function removeConfiguredGroup(e,url){
        remove(configuredFbGroups, url);
        removeOnArray(configuredGroups,url);
        e.currentTarget.parentNode.remove();
        localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
        $("#"+e.currentTarget.parentNode.dataset.id+"_state0").css({"display": "block", "visibility": "visible"});
        $("#"+e.currentTarget.parentNode.dataset.id+"_state1").css({"display": "none", "visibility": "hidden"});
    }
    $(".group_down").click(function(){
       $(this).parent().siblings().show();
       $(".group_up").css({"display": "block", "visibility": "visible"});
       $(".group_down").css({"display": "none", "visibility": "hidden"});
    });
    $(".group_up").click(function(){
       $(this).parent().siblings().hide();
       $(".group_down").css({"display": "block", "visibility": "visible"});
       $(".group_up").css({"display": "none", "visibility": "hidden"});
    });
    $(".add_all_groups").click(function(){
            var addParent = this.parentElement;
            var parentSiblings = addParent.parentElement.children;
            for(var i=1; i<=18;i++){
                var child = parentSiblings[i];
                var add = (child.children)[4];
                var url = $((add.children)[0]).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
                var id = $((child.children)[4])[0].id.split("_")[0];
                if(configuredGroups.indexOf(url) === -1) {
                     configuredGroups.push(url);
                    configuredFbGroups.push({"url":url,"id":id});
                    var temp = "group" + countGroup;
                    localStorage.setItem(temp, url);
                    localStorage.setItem("count", countGroup);
                    countGroup++;
                    add_to_group_configured(url,id );
                }
            }
             localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
    });
    $(".remove_all_groups").click(function(){
        configuredFbGroups=[];
        configuredGroups=[];
         localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
        fbGroupsList.empty();
    });

    // fb pages
    $(".add_to_fb_page_configured").click(function(){
        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
            var id = $(this)[0].id.split("_")[0];
            if(configuredPages.indexOf(url)=== -1){
                configuredPages.push(url);
                var temp = "pages" + countPage;
                configuredFbPages.push({"url":url, "id":id});
                localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
                localStorage.setItem(temp, url);
                localStorage.setItem("count", countPage);
                countPage++;
                add_to_pages_configured(url,id)
            }
    })
    function add_to_pages_configured(url,id){
        var li = $("<li data-id='"+id+"'>");
        li.append("<span class='squre-box-list-style'>");
        li.append(url);
        li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>")
        .click(".remove-selected-url", function(e) {removeConfiguredPage(e, url)}));
        fbPagesList.append(li);
    }
    function removeConfiguredPage(e,url){
        remove(configuredFbPages, url);
        removeOnArray(configuredPages,url);
        e.currentTarget.parentNode.remove();
        localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
        $("#"+e.currentTarget.parentNode.dataset.id+"_state0").css({"display": "block", "visibility": "visible"});
        $("#"+e.currentTarget.parentNode.dataset.id+"_state1").css({"display": "none", "visibility": "hidden"});
    }
    $(".page_down").click(function(){
        $(this).parent().siblings().show();
        $(".page_up").css({"display": "block","visibility": "visible"});
        $(".page_down").css({"display": "none","visibility": "hidden"});
    });
    $(".page_up").click(function(){
        $(this).parent().siblings().hide();
        $(".page_down").css({"display": "block","visibility": "visible"});
        $(".page_up").css({"display": "none","visibility": "hidden"});
    });
    $(".add_all_pages").click(function(){
         var addParent = this.parentElement;
        var parentSiblings = addParent.parentElement.children;
        for(var i=1; i<=9;i++){
            var child = parentSiblings[i];
            var add = (child.children)[4];
            var url = $((add.children)[0]).parent().siblings(".paragraph").find(".text")[0].innerText.trim();
            var id = $((child.children)[4])[0].id.split("_")[0];
            if(configuredPages.indexOf(url) === -1) {
                 configuredPages.push(url);
                configuredFbPages.push({"url":url,"id":id});
                var temp = "pages" + countPage;
                localStorage.setItem(temp, url);
                localStorage.setItem("count", countPage);
                countPage++;
                add_to_pages_configured(url,id );
            }
        }
         localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
    });
    $(".remove_all_pages").click(function(){
        configuredFbPages=[];
        configuredPages = [];
     localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
    fbPagesList.empty();
    });

 function remove(arr, item) {
       for(var i = arr.length; i--;) {
           if(arr[i].url === item) {
               arr.splice(i, 1);
           }
       }
   }

   function removeOnArray(arr1, item) {
       for(var i = arr1.length; i--;) {
           if(arr1[i] === item) {
               arr1.splice(i, 1);
           }
       }
   }

    $("#u14222").click(function() {
       if((configuredFbProfiles.length > 0) && (configuredFbGroups.length>0) && (configuredFbPages.length>0)){
            var configuredTwitterUrlsLength = (JSON.parse(localStorage.getItem("configuredTwitterUrls"))).length;
            if(configuredTwitterUrlsLength > 0){
                window.location.href = "twitter.html";
             }
             else{
                window.location.href = "tweet.html";
                }
       }
       else{
            $("#Message").css({'display':'block'});
       }
    });

    $("#removeMessage").click(function() {
        $("#Message").css({'display':'none'});
    });

    $("#u812").click(function(){
         $(".profile_down").click();
         $(".page_up").click();
         $(".group_up").click();
    });

    $("#u1398").click(function(){
         $(".profile_down").click();
         $(".page_up").click();
         $(".group_up").click();
    });

    $("#u1123").click(function(){
         $(".profile_down").click();
         $(".page_up").click();
         $(".group_up").click();
    });

    $("#u808").click(function(){
         $(".profile_up").click();
         $(".group_down").click();
         $(".page_up").click();
    });

    $("#u1400").click(function(){
         $(".profile_up").click();
         $(".group_down").click();
         $(".page_up").click();
    });

    $("#u810").click(function(){
         $(".profile_up").click();
         $(".group_up").click();
         $(".page_down").click();
    });

    $("#u1127").click(function(){
         $(".profile_up").click();
         $(".group_up").click();
         $(".page_down").click();
    });

});