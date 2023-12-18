// function to display images in storage page
function displayImgInStorage() {
  let imgArray = JSON.parse(sessionStorage.getItem("imgStorer"));
  // each time the forEach runs, create a new img element and put in src and append img to img div in storage page
  imgArray.forEach(function (url) {
    let image = document.createElement("img");
    image.src = url;
    document.querySelector(".imagesInStorage").appendChild(image);
  });
  sessionStorage.setItem("imgStorer", JSON.stringify(imgArray));
}
displayImgInStorage();

// comments function to list comments on webpage
function displayComments() {
  let commentArray = [];
  let commentDiv = document.getElementById("comment-container");
  // sessionStorage to store the values
  if (sessionStorage.getItem("commentObj") === null) {
    sessionStorage.setItem("commentObj", JSON.stringify(commentArray));
  } else {
    commentArray = JSON.parse(sessionStorage.getItem("commentObj"));
    commentArray.forEach(function (comment) {
      let commentItem = document.createElement("div");
      commentItem.innerHTML = `<h3>Comments:</h3>\n<p>${comment}</p>`;
      commentItem.style.border = "black 1px solid";

      commentDiv.appendChild(commentItem);
    });
  }
}
displayComments();

// function to add to commentArray
function addComment() {
  let commentArray = JSON.parse(sessionStorage.getItem("commentObj"));
  let newComment = document.getElementById("commentInput").value;
  commentArray.push(newComment);
  sessionStorage.setItem("commentObj", JSON.stringify(commentArray));
  location.reload();
}

let commentButton = document.getElementById("cmtBtn");
commentButton.addEventListener("click", function () {
  addComment();
});
