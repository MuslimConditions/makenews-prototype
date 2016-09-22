$(document).ready(function(){
  // collectionsPopUp
  var $createNewCollectionLabel = $("#newCollectionLabel");
  var $newCollectionForm = $("#newCollectionForm");
  var $cancelCreateCollectionBtn = $("#newCollectionCancel");
  var $createNewCollectionBtn = $("#newCollectionCreate");
  var $collectionList = $("#collectionList");

  var collections = JSON.parse(localStorage.getItem("collections")) || {};
  renderColletionList(collections);

  function renderColletionList(collections) {
    var collectionNames = [];
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
    console.log(event.target.innerText);
  });




});
