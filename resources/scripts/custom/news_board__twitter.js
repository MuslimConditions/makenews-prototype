$(document).ready(function() {
  var webFeed = [{
    "title": "Soldiers sacrifice will not go in vain, says Parrikar",
    "summary": "Defence Minister Manohar Parrikar on Sunday said the supreme sacrifice of 17 brave soldiers",
    "id" : "36"
  },
  {
    "title": "Nagarjuna Agri-Tech AGM on Sept 30",
    "summary": "The 28th Annual General Meeting of Nagarjuna Agri-Tech Ltd will be held here on September 30.",
    "id" : "37"
  },
  {
    "title": "NTPC bond issue oversubscribed 3 times",
    "summary": "NTPC today said it has received bids amounting to Rs 1,495 crore for its taxable secured non convertible debentures issue of Rs 500 crore.",
    "id" : "38"
  },
  {
    "title": "Hiroshi Nakagawa takes over as Isuzu Motors India Chairman",
    "summary": "Japanese automobile maker Isuzu today announced top level changes in its Indian operations with Hiroshi Nakagawa taking over over as the Chairman of Isuzu Motors India (IMI) with immediate effect.Hir...",
    "id" : "39"
  },
  {
    "title": "New voting machines for increasing secrecy rejected by govt",
    "summary": "Totaliser voting machines make it difficult to learn how an area voted by scrambling data from polling booths.",
    "id" : "40"
  },
  {
    "title": "‘SBI’s dollar bond issue to set pricing benchmark for other issuers’",
    "summary": "The dollar denominated bond issuance by the State Bank of India (SBI) will provide Indian banks with an alternative funding option and would be positive for the sector, rating agencies said.The bond ...",
    "id" : "41"
  },
  {
    "title": "Comic Con back in Hyderabad",
    "summary": "Comic Con, the rendezvous of comics lovers, is back in Hyderabad this month. The two-day event, beginning September 24, is attracting some top names in the international comics market.",
    "id" : "42"
  },
  {
    "title": "Eye on China: India to woo Nepal PM Prachanda with new railway line",
    "summary": "India is likely to offer Nepal's new prime minister help building an east-west railway line and better access to its ports on his first visit this week, as it tries to regain ground lost recently to China.",
    "id" : "43"
  },
  {
    "title": "Vibrant Gujarat Summit To Showcase GST Issues: Official",
    "summary": "The Vibrant Gujarat Summit in January could be the first occasion to showcase to the international community the issues related to Goods and Services Tax (GST) and its implementation, a senior state...",
    "id" : "44"
  },
  {
    "title": "India’s sovereign rating review after one to two years: Moody’s",
    "summary": "Moody’s Investor Service on Tuesday said that a review of India’s sovereign ratings will take at least another one to two years.",
    "id" : "45"
  },
  {
    "title": "Uri attack: NIA to send GPS sets to US to trace terrorists' route",
    "summary": "The National Investigation Agency (NIA) on Tuesday registered a case to probe the terror attack at the Army installation in Uri in Jammu and Kashmir in which 18 soldiers were killed and dozens others injured after four Pakistani militants stormed the base.",
    "id" : "46"
  },
  {
    "title": "Jubilant FoodWorks plunges over 8%",
    "summary": "Shares of Jubilant FoodWorks today plunged over 8 per cent following news that its CEO and Whole-time Director Ajay Kaul will resign to pursue opportunities outside the company.",
    "id" : "47"
  },
  {
    "title": "Akhilesh Yadav puts up a brave face, says 'Samajwadi Pariwar' united",
    "summary": "Akhilesh was locked in a turf war with uncle Shivpal, who expelled seven party functionaries, including three MLCs, considered close to CM.",
    "id" : "48"
  },
  {
    "title": "Opera VPN for Desktop Is Here",
    "summary": "Opera's free unlimited VPN has now launched for Desktop users though it's been available since April as a beta.",
    "id" : "49"
  },
  {
    "title": "Goa Chief Minister Defends Manohar Parrikar's Frequent Visits To Goa",
    "summary": "Taking a jibe at the Congress for its remarks over Manohar Parrikar frequenting the state",
    "id" : "50"
  },
  {
    "title": "Chandrababu Naidu Declares 'War' Against Contagious Diseases",
    "summary": "Andhra Pradesh Chief Minister N Chandrababu Naidu today declared a 'war' on contagious diseases with an aim to root them out of the state.",
    "id" : "51"
  },
  {
    "title": "ONGC Videsh Slapped With Service Tax Demand Of Rs 6,100 Crore",
    "summary": "The Tax Department has slapped a service tax demand of over Rs 6,100 crore on the overseas arm of state-owned Oil and Natural Gas Corp (ONGC).",
    "id" : "52"
  },
  {
    "title": "As oil fields run dry, cash-strapped ISIS steals organs of its dead militants",
    "summary": "A source added that ISIS has set up a special medical unit for the purpose.",
    "id" : "53"
  }];


  var $webFeed = $("#TwitterFeedItems");
  var $articleSource = $(".article__source")[0];
  var $articleTitle = $(".article__title")[0];
  var configuredWebUrls = JSON.parse(localStorage.getItem("configuredTwitterUrls"));
  renderFeeds(configuredWebUrls);

  function renderFeeds(configuredUrls){
    var countConfiguredUrls = configuredUrls.length;
    if(countConfiguredUrls !== 0){
      webFeed.forEach(function(url, index){
        var webFeedItemDOM = $("<li class='twitter-feed__item'><p class='twitter-feed__item__title'>"+url.title
        +"</p><p class='twitter-feed__item__summary'>"+url.summary
        +"</p><div class='twitter-feed__item__source-date'><span id='twitter-feed__item__source'>"
        +configuredUrls[index%countConfiguredUrls]+"</span> | Aug 21, 2016, 08.23 PM IST</div></li>")
        .click(function(event){showSelectedArticle(event)});
        $webFeed.append(webFeedItemDOM);
      });
    }
  }
  var $oldSelectedArticle = $($(".twitter-feed__item")[0]);
  $oldSelectedArticle.addClass("current");

  function showSelectedArticle(event) {
    var $currentItem = $(event.currentTarget);
    $oldSelectedArticle.removeClass("current");
    $oldSelectedArticle = $currentItem;
    $currentItem.addClass("current");
    $articleTitle.innerHTML = $currentItem.find(".twitter-feed__item__title").text();
    $articleSource.innerText = $currentItem.find("#twitter-feed__item__source").text();
    isBookmarked();
  }
  configuredWebUrls.forEach(function(url){
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
    $("#TwitterFeedItems").empty();
    renderFeeds(selectedUrls);
    $("#u2643").click();
  });
  $("#u2621").click(function(){
     var checkbox = $(".filter-web-checkbox");
        for(var index=0; index<checkbox.length;index++){
            checkbox[index].checked = false;
        }
  });

  $("#u2623").click(function(){
     var checkbox = $(".filter-web-checkbox");
        for(var index=0; index<checkbox.length;index++){
            checkbox[index].checked = true;
        }
  });

  $("#u2668").click(function(){
      window.location.href = "news_board__collections.html";
  });
});
