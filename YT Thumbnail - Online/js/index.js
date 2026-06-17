// console.log("Hey! I'm index.js");

function getYtId(url) {
    const regEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/\d\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
    const match = url.match(regEx);

    if (match && match[7].length === 11) {
        return match[7];
    } else {
        return false;
    }
}

document.getElementById("btn").addEventListener("click", ev => {

    let link = document.getElementById("link").value.trim()

    let err = document.getElementById("err")
    err.innerText = "";

    if (!link == "") {

        let ytId = getYtId(link)

        if (ytId) {

            document.getElementById("imgHolder").innerHTML = "";

            appendImg(ytId, "maxresdefault", "Maximum Resolution");
            appendImg(ytId, "sddefault", "Standard Definition");
            appendImg(ytId, "hqdefault", "High Quality Default");
            appendImg(ytId, "mqdefault", "Medium Quality");

        } else {
            err.innerText = "YouTube Video ID not Found."

            if (!err.classList.contains("focus")) {
                err.classList.add("focus");
                setTimeout(e => {
                    err.classList.remove("focus");
                }, 200)
            }

        }

    } else {

        err.innerText = "Please Insert a link."

        if (!err.classList.contains("focus")) {
            err.classList.add("focus");
            setTimeout(e => {
                err.classList.remove("focus");
            }, 200)
        }

    }

});

function appendImg(id, size, text) {

    let newDiv = document.createElement("div");
    newDiv.classList.add("thumb");

    newDiv.innerHTML = `
        <h3>${text}</h3>
        <img src="https://img.youtube.com/vi/${id}/${size}.jpg" alt="youtube Thumbnail">
        <h3 class="btn-box">
        <span >Open</span>
        <form id="form" action="php/yt-thumb.php" method="POST" style="display:none;" >
        <input type="hidden" name="id" value="${id}">
        <input type="hidden" name="quality" value="${size}">
        <button class="sBtn" class=".down-btn" type="submit" name="button">Download</button>
        </form>
        <span onclick="this.parentElement.querySelector('.sBtn').click()" >Download</span>        
        </h3>
        `;

    let imgHolder = document.getElementById("imgHolder");

    imgHolder.appendChild(newDiv);

    imgHolder.lastElementChild.lastElementChild.firstElementChild.addEventListener("click", e => {

        let imgSrc = e.srcElement.parentElement.previousElementSibling.src;

        window.open(imgSrc, '_blank');

    });

    // imgHolder.lastElementChild.lastElementChild.lastElementChild.addEventListener("click", e => {

    //     // Image Download Stuff Comes Here ....

    //     let imgSrc = e.srcElement.parentElement.previousElementSibling.src;
    //     let imgSrcUriArr = imgSrc.split("/")
    //     let vId = imgSrcUriArr[4];
    //     let quality = imgSrcUriArr.pop().slice(0, -4);



    // });

};