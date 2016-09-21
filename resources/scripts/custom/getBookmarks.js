$(document).ready(function () {

        var cList = $('ul.myBookmarks');

        var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data"));
        for (var index = 0; index < bookmarkList.length; index++) {
            var li = "<li>";
            li+=("<b>"+bookmarkList[index].title+"</b>"+"</br>"+"</br>");
            li+=(bookmarkList[index].body.slice(0,100)+"</br>"+"</br>");
            li+=(bookmarkList[index].source+"</br>");
            li+="</li>";
            li+="<hr>";
            cList.append(li);


        }

    $(".article__title").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].title);
    $(".article__source").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].source);
    $(".article__body").replaceWith(JSON.parse(localStorage.getItem("bookmark_data"))[0].body);

    }
);