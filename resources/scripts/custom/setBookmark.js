$(document).ready(function(){
    var bookmark_articles=[];

    $("div[data-label='bookmark_add']").click(function(e){
        var title=$(".article__title").text();
        var source=$(".article__source").text();
        var body=$(".article__body").text();

        var bookmark_article={title : title, source: source, body : body};

        bookmark_articles.push(bookmark_article);
        //alert("added:: "+bookmark_articles.length);
        storeArticle();

    });

    $("div[data-label='bookmark_remove']").click(function(x) {
        var title=$(".article__title").text();

        for(var i=0; i<bookmark_articles.length; i++){
            if(bookmark_articles[i].title === title){
                bookmark_articles.splice(i,1);
            }

        }
        //alert("removed::"+bookmark_articles.length);
        storeArticle();

    });

    function storeArticle(){
        //console.log(bookmark_articles);
        var bookmarks = JSON.parse(localStorage.getItem("bookmark_data")) || [];
        bookmarks = bookmarks.concat(bookmark_articles);
        localStorage.setItem("bookmark_data", JSON.stringify(bookmarks));
    }


});