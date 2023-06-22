
var  imgFeature = document.querySelector(".img-feature")
var  listImg = document.querySelectorAll(".list img")
var  nextBtn = querySelector(".control__next")
var  preBtn = querySelector(".control__pre")

var currentIndex = 0;

function updateImageByIndex(index){
    currentIndex = index
    imgFeature.src = listImg(index).getAttribute('src')
}

listImg.forEach(imgElement=>{

    imgElement.addEventListener('click', e=>{
        updateImageByIndex(index)
    })
})

preBtn.addEventListener('click', e=>{

})
