const starContainer = document.querySelector(".star-container");

const createStars1 = () => {
    const newStarDiv = document.createElement("div");
    // const randomStarId = Math.floor(Math.random()*3 + 1);
    const newStarClass = "star-1";
    newStarDiv.classList.add(newStarClass);
    starContainer.appendChild(newStarDiv);
    const newStarDivWidth = newStarDiv.offsetWidth;
    const newStarDivStyleRight = "-" + newStarDivWidth + "px";
    newStarDiv.style.right = newStarDivStyleRight;
    const newStarDivTop = Math.floor(Math.random()*window.innerHeight)-200 + "px";
    newStarDiv.style.top = newStarDivTop;
    const newStarDivTransform = newStarDivWidth + 100;
    const newStarDivTranslate = "translateX(-" + newStarDivTransform + "vw)";
    newStarDiv.style.transform = newStarDivTranslate;
}
const createStars2 = () => {
    const newStarDiv = document.createElement("div");
    // const randomStarId = Math.floor(Math.random()*3 + 1);
    const newStarClass = "star-2";
    newStarDiv.classList.add(newStarClass);
    starContainer.appendChild(newStarDiv);
    const newStarDivWidth = newStarDiv.offsetWidth;
    const newStarDivStyleRight = "-" + newStarDivWidth + "px";
    newStarDiv.style.right = newStarDivStyleRight;
    const newStarDivTop = Math.floor(Math.random()*window.innerHeight)-200 + "px";
    newStarDiv.style.top = newStarDivTop;
    const newStarDivTransform = newStarDivWidth + 100;
    const newStarDivTranslate = "translateX(-" + newStarDivTransform + "vw)";
    newStarDiv.style.transform = newStarDivTranslate;
}
const createStars3 = () => {
    const newStarDiv = document.createElement("div");
    // const randomStarId = Math.floor(Math.random()*3 + 1);
    const newStarClass = "star-3";
    newStarDiv.classList.add(newStarClass);
    starContainer.appendChild(newStarDiv);
    const newStarDivWidth = Math.floor(Math.random()*window.innerWidth/3) + "px";
    newStarDiv.style.right = newStarDivWidth;
    const newStarDivTop = Math.floor(Math.random()*window.innerHeight)-200 + "px";
    newStarDiv.style.top = newStarDivTop;
    setTimeout(() => {
        const newStarDivTranslate = "translateX(-" + 100 + "vw)";
        newStarDiv.style.transform = newStarDivTranslate;
    }, 1)
}

const clearElementsOutOfView = () => {
    for(let i=0; i<starContainer.children.length; i++) {
        const left = starContainer.children[i].offsetLeft;
        const width = starContainer.children[i].offsetWidth;
        if(left + width <= window.innerWidth) {
            starContainer.children[i].parentElement.removeChild(starContainer.children[i]);
        }
    }
}

setInterval(clearElementsOutOfView, 4500);

setInterval(createStars1, 300);
setInterval(createStars2, 300);
setInterval(createStars3, 40);