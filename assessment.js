(function(){
  'use strict';
  const userNameInput = document.getElementById("user-name");
  const assessmentButton = document.getElementById("assessment");
  const resultDivided = document.getElementById("result-area");
  const tweetDivided = document.getElementById("tweet-area");
  
  function removeAllChildren(element){
    while(element.firstChild){
      element.removeChild(element.firstChild);
    }
  }
  
  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
      return;
    }
    
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = 'Result';
    resultDivided.appendChild(header);
    
    const paragraph = document.createElement('p');
    const resutl = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = '';//todo
    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button');
    anchor.innerText = '';//todo
    tweetDivided .appendChild(anchor);
  
    twttr.widgets.load();
  };
  
  userNameInput.onkeydown = (event) => {
    if(event.keyCode===13){
      assessmentButton.onclick();
    }
  };
  
  const answers = [
    ''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
    ,''
  ];
  
  function assessment(userName){
    let sumofcharCode=0;
    for(let i=0;i<userName.length;i++){
      sumofcharCode = sumofcharCode + userName.charCodeAt(i);
    }
    
    const index = sunofcharCode % answers.length;
    let result = answers[index];
    result = result.replace(/{userName}/g,userName);
    return result;
  }
  
  console.assert(
    assessment('')==='','');
  
})();
