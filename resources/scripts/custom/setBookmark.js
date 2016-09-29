$(document).ready(function(){
    var bookmarks_articles=[];

    bookmarks_articles = JSON.parse(localStorage.getItem("bookmark_data")) || [];

    $("div[data-label='bookmark_add']").click(function(e){
        var title=$(".article__title").text();
        var source=$(".article__source").text();
        var body=$(".article__body").text();

        var bookmark_article={title : title, source: source, body : body};

        var count=0;
        for (var i=0; i< bookmarks_articles.length; i++) {
            if ((bookmarks_articles[i].title === title)&&(bookmarks_articles[i].source === source)) {
                 count++;
            }
        }

        if(count===0){
            bookmarks_articles.push(bookmark_article);
            $(".bookmarked").attr("src","images/news_board__web/u2087.png");
            console.log(bookmark_article+"Pushed to array");
        }

        if(count>0){
            removeArticle(bookmarks_articles, title,source);
        }

        storeArticle();

    });

    $("div[data-label='bookmark_remove']").click(function(x) {
        var title=$(".article__title").text();
        var source=$(".article__source").text();

        removeArticle(bookmarks_articles, title, source);


    });

    function storeArticle(){
        localStorage.setItem("bookmark_data", JSON.stringify(bookmarks_articles));
    }

    $("#u2084_state0").click(function() {
        $("#addedToBookmarks").css({'display':'block'});
    });

    $("#u2691_state0").click(function() {
            $("#addedToBookmarks").css({'display':'block'});
        });


    $("#addBookmark").click(function() {
        $("#addedToBookmarks").css({'display':'none'});
    });

    $("#u2084_state1").click(function() {
        $("#RemovedFromBookmarks").css({'display':'block'});
    });

    $("#u2691_state1").click(function() {
        $("#RemovedFromBookmarks").css({'display':'block'});
    });

    $("#removeBookmark").click(function() {
        $("#RemovedFromBookmarks").css({'display':'none'});
    });

});

function removeArticle(bookmarks_articles, title, source) {
    for (var i = 0; i < bookmarks_articles.length; i++) {
        if ((bookmarks_articles[i].title === title)&&(bookmarks_articles[i].source === source)) {
            bookmarks_articles.splice(i, 1);
        }

    }
    $(".bookmarked").attr("src","images/news_board__web/u2085.png");
    localStorage.setItem("bookmark_data", JSON.stringify(bookmarks_articles));
}
