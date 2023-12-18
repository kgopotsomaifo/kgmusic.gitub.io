// jquery functions
$(document).ready(function () {
  // drop-down menu
  $(".commentHeading").click(function () {
    // toggle the content
    $(this).next(".commentContent").slideToggle(200);
  });
  // hide and show function
  $("#hide").click(function () {
    $(".form-container").hide();
  });
  $("#show").click(function () {
    $(".form-container").show();
  });
  // animation and chain effect
  $("#animateBtn").click(function () {
    $("h2.testimonial")
      .css("color", "blue")
      .animate({ left: "150px", fontSize: "50px" })
      .animate({ left: "150px", fontSize: "40px" });
    $("#content").css("color", "red");
  });
  // like button functionality
  $("button.likeButton").click(function () {
    $("img.likeIcn").classList.remove();
  });
});

// functionality to transfer images to save later page and an alert window to display number of images saved
function saveLater(src) {
  let imgArray = [];
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("imgStorer", JSON.stringify(imgArray));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    imgArray = JSON.parse(sessionStorage.getItem("imgStorer"));
  }
  // push src into array

  if (!imgArray.includes(src)) {
    imgArray.push(src);
    sessionStorage.setItem("imgStorer", JSON.stringify(imgArray));
    alert(imgArray.length + " file in the archive");
    console.log(imgArray);
  } else {
    alert("you have this in your archive already");
  }
}

// below is to target the hyperlink for the image
document.querySelectorAll(".addButton").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const imgLink = e.target.parentNode.querySelector("img").src;
    saveLater(imgLink);
  });
});

// like button functionality
function myFunction() {
  document.querySelector(".button").innerHTML = "Liked!";
}

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DO NOT FORGET READ ME FILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
