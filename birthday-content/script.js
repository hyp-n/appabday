function navigateTo(contentId) {
    const messages = {
        'living-room': "Welcome to Dad's Birthday Celebration! Here are our special wishes and surprises.",
        'kitchen': "Dad's favorite recipe is waiting for you! Get ready to cook up some birthday memories.",
        'birthday-wishes': 'Heartfelt birthday wishes from family and friends. Dad, you\'re the best!',
        'outdoor-celebration': 'Beautiful outdoor celebration photos and stories from our adventures together!',
        'morning-greetings': 'Good morning, Dad! Special birthday wishes to start your day with joy!'
    };

    const emojis = ['🎉', '🎊', '🎈', '🎁', '❤️'];
    const alertMessage = '🎉 Birthday Surprise! 🎉\n\n' + (messages[contentId] || 'You found a special birthday surprise!');

    document.body.style.background = 'linear-gradient(135deg, #ff0080, #ff6b6b, #ff9ff3)';
    document.body.style.backgroundSize = '400% 400%';

    setTimeout(() => {
        document.body.style.background = '#0a0a0a';
    }, 500);

    setTimeout(() => {
        alert(alertMessage);
        createCelebrationEffect();
        activateRoom(contentId);
    }, 100);
}

function activateRoom(contentId) {
    const rooms = document.querySelectorAll('.room');
    rooms.forEach(room => {
        room.classList.remove('room-active');
        const label = room.querySelector('.room-label');
        if (label) label.classList.remove('active');
    });

    const activeRoom = document.querySelector(`.room[data-room="${contentId}"]`);
    if (activeRoom) {
        activeRoom.classList.add('room-active');
        const label = activeRoom.querySelector('.room-label');
        if (label) label.classList.add('active');
    }
}

function createCelebrationEffect() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 30 + 20) + 'px';
            confetti.style.color = '#ff0080';
            confetti.style.zIndex = '9999';
            confetti.style.setProperty('--fall-height', (window.innerHeight + 50) + 'px');
            confetti.style.setProperty('--fall-rotate', Math.random() * 360 + 'deg');
            confetti.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

window.addEventListener('load', function() {
    const rooms = document.querySelectorAll('.room');
    rooms.forEach((room, index) => {
        room.addEventListener('click', function() {
            const contentId = room.getAttribute('data-room');
            navigateTo(contentId);
        });
    });
});
