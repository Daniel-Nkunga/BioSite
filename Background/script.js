document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");
    const hexagonConfigs = [
        { top: '20%', left: '10%', width: '100px', height: '100px' },
        { top: '50%', left: '30%', width: '80px', height: '80px' },
        { top: '80%', left: '50%', width: '120px', height: '120px' },
        { top: '30%', left: '70%', width: '90px', height: '90px' },
        { top: '60%', left: '20%', width: '110px', height: '110px' },
        { top: '10%', left: '60%', width: '70px', height: '70px' },
        { top: '40%', left: '80%', width: '85px', height: '85px' },
        { top: '80%', left: '80%', width: '300px', height: '300px' }
    ];

    hexagonConfigs.forEach((config, index) => {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");

        hexagon.style.top = config.top;
        hexagon.style.left = config.left;
        hexagon.style.width = config.width;
        hexagon.style.height = config.height;

        // Generate random animation duration between 5 and 15 seconds
        const animationDuration = 15 + Math.random() * 10;
        hexagon.style.animationDuration = `${animationDuration}s`;

        // Randomly assign clockwise or counterclockwise rotation
        const isCounterclockwise = Math.random() < 0.5;
        if (isCounterclockwise) {
            hexagon.classList.add("counterclockwise");
        }

        background.appendChild(hexagon);
    });
});
