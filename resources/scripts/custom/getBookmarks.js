$(document).ready(function () {

    var cList = $('#bookmark_articles');

    var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data")) || [];

     if(bookmarkList.length > 0){
        $(".article__body").text(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);
        $(".article__title").text(JSON.parse(localStorage.getItem("bookmark_data"))[0].title);
        $(".article__source").text(JSON.parse(localStorage.getItem("bookmark_data"))[0].source);
         $(".article__image").css({'visibility':'visible'});
        $("#u2873_div").css({'display':'block'});
        $("#u2885").css({'display':'block'});
        $("#u2877").css({'display':'block'});

     }

    for (var index = 0; index < bookmarkList.length; index++) {
        var source = bookmarkList[index].source;
        var title = bookmarkList[index].title;
        var body = bookmarkList[index].body;

        createListItem(title,body,source);

    }

    function createListItem(title,body,source){
        var li = $("<li class='bookmark__item'><p class='bookmark__item__title'>" + title
                    + "</p><p class='bookmark__item__summary'>" + body.slice(0,100)
                    + "</p><p class='bookmark__item__body' style = 'display: none'>"+ body
                    + "</p><div class='bookmark__item__source-date'><span id='bookmark__item__source'>"
                    + source + "</span> | Aug 21, 2016, 08.23 PM IST</div></li>");
        cList.append(li);

    }


    $(".bookmark__item").click(function (event) {
        showSelectedArticle(event)
    });

    function showSelectedArticle(event) {
        var $currentItem = $(event.currentTarget);
        $(".article__title").text($currentItem.find(".bookmark__item__title").text());
        $(".article__source").text($currentItem.find("#bookmark__item__source").text());
        $(".article__body").text($currentItem.find(".bookmark__item__body").text());
        $(".article__image").css({'visibility':'visible'});
        $("#u2873_div").css({'display':'block'});
        $("#u2885").css({'display':'block'});
        $("#u2877").css({'display':'block'});
        //$(".article__body").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);
    }

    $("div[data-label='bookmark']").click(function(e){
        title= $(".article__title").text();
        source= $(".article__source").text();
        removeArticle(bookmarkList,title,source);
        console.log(title);
        location.reload();
    });



    $("#u2857").click(function() {
      window.location.href = "news_board__web.html";
    });

    $("#u2859").click(function() {
      window.location.href = "news_board__facebook.html";
    });

    $("#u2861").click(function() {
      window.location.href = "news_board__twitter.html";
    });

    $("#u2863").click(function() {
      window.location.href = "news_board__collections.html";
    });

    $("#u2848").click(function() {
        window.location.href = "story_board.html";
    });

    $("#u2850").click(function() {
            window.location.href = "web.html";
    });

     $("#u2884_state0").click(function() {
            $("#RemovedFromBookmarks").css({'display':'block'});
    });

    $("#u2838").click(function (){
        $("#u2838_img").css({'visibility' : 'hidden'});
        $("#searchCancel").css({'display' : 'block'});
        var keyword=$("#u2837_input").val();
        console.log(keyword);
        cList.empty();
        bookmarkList.forEach(function(url,index){
                console.log(url.title);
                console.log(url.body);

               if((url.title.indexOf(keyword) !== -1) || (url.body.indexOf(keyword) !== -1)){
                   createListItem(url.title,url.body,url.source);
               }
           });
        });

          $("#searchCancel").click(function(){
                window.location.reload();
    });
});
