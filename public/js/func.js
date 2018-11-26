const imageQuery = document.querySelectorAll('img');

imageQuery.forEach(image => {
    image.addEventListener('onmousedown', function() {
        console.log(1)
    })
})