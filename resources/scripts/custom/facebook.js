$(document).ready(function(){
    //fb profiles
    var count = 1;var countPage = 1;var countGroup = 1;
    var configuredProfiles = [];
    var configuredFbProfiles=JSON.parse(localStorage.getItem("Profiles")) || [];

    var configuredFbGroups=JSON.parse(localStorage.getItem("Groups")) || [];
    var configuredFbPages=JSON.parse(localStorage.getItem("Pages")) || [];
    var fbProfilesList = $("#selected_fb_profiles");



    $(".add_to_fb_profile_configured").click(function(){
        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $(this)[0].id.split("_")[0];
        if(configuredProfiles.indexOf(url)=== -1){
            configuredProfiles.push(url);
            var temp = "profile" + count;
            configuredFbProfiles.push({"url":url, "id":id});
            console.log("pro:::"+configuredFbProfiles);
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
            if(configuredFbProfiles.indexOf(url) === -1) {
                configuredFbProfiles.push(url);
                add_to_profile_configured(url, $((child.children)[4])[0].id.split("_")[0]);
            }
        }
    });

    $(".remove_all_friends").click(function(){
       configuredFbProfiles=[];
       localStorage.setItem("Profiles",JSON.stringify(configuredFbProfiles));
       fbProfilesList.empty();
    });


    //fb groups
    var configuredGroups =[];
    var fbGroupsList = $("#selected_fb_groups");
    $(".add_to_fb_group_configured").click(function(){
//       var group = $(this).siblings()[1].textContent.trim();
//       if(!configuredGroups.has(group)){
//          configuredGroups.add(group);
//          var temp = "group" + countGroup;
//          localStorage.setItem(temp, group);
//          localStorage.setItem("countGroup", countGroup);
//          configuredFbGroups.push(group);
//          localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
//          countGroup++;
//          add_to_group_configured(this);
//       }

        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
        var id = $(this)[0].id.split("_")[0];
        if(configuredGroups.indexOf(url)=== -1){
            configuredGroups.push(url);
            var temp = "profile" + count;
            configuredFbGroups.push({"url":url, "id":id});
            localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
            localStorage.setItem(temp, url);
            localStorage.setItem("count", count);
            count++;
            add_to_group_configured(url,id)
        }
    });
    function add_to_group_configured(url,id){
       var li = $("<li data-id='"+id+"'>");
       li.append("<span class='squre-box-list-style'>");
       li.append(url);
       li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>")
       .click(".remove-selected-url", function(e) {removeConfiguredProfile(e, url)}));
//      fbProfilesList.append(li);
        fbGroupsList.append(li);

    }
    function removeConfiguredGroup(e,url){
//       $(label.children[0]).css({"display": "block", "visibility": "visible"});
//       $(label.children[1]).css({"display": "none", "visibility": "hidden"});
//       configuredGroups.delete(target.textContent);
//       remove(configuredFbGroups,target.textContent);
//       target.remove();
//       localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));

         remove(configuredGroups, url);
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
            var parents = $(this).parent().parent().parent().parent();
            for(var parent=1; parent<=18; parent++){
            var friend = (((parents.siblings())[parent]).children)[4];
                 var profile = $(friend).siblings()[1].textContent.trim();
                 if(!configuredGroups.has(profile)){
                     configuredGroups.add(profile);
                     add_to_group_configured(friend);
                     var temp = "group" + countGroup;
                    localStorage.setItem(temp, profile);
                    localStorage.setItem("countGroup", countGroup);
                    configuredFbGroups.push(profile);
                    localStorage.setItem("Groups",JSON.stringify(configuredFbGroups));
                    countGroup++;
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
    var configuredPages =[];
    var fbPagesList = $("#selected_fb_pages");
    $(".add_to_fb_page_configured").click(function(){
//        var page = $(this).siblings()[1].textContent.trim();
//        if(!configuredPages.has(page)){
//            configuredPages.add(page);
//            var temp = "pages" + countPage;
//            localStorage.setItem(temp, page);
//            localStorage.setItem("countPage", countPage);
//            configuredFbPages.push(page);
//            localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
//            countPage++;
//            add_to_pages_configured(this);
//         }

        var url=$(this).siblings(".paragraph").find(".text")[0].innerText.trim();
            var id = $(this)[0].id.split("_")[0];
            if(configuredPages.indexOf(url)=== -1){
                configuredPages.push(url);
                var temp = "profile" + count;
                configuredFbPages.push({"url":url, "id":id});
                localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
                localStorage.setItem(temp, url);
                localStorage.setItem("count", count);
                count++;
                add_to_pages_configured(url,id)
            }
    })
    function add_to_pages_configured(url,id){
//        var listItem = $('<li></li>');
//        listItem.append("<span class='squre-box-list-style'>");
//        listItem.append($(label).siblings()[1].textContent.trim());
//        listItem.append($("<span class='remove-selected-profile'><i class='fa fa-close'></i></span>")).click(function(){
//            removeConfiguredPage(this,label);
//        });
//        fbPagesList.append(listItem);
        var li = $("<li data-id='"+id+"'>");
        li.append("<span class='squre-box-list-style'>");
        li.append(url);
        li.append($("<span class='remove-selected-url'><i class='fa fa-close'></i></span>")
        .click(".remove-selected-url", function(e) {removeConfiguredProfile(e, url)}));
        fbPagesList.append(li);
    }
    function removeConfiguredPage(e,url){
//       $(label.children[0]).css({"display": "block", "visibility": "visible"});
//       $(label.children[1]).css({"display": "none", "visibility": "hidden"});
//       configuredPages.delete(target.textContent);
//       remove(configuredFbPages,target.textContent);
//        target.remove();
//        localStorage.setItem("Pages",JSON.stringify(configuredFbPages));

        remove(configuredFbPages, url);
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
        var parents = $(this).parent().parent().parent().parent();
        for(var parent=1; parent<=9; parent++){
            var friend = (((parents.siblings())[parent]).children)[4];
           var profile = $(friend).siblings()[1].textContent.trim();
           if(!configuredPages.has(profile)){
              configuredPages.add(profile);
              var temp = "pages" + countPage;
              localStorage.setItem(temp, profile);
              localStorage.setItem("countPage", countPage);
              configuredFbPages.push(profile);
              localStorage.setItem("Pages",JSON.stringify(configuredFbPages));
              countPage++;
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
        window.location.href = "./twitter.html";
    });
});