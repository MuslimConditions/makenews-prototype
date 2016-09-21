$(document).ready(function() {
    var webFeed = [{
        "title": "BJP to boycott all-party meet convened by Siddaramaiah",
        "summary": "Defence Minister Manohar Parrikar on Sunday said the supreme sacrifice of 17 brave soldiers"
    },
        {
            "title": "Downpour throws life out of gear",
            "summary": "The 28th Annual General Meeting of Nagarjuna Agri-Tech Ltd will be held here on September 30."
        },
        {
            "title": "PMO nod for closure of sick govt. units",
            "summary": "NTPC today said it has received bids amounting to Rs 1,495 crore for its taxable secured non convertible debentures issue of Rs 500 crore."
        },
        {
            "title": "Ramkumar broke switchboard, says FIR",
            "summary": "Japanese automobile maker Isuzu today announced top level changes in its Indian operations with Hiroshi Nakagawa taking over over as the Chairman of Isuzu Motors India (IMI) with immediate effect.Hir..."
        },
        {
            "title": "A look at Obama's last UN address",
            "summary": "Totaliser voting machines make it difficult to learn how an area voted by scrambling data from polling booths."
        },
        {
            "title": "Srinivasan emerges favourite for ICC role ",
            "summary": "The dollar denominated bond issuance by the State Bank of India (SBI) will provide Indian banks with an alternative funding option and would be positive for the sector, rating agencies said.The bond ..."
        },
        {
            "title": "Chennai Metro Rail second stretch to open soon",
            "summary": "Comic Con, the rendezvous of comics lovers, is back in Hyderabad this month. The two-day event, beginning September 24, is attracting some top names in the international comics market."
        },
        {
            "title": "This birthday is more special: Kareena Kapoor",
            "summary": "India is likely to offer Nepal's new prime minister help building an east-west railway line and better access to its ports on his first visit this week, as it tries to regain ground lost recently to China."
        },
        {
            "title": "The best among limited options",
            "summary": "The Vibrant Gujarat Summit in January could be the first occasion to showcase to the international community the issues related to Goods and Services Tax (GST) and its implementation, a senior state..."
        },
        {
            "title": "An independent RBI is a chimera",
            "summary": "Moody’s Investor Service on Tuesday said that a review of India’s sovereign ratings will take at least another one to two years."
        },
        {
            "title": "One injured, 64 arrested in Valley",
            "summary": "The National Investigation Agency (NIA) on Tuesday registered a case to probe the terror attack at the Army installation in Uri in Jammu and Kashmir in which 18 soldiers were killed and dozens others injured after four Pakistani militants stormed the base."
        },
        {
            "title": "Woman stabbed to death by stalker in Delhi",
            "summary": "Shares of Jubilant FoodWorks today plunged over 8 per cent following news that its CEO and Whole-time Director Ajay Kaul will resign to pursue opportunities outside the company."
        },
        {
            "title": "Ramkumar broke switchboard, says FIR",
            "summary": "Akhilesh was locked in a turf war with uncle Shivpal, who expelled seven party functionaries, including three MLCs, considered close to CM."
        },
        {
            "title": "Militants killed in Uri as Army foils infiltration",
            "summary": "Opera's free unlimited VPN has now launched for Desktop users though it's been available since April as a beta."
        },
        {
            "title": "Indo-Pak diplomacy: the best among limited options",
            "summary": "Taking a jibe at the Congress for its remarks over Manohar Parrikar frequenting the state"
        },
        {
            "title": "Woman stabbed to death by stalker in Delhi",
            "summary": "Andhra Pradesh Chief Minister N Chandrababu Naidu today declared a 'war' on contagious diseases with an aim to root them out of the state."
        },
        {
            "title": "Indo-Pak diplomacy: the best among limited options",
            "summary": "The Tax Department has slapped a service tax demand of over Rs 6,100 crore on the overseas arm of state-owned Oil and Natural Gas Corp (ONGC)."
        },
        {
            "title": "Release 6,000 cusecs till September 27: SC to Karnataka",
            "summary": "A source added that ISIS has set up a special medical unit for the purpose."
        }];


    var $webFeed = $("#webFeedItems");
    var $articleSource = $(".article__source")[0];
    var $articleTitle = $(".article__title")[0];
    var length = parseInt(localStorage.getItem('count'));
    var arrayList = [];
    for(var i =1 ; i<=length; i++){
        var listItem = $("<li><input type = 'checkbox' class = 'filter-web-checkbox' checked><span class ='filter-web-source'>"+localStorage.getItem("profile"+i)+"</span></li>");
        $("#filteredWebUrlsList").append(listItem);
        arrayList.push(localStorage.getItem("profile"+i));
    }
    var length1 = parseInt(localStorage.getItem('countPage'));
    for(var i1 =1 ; i1<=length1; i1++){
        var listItem1 = $("<li><input type = 'checkbox' class = 'filter-web-checkbox' checked><span class ='filter-web-source'>"+localStorage.getItem("pages"+i1)+"</span></li>");
        $("#filteredWebUrlsList").append(listItem1);
        arrayList.push(localStorage.getItem("pages"+i1));
    }
    var length2 = parseInt(localStorage.getItem('countGroup'));
    for(var i2 =1 ; i2<=length2; i2++){
        var listItem2 = $("<li><input type = 'checkbox' class = 'filter-web-checkbox' checked><span class ='filter-web-source'>"+localStorage.getItem("group"+i2)+"</span></li>");
        $("#filteredWebUrlsList").append(listItem2);
        arrayList.push(localStorage.getItem("group"+i2));
    }
    var configuredWebUrls = JSON.parse(localStorage.getItem("configuredWebUrls"));
    renderFeeds(arrayList);

    var firstElement = document.querySelector("ul > li > p");
    var source = document.querySelector("ul > li > div > span");
    document.getElementsByClassName("article__source")[0].innerHTML = source.innerHTML;
    document.getElementById("u2075").innerHTML = firstElement.innerHTML;
    function renderFeeds(configuredUrls){
        var countConfiguredUrls = configuredUrls.length;
        if(countConfiguredUrls !== 0){
            webFeed.forEach(function(url, index){
                var webFeedItemDOM = $("<li class='web-feed__item'><p class='web-feed__item__title'>"+url.title
                    +"</p><p class='web-feed__item__summary'>"+url.summary
                    +"</p><div class='web-feed__item__source-date'><span id='web-feed__item__source'>"
                    +configuredUrls[index%countConfiguredUrls]+"</span> | Aug 21, 2016, 08.23 PM IST</div></li>")
                    .click(function(event){showSelectedArticle(event)});
                $webFeed.append(webFeedItemDOM);
            });
        }
    }

    var $oldSelectedArticle = $($(".web-feed__item")[0]);
    $oldSelectedArticle.addClass("current");

    function showSelectedArticle(event) {
        var $currentItem = $(event.currentTarget);
        $oldSelectedArticle.removeClass("current");
        $oldSelectedArticle = $currentItem;
        $currentItem.addClass("current");
        $articleTitle.innerHTML = $currentItem.find(".web-feed__item__title").text();
        $articleSource.innerText = $currentItem.find("#web-feed__item__source").text();
    }

    $("#u2041").click(function(){
        var selectedUrls = [];
        var checkbox = $(".filter-web-checkbox");
        for(var index=0; index<checkbox.length;index++){
            if(checkbox[index].checked){
                selectedUrls.push($(checkbox[index]).siblings()[0].innerText);
            }
        }
        $("#webFeedItems").empty();
        renderFeeds(selectedUrls);
        var firstElement = document.querySelector("ul > li > p");
        var source = document.querySelector("ul > li > div > span");
        document.getElementsByClassName("article__source")[0].innerHTML = source.innerHTML;
        document.getElementById("u2075").innerHTML = firstElement.innerHTML;
        $("#u1881_state0").css({"display": "block", "visibility": "visible"});
        $("#u1881_state1").css({"display": "none", "visibility": "hidden"});
    });
    $("#u2012").click(function(){
        var checkbox = $(".filter-web-checkbox");
        for(var index=0; index<checkbox.length;index++){
            checkbox[index].checked = false;
        }
    });

    $("#u2015").click(function(){
        var checkbox = $(".filter-web-checkbox");
        for(var index=0; index<checkbox.length;index++){
            checkbox[index].checked = true;
        }
    });
});
