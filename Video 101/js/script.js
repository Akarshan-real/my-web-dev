// Global Variable Declaration


// ASAP Function
(function immediate() {

})();

(function hoverColorChange() {
    {
        document.querySelectorAll(".blueLogoGlow").forEach(e => {
            const prevColor = e.style.color;
            e.addEventListener("mouseenter", () => {
                e.style.color = "rgb(29,155,240)";
            });
            e.addEventListener("mouseleave", () => {
                e.style.color = prevColor;
            });
        })
    }
    {
        const bottomDiv = document.createElement('div');
        bottomDiv.classList.add('bottomDiv');

        const buttons = document.querySelectorAll(".topOptions");
        bottomDiv.style.width = buttons[0].querySelector("span").offsetWidth + "px";
        buttons[0].appendChild(bottomDiv);
        buttons[0].querySelector("span").style.color = "rgb(255 255 255)";
        // grey -> rgb(113 118 123) ; rgb(255 255 255) <- white
        let cIndex = 0;

        buttons.forEach((e, index) => {
            e.addEventListener("click", () => {
                bottomDiv.style.width = e.querySelector("span").offsetWidth + "px";

                if (index !== cIndex) {
                    buttons[index].appendChild(bottomDiv);
                    buttons[cIndex].querySelector("span").style.color = "rgb(113 118 123)";
                    buttons[index].querySelector("span").style.color = "rgb(255 255 255)";
                    cIndex = index;
                }
            });
        });
    }
    {
        // Blue
        document.querySelectorAll(".blueGlowButton").forEach(button => {
            const icon = button.querySelector(".blueGlowLogo");
            const text = button.querySelector(".blueGlowText");

            const prevBgColor = "transparent";
            const prevSVGColor = icon.style.color;
            const prevTextColor = text.style.color;

            button.addEventListener("mouseenter", () => {
                icon.style.backgroundColor = "rgb(3,16,21)";
                icon.style.color = "rgb(29,155,240)";
                text.style.color = "rgb(29,155,240)";
            });

            button.addEventListener("mouseleave", () => {
                icon.style.backgroundColor = prevBgColor;
                icon.style.color = prevSVGColor;
                text.style.color = prevTextColor;
            });
        });
        // Green
        document.querySelectorAll(".greenGlowButton").forEach(button => {
            const icon = button.querySelector(".greenGlowLogo");
            const text = button.querySelector(".greenGlowText");

            const prevBgColor = "transparent";
            const prevSVGColor = icon.style.color;
            const prevTextColor = text.style.color;

            button.addEventListener("mouseenter", () => {
                icon.style.backgroundColor = "rgb(7, 26, 20)";
                icon.style.color = "rgb(0, 186, 124)";
                text.style.color = "rgb(0, 186, 124)";
            });

            button.addEventListener("mouseleave", () => {
                icon.style.backgroundColor = prevBgColor;
                icon.style.color = prevSVGColor;
                text.style.color = prevTextColor;
            });
        });
        // Pink
        document.querySelectorAll(".pinkGlowButton").forEach(button => {
            const icon = button.querySelector(".pinkGlowLogo");
            const text = button.querySelector(".pinkGlowText");

            const prevBgColor = "transparent";
            const prevSVGColor = icon.style.color;
            const prevTextColor = text.style.color;

            button.addEventListener("mouseenter", () => {
                icon.style.backgroundColor = "rgb(32, 9, 20)";
                icon.style.color = "rgb(249, 24, 128)";
                text.style.color = "rgb(249, 24, 128)";
            });

            button.addEventListener("mouseleave", () => {
                icon.style.backgroundColor = prevBgColor;
                icon.style.color = prevSVGColor;
                text.style.color = prevTextColor;
            });
        });
    }
})();

(function responsive() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        document.querySelector(".postLogo").classList.remove("hidden");
        document.querySelector(".postButton").classList.remove("p-3");
    }

})();

// Delay Function
(async function main() {

})();