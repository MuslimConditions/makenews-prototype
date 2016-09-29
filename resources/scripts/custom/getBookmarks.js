$(document).ready(function () {

    var cList = $('#bookmark_articles');

    var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data")) || [];

    for (var index = 0; index < bookmarkList.length; index++) {
        var source = bookmarkList[index].source;
        var title = bookmarkList[index].title;
        var body = bookmarkList[index].body.slice(0, 100);

        var li = $("<li class='bookmark__item'><p class='bookmark__item__title'>" + title
            + "</p><p class='bookmark__item__summary'>" + body
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
    }

    $("div[data-label='bookmark']").click(function(e){
        title= $(".article__title").text();
        source= $(".article__source").text();
        removeArticle(bookmarkList,title,source);
        console.log(title);
        location.reload();
    });

         if(bookmarkList.length > 0){
           $(".article__body").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);
         }

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

        $("#removeBookmark").click(function() {
            $("#RemovedFromBookmarks").css({'display':'none'});
        });


});
