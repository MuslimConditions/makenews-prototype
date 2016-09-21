$(document).ready(function(){
  var $articleBody = $(".article__body")[0];
  var $addToCollectionPopUp = $("#addToCollectionPopUp");
  var selectedText = "";
  var $addToCollection = $("#addToCollection");
  var $copySelectedText = $("#copySelectedText");

  $($articleBody).on("mouseup", function(event) {
    selectedText = getSelectedTextWithin($articleBody);
    if (selectedText.length !== 0) {
        $addToCollectionPopUp.css({left: event.clientX+"px", top: event.clientY+"px"});
        $addToCollectionPopUp.show();
    } else {
      $addToCollectionPopUp.hide();
    }
  });

  $addToCollection.click(function() {
    console.log(selectedText);
    $addToCollectionPopUp.hide();
    $("u1881").hide();
  });

  $copySelectedText.click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(selectedText).select();
    document.execCommand("copy");
    $temp.remove();
    $addToCollectionPopUp.hide();
  });

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
