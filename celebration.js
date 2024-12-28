document.addEventListener("DOMContentLoaded", () => {
    const flirtyQuotes = [
        "You light up my life like the stars in the sky. 🌟",
        "The world got lucky when you were born on Dec 29, 2004. ❤️",
        "Time flies, but my love for you only grows stronger. 😘",
        "You're the reason every second feels magical. ✨",
    ];
    setTimeout(() => {
        const dancingBtn = document.getElementById('dancing-btn');
        dancingBtn.classList.remove('hidden'); // Show the button
    }, 10000);
    // Function to Calculate Time Difference
    function calculateTimeFromBirth() {
        const birthDate = new Date("2004-12-29T00:00:00");
        const now = new Date();

        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();
        let hours = now.getHours() - birthDate.getHours();
        let minutes = now.getMinutes() - birthDate.getMinutes();
        let seconds = now.getSeconds() - birthDate.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    }

    // Function to Update Time Display
    function updateTime() {
        const timeString = calculateTimeFromBirth();
        document.getElementById("calculated-time").innerText = timeString;
    }

    // Countdown with progress circle
    let secondsRemaining = 60; // Update every second
    function updateCountdownCircle() {
        secondsRemaining--;
        const circle = document.querySelector(".circle-progress");
        const offset = 440 - (secondsRemaining / 60) * 440; // 440 is the total circumference of the circle

        circle.style.strokeDashoffset = offset;
        document.getElementById("circle-seconds").innerText = secondsRemaining;

        if (secondsRemaining <= 0) {
            secondsRemaining = 60;  // Reset to 60 seconds
        }
    }

    // Function to Rotate Random Quotes
    function updateQuote() {
        const randomIndex = Math.floor(Math.random() * flirtyQuotes.length);
        document.getElementById("flirty-quote").innerText = flirtyQuotes[randomIndex];
    }

    // Initialize Updates
    setInterval(updateTime, 1000); // Update time every second
    setInterval(updateCountdownCircle, 1000); // Update countdown circle
    setInterval(updateQuote, 5000); // Change quote every 5 seconds
});
