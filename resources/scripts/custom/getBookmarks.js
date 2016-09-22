$(document).ready(function () {

        var cList = $('#bookmark_articles');

        var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data"));
        //var body=bookmarkList[0].body.slice(0,100);

        for (var index = 0; index < bookmarkList.length; index++) {
            var title = bookmarkList[index].title;
            var source = bookmarkList[index].source;
            var body=bookmarkList[index].body.slice(0,100);

            var li =$("<li class='bookmark__item'><p class='bookmark__item__title'>"+title
                    +"</p><p class='bookmark__item__summary'>"+body
                    +"</p><div class='bookmark__item__source-date'><span id='bookmark__item__source'>"
                    +source+"</span> | Aug 21, 2016, 08.23 PM IST</div></li>");
            cList.append(li);

        }

         $(".bookmark__item").click(function(event){showSelectedArticle(event)});

         function showSelectedArticle(event) {
            var $currentItem = $(event.currentTarget);
            $(".article__title").text($currentItem.find(".bookmark__item__title").text());
            $(".article__source").text($currentItem.find("#bookmark__item__source").text());
         }

    $(".article__body").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);

    });