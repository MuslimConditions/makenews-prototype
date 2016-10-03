$(document).ready(function(){
    var storiesList=[];
    var savedStories=$("#savedStories");
    storiesList=JSON.parse(localStorage.getItem("Stories"))||[];

    renderStories();

    function renderStories(){
        for(var i=0; i<storiesList.length; i++){
            var li="<li class='story'> <span class='story-title'>"+storiesList[i].title+"</span> <span class='story-content'>"+storiesList[i].content+"</span> </li>";
            renderStory(storiesList[i].title, storiesList[i].content);
        }
    }

    $("#u5078").click(function(){
        var title = document.getElementById("u5073_input").value;
        document.getElementsByClassName("story-box")[0].innerHTML = title;
        var data = document.getElementById("u5079_input").value;
        localStorage.setItem("story-title", title);
        localStorage.setItem("story-data", data);
    });

    $(".story-box-1").click(function(){
        $(".back_to_story_board_header").css({'display':'block'});
       document.getElementsByClassName("story-board")[0].style.display = 'none';
       document.getElementsByClassName("add-story")[0].style.display = 'block';
        document.getElementsByClassName('done-img')[0].style.pointerEvents = 'auto';
        document.getElementsByClassName("story-title")[0].value ="";
        document.getElementsByClassName("story-content")[0].value="";

    });
    $(document).on('click', '.story-box',function(){
        var title = this.innerText;
         $(".back_to_story_board_header").css({'display':'block'});
       document.getElementsByClassName("story-board")[0].style.display = 'none';
       document.getElementsByClassName("add-story")[0].style.display = 'block';
       document.getElementsByClassName('done-img')[0].style.pointerEvents = 'auto';
        document.getElementsByClassName("story-title")[0].value=title;
        storiesList.forEach(function(story){
            if(story.title === title){
                document.getElementsByClassName("story-content")[0].value=story.content;
            }
        });
        setInterval();
    });

    var myInterval = setInterval(function () {
            var storyTitle = ($(document.getElementsByClassName("add-story")).children())[0].value;
            var storyContent = ($(document.getElementsByClassName("add-story")).children())[1].value;
            console.log("content::"+storyContent);
            if(storyTitle !== ""){
                for(var i=0; i<storiesList.length; i++){
                   if(storyTitle === storiesList[i].title){
                       storiesList.splice(i,1);
                   }
                }
            storiesList.push({'title' :storyTitle, 'content' :storyContent });
            localStorage.setItem("Stories",JSON.stringify(storiesList));
            }

    },30000);

    $(document).on('click',".story-image-tag", function(e) {
        for(var i=0; i<storiesList.length; i++){
            if(e.srcElement.parentElement.innerText === storiesList[i].title){
                storiesList.splice(i,1);
            }
        }

        localStorage.setItem("Stories",JSON.stringify(storiesList));
        e.stopPropagation();
        var arrayElements = document.getElementsByClassName("story-board");
        this.parentElement.remove();
        window.location.reload();
    });

    $(".done-img").click(function(){
        clearInterval(myInterval);
        var storyTitle = ($(document.getElementsByClassName("add-story")).children())[0].value;
        var storyContent = ($(document.getElementsByClassName("add-story")).children())[1].value;
        if(storyTitle !== ""){
            for(var i=0; i<storiesList.length; i++){
               if(storyTitle === storiesList[i].title){
                   storiesList.splice(i,1);
               }
            }
            renderStory(storyTitle, storyContent);
            storiesList.push({'title' :storyTitle, 'content' :storyContent });
            localStorage.setItem("Stories",JSON.stringify(storiesList));

            document.getElementsByClassName("story-board")[0].style.display = 'block';
            document.getElementsByClassName("add-story")[0].style.display = 'none';
             $(".back_to_story_board_header").css({'display':'none'});
            document.getElementsByClassName('done-img')[0].style.pointerEvents = 'none';
            document.getElementsByClassName("story-title").value ="";
            document.getElementsByClassName("story-content").value="";

            window.location.reload();
       }
    });

    $("#u5880").click(function() {
    $(".done-img").click();
        window.location.href = "news_board__web.html";
    });

    $("#backToStoryBoardHeader").click(function() {
         $(".done-img").click();
        $(".add-story").css({'display':'none'});
        $(".story-board").css({'display':'block'});
        $(".back_to_story_board_header").css({'display':'none'});
    });


    function renderStory(title,content){
        var newBox = document.createElement('div');
        newBox.className = "story-box";
        newBox.innerHTML = title;
        var imageTag  = document.createElement('img');
        imageTag.src= 'images/news_board__collections/delete_u2816.png';
        imageTag.className = 'story-image-tag';
        newBox.appendChild(imageTag);
        var elements = document.getElementsByClassName('story-box');
        if (elements.length === 0) {
            newBox.style.marginTop='67px';
            newBox.style.marginLeft='256px';
            $(newBox).insertAfter(document.getElementsByClassName('story-box-1')[0]);
        }
        else {
            if (elements.length === 1) {
                newBox.style.marginTop = '67px';
            }
            $(newBox).insertAfter(document.getElementsByClassName('story-box')[elements.length - 1]);
        }

    }
});