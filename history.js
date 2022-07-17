$(document).ready(function () {
    if (window.sessionStorage && sessionStorage.HelloName)
    {
        $('#helloName').html(sessionStorage.HelloName);
    }
});

var article = document.createElement('article');
var text = document.createTextNode('Z okazji 100. rocznicy niepodległości zaprosiliśmy arcymistrza Sławomira Grabarczyka na symultanę. Wzięło w niej udział ponad 30 zawodników, a nawet udało się na koniec jednemu z nich zremisować.');
var p = document.createElement('p');
p.appendChild(text);
article.appendChild(p);
document.getElementById('articlesContainer').appendChild(article);

document.getElementById('lessons').classList.add("redBorder");