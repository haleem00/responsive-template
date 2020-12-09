// start popup box or lightbox

let images = document.querySelectorAll(".img-box img");

images.forEach(img => {
    img.addEventListener("click", (e) => {
        // create overlay
        
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        // create main-box
        let maincontainer = document.createElement("div");
        maincontainer.classList.add("main-container");
        document.body.appendChild(maincontainer);

        let mainBox = document.createElement("div");
        mainBox.classList.add("main-box");
        maincontainer.appendChild(mainBox);

        // create img
        let imgs = document.createElement("img");
        imgs.src = e.target.src;
        mainBox.appendChild(imgs);

        // create X icon for close

        let closeX = document.createElement("div");
        closeX.classList.add("close-x");
        
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-times");
        closeX.appendChild(icon);
        mainBox.appendChild(closeX);


        // create slider icon left and right

        let left = document.createElement("i");
        left.classList.add("left", "fa", "fa-angle-left");
        maincontainer.appendChild(left);

        let right = document.createElement("span");
        right.classList.add("right", "fa", "fa-angle-right");
        maincontainer.appendChild(right);


        // start slider

        let imgarray = Array.from(document.querySelectorAll(".img-box img")),

            imgcount = imgarray.length,
            current = parseInt(e.target.getAttribute("data-num"));
        
        let nextbutt = document.querySelector(".main-container .right"),
            prevbutt = document.querySelector(".main-container .left");
        
        // run the botton
        nextbutt.onclick = nextfunction;
        prevbutt.onclick = prevfunction;


        // arrow function left and right on keybourd
        document.onkeydown = function() {
            if (window.event.keyCode == "37") {
                prevfunction();

            } else if (window.event.keyCode == "39") {
                nextfunction();
            }
        };
        
        // next function
        function nextfunction() {
            if (current !== imgcount - 1){
                
                imgs.src = imgarray[parseInt(current) + 1].src;
                current++;
            } else {
                current = 0
                imgs.src = imgarray[parseInt(current) ].src;
            }
        };

        // prev function
        function prevfunction() {
            if (current !== 0){
                        
                imgs.src = imgarray[parseInt(current) - 1].src;
                current--;
            } else {
                current = imgcount - 1
                imgs.src = imgarray[parseInt(current) ].src;
            }
        };
    })
});

 // to close all mainbox and overlay
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("fa-times") || e.target.className == "overlay")  {

        document.querySelector(".overlay").remove();
        document.querySelector(".main-container").remove();
        

    }
})


// end popup box


// navbar menu

let butt = document.querySelector(".check-i"),

mynavlink = document.querySelector(".nav-links"),

hrline = document.querySelector(".hr");


butt.onclick = function() {

    mynavlink.classList.toggle("open");
    hrline.classList.toggle("hr-open");

};

// close navbar
/*
document.addEventListener("click", (e) => {
    if (e.target !== mynavlink && e.target !== butt && e.target !== hrline) {

        if (mynavlink.classList.contains("open")){

            
            hrline.classList.toggle("open")
        };
    };
});

*/





