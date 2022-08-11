import Data from '/data.js'
import { i } from '/index.js'

class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    nope() {
        Data[i].hasBeenSwiped = true;
        this.hasBeenSwiped = true;


        if (this.hasBeenSwiped) {
            // console.log("working")

            // document.getElementById("nope").style.display = "block"
            // document.getElementById("like").style.display = "none"
        }
    }

    like() {

        // document.getElementById("nope").style.display = "none"
        // document.getElementById("like").style.display = "block"
    }

    HtmlGenerator() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        //    document.getElementById("pe").style.display = "block"
        if (Data[i].hasBeenSwiped) {
            // document.getElementById("nope").style.display = "block"
            // document.getElementById("like").style.display = "none"
            console.log("its reaching here")
            return `

                    <img id="main-img" src="${avatar}" /> 
                    <img id="nope" src="images/badge-nope.png" />
                    <div class="text-content">
                    <h3>${name}</h3>
                    <p>${age}<p>
                    <p>${bio}<p>
                    </div>
                    `
        } else if (Data[i].hasBeenLiked) {

            return `

                    <img id="main-img" src="${avatar}" /> 
                    <img id="like" src="images/badge-like.png" />
                    <div class="text-content">
                    <h3>${name}</h3>
                    <p>${age}<p>
                    <p>${bio}<p>
                    </div>
                    `
        } else {
            return `
                    <img id="main-img" src="${avatar}" /> 
                    <div class="text-content">
                    <h3>${name}</h3>
                    <p>${age}<p>
                    <p>${bio}<p>
                    </div>
            `
        }
    }


}

export default Cat;