function isBookmarked(){

    var bookmarks_articles = JSON.parse(localStorage.getItem("bookmark_data")) || [];

    var count=0;
    var title=$(".article__title").text();
    var source=$(".article__source").text();

    for (var i=0; i< bookmarks_articles.length; i++) {
        if ((bookmarks_articles[i].title === title)&&(bookmarks_articles[i].source === source)) {
            count++;
        }
    }
    //alert(title+"  len::"+bookmarks_articles.length);
    if(count===0){
        $(".bookmarked").attr("src","images/news_board__web/u2085.png");
        console.log("plain")
    }

    if(count>0){
        //remove --normal image
        $(".bookmarked").attr("src","images/news_board__web/u2087.png");
        //$('.reset_bookmark').src = "../../../images/news_board__web/u2087.png";
        console.log("bold")
    }


}
