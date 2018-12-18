// document.addEventListener('DOMContentLoaded', function() {
//   const bar = document.getElementById("Main");
//   alert(bar.id);
//   });



window.addEventListener("load", function()
{
  chrome.tabs.executeScript({
      code: '\
      if (!kiwi)\
        var kiwi = 0;\
      if (!(localStorage.getItem("AssistantEnable")))\
        localStorage.setItem("AssistantEnable", "0");\
      '
    });
  document.getElementById("buttonMCBInterfaceIRC").addEventListener("click", MCBInterfaceIRCCHROME);
  document.getElementById("buttonBackgroundIRC").addEventListener("click", ChangeBackgroundIRCCHROME);
  document.getElementById("buttonPaCInterfaceMessenger").addEventListener("click", PaCInterfaceMessengerCHROME);
  document.getElementById("buttonDarkInterfaceMessenger").addEventListener("click", DarkInterfaceMessengerCHROME);
  document.getElementById("buttonASAInterfaceMessenger").addEventListener("click", ASAInterfaceMessengerCHROME);
  document.getElementById("buttonBackgroundMessenger").addEventListener("click", ChangeBackgroundMessengerCHROME);
  document.getElementById("buttonSexyAssistant").addEventListener("click", EnableAssistantCHROME);
}, false);

function EnableAssistantCHROME()
{
  chrome.tabs.executeScript({file: "sexyAssistant.js"});
}

function ASAInterfaceMessengerCHROME()
{
  chrome.tabs.executeScript({
      code: '\
      var main = document.getElementsByClassName("webkit win x1");\
      main[0].style.background = "none";\
      if (kiwi > 6)\
        kiwi = 0;\
      if (kiwi == 0)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580674-asa01.jpeg)";\
      else if (kiwi == 1)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580683-asa02.png)";\
      else if (kiwi == 2)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580677-asa03.png)";\
      else if (kiwi == 3)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580672-asa04.jpeg)";\
      else if (kiwi == 4)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580674-asa05.jpeg)";\
      else if (kiwi == 5)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580682-asa06.png)";\
      else if (kiwi == 6)\
        main[0].style.backgroundImage = "url(http://image.noelshack.com/fichiers/2017/16/1492580678-asa07.jpg)";\
      ++kiwi;\
      main[0].style.backgroundSize = "cover";\
      main[0].style.backgroundPosition = "center";\
      var core = document.getElementsByClassName("_4sp8");\
      core[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      core[0].style.color = "rgba(255,255,255,0.3)";\
      var leftPanel = document.getElementsByClassName("_1enh");\
      leftPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      leftPanel[0].style.color = "rgba(255,255,255,0.3)";\
      var topPanel = document.getElementsByClassName("_5742");\
      topPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      topPanel[0].style.color = "rgba(255,255,255,0.3)";\
      var rightPanel = document.getElementsByClassName("_4_j5");\
      rightPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      rightPanel[0].style.color = "rgba(255,255,255,0.3)";\
      rightPanel[0].style.borderColor = "rgba(255,255,255,0.3)";\
      var middlePanel = document.getElementsByClassName("_1q5-");\
      middlePanel[0].style.borderColor = "rgba(255,255,255,0.3)";\
      var friendList = document.createElement("style");\
      friendList.innerHTML = "._1ht6, ._1htf, ._364g, ._1ht7, ._3oh-, ._4qba, .__6l, ._4ik4, ._4ik5, .__6m, ._5i_d, ._hh7 a  {color: rgba(255,255,255,0.8)!important;}";\
      document.body.appendChild(friendList);\
      var friendMessage = document.createElement("style");\
      friendMessage.innerHTML = "._hh7, ._2f5n {background-color: rgba(0,0,0,0.4); color: rgba(255,255,255,0.8);}";\
      document.body.appendChild(friendMessage);\
      var friendListSeparator = document.createElement("style");\
      friendListSeparator.innerHTML = "._1qt4 {border-top-style: groove; border-color: rgba(255,255,255,0.3); border-width: 1px;}";\
      document.body.appendChild(friendListSeparator);\
      var bannerBorder = document.createElement("style");\
      bannerBorder.innerHTML = "._36ic, ._5l-3, ._5742, ._4rv3, ._1li- {border-color: rgba(255,255,255,0.3);}";\
      document.body.appendChild(bannerBorder);\
      var myMessage = document.createElement("style");\
      myMessage.innerHTML = "._43by {background-color: rgba(250,250,250,0.2)!important;}";\
      document.body.appendChild(myMessage);\
      var isTyping = document.createElement("style");\
      isTyping.innerHTML = "._5pd7 {background-color: #DDDDDD!important;}";\
      document.body.appendChild(isTyping);\
      var linkBorder = document.createElement("style");\
      linkBorder.innerHTML = "._5i_d {border: 1px solid white;}";\
      document.body.appendChild(linkBorder);\
      '
    });
}

function ASAInterfaceMessenger()
{
  var main = document.getElementsByClassName("webkit win x1");
  main[0].style.background = "none";
  if (kiwi > 6)
    kiwi = 0;
  if (kiwi == 0)
    main[0].style.backgroundImage = "url(http://c3.nuttit.com/Cache/GetImage?id=NLcQ4YL.jpg)";
  else if (kiwi == 1)
    main[0].style.backgroundImage = "url(https://i.imgur.com/YfcGuHc.jpg)";
  else if (kiwi == 2)
    main[0].style.backgroundImage = "url(http://img10.deviantart.net/978d/i/2013/265/c/3/lost_woods_by_ariane_saint_amour-d6ne08b.jpg)";
  else if (kiwi == 3)
    main[0].style.backgroundImage = "url(https://pbs.twimg.com/media/CwXFZbeWEAAS3e6.jpg:large)";
  else if (kiwi == 4)
    main[0].style.backgroundImage = "url(http://c1.nuttit.com/Cache/GetImage?id=upBW6YT.jpg)";
  else if (kiwi == 5)
    main[0].style.backgroundImage = "url(http://c3.nuttit.com/Cache/GetImage?id=HtIy4fv.jpg)";
  else if (kiwi == 6)
    main[0].style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/originals/fd/a6/bc/fda6bc5ea22251089a999c76ac35a50c.jpg)";
  ++kiwi;
  main[0].style.backgroundSize = "cover";
  main[0].style.backgroundPosition = "center";
  var core = document.getElementsByClassName("_4sp8");
  core[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  core[0].style.color = "rgba(255,255,255,0.3)";
  var leftPanel = document.getElementsByClassName("_1enh");
  leftPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  leftPanel[0].style.color = "rgba(255,255,255,0.3)";
  var topPanel = document.getElementsByClassName("_5742");
  topPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  topPanel[0].style.color = "rgba(255,255,255,0.3)";
  var rightPanel = document.getElementsByClassName("_4_j5");
  rightPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  rightPanel[0].style.color = "rgba(255,255,255,0.3)";
  rightPanel[0].style.borderColor = "rgba(255,255,255,0.3)";
  var middlePanel = document.getElementsByClassName("_1q5-");
  middlePanel[0].style.borderColor = "rgba(255,255,255,0.3)";
  var friendList = document.createElement("style");
  friendList.innerHTML = "._1ht6, ._1htf, ._364g, ._1ht7, ._3oh-, ._4qba, .__6l, ._4ik4, ._4ik5, .__6m, ._5i_d, ._hh7 a  {color: rgba(255,255,255,0.8!important;);}";
  document.body.appendChild(friendList);
  var friendMessage = document.createElement("style");
  friendMessage.innerHTML = "._hh7, ._2f5n {background-color: rgba(0,0,0,0.4); color: rgba(255,255,255,0.8);}";
  document.body.appendChild(friendMessage);
  var friendListSeparator = document.createElement("style");
  friendListSeparator.innerHTML = "._1qt4 {border-top-style: groove; border-color: rgba(255,255,255,0.3); border-width: 1px;}";
  document.body.appendChild(friendListSeparator);
  var bannerBorder = document.createElement("style");
  bannerBorder.innerHTML = "._36ic, ._5l-3, ._5742, ._4rv3, ._1li- {border-color: rgba(255,255,255,0.3);}";
  document.body.appendChild(bannerBorder);
  var myMessage = document.createElement("style");
  myMessage.innerHTML = "._43by {background-color: rgba(250,250,250,0.2)!important;}";
  document.body.appendChild(myMessage);
  var isTyping = document.createElement("style");
  isTyping.innerHTML = "._5pd7 {background-color: #DDDDDD!important;}";
  document.body.appendChild(isTyping);
  var linkBorder = document.createElement("style");
  linkBorder.innerHTML = "._5i_d {border: 1px solid white;}";
  document.body.appendChild(linkBorder);
}

function ChangeBackgroundMessengerCHROME()
{
  chrome.tabs.executeScript({
      code: '\
      var newURL = prompt("Enter New URL", "https://");\
      if (newURL != null) {\
        var main = document.getElementsByClassName("webkit win x1");\
        main[0].style.backgroundImage = "url("+newURL+")";\
      }\
      '
    });
}

function ChangeBackgroundMessenger()
{
  var newURL = prompt("Enter New URL", "https://");

  if (newURL != null) {
    var main = document.getElementsByClassName("webkit win x1");
    main.style.backgroundImage = "url("+newURL+")";
  }
}

function DarkInterfaceMessengerCHROME()
{
  chrome.tabs.executeScript({
      code: '\
      var main = document.getElementsByClassName("webkit win x1");\
      main[0].style.background = "none";\
      main[0].style.backgroundImage = "url(http://i.imgur.com/AQTe4rs.jpg)";\
      ++kiwi;\
      main[0].style.backgroundSize = "cover";\
      main[0].style.backgroundPosition = "center";\
      var core = document.getElementsByClassName("_4sp8");\
      core[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      core[0].style.color = "rgba(255,255,255,0.3)";\
      var leftPanel = document.getElementsByClassName("_1enh");\
      leftPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      leftPanel[0].style.color = "rgba(255,255,255,0.3)";\
      var topPanel = document.getElementsByClassName("_5742");\
      topPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      topPanel[0].style.color = "rgba(255,255,255,0.3)";\
      var rightPanel = document.getElementsByClassName("_4_j5");\
      rightPanel[0].style.backgroundColor = "rgba(0,0,0,0.5)";\
      rightPanel[0].style.color = "rgba(255,255,255,0.3)";\
      rightPanel[0].style.borderColor = "rgba(255,255,255,0.3)";\
      var middlePanel = document.getElementsByClassName("_1q5-");\
      middlePanel[0].style.borderColor = "rgba(255,255,255,0.3)";\
      var friendList = document.createElement("style");\
      friendList.innerHTML = "._1ht6, ._1htf, ._364g, ._1ht7, ._3oh-, ._4qba, .__6l, ._4ik4, ._4ik5, .__6m, ._5i_d, ._hh7 a {color: rgba(255,255,255,0.8)!important;}";\
      document.body.appendChild(friendList);\
      var friendMessage = document.createElement("style");\
      friendMessage.innerHTML = "._hh7, ._2f5n {background-color: rgba(0,0,0,0.4); color: rgba(255,255,255,0.8);}";\
      document.body.appendChild(friendMessage);\
      var friendListSeparator = document.createElement("style");\
      friendListSeparator.innerHTML = "._1qt4 {border-top-style: groove; border-color: rgba(255,255,255,0.3); border-width: 1px;}";\
      document.body.appendChild(friendListSeparator);\
      var bannerBorder = document.createElement("style");\
      bannerBorder.innerHTML = "._36ic, ._5l-3, ._5742, ._4rv3, ._1li- {border-color: rgba(255,255,255,0.3);}";\
      document.body.appendChild(bannerBorder);\
      var myMessage = document.createElement("style");\
      myMessage.innerHTML = "._43by {background-color: rgba(250,250,250,0.2)!important;}";\
      document.body.appendChild(myMessage);\
      var isTyping = document.createElement("style");\
      isTyping.innerHTML = "._5pd7 {background-color: #DDDDDD!important;}";\
      document.body.appendChild(isTyping);\
      var linkBorder = document.createElement("style");\
      linkBorder.innerHTML = "._5i_d {border: 1px solid white;}";\
      document.body.appendChild(linkBorder);\
      '
    });
}

function PaCInterfaceMessengerCHROME()
{
  chrome.tabs.executeScript({
      code: '\
      var main = document.getElementsByClassName("webkit win x1");\
      main[0].style.background = "none";\
      if (kiwi > 3)\
        kiwi = 0;\
      if (kiwi == 0)\
        main[0].style.backgroundImage = "url(https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA12AAAAJDk0NDJhNzRlLWZiYTktNGFjZC1hYmQzLTI4MjNhNzNlZTU0ZQ.jpg)";\
      else if (kiwi == 1)\
        main[0].style.backgroundImage = "url(https://s3.amazonaws.com/library.webconnex.com/backgrounds/bg_poly3.jpg)";\
      else if (kiwi == 2)\
        main[0].style.backgroundImage = "url(https://www.walldevil.com/wallpapers/a76/3215-triangle.jpg)";\
      else if (kiwi == 3)\
        main[0].style.backgroundImage = "url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-252341.jpg)";\
      ++kiwi;\
      main[0].style.backgroundSize = "cover";\
      main[0].style.backgroundPosition = "center";\
      var core = document.getElementsByClassName("_4sp8");\
      core[0].style.backgroundColor = "rgba(255,255,255,0.5)";\
      core[0].style.color = "rgba(0,0,0,0.3)";\
      var leftPanel = document.getElementsByClassName("_1enh");\
      leftPanel[0].style.backgroundColor = "rgba(255,255,255,0.5)";\
      leftPanel[0].style.color = "rgba(0,0,0,0.3)";\
      var topPanel = document.getElementsByClassName("_5742");\
      topPanel[0].style.backgroundColor = "rgba(255,255,255,0.5)";\
      topPanel[0].style.color = "rgba(0,0,0,0.3)";\
      var rightPanel = document.getElementsByClassName("_4_j5");\
      rightPanel[0].style.backgroundColor = "rgba(255,255,255,0.5)";\
      rightPanel[0].style.color = "rgba(0,0,0,0.3)";\
      rightPanel[0].style.borderColor = "rgba(0,0,0,0.3)";\
      var middlePanel = document.getElementsByClassName("_1q5-");\
      middlePanel[0].style.borderColor = "rgba(0,0,0,0.3)";\
      var friendList = document.createElement("style");\
      friendList.innerHTML = "._1ht6, ._1htf, ._364g, ._1ht7, ._3oh-, ._4qba, .__6l, ._4ik4, ._4ik5, .__6m, ._5i_d, ._hh7 a {color: rgba(0,0,0,0.8)!important;}";\
      document.body.appendChild(friendList);\
      var friendMessage = document.createElement("style");\
      friendMessage.innerHTML = "._hh7, ._2f5n {background-color: rgba(0,0,0,0.1);}";\
      document.body.appendChild(friendMessage);\
      var friendListSeparator = document.createElement("style");\
      friendListSeparator.innerHTML = "._1qt4 {border-top-style: groove; border-color: white; border-width: 1px;}";\
      document.body.appendChild(friendListSeparator);\
      var bannerBorder = document.createElement("style");\
      bannerBorder.innerHTML = "._36ic, ._5l-3, ._5742, ._4rv3, ._1li- {border-color: rgba(0,0,0,0.3);}";\
      document.body.appendChild(bannerBorder);\
      var myMessage = document.createElement("style");\
      myMessage.innerHTML = "._43by {background-color: rgba(250,250,250,0.6)!important;}";\
      document.body.appendChild(myMessage);\
      var isTyping = document.createElement("style");\
      isTyping.innerHTML = "._5pd7 {background-color: #323232!important;}";\
      document.body.appendChild(isTyping);\
      var linkBorder = document.createElement("style");\
      linkBorder.innerHTML = "._5i_d {border: 1px solid #323232;}";\
      document.body.appendChild(linkBorder);\
      '
    });
}

function ChangeBackgroundIRCCHROME()
{
  chrome.tabs.executeScript({
      code: '\
      var newURL = prompt("Enter New URL", "https://");\
      if (newURL != null) {\
        var main = document.getElementById("ircui");\
        main.style.backgroundImage = "url("+newURL+")";\
      }\
      '
    });
}

function ChangeBackgroundIRC()
{
  var newURL = prompt("Enter New URL", "https://");

  if (newURL != null) {
    var main = document.getElementById("ircui");
    main.style.backgroundImage = "url("+newURL+")";
  }
}

function MCBInterfaceIRCCHROME()
{
  chrome.tabs.executeScript({
    code: '\
    var main = document.getElementById("ircui");\
    main.style.backgroundImage = "url(http://www.nastol.com.ua/pic/201207/1920x1080/nastol.com.ua-27470.jpg)";\
    main.style.backgroundSize = "cover";\
    var x = document.getElementsByClassName("middleboundpanel");\
    x[0].style.background = "rgba(0,0,0,0.5)";\
    x[0].style.color = "white";\
    x[0].style.width = "100%";\
    var input = document.getElementsByClassName("keyboard-input");\
    input[0].style.background = "rgba(0,0,0,0.5)";\
    input[0].style.color = "white";\
    var topic = document.getElementsByClassName("topicboundpanel");\
    topic[0].style.background = "rgba(0,0,0,0.5)";\
    topic[0].style.color = "white";\
    var header = document.getElementsByClassName("topboundpanel");\
    header[0].style.background = "rgba(0,0,0,0.5)";\
    header[0].style.color = "white";\
    var right = document.getElementsByClassName("rightboundpanel");\
    right[0].style.display = "none";\
    '
  });
}

function MCBInterfaceIRC()
{
  var main = document.getElementById("ircui");
  main.style.backgroundImage = "url(http://www.nastol.com.ua/pic/201207/1920x1080/nastol.com.ua-27470.jpg)";
  main.style.backgroundSize = "cover";
  var core = document.getElementsByClassName("middleboundpanel");
  core[0].style.background = "rgba(0,0,0,0.5)";
  core[0].style.color = "white";
  core[0].style.width = "100%";
  var input = document.getElementsByClassName("keyboard-input");
  input[0].style.background = "rgba(0,0,0,0.5)";
  input[0].style.color = "white";
  var topic = document.getElementsByClassName("topicboundpanel");
  topic[0].style.background = "rgba(0,0,0,0.5)";
  topic[0].style.color = "white";
  var header = document.getElementsByClassName("topboundpanel");
  header[0].style.background = "rgba(0,0,0,0.5)";
  header[0].style.color = "white";
  var right = document.getElementsByClassName("rightboundpanel");
  right[0].style.display = "none";
}
