$(document).ready(function(){
  var $articleBody = $(".article__body")[0];
  var $addToCollectionPopUp = $("#addToCollectionPopUp");
  var selectedText = "";
  var $addToCollection = $("#addToCollection");
  var $copySelectedText = $("#copySelectedText");

  // collectionsPopUp
  var $createNewCollectionLabel = $("#newCollectionLabel");
  var $newCollectionForm = $("#newCollectionForm");
  var $collectionsPopUp = $("#collectionsPopUp");
  var $cancelCreateCollectionBtn = $("#newCollectionCancel");
  var $createNewCollectionBtn = $("#newCollectionCreate");
  var $collectionList = $("#collectionList");
  var $addWholeArticleToCollection = $($(".add-whole-article-to-collection")[0]);
  var $toast = $("#toast");
  var $closeToast = $("#closeToast");


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

  $($articleBody).on("mouseup", function(event) {
    selectedText = getSelectedTextWithin($articleBody);
    if (selectedText.length !== 0) {
        $addToCollectionPopUp.css({left: event.clientX+"px", top: event.clientY+"px"});
        $addToCollectionPopUp.show();
    } else {
      $addToCollectionPopUp.hide();
    }
  });

  $createNewCollectionLabel.click(function() {
    $newCollectionForm.show();
  });

  $cancelCreateCollectionBtn.click(function() {
    $newCollectionForm.hide();
  });

  $createNewCollectionBtn.click(function() {
    var article = {
      "id": 0,
      "title": $(".article__title").text().trim(),
      "source": $(".article__source").text().trim(),
      "content": selectedText
    }
    var newCollectionName = $("#newCollectionName").val();
    $("#newCollectionName").val("");
    collections[newCollectionName] = [article];
    localStorage.setItem("collections", JSON.stringify(collections));
    var $li = $("<li class='collection-item'>"+newCollectionName+"</li>");
    $collectionList.append($li);
    $newCollectionForm.hide();
    $collectionsPopUp.hide();
    $toast.show();
  })

  $addToCollection.click(function() {
    $addToCollectionPopUp.hide();
    $collectionsPopUp.show();
  });

  $addWholeArticleToCollection.click(function() {
    selectedText = $(".article__body").text();
    $collectionsPopUp.show();
  });

  $collectionList.click(function(event) {
    var article = {
      "id": collections[event.target.innerText].length,
      "title": $(".article__title").text().trim(),
      "source": $(".article__source").text().trim(),
      "content": selectedText
    }
    collections[event.target.innerText].push(article);
    $collectionsPopUp.hide();
    $toast.show();
    localStorage.setItem("collections", JSON.stringify(collections));
  });

  $copySelectedText.click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(selectedText).select();
    document.execCommand("copy");
    $temp.remove();
    $addToCollectionPopUp.hide();
  });

  $closeToast.click (function() {
    $toast.hide();
  })

  function getSelectedTextWithin(el) {
    var selectedText = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection(), rangeCount;
        if ( (rangeCount = sel.rangeCount) > 0 ) {
            var range = document.createRange();
            for (var i = 0, selRange; i < rangeCount; ++i) {
                range.selectNodeContents(el);
                selRange = sel.getRangeAt(i);
                if (selRange.compareBoundaryPoints(range.START_TO_END, range) == 1 && selRange.compareBoundaryPoints(range.END_TO_START, range) == -1) {
                    if (selRange.compareBoundaryPoints(range.START_TO_START, range) == 1) {
                        range.setStart(selRange.startContainer, selRange.startOffset);
                    }
                    if (selRange.compareBoundaryPoints(range.END_TO_END, range) == -1) {
                        range.setEnd(selRange.endContainer, selRange.endOffset);
                    }
                    selectedText += range.toString();
                }
            }
        }
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        var selTextRange = document.selection.createRange();
        var textRange = selTextRange.duplicate();
        textRange.moveToElementText(el);
        if (selTextRange.compareEndPoints("EndToStart", textRange) == 1 && selTextRange.compareEndPoints("StartToEnd", textRange) == -1) {
            if (selTextRange.compareEndPoints("StartToStart", textRange) == 1) {
                textRange.setEndPoint("StartToStart", selTextRange);
            }
            if (selTextRange.compareEndPoints("EndToEnd", textRange) == -1) {
                textRange.setEndPoint("EndToEnd", selTextRange);
            }
            selectedText = textRange.text;
        }
    }
    return selectedText;
  }

});
