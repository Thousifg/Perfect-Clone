window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

async function Image() {
    let res = await fetch("https://pixabay.com/api/?key=25452167-3cc9b967cae49049698b7572e&q=yellow+flowers&image_type=photo&per_page=200");
    let data = await res.json();
    console.log(data);
    showImage(data.hits);
}
Image();

function showImage(data) {
    let addImage = document.getElementById("addImage");
    addImage.innerHTML = null;
    data.forEach(function (el) {
        let div = document.createElement("div");
        // userImageURL
        let img = document.createElement("img");
        img.src = el.userImageURL;

        let tag = document.createElement("p");
        tag.innerText = el.tags;
        div.append(img, tag);
        addImage.append(div);
    });

}

//debouncing

async function searchImg() {

    let query = document.getElementById("query").value;
    console.log("qu", query);
    let res = await fetch(`https://pixabay.com/api/?key=25452167-3cc9b967cae49049698b7572e&q=${query}&image_type=photo&per_page=50`);

    let data = await res.json();
    console.log("data:", data);
    showImage(data.hits);
}