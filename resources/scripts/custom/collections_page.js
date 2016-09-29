$(document).ready(function(){
  var $collectedArticles = $("#collectedArticles");

  // collectionsPopUp
  var $createNewCollectionLabel = $("#newCollectionLabel");
  var $newCollectionForm = $("#newCollectionForm");
  var $cancelCreateCollectionBtn = $("#newCollectionCancel");
  var $createNewCollectionBtn = $("#newCollectionCreate");
  var $collectionList = $("#collectionList");
  var $collectionListFirstItem = null;
  var currentCollectionName;

  var collections = JSON.parse(localStorage.getItem("collections")) || {};
  var collectionNames = [];
  renderCollectionList(collections);
  renderFirstCollectionArticles();



  function renderCollectionList(collections) {
    collectionNames = [];
    for (var collection in collections) { collectionNames.push(collection); }
    collectionNames.forEach(function(collection) {
      var $li = $("<li class='collection-item'>"+collection+"<span id = 'removeCollection' class = 'remove_collection'><i class='fa fa-times'></i></span></li>");
      $collectionList.append($li);
    });
  }

  $createNewCollectionLabel.click(function() {
    $newCollectionForm.show();
  });

  $cancelCreateCollectionBtn.click(function() {
    $newCollectionForm.hide();
  });

  $createNewCollectionBtn.click(function() {
    var newCollectionName = $("#newCollectionName").val();
    $("#newCollectionName").val("");
    collections[newCollectionName] = []
    localStorage.setItem("collections", JSON.stringify(collections));
    var $li = $("<li class='collection-item'>"+newCollectionName+"<span class = 'remove_collection' ><i class='fa fa-times'></i></span></li>");
    $collectionList.append($li);
    $newCollectionForm.hide();
  });

  $collectionList.click(function(event) {
    console.log(event);
        console.log(event.srcElement.className);

    if(event.srcElement.className === "fa fa-times") {
       console.log("in if");
        var removeCollectionName = (($(event.srcElement).parent().parent())[0].innerText);
        removeCollectionFn(removeCollectionName);
    }
    else {
        console.log("in else");
         $(event.target).addClass("current");
         currentCollectionName = event.target.innerText;
        collectionListFirstItem.className = "collection-item";
        collectionListFirstItem = event.target;

        renderArticles(currentCollectionName);
    }
  });



  function renderArticles(collectionName) {
    $collectedArticles.empty();
    collections[collectionName].forEach(function(article){
      var $article = $("<div class='article'></div>");

      var $remove = $("<div id='removeArticle' class='remove-article'><img src='images/news_board__collections/delete_u2816.png'/></div>").click(function(event) {
        removeArticle(article.id, event);
      });
      var $title = $("<div class='article__title'>"+article.title+"</div>");
      var $source = $("<div class='article__source'>"+article.source+"</div>");
      var $body = $("<div class='article__content'>"+article.content+"</div>");
      var $link = $("<div class='article__link'>Link: www.abcd.xyx.in</div>");
      var $date = $("<div class='article__date'>Created on 24 Sept, 2016</div>");

      $article.append($remove).append($title).append($source).append($body).append($link).append($date);
      $collectedArticles.append($article);
    });
  }

  function removeArticle(id, event) {
    var temp = removeFromArray(collections[currentCollectionName], id);
    collections[currentCollectionName] = temp;

    localStorage.setItem("collections", JSON.stringify(collections));
    $(event.currentTarget).parent().remove();
  }

  function removeFromArray(arr, id) {
      for(var i = arr.length; i--;) {
          if(arr[i].id === id) {
              arr.splice(i, 1);
              break;
          }
      }
      return arr;
  }

  function renderFirstCollectionArticles(){
     if(collectionNames.length > 0){
         currentCollectionName = collectionNames[0];
         renderArticles(currentCollectionName);
         collectionListFirstItem = $(".collection-item")[0];
         collectionListFirstItem.className = "collection-item current";
     }
  }
  $("#u2925").click(function(){
    window.location.href = "news_board__bookmarks.html";
  })

  $("#u2921").click(function(){
    window.location.href = "news_board__twitter.html";
  })

  $("#u2919").click(function(){
    window.location.href = "news_board__facebook.html";
  })

  $("#u2917").click(function(){
    window.location.href = "news_board__web.html";
  })

    $("#u2908").click(function() {
        window.location.href = "story_board.html";
    });

    $("#u2910").click(function() {
        window.location.href = "web.html";
    });

    function removeCollectionFn(name){
        delete collections[name];
        localStorage.setItem("collections",JSON.stringify(collections));
        window.location.reload();
    }
});
