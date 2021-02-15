function classSwap() {
    var headings = document.getElementById("headingsDiv").children;
    var userHeadingsSelect;
    alert('There are ' + headings.length + ' elements.');
    userHeadingsSelect = prompt("Which heading would you like to switch?");

    headings[userHeadingsSelect].classList.toggle("headings");
}

function showHideDiv() {
    var div = document.getElementById('headingsDiv');
    if(div.style.display == "none"){
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function showLess() {
    var heading1 = document.getElementById("heading1");
    var heading2 = document.getElementById("heading2");
    var heading3 = document.getElementById("heading3");
    var heading4 = document.getElementById("heading4");
    var heading5 = document.getElementById("heading5");
    var showMoreButton = document.getElementById('showMoreButton');
    var showLessButton = document.getElementById("showLessButton");

    if(heading5.style.display != "none"){
        heading5.style.display = "none";
    } else if(heading4.style.display != "none") {
        heading4.style.display = "none";
    } else if(heading3.style.display != "none") {
        heading3.style.display = "none";
    } else if(heading2.style.display != "none") {
        heading2.style.display = "none";
    } else if(heading1.style.display != "none") {
        heading1.style.display = "none";
        showLessButton.style.display = "none";
        showMoreButton.style.display = "block";
    }
}

function showMore() {
    var heading1 = document.getElementById("heading1");
    var heading2 = document.getElementById("heading2");
    var heading3 = document.getElementById("heading3");
    var heading4 = document.getElementById("heading4");
    var heading5 = document.getElementById("heading5");
    var showMoreButton = document.getElementById("showMoreButton");
    var showLessButton = document.getElementById('showLessButton');

    if(heading1.style.display == "none") {
        heading1.style.display = "block";
    } else if(heading2.style.display == "none") {
        heading2.style.display = "block";
    } else if(heading3.style.display == "none"){
        heading3.style.display = "block";
    } else if(heading4.style.display == "none") {
        heading4.style.display = "block";
    } else if(heading5.style.display == "none") {
        heading5.style.display = "block";
        showMoreButton.style.display = "none";
        showLessButton.style.display = "block";
    }
}

function eventListenerAdd() {
    var x = document.getElementById('eventHandlerButton');
    x.addEventListener('click', basicAlert);
    x.textContent = "I have an event Now!";

}

function basicAlert() {
    alert("Hello!");
}

window.onload = function() {
    var heading = document.createElement("HEADING1");
    var headingDiv = document.getElementById('headingsDiv');
    heading.innerHTML = "This was Created on Page Load";
    headingDiv.appendChild(heading);

}

document.onkeydown = function(e) {
    var x = document.getElementById('sizeTestParagraph');
    switch (e.key) {
        case "ArrowUp":
            x.style.fontSize = "larger";
            break;
        case "ArrowDown":
            x.style.fontSize = "smaller";
            break;
    }
};

function mouseOverColor() {
    document.getElementById('mouseOverText').style.backgroundColor = "teal";
}

function alterTextSizeAndColor() {
    var x = document.getElementById('alterSizeColorText');
    var userFontSize = parseInt(prompt("Give an Integer for the font size")) + "px"; 
    var userColorChoice = prompt("Should I be Red or Blue?");
    x.style.fontSize = userFontSize;
    x.style.color = userColorChoice;
}

function fadeImg() {
    var img = document.getElementById('babyYoda');
    if(img.classList.contains('fade')){
        img.setAttribute('style', 'transition: opacity 5s');
    }
    img.classList.toggle('fade');

}

function audioSwap() {
    var audio = document.getElementById("my_audio");
    var audioButton = document.getElementById("audioButton");
    
    if(audio.paused == true){
        audio.volume = 0.2;
        audio.play();
        audioButton.textContent = "Pause";
    } else {
        audio.pause();
        audioButton.textContent = "Play";
    }
}

function nestedPropertyDisplay() {
    const info = {
        name: "Nested Objects",
        items: [{
            id: 1,
            identifier: 'FirstObject'
        }, {
            id: 2,
            identifier: 'SecondObject'
        }]
    };

    alert(info.name + " ID:" + info.items[0].id + " Identifer: " + info.items[0].identifier + " ID: " + info.items[1].id + " Identifer: " + info.items[1].identifier);
}

function validateForm(){
    var colorsIndex = document.getElementById("colors").selectedIndex;
    var colorsOptions = document.getElementById("colors").options;
    var genderOptions = document.querySelector('input[name="gender"]:checked').value;
    var userText = document.getElementById('textInput').value;
    var checkboxes = document.getElementsByTagName("input");
    var answers = document.getElementById('answers');

    
    var displayInfo = 
    ("\n\Your Color Choice: " + colorsOptions[colorsIndex].text) +
    ("\n\Your Gender: " + genderOptions) +
    ("\n\Your Text: " + userText) +
    ("\n\Your Animals: ");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
            if(checkboxes[i].checked == true){
                displayInfo += checkboxes[i].value + ' ';
                console.log('test');
            }
        }
    }

    answers.innerHTML = displayInfo;
}

function addObject() {
    const x = document.createElement('object');
    x.data = "snippet.html";
    x.width = "100%";
    x.height = "100px";
    document.getElementById('domObjectDiv').appendChild(x);
}

function removeObject(){
    var objects = document.getElementsByTagName('object');
    objects[0].remove();
}

function positionObject() {
    var objects = document.getElementsByTagName('object');
    document.getElementById('formDiv').after(objects[0]);
}

function newListItem(){
    var listOne = document.getElementById('listOne');
    var newItem = document.createElement('li');
    newItem.innerHTML = "New Item";
    listOne.appendChild(newItem);
}

function moveList(){
    var listOne = document.getElementById('listOne');
    var listTwo = document.getElementById('listTwo');
    var listTwoItems = listTwo.getElementsByTagName('li');

    for(i = 0; i < listTwoItems.length; i++) {
        listOne.appendChild(listTwoItems[i]);
      }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}