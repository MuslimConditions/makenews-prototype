$(document).ready(function(){
  var $collectedArticles = $("#collectedArticles");

  // collectionsPopUp
  var $createNewCollectionLabel = $("#newCollectionLabel");
  var $newCollectionForm = $("#newCollectionForm");
  var $cancelCreateCollectionBtn = $("#newCollectionCancel");
  var $createNewCollectionBtn = $("#newCollectionCreate");
  var $collectionList = $("#collectionList");

  var collections = JSON.parse(localStorage.getItem("collections")) || {};
  var collectionNames = [];
  renderColletionList(collections);

  function renderColletionList(collections) {
    collectionNames = [];
    for (var collection in collections) { collectionNames.push(collection); }
    collectionNames.forEach(function(collection) {
      var $li = $("<li class='collection-item'>"+collection+"</li>");
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
    var $li = $("<li class='collection-item'>"+newCollectionName+"</li>");
    $collectionList.append($li);
    $newCollectionForm.hide();
  })

  $collectionList.click(function(event) {
    renderArticles(event.target.innerText);
  });

  var collectionArticles = collectionNames[0];
  renderArticles(collectionArticles);

  function renderArticles(collectionName) {
    $collectedArticles.empty();
    collections[collectionName].forEach(function(article){
      var $article = $("<div class='article'></div>");

      var $title = $("<div class='article__title'>"+article.title+"</div>");
      var $source = $("<div class='article__source'>"+article.source+"</div>");
      var $body = $("<div class='article__content'>"+article.content+"</div>");
      var $link = $("<div class='article__link'>Link: www.abcd.xyx.in</div>");
      var $date = $("<div class='article__date'>Created on 24 Sept, 2016</div>");

      $article.append($title).append($source).append($body).append($link).append($date);
      $collectedArticles.append($article);
    });
  }


});
