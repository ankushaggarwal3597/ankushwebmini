var countDownDate = new Date("Mar 31, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =+days + ":" + hours + ":" + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
document.addEventListener("DOMContentLoaded", function () {
    let startIndexToday = 0;
    let endIndexToday = 3;
    let startIndexCateg = 0;
    let endIndexCateg = 3;
    const incartItems = document.querySelectorAll(".incartitems");
    const incarttext=document.querySelectorAll(".movetext");
    const cateogaryItems = document.querySelectorAll(".cateogaryitems");
    showItemsInRange(startIndexToday, endIndexToday, incartItems);
    showtextinrange(startIndexToday,endIndexToday,incarttext);
    function showItemsInRange(start, end, items) {
        items.forEach((item,index) => {
            if (index >= start && index <= end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    );
    }
    function showtextinrange(starttext,endtext,text) {
        text.forEach((text,index) => {
            if (index >= starttext && index <= endtext) {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        }
    );  
    }
    function showNextItemsToday() {
        if (endIndexToday < incartItems.length - 1) {
            startIndexToday++;
            endIndexToday++;
            showItemsInRange(startIndexToday, endIndexToday, incartItems);
            showtextinrange(startIndexToday,endIndexToday,incarttext);
        }
    }
    function showPreviousItemsToday() {
        if (startIndexToday > 0) {
            startIndexToday--;
            endIndexToday--;
            showItemsInRange(startIndexToday, endIndexToday, incartItems);
            showtextinrange(startIndexToday,endIndexToday,incarttext);
        }
    }
    function showNextItemsCateg() {
        if (endIndexCateg < cateogaryItems.length - 1) {
            startIndexCateg++;
            endIndexCateg++;
            showItemsInRange(startIndexCateg, endIndexCateg, cateogaryItems);
        }
    }
    function showPreviousItemsCateg() {
        if (startIndexCateg > 0) {
            startIndexCateg--;
            endIndexCateg--;
            showItemsInRange(startIndexCateg, endIndexCateg, cateogaryItems);
        }
    }
    const forwardButtonToday = document.getElementById("forwardButton");
    if (forwardButtonToday) {
        forwardButtonToday.addEventListener("click", showNextItemsToday);
    }
    const backButtonToday = document.getElementById("backButton");
    if (backButtonToday) {
        backButtonToday.addEventListener("click", showPreviousItemsToday);
    }
    const forwardButtonCateg = document.getElementById("forwardButton_categ");
    if (forwardButtonCateg) {
        forwardButtonCateg.addEventListener("click", showNextItemsCateg);
    }
    const backButtonCateg = document.getElementById("backButton_categ");
    if (backButtonCateg) {
        backButtonCateg.addEventListener("click", showPreviousItemsCateg);
    }
});
/*
document.addEventListener("DOMContentLoaded", function () {
    let startIndexToday = 0;
    let endIndexToday = 3;
    const rows = document.querySelectorAll(".ourproductitems");
    showItemsInRange(startIndexToday, endIndexToday, rows);
    function showItemsInRange(start, end, items) {
        items.forEach((item, index) => {
            if (index >= start && index <= end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    let currentRow = 0;
    function showNextItems() {
        if (currentRow < rows.length - 1) {
            rows[currentRow].style.display = "none";
            rows[currentRow + 1].style.display = "none";
            currentRow++;
            rows[currentRow].style.display = "flex";
            rows[currentRow + 1].style.display = "flex";
        }
    }

    function showPreviousItems() {
        if (currentRow > 0) {
            rows[currentRow].style.display = "none";
            rows[currentRow + 1].style.display = "none";
            currentRow--;
            rows[currentRow].style.display = "flex";
            rows[currentRow + 1].style.display = "flex";
        }
    }

    if (rightArrow) {
        rightArrow.addEventListener("click", showNextItems);
    }

    if (leftArrow) {
        leftArrow.addEventListener("click", showPreviousItems);
    }
});*/
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.animationcontent img'); 
    let currentImageIndex = 0;
    function showImage(index) {
      images.forEach(image => image.style.display = 'none'); 
      images[index].style.display = 'block'; 
    }
  
    function switchImage() {
      currentImageIndex++; 
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0; 
      }
      showImage(currentImageIndex); 
    }
  
    showImage(currentImageIndex); 
    setInterval(switchImage, 5000); 
});
  