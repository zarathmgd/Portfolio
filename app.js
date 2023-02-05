document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));

let txtAnim = document.querySelector("#codingLang");

let body = document.querySelector("body");
let count = 100;
let i = 0;

let projectButton = document.getElementsByClassName("projectButton");
let projectContainer = document.querySelector("#projects-container");
let projectCase = document.getElementsByClassName("project");
let slider = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-text");
let sliderImages = document.getElementsByClassName("slider-image");
let sliderCross = document.querySelector("#slider-cross-container");
let projectLink = document.querySelector("#project-link");
let thirdPage = document.querySelector("#third-page");
let h1thirdPage = document.querySelector("#h1-third-page");
let arrowLeft = document.querySelector("#left");
let arrowRight = document.querySelector("#right");

let navBar = document.querySelector("nav");
let navBarLink = document.getElementsByClassName("navbar-link");
let head = document.querySelector("#head");

let caseSecondPage = document.getElementsByClassName("case");
let h1SecondPage = document.querySelector("#second-page h1");
let lineSecondPage = document.getElementsByClassName("bc2");
let linkFirstPage = document.getElementsByClassName("link-first-page");

let h1lastPage = document.querySelector("#h1-last-page");
let lastPageLinkContainer = document.querySelector("#last-page-link-container");
let lastPageParagraph = document.getElementsByClassName("last-page-paragraph");
let lastPageMailLink = document.querySelector("#last-page-mail-link");
let lastLine = document.querySelector("#last-line");

console.log(navBarLink)

new Typewriter (txtAnim, {

})
.typeString("<span style = \"color: #e34c26\":>HTML</span>&nbsp&nbsp&nbsp")
.pauseFor(500)
.typeString("<span style = \"color: #264de4\":>CSS</span>&nbsp&nbsp&nbsp")
.pauseFor(500)
.typeString("<span style = \"color: #f0db4f\":>JS</span>")
.start()

while (i < count) {
    let drop = document.createElement("i");
    body.appendChild(drop);
    i++;

    drop.style.position = "absolute";
    drop.style.width = Math.random() * 5 + "px";
    drop.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    drop.style.animationDelay = Math.random() * -20 + "s";
    drop.style.animationDuration = 20 + Math.random() + "s";

    window.addEventListener("scroll", () => {
        const {scrollTop, clientHeight} = document.documentElement;
        if (scrollTop > clientHeight && scrollTop < clientHeight * 2 || scrollTop == clientHeight || scrollTop > clientHeight *3) {
            body.style.background = "white";
            body.style.color = "#333";
            h1thirdPage.style.color = "#333";
            h1lastPage.style.color = "#333";
            lastPageMailLink.style.color = "#333";
            lastPageLinkContainer.style.boxShadow = "0 7px 10px #333";
            lastPageLinkContainer.style.borderColor = "#333";
            lastLine.style.borderColor = "#333";
            sliderText.style.color = "white";

            for(i = 0; i< navBarLink.length; i++) {
                navBarLink[i].style.color = "#333";
            }

            for (i = 0; i < caseSecondPage.length; i++) {
                caseSecondPage[i].style.color = "#333";
                caseSecondPage[i].style.borderColor = "#333";
                caseSecondPage[i].style.boxShadow = "0 3px 5px #333";
            }
            for (i = 0; i < lineSecondPage.length; i++) {
                lineSecondPage[i].style.borderLeftColor = "#333";    
            }

            for (i = 0; i < projectCase.length; i++) {
                projectCase[i].style.boxShadow = "0px 0px 15px #333";    
            }

            for (i = 0; i < lastPageParagraph.length; i++) {
                lastPageParagraph[i].style.color = "#333";
            }

            navBar.style.color = "#333";
            head.style.color = "white";
            h1SecondPage.style.color = "#333";
            body.style.transitionDuration = 1  + "s";
        }
        else if (scrollTop < clientHeight || scrollTop > clientHeight * 2) {
            body.style.background = "#333";
            body.style.color = "white";
            h1thirdPage.style.color = "white";
            h1lastPage.style.color = "white";
            lastPageLinkContainer.style.borderColor = "white";
            lastPageLinkContainer.style.color = "white";
            lastPageLinkContainer.style.boxShadow = "0 7px 10px white";
            lastPageMailLink.style.color = "white";
            lastLine.style.borderColor = "white";
            sliderText.style.color = "white";
            

            for(i = 0; i< navBarLink.length; i++) {
                navBarLink[i].style.color = "white";
            }

            for (i = 0; i < caseSecondPage.length; i++) {
                caseSecondPage[i].style.color = "white";
                caseSecondPage[i].style.borderColor = "white";
                caseSecondPage[i].style.boxShadow = "0 3px 5px white";
            }
            for (i = 0; i < lineSecondPage.length; i++) {
                lineSecondPage[i].style.borderLeftColor = "white";  
            }

            for (i = 0; i < projectCase.length; i++) {
                projectCase[i].style.boxShadow = "0px 0px 15px white";    
            }

            for (i = 0; i < lastPageParagraph.length; i++) {
                lastPageParagraph[i].style.color = "white";
            }

            navBar.style.color = "white";
            h1SecondPage.style.color = "white";
            body.style.transitionDuration = 1 + "s";
            
        }
    })
    
}

for (i = 0; i < projectButton.length; i++) {
    projectButton[i].addEventListener("click", () => {
        slider.style.visibility = "visible";
        thirdPage.style.backdropFilter = "blur(5px)";
        projectContainer.style.filter = "blur(5px)";
    });

    projectButton[0].addEventListener("click", () => {
        sliderImages[0].setAttribute("src", "photos/ToDoList_Screenshot01.png");
        sliderImages[1].setAttribute("src", "photos/ToDoList_Screenshot02.png");
        sliderImages[2].setAttribute("src", "photos/ToDoList_Screenshot03.png");
        projectLink.href = "projects/ToDoList/todolist.html";
    }) 
    projectButton[1].addEventListener("click", () => {
        sliderImages[0].setAttribute("src", "photos/Timer_Screenshot01.png");
        sliderImages[1].setAttribute("src", "photos/Timer_Screenshot02.png");
        sliderImages[2].setAttribute("src", "photos/Timer_Screenshot03.png");
        projectLink.href = "projects/Timer/timer.html";
    }) 
    projectButton[2].addEventListener("click", () => {
        sliderImages[0].setAttribute("src", "photos/SAE_Screenshot01.png");
        sliderImages[1].setAttribute("src", "photos/SAE_Screenshot02.png");
        sliderImages[2].setAttribute("src", "photos/SAE_Screenshot03.png");
        projectLink.href = "projects/SAE/SAE1-1.html";
    });

    let count = 0;
    arrowRight.addEventListener("click", () => {
        sliderImages[count].classList.remove("active");
        if (count < sliderImages.length - 1) {
            count++;
        }
        else {
            count = 0;
        }
        sliderImages[count].classList.add("active");
    });

    arrowLeft.addEventListener("click", () => {
        sliderImages[count].classList.remove("active");

        if(count > 0) {
            count--;
        }
        else {
            count = sliderImages.length - 1;
        }
        sliderImages[count].classList.add("active");
    });

    sliderCross.addEventListener("click", () => {
        slider.style.visibility = "hidden";
        thirdPage.style.backdropFilter = "blur(0)";
        projectContainer.style.filter = "blur(0)";
    });
};
