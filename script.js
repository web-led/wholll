const gameOn = document.getElementById('game-on');
const gameOf = document.getElementById('game-off');
const photo = document.getElementById('photo');
const finalValue = document.getElementById('photo_container')



var imageUrls = [
    'https://i.postimg.cc/J40K90j8/426569008-1122235599204778-6337650162942605007-n.jpg',
    'https://i.postimg.cc/htJy7vGs/426811507-368597049369215-7694258287966091728-n.jpg',
    'https://i.postimg.cc/vBv3d6PY/429611586-418764270717986-4055984347977609688-n.jpg',
    'https://i.postimg.cc/FRvDqxVC/429626045-1105326894134666-8179758240400256506-n.jpg',
    'https://i.postimg.cc/MZddPVMt/429636899-700656082272586-453086972504871609-n.jpg',
    'https://i.postimg.cc/x8x5XVDB/429707644-382343227844854-4572867811508070294-n.jpg',
    'https://i.postimg.cc/L56v467z/429739175-719979790268755-8250012641622052518-n.jpg',
    'https://i.postimg.cc/MKLtxwYQ/429898423-7761688110561243-2670639382704771728-n.jpg',
];

function displayRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageUrls.length);

    var imageUrl = imageUrls[randomIndex];

    return imageUrl;
}





const valueGenerator = (angleValue) => {


    if (clickCount < 4) {
        photo.src = 'https://cdn4.vectorstock.com/i/1000x1000/32/28/try-again-rubber-stamp-vector-20003228.jpg'
    } else {
        photo.src = displayRandomImage()
    }



};




const audio = document.querySelector('#myAudio');
gameOn.addEventListener("click", () => {

    // Get the current click count from Local Storage
    let clickCount = localStorage.getItem('clickCount');

    // If clickCount is null or undefined, set it to 0
    if (!clickCount) {
        clickCount = 0;
    }

    // Convert clickCount to a number
    clickCount = parseInt(clickCount);

    // Increment the clickCount by 1
    clickCount++;

    // Check if the clickCount exceeds 3
    if (clickCount > 3) {
        // Disable the button if the clickCount exceeds 3
        gameOn.disabled = true;

        // Calculate the time for enabling new spins
        const currentTime = new Date();
        const nextSpinTime = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000)); // Add 24 hours

        // Display warning message
        const warningMessage = `تم استهلاك جميع الدورات المتاحة. ستتمكن من الدورات الجديدة بعد 24 ساعة في ${nextSpinTime.toLocaleString()}`;
        alert(warningMessage);


        gameOn.style.display = 'none';
        gameOf.style.display = 'block'


        return;
    } else if (clickCount < 3) {
        finalValue.innerHTML = `
        <img src="https://cdn4.vectorstock.com/i/1000x1000/32/28/try-again-rubber-stamp-vector-20003228.jpg" style="width:235px; height:235px; margin-top: 3%;" alt="" id="photo">
        <h3>حاول تاني لسة فرصتك موجودة</h3>
        `;
    } else if (clickCount == 3) {
        finalValue.innerHTML = `
        <img src='${displayRandomImage()}' style="width:235px; height:235px; margin-top: 3%;" alt="" id="photo">
        <h3> مبروك كسبت معانا</h3>

        `;
    }

    // Update the click count in Local Storage
    localStorage.setItem('clickCount', clickCount);

    audio.play();


});

console.log(localStorage.getItem('clickCount'));