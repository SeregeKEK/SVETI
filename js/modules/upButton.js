export function upButton() {

    document.addEventListener("DOMContentLoaded", function () {
        const backToTop = document.querySelector(".up-button");
        const backToTopHidden = "up-button--hidden";

        // Показать/скрыть кнопку при прокрутке страницы
        window.addEventListener("scroll", function () {
            if (window.scrollY >= 300) {
                backToTop.classList.remove(backToTopHidden);
            } else {
                backToTop.classList.add(backToTopHidden);
            }
        });

    });
}
