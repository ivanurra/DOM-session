let theTitle = document.getElementById('title');

theTitle.innerHTML = "It's a DOM session.";
console.log(theTitle)

theTitle.style.backgroundColor = 'black';
theTitle.style.border = '2px green solid';
theTitle.style.fontSize = '30px';
theTitle.style.marginTop = '30px';
theTitle.style.paddingBottom = '30px';

let divs = document.getElementsByTagName('div')
console.log(divs)

let theParragraphs = document.querySelector('.paragraphs')
theParragraphs.style.border = '2px green solid';

let parrag = document.querySelector('.paragraphs');
parrag.className = 'inactive'

//setAttribute

let foot = document.getElementById('footer');
foot.setAttribute('id', 'footerPlus');

//Create

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'DOM Manipulation'

let parent = document.getElementsByTagName('body')[0]; // No need to repeat
parent.appendChild(h2Tag);

//createTextNode()

let text = document.createTextNode('This text is created dynamically  ');

parent.appendChild(text);

//Adding an element before another element

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

// Assign events to DOM elements

let button = document.getElementById('button');
 
button.onclick = function() {
    let image = document.getElementById('image');
    image.innerHTML = 'Bye Photo'
    image.style.fontSize = '60px';
};

//*****

[...document.querySelectorAll('.list li')].forEach(li => {
    li.onclick = function () {
      console.log(li.innerHTML);
    };
  });
  