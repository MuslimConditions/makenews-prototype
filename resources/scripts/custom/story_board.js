$(document).ready(function(){
    $("#u5078").click(function(){
        var title = document.getElementById("u5073_input").value;
        document.getElementsByClassName("story-box")[0].innerHTML = title;
        var data = document.getElementById("u5079_input").value;
        localStorage.setItem("story-title", title);
        localStorage.setItem("story-data", data);
    });
    $(".story-box-1").click(function(){
       document.getElementsByClassName("story-board")[0].style.display = 'none';
       document.getElementsByClassName("add-story")[0].style.display = 'block';
        document.getElementsByClassName('done-img')[0].style.pointerEvents = 'auto';

    });
    $(document).on('click', '.story-box',function(){
       document.getElementsByClassName("story-board")[0].style.display = 'none';
       document.getElementsByClassName("add-story")[0].style.display = 'block';
       document.getElementsByClassName('done-img')[0].style.pointerEvents = 'auto';
        document.getElementsByClassName("story-title")[0].value=this.innerText;
        document.getElementsByClassName("story-content")[0].value=localStorage.getItem(this.innerHTML);

    });

    $(document).on('click',".story-image-tag", function(e) {
        e.stopPropagation();
        var arrayElements = document.getElementsByClassName("story-board");
        this.parentElement.remove();
    });

    $(".done-img").click(function(){
        if(localStorage.getItem(document.getElementsByClassName("story-title")[0].value) == null){
            var newBox = document.createElement('div');
            newBox.className = "story-box";
            newBox.innerHTML = document.getElementsByClassName("story-title")[0].value;
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
        localStorage.setItem(document.getElementsByClassName("story-title")[0].value, document.getElementsByClassName("story-content")[0].value);
        document.getElementsByClassName("story-board")[0].style.display = 'block';
        document.getElementsByClassName("add-story")[0].style.display = 'none';
        document.getElementsByClassName('done-img')[0].style.pointerEvents = 'none';
        document.getElementsByClassName("story-title")[0].value ="Story Title";
        document.getElementsByClassName("story-content")[0].value="";


    });

    $("#u5880").click(function() {
        window.location.href = "news_board__web.html";
    });
});