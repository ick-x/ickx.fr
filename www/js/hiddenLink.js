var currentInnerHtml;
var element = new Image();
var elementWithHiddenContent = document.querySelector("#prout");
var innerHtml = elementWithHiddenContent.innerHTML;
element.__defineGetter__("id", function() {
    currentInnerHtml = "";
});
setInterval(function() {
    currentInnerHtml = innerHtml;
    console.log(element);
    console.clear();
    elementWithHiddenContent.innerHTML = currentInnerHtml;
}, 1000);