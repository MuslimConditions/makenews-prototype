$(document).ready(function(){
    //fb profiles
    var count = 1;var countPage = 1;var countGroup = 1;
    var configuredProfiles =new Set();
    var fbProfilesList = $("#selected_fb_profiles");
    $(".add_to_fb_profile_configured").click(function(){
        var profile = $(this).siblings()[1].textContent.trim();
        if(!configuredProfiles.has(profile)){
            configuredProfiles.add(profile);
            add_to_profile_configured(this);
        }
    });
    function add_to_profile_configured(label){
        var listItem = $('<li></li>');
        listItem.append("<span class='squre-box-list-style'>");
        listItem.append($(label).siblings()[1].textContent.trim());
        listItem.append($("<span class='remove-selected-profile'><i class='fa fa-close'></i></span>")).click(function(){
        removeConfiguredProfile(this,label);
        });
        fbProfilesList.append(listItem);
        var temp = "profile" + count++;
        localStorage.setItem(temp, listItem[0].innerText);
        localStorage.setItem("count", count);
    }
    function removeConfiguredProfile(target,label){
        $(label.children[0]).css({"display": "block", "visibility": "visible"});
        $(label.children[1]).css({"display": "none", "visibility": "hidden"});
        configuredProfiles.delete(target.textContent);
        target.remove();
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
    $(".add_all_friends").click(function(){
        var parents = $(this).parent().parent().parent().parent();

        for(var parent=1; parent<=21; parent++){
             var friend = (((parents.siblings())[parent]).children)[4];
             var profile = $(friend).siblings()[1].textContent.trim();
             if(!configuredProfiles.has(profile)){
                 configuredProfiles.add(profile);
                 add_to_profile_configured(friend);
             }
        }
    });
    $(".remove_all_friends").click(function(){
        var parents = $(this).parent().parent().parent().parent();
        var childsLength = fbProfilesList.children().length;
        for(var child=1; child <= 21; child++){
            var friend = (((parents.siblings())[child]).children)[4];
            removeConfiguredProfile((fbProfilesList.children())[0],friend);
        }
    });
    //fb groups
    var configuredGroups =new Set();
    var fbGroupsList = $("#selected_fb_groups");
    $(".add_to_fb_group_configured").click(function(){
       var group = $(this).siblings()[1].textContent.trim();
       if(!configuredGroups.has(group)){
          configuredGroups.add(group);
          add_to_group_configured(this);
       }
    });
    function add_to_group_configured(label){
       var listItem = $('<li></li>');
       listItem.append("<span class='squre-box-list-style'>");
       listItem.append($(label).siblings()[1].textContent.trim());
       listItem.append($("<span class='remove-selected-profile'><i class='fa fa-close'></i></span>")).click(function(){
            removeConfiguredGroup(this,label);
        });
        fbGroupsList.append(listItem);
        var temp = "group" + countGroup++;
        localStorage.setItem(temp, listItem[0].innerText);
        localStorage.setItem("countGroup", countGroup);
    }
    function removeConfiguredGroup(target,label){
       $(label.children[0]).css({"display": "block", "visibility": "visible"});
       $(label.children[1]).css({"display": "none", "visibility": "hidden"});
       configuredGroups.delete(target.textContent);
       target.remove();
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
            var parents = $(this).parent().parent().parent().parent();
            for(var parent=1; parent<=18; parent++){
            var friend = (((parents.siblings())[parent]).children)[4];
                 var profile = $(friend).siblings()[1].textContent.trim();
                 if(!configuredGroups.has(profile)){
                     configuredGroups.add(profile);
                     add_to_group_configured(friend);
                 }
            }
        });
        $(".remove_all_groups").click(function(){
            var parents = $(this).parent().parent().parent().parent();
            var childsLength = fbGroupsList.children().length;
            for(var child=1; child <= 18; child++){
                var friend = (((parents.siblings())[child]).children)[4];
                console.log(friend);
                removeConfiguredGroup((fbGroupsList.children())[0],friend);
            }
        });
    // fb pages
    var configuredPages =new Set();
    var fbPagesList = $("#selected_fb_pages");
    $(".add_to_fb_page_configured").click(function(){
        var page = $(this).siblings()[1].textContent.trim();
        if(!configuredPages.has(page)){
            configuredPages.add(page);
            add_to_pages_configured(this);
         }
    })
    function add_to_pages_configured(label){
        var listItem = $('<li></li>');
        listItem.append("<span class='squre-box-list-style'>");
        listItem.append($(label).siblings()[1].textContent.trim());
        listItem.append($("<span class='remove-selected-profile'><i class='fa fa-close'></i></span>")).click(function(){
            removeConfiguredPage(this,label);
        });
        fbPagesList.append(listItem);
        var temp = "pages" + countPage++;
        localStorage.setItem(temp, listItem[0].innerText);
        localStorage.setItem("countPage", countPage);
    }
    function removeConfiguredPage(target,label){
       $(label.children[0]).css({"display": "block", "visibility": "visible"});
       $(label.children[1]).css({"display": "none", "visibility": "hidden"});
       configuredPages.delete(target.textContent);
        target.remove();
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
        var parents = $(this).parent().parent().parent().parent();
        for(var parent=1; parent<=9; parent++){
            var friend = (((parents.siblings())[parent]).children)[4];
           var profile = $(friend).siblings()[1].textContent.trim();
           if(!configuredPages.has(profile)){
              configuredPages.add(profile);
              add_to_pages_configured(friend);
           }
        }
    });
    $(".remove_all_pages").click(function(){
        var parents = $(this).parent().parent().parent().parent();
        var childsLength = fbPagesList.children().length;
        for(var child=1; child <= 9; child++){
        var friend = (((parents.siblings())[child]).children)[4];
             removeConfiguredPage((fbPagesList.children())[0],friend);
        }
    });

    $("#u14222").click(function() {
        window.location.href = "./twitter.html";
    });
});