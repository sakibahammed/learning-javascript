const img = [
    'img/pic1.jpg',
    'img/pic2.jpg',
    'img/pic3.jpg',
    'img/pic4.jpg',
    'img/pic5.jpg',
    'img/pic6.jpg',
    'img/pic7.jpg',
    'img/pic8.jpg',
    'img/pic9.jpg',
]
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(()=>{
    if(imgIndex >= img.length){
        imgIndex = 0;
    }
    // console.log(imgIndex)

    const imgUrl = img[imgIndex]
    // console.log(imgUrl)
    imgElement.setAttribute('src',imgUrl);

    imgIndex++;
},2000)