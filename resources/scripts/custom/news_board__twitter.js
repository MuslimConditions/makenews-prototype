$(document).ready(function() {

 var webFeed = [{
      "title": "18 jawans killed in pre-dawn strike at Uri",
      "summary": "Seventeen soldiers were killed in a militant attack in Uri area of Baramulla district on Sunday morning...",
      "content" : "Seventeen soldiers were killed in a militant attack in Uri area of Baramulla district on Sunday morning...",
      "id" : "1"
    },
    {
      "title": "In first speech after POK raid, PM refrains from rubbing it in",
      "summary": "Avoiding triumphalism or even a direct comment on the cross-LoC strikes on terror camps.",
      "content" : "NEW DELHI: Avoiding triumphalism or even a direct comment on the cross-LoC strikes on terror camps.",
      "id" : "2"
    },
    {
      "title": "SC has no jurisdiction to order constitution of Cauvery management board: Centre",
      "summary": "The Central government on Monday said the Supreme Court has no jurisdiction to direct it to constitute a Cauvery management board...",
      "content" : "The Central government on Monday said the Supreme Court has no jurisdiction to direct it to constitute a Cauvery management board...",
      "id" : "3"
    },
    {
      "title": "Pledge against terrorism marks Gandhi Jayanthi celebration",
      "summary": "Representatives of various social organisations and religious bodies in the city took an oath against terrorism and violence ",
      "content" : "Representatives of various social organisations and religious bodies in the city took an oath against terrorism and violence  ",
      "id" : "4"
    },
    {
      "title": "4 hours, choppers and 38 kills: How India avenged the Uri attack",
      "summary": "India says 38 terrorists and 2 Pakistani soldiers killed in #SurgicalStrike across line of control in Kashmir",
     "content" : "India says 38 terrorists and 2 Pakistani soldiers killed in #SurgicalStrike across line of control in Kashmir",
      "id" : "5"
    },
    {
      "title": "Dengue cases in Delhi: SC fines Health Minister Satyendar Jain",
      "summary": "The Supreme Court slammed a fine of Rs. 25,000 on Delhi Health Minister Satyendar Jain for not filing an affidavit revealing the names of officers the AAP...",
      "content" : "The Supreme Court slammed a fine of Rs. 25,000 on Delhi Health Minister Satyendar Jain for not filing an affidavit revealing the names of officers the AAP ",
      "id" : "6"
    },
    {
      "title": "NRSA to help State assess irrigation tanks capacity",
      "summary": "Precise storage of a particular water body will be put on the web, which will be helpful to all stakeholders",
      "content" : "Precise storage of a particular water body will be put on the web, which will be helpful to all stakeholders",
      "id" : "7"
    },
    {
      "title": "Uri Brigade Commander 'shifted out' after terror attack",
      "summary": "There were obvious security lapses at Uri base even after Pathankot. Good that accountability is being fixed",
      "content" : "There were obvious security lapses at Uri base even after Pathankot. Good that accountability is being fixed",
      "id" : "8"
    },
    {
      "title": "Taliban fighters enter Kunduz, mount assault",
      "summary": "Taliban fighters mounted a coordinated assault on the northern city of Kunduz overnight",
      "content" : "Taliban fighters mounted a coordinated assault on the northern city of Kunduz overnight",
      "id" : "9"
    },
    {
      "title": "Nitish Katara murder case: What you need to know",
      "summary": "Two cousins, Vikas and Vishal Yadav, abducted Nitish Katara from the wedding of his classmate in Ghaziabad in February 2002. ",
      "content" : "Two cousins, Vikas and Vishal Yadav, abducted Nitish Katara from the wedding of his classmate in Ghaziabad in February 2002.",
      "id" : "10"
    },
    {
      "title": "Uri attack: NIA to send GPS sets to US to trace terrorists route",
      "summary": "NIA on Tuesday registered a case to probe the terror attack at the Army installation in Uri in Jammu and Kashmir in...",
      "content" :"NIA on Tuesday registered a case to probe the terror attack at the Army installation in Uri in Jammu and Kashmir in...",
      "id" : "11"
    },
    {
      "title": "Indian-origin teen wins Google Science Fair prize",
      "summary": "Another Indian excelling out of India!!",
      "content" : "A 16-year-old Indian-origin South African teen has won a $50,000 scholarship, ",
      "id" : "12"
    },
    {
      "title": "Private consumption to rise on better monsoon",
      "summary": "Monsoon rains, the best in three years",
      "content" :"The distribution of monsoon this season has been the best in the last three years",
      "id" : "13"
    },
    {
      "title": "Mega launchers for ISRO soon",
      "summary": "Apart from powering rockets to lift heavier satellites, it will also lower the cost per kilo",
      "content" : "#ISRO developing advanced semi-cryogenic engines for heavier lifts of upto 15,000 kilos",
      "id" : "14"
    },
    {
      "title": "Sensex climbs 161 points ahead of RBI policy meet, on Asian cues",
      "summary": "#thehindu #India Sensex climbs 161 points ahead of RBI policy meet, on Asian cues",
      "content" : "#thehindu #India Sensex climbs 161 points ahead of RBI policy meet, on Asian cues",
      "id" : "15"
    },
    {
      "title": "US Reacts to Uri Attack and India’s Surgical Strike",
      "summary": "America gives a muted response to India's #surgicalStrike on Pakistan.",
      "content" : "America gives a muted response to India's #surgicalStrike on Pakistan.",
      "id" : "16"
    },
    {
      "title": "By Jupiter! Proof of water plumes on moon",
      "summary": "By Jupiter! Proof of water plumes on moon: Hubble telescope spots more evidence in the planet’s satellite Europa",
      "content" : "By Jupiter! Proof of water plumes on moon: Hubble telescope spots more evidence in the planet’s satellite Europa",
      "id" : "17"
    },
    {
      "title": "NSAs of India, Pak. agree to reduce tension along LoC: Aziz",
      "summary": "NSAs of India, Pak. agree to reduce tension along LoC: Aziz: 'Pakistan wants to reduce tensions on LoC and fo...'",
      "content" : "NSAs of India, Pak. agree to reduce tension along LoC: Aziz: 'Pakistan wants to reduce tensions on LoC and fo...",
      "id" : "18"
    }];


  var $webFeed = $("#TwitterFeedItems");
  var $articleSource = $(".article__source")[0];
  var $articleTitle = $(".article__title")[0];
  var $articleBody = $(".article__body")[0];
  var configuredTwitterUrls = JSON.parse(localStorage.getItem("configuredTwitterUrls"));


  var searchWord=localStorage.getItem("searchWord")|| "";
  if(searchWord !== ""){
      $('#u2494_input').val(searchWord);
     search();
  }
  else{
    $('#u2494_input').val("Search");
    $("#u2495_img").css({'visibility' : 'visible'});
    $("#searchCancel").css({'display' : 'none'});
    renderFeeds(configuredTwitterUrls);
  }

  var $newHashTag = $(".new-hash-tag");
  var $filterTwitterHashTags = $("#filterTwitterHashTags");
  var configuredTwitterHashTags = {}

  function renderFeeds(configuredUrls){
    var countConfiguredUrls = configuredUrls.length;
    if(countConfiguredUrls !== 0){
      webFeed.forEach(function(url, index){
        createListItem(url, index);
      });
    }
  }

  function createListItem(url, index){
    var webFeedItemDOM = $("<li class='twitter-feed__item'><p class='twitter-feed__item__title'>"+url.title
            +"</p><p class='twitter-feed__item__summary'>"+url.summary
            +"</p><div class='twitter-feed__item__source-date'><span id='twitter-feed__item__source'>"
            +configuredTwitterUrls[index%configuredTwitterUrls.length]+"</span> | Aug 21, 2016, 08.23 PM IST</div></li>")
            .click(function(event){showSelectedArticle(event,url.content, url.id)});
            $webFeed.append(webFeedItemDOM);
  }

  var $oldSelectedArticle = $($(".twitter-feed__item")[0]);
  $oldSelectedArticle.addClass("current");

  function showSelectedArticle(event,content, id) {
    var $currentItem = $(event.currentTarget);
    $oldSelectedArticle.removeClass("current");
    $oldSelectedArticle = $currentItem;
    $currentItem.addClass("current");
    $articleTitle.innerHTML = $currentItem.find(".twitter-feed__item__title").text();
    $articleSource.innerText = $currentItem.find("#twitter-feed__item__source").text();
    $articleBody.innerHTML = content;
    $(".article__image").attr("src","images/articleImages/"+id+".jpg");
    isBookmarked();
  }
  configuredTwitterUrls.forEach(function(url){
    var listItem = $("<li><input type = 'checkbox' class = 'filter-web-checkbox' checked><span class ='filter-web-source'>"+url+"</span></li>");
    $("#filteredWebUrlsList").append(listItem);
  });

  $("#u2641").click(function(){
    var selectedUrls = [];
    var checkbox = $(".filter-web-checkbox");
    for(var index=0; index<checkbox.length;index++){
        if(checkbox[index].checked){
            selectedUrls.push($(checkbox[index]).siblings()[0].innerText);
        }
    }
    $(".hashtag input").each(function(index, checkbox) {
      if(checkbox.checked) selectedUrls.push(checkbox.value);
    });
    $("#TwitterFeedItems").empty();
    renderFeeds(selectedUrls);
    $("#u2643").click();
  });

  $("#selectAllHandles").click(function(){
    var selectStaus = this.checked;
    $(".filter-web-checkbox").each(function(index, handle) {
      handle.checked = selectStaus;
    });
  });

  $("#addHashTag").click(function() {
    var enteredHashTag = "#"+$newHashTag.val();
    if(!configuredTwitterHashTags.hasOwnProperty(enteredHashTag)) {
      configuredTwitterHashTags[enteredHashTag] = true;
      $filterTwitterHashTags.append($("<li class='hashtag'><input checked type='checkbox' value="+enteredHashTag+">"+enteredHashTag+"</li>"));
      $newHashTag.val("");
    }
  });

  $("#u2668").click(function(){
      window.location.href = "news_board__collections.html";
  });

    $("#u2653").click(function() {
        window.location.href = "story_board.html";
    });

    $("#u2655").click(function() {
        window.location.href = "web.html";
    });

    $("#u2495_img").click(function (){
          search();
    });

    function search(){
        $("#u2495_img").css({'visibility' : 'hidden'});
        $("#searchCancel").css({'display' : 'block'});

        var keyword=$("#u2494_input").val().toLowerCase();
         $webFeed.empty();
        webFeed.forEach(function(url,index){
            if(((url.title.toLowerCase()).indexOf(keyword) !== -1) || ((url.summary.toLowerCase()).indexOf(keyword) !== -1) || ((url.content.toLowerCase()).indexOf(keyword) !== -1)){
                createListItem(url,index);
            }
        });

        localStorage.setItem("searchWord",keyword);
    }

      $("#searchCancel").click(function(){
            localStorage.removeItem("searchWord");
            window.location.reload();
      });
});
