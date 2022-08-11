// Remember to import the data and Dog class!
import Data from '/data.js'
import Cat from '/Cat.js'

let i = 0
let newcat = new Cat()
function render() {
    if (i === Data.length) {
        i = 0
    }
    newcat = new Cat(Data[i])
    // 
    document.getElementById("mainSc").innerHTML = newcat.HtmlGenerator()
    console.log(newcat)

}

function nope() {
    Data[i].hasBeenSwiped = true;
    Data[i].hasBeenLiked = false;
    document.getElementById("mainSc").innerHTML = newcat.HtmlGenerator()
    // render()
}
function like() {
    Data[i].hasBeenLiked = true;
    Data[i].hasBeenSwiped = false;
    document.getElementById("mainSc").innerHTML = newcat.HtmlGenerator()
}

function next() {
    i++
    render()
    console.log(Data[i].hasBeenSwiped)

}

render()
document.getElementById("btn-nope").addEventListener("click", nope)
document.getElementById("btn-like").addEventListener("click", like)
document.getElementById("next").addEventListener("click", next)
export { i }