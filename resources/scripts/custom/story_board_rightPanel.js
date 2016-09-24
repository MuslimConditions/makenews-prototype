$(document).ready(function() {
     var webFeed = [{
        "title": "Soldiers sacrifice will not go in vain, says Parrikar",
        "summary": "Defence Minister Manohar Parrikar on Sunday said the supreme sacrifice of 17 brave soldiers",
        "id" : "1"
      },
      {
        "title": "Nagarjuna Agri-Tech AGM on Sept 30",
        "summary": "The 28th Annual General Meeting of Nagarjuna Agri-Tech Ltd will be held here on September 30.",
        "id" : "2"
      },
      {
        "title": "NTPC bond issue oversubscribed 3 times",
        "summary": "NTPC today said it has received bids amounting to Rs 1,495 crore for its taxable secured non convertible debentures issue of Rs 500 crore.",
        "id" : "3"
      },
      {
        "title": "Hiroshi Nakagawa takes over as Isuzu Motors India Chairman",
        "summary": "Japanese automobile maker Isuzu today announced top level changes in its Indian operations with Hiroshi Nakagawa taking over over as the Chairman of Isuzu Motors India (IMI) with immediate effect.Hir...",
        "id" : "4"
      },
      {
        "title": "New voting machines for increasing secrecy rejected by govt",
        "summary": "Totaliser voting machines make it difficult to learn how an area voted by scrambling data from polling booths.",
        "id" : "5"
      },
      {
        "title": "‘SBI’s dollar bond issue to set pricing benchmark for other issuers’",
        "summary": "The dollar denominated bond issuance by the State Bank of India (SBI) will provide Indian banks with an alternative funding option and would be positive for the sector, rating agencies said.The bond ...",
        "id" : "6"
      },
      {
        "title": "Comic Con back in Hyderabad",
        "summary": "Comic Con, the rendezvous of comics lovers, is back in Hyderabad this month. The two-day event, beginning September 24, is attracting some top names in the international comics market.",
        "id" : "7"
      },
      {
        "title": "Eye on China: India to woo Nepal PM Prachanda with new railway line",
        "summary": "India is likely to offer Nepal's new prime minister help building an east-west railway line and better access to its ports on his first visit this week, as it tries to regain ground lost recently to China.",
        "id" : "8"
      },
      {
        "title": "Vibrant Gujarat Summit To Showcase GST Issues: Official",
        "summary": "The Vibrant Gujarat Summit in January could be the first occasion to showcase to the international community the issues related to Goods and Services Tax (GST) and its implementation, a senior state...",
        "id" : "9"
      },
      {
        "title": "India’s sovereign rating review after one to two years: Moody’s",
        "summary": "Moody’s Investor Service on Tuesday said that a review of India’s sovereign ratings will take at least another one to two years.",
        "id" : "10"
      },
      {
        "title": "Uri attack: NIA to send GPS sets to US to trace terrorists' route",
        "summary": "The National Investigation Agency (NIA) on Tuesday registered a case to probe the terror attack at the Army installation in Uri in Jammu and Kashmir in which 18 soldiers were killed and dozens others injured after four Pakistani militants stormed the base.",
        "id" : "11"
      },
      {
        "title": "Jubilant FoodWorks plunges over 8%",
        "summary": "Shares of Jubilant FoodWorks today plunged over 8 per cent following news that its CEO and Whole-time Director Ajay Kaul will resign to pursue opportunities outside the company.",
        "id" : "12"
      },
      {
        "title": "Akhilesh Yadav puts up a brave face, says 'Samajwadi Pariwar' united",
        "summary": "Akhilesh was locked in a turf war with uncle Shivpal, who expelled seven party functionaries, including three MLCs, considered close to CM.",
        "id" : "13"
      },
      {
        "title": "Opera VPN for Desktop Is Here",
        "summary": "Opera's free unlimited VPN has now launched for Desktop users though it's been available since April as a beta.",
        "id" : "14"
      },
      {
        "title": "Goa Chief Minister Defends Manohar Parrikar's Frequent Visits To Goa",
        "summary": "Taking a jibe at the Congress for its remarks over Manohar Parrikar frequenting the state",
        "id" : "15"
      },
      {
        "title": "Chandrababu Naidu Declares 'War' Against Contagious Diseases",
        "summary": "Andhra Pradesh Chief Minister N Chandrababu Naidu today declared a 'war' on contagious diseases with an aim to root them out of the state.",
        "id" : "16"
      },
      {
        "title": "ONGC Videsh Slapped With Service Tax Demand Of Rs 6,100 Crore",
        "summary": "The Tax Department has slapped a service tax demand of over Rs 6,100 crore on the overseas arm of state-owned Oil and Natural Gas Corp (ONGC).",
        "id" : "17"
      },
      {
        "title": "As oil fields run dry, cash-strapped ISIS steals organs of its dead militants",
        "summary": "A source added that ISIS has set up a special medical unit for the purpose.",
        "id" : "18"
      }];

      var $webList = $("#webList");
      var $facebookList = $("#facebookList");
      var $collectionList = $("#collectionList");

    $("#u5853").click(function() {
      emptyAllLists();
      $('.web_icon').attr("src","images/news_board__web/u2058.png");
      var configuredWebUrls = JSON.parse(localStorage.getItem("configuredWebUrls"));
        renderUrls(configuredWebUrls,$webList);
    });

    $("#u5864").click(function() {
        emptyAllLists();
      var configuredTwitterUrls = JSON.parse(localStorage.getItem ("configuredTwitterUrls"));
        renderUrls(configuredTwitterUrls,$webList);
    });

    $("#u5874").click(function() {
    emptyAllLists();
         $(".bookmark_icon").attr("src","images/news_board__web/u2087.png");
        var bookmarkList = JSON.parse(localStorage.getItem("bookmark_data")) || [];
            for (var index = 0; index < bookmarkList.length; index++) {
                var source = bookmarkList[index].source;
                var title = bookmarkList[index].title;
                var body = bookmarkList[index].body.slice(0, 100);

                var li = $("<li class='bookmark__item'><p class='bookmark__item__title'>" + title
                    + "</p><p class='bookmark__item__summary'>" + body
                    + "</p><div class='bookmark__item__source-date'><span id='bookmark__item__source'>"
                    + source + "</span> | Aug 21, 2016, 08.23 PM IST</div></li>");
                $webList.append(li);

            }
    });

    $("#u5869").click(function(){
        emptyAllLists();
        var collections = JSON.parse(localStorage.getItem("collections")) || {};
          renderColletionList(collections);
    });

    $("#collectionList").click(function(event) {
        $(event.target).addClass("current");
        currentCollectionName = event.target.innerText;

        renderArticles(currentCollectionName);
     });


     function renderColletionList(collections) {
        var collectionNames = [];
        for (var collection in collections) { collectionNames.push(collection); }
        collectionNames.forEach(function(collection) {
          var $li = $("<li class='collection-item'>"+collection+"</li>");
          $collectionList.append($li);
        });
     }

    function renderUrls(configuredUrls,list){
      var countConfiguredUrls = configuredUrls.length;
      if(countConfiguredUrls !== 0){
        webFeed.forEach(function(url, index){
          var webFeedItemDOM = $("<li class='web-feed__item'><p class='web__title'>"+url.title
          +"</p><p class='web__summary'>"+url.summary+"</p><div class='web__source-date'><span id='web__source'>"
          +configuredUrls[index%countConfiguredUrls]+"</span> | Aug 21, 2016, 08.23 PM IST</div></li>");
          list.append(webFeedItemDOM);
        });
      }
    }

    function renderArticles(collectionName) {

        var collections = JSON.parse(localStorage.getItem("collections")) || {};
          var $button = $("<button class= 'back'/>").click(function(){
                $("#collectionList").empty();
              renderColletionList(collections);
          });
         var $name = $("<span class =  'collection_name'>"+collectionName+"</span>");
       $("#renderArticleList").append($button).append($name);
        collections[collectionName].forEach(function(article){
          var $article = $("<div class='article'></div>");
          var $title = $("<div class='article__title'>"+article.title+"</div>");
          var $source = $("<div class='article__source'>"+article.source+"</div>");
          var $body = $("<div class='article__content'>"+(article.content).slice(0,100)+"</div>");
          var $date = $("<div class='article__date'>Created on 24 Sept, 2016</div>");
          $article.append($title).append($source).append($body) .append($date);
          $("#renderArticleList").append($article);
        });
      }
    function emptyAllLists(){
        $webList.empty();
        $facebookList.empty();
        $collectionList.empty();
    }
});