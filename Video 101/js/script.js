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
        let cIndex = 0 ; 
        
        buttons.forEach((e, index) => {
            e.addEventListener("click",() => {
                bottomDiv.style.width = e.querySelector("span").offsetWidth + "px";

                if (index !== cIndex){
                    buttons[index].appendChild(bottomDiv);
                    buttons[cIndex].querySelector("span").style.color = "rgb(113 118 123)";
                    buttons[index].querySelector("span").style.color = "rgb(255 255 255)";
                    cIndex = index ;
                }
            });
        });
    }
    {

    }
})();

// Delay Function
(async function main() {

})();