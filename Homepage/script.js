var navLinks = document.getElementById("navLinks")

function showMenu(){
	navLinks.style.right ="0"
}

function hideMenu(){
	navLinks.style.right ="-200px"
}

let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : true,
    controls : true,
    autoplayButtonOutput : false,
    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
    }
})