$(document).ready(function () {

    var cList = $('#bookmark_articles');

    var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data"));

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
        removeArticle(bookmarkList,title);
        console.log(title);
        location.reload();
    });

    $(".article__body").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);

});