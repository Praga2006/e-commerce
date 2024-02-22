var cross= document.getElementById("cross-navbar");
function showside()
{
    cross.style.left="0%"
    cross.style.transition="1s"
}
function closeside()
{
    cross.style.left="-60%"
    cross.style.transition="1s"
}
// For collections
var collections = document.getElementById("items")
var search = collections.querySelectorAll("p")
function check(event) {
    var word = event.target.value.toUpperCase();
    for (var i = 0; i < search.length; i++) {
        if (search[i].textContent.toUpperCase().indexOf(word) < 0) {
            search[i].parentElement.style.display = "none";
        }
        else
        {
            search[i].parentElement.style.display = "block";
        }
    }
}