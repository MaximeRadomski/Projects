//alert("AssistantEnable : " + localStorage.getItem("AssistantEnable"));
if (localStorage.getItem("AssistantEnable") == "1")
{
  if (document.getElementById("AssistantSexy"))
  {
    document.getElementById("AssistantSexy").style.display = "block";
  }
  else
    {
      insert();
    }
}
else
{
  console.log("No Assistant");
}

function insert()
{
  var assistant = document.createElement("DIV");
  assistant.setAttribute("id", "AssistantContainer");
  assistant.innerHTML = '\
  <div id="assistantMenu" style="display: none; background: rgba(30,30,30,0.8); height: 120px; width: 300px; position: fixed; bottom: 220px; right: 120px; z-index: 360; border-radius: 10px; border: 2px solid #888888;">\
    <textarea id="style-1" style="background: rgba(0,0,0,0); border: 0; color: white; margin: 0; width: 94%; height: 102px; padding: 10px; resize: none; outline: none;" spellcheck="false"></textarea>\
    <button id="buttonByHeart" onclick="buttonByHeart()">❤</button>\
  </div>\
  <img id="AssistantSexy"\
  value="0"\
  src="http://image.noelshack.com/fichiers/2017/16/1492658870-reepetra01.png"\
  onclick="onClickAssistant()"\
  style="max-height: 360px; position: fixed; bottom: -10px; right: 10px; z-index: 350;"></img>\
  ';
  document.body.appendChild(assistant);
  var assistantJS = document.createElement("script");
  assistantJS.setAttribute("type", "text/javascript");
  assistantJS.innerHTML = '\
    if (localStorage.getItem("reminder"))\
      {\
        document.getElementById("style-1").value = localStorage.getItem("reminder");\
      }\
    function buttonByHeart()\
    {\
      localStorage.setItem("reminder", document.getElementById("style-1").value);\
      onClickAssistant();\
    }\
    function onClickAssistant()\
    {\
      if (!(document.getElementById("AssistantSexy").value))\
        document.getElementById("AssistantSexy").value = 0;\
      if (document.getElementById("AssistantSexy").value == 0)\
      {\
        document.getElementById("AssistantSexy").src = "http://image.noelshack.com/fichiers/2017/16/1492651929-reepetra02.png";\
        document.getElementById("AssistantSexy").value = 1;\
        document.getElementById("assistantMenu").style.display = "block";\
      }\
      else\
      {\
        document.getElementById("AssistantSexy").src = "http://image.noelshack.com/fichiers/2017/16/1492658870-reepetra01.png";\
        document.getElementById("AssistantSexy").value = 0;\
        document.getElementById("assistantMenu").style.display = "none";\
      }\
    }\
  ';
  document.head.appendChild(assistantJS);
  var textAreaStyle = document.createElement("style");
  textAreaStyle.innerHTML = '\
  #style-1::-webkit-scrollbar-track\
  {\
  	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\
  	border-radius: 10px;\
  	background-color: rgba(0,0,0,0);\
  }\
  \
  #style-1::-webkit-scrollbar\
  {\
  	width: 12px;\
  	background-color: rgba(0,0,0,0);\
  }\
  \
  #style-1::-webkit-scrollbar-thumb\
  {\
  	border-radius: 10px;\
  	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\
  	background-color: #555;\
  }\
  #assistantMenu button {\
    color: #fff;\
    background-color: #d7443a;\
    border: none;\
    border-radius: 15px;\
    box-shadow: 0 5px #991e1e;\
    outline: none;\
    font-size: 20px;\
    padding: 5px 40px 5px 40px;\
    margin-left: 100px;\
    margin-top: 5px;\
  }\
  \
  #assistantMenu button:hover,\
  #assistantMenu button.hover {\
    background-color: #c0352c\
  }\
  \
  #assistantMenu button:active,\
  #assistantMenu button.active {\
    background-color: #c0352c;\
    box-shadow: 0 0px #991e1e;\
    transform: translateY(5px);\
  }\
  ';
  document.head.appendChild(textAreaStyle);
}
