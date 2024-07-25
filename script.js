document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const nextPreWishButton = document.getElementById('nextPreWishButton');
    const nextWishButton = document.getElementById('nextWishButton');
    const musicButton = document.getElementById('musicButton');
    const preWishesContainer = document.getElementById('preWishesContainer');
    const wishesContainer = document.getElementById('wishesContainer');
    const singleWishContainer = document.getElementById('singleWish');
    const allWishesContainer = document.getElementById('allWishes');
    const preWishes = document.querySelectorAll('.pre-wish');
    const wishes = document.querySelectorAll('.wish');
    const birthdayMessage = document.querySelector('h1');
    const cake = document.querySelector('.cake');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const allWishesText = document.querySelector('.all-wishes');

    let currentPreWish = 0;
    let currentWish = 0;
    let musicPlaying = true;
    let allWishesCombined = '';

    startButton.addEventListener('click', function() {
        startButton.classList.add('hidden');
        preWishesContainer.classList.remove('hidden');
        nextPreWishButton.classList.remove('hidden');
        preWishes[currentPreWish].classList.remove('hidden');
    });

    nextPreWishButton.addEventListener('click', function() {
        showNextPreWish();
    });

    nextWishButton.addEventListener('click', function() {
        showNextWish();
    });

    musicButton.addEventListener('click', function() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            backgroundMusic.play();
            musicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        musicPlaying = !musicPlaying;
    });

    function showNextPreWish() {
        if (currentPreWish < preWishes.length - 1) {
            preWishes[currentPreWish].classList.add('hidden');
            currentPreWish++;
            preWishes[currentPreWish].classList.remove('hidden');
        } else {
            preWishesContainer.classList.add('hidden');
            nextPreWishButton.classList.add('hidden');
            wishesContainer.classList.remove('hidden');
            singleWishContainer.classList.remove('hidden');
            nextWishButton.classList.remove('hidden');
            musicButton.classList.remove('hidden');
            birthdayMessage.classList.remove('hidden');
            backgroundMusic.play();
        }
    }

    function showNextWish() {
        if (currentWish < wishes.length) {
            if (currentWish === 0) {
                birthdayMessage.classList.add('hidden');
            } else {
                wishes[currentWish - 1].classList.add('hidden');
            }
            wishes[currentWish].classList.remove('hidden');
            allWishesCombined += wishes[currentWish].textContent + '<br>';
            currentWish++;
        } else {
            wishes[currentWish - 1].classList.add('hidden');
            singleWishContainer.classList.add('hidden');
            allWishesContainer.classList.remove('hidden');
            allWishesText.innerHTML = allWishesCombined;
            cake.classList.remove('hidden');
            launchConfetti();
        }
    }

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});
