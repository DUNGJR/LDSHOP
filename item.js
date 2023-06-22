var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.LeftBlock_list img')
var preBtn = document.querySelector('.control__pre')
var nextBtn = document.querySelector('.control__next')

listImg.forEach(imgElement=>{
    imgElement.addEventListener('click', e=>{
        imgFeature.src = e.target.getAttribute('src')
    } )
})

