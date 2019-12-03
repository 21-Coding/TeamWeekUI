import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
import './src-noconflict/worker-javascript.js';
import img from './media/atom.0_icon.png';

// var atomIcon = document.getElementById('atom');
// atomMedia.src = atomIcon;

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

let collectionArray = [];

document.addEventListener("keydown", function(event) {
console.log(event.which);
console.log(event.repeat);
if (event.repeat === false) {
    collectionArray.push(event.which);
}

console.log(collectionArray);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// $(document).ready(function {
//   $('').val();
// })
