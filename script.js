// Переключение темы
document.getElementById("themeButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Плавный скролл по странице
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
});

// Слайдер изображений
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("sliderImage").src = "images/" + images[currentIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = "images/" + images[currentIndex];
});

// Функция для раскрытия скрытого текста
function toggleText(id, btn) {
    let textBlock = document.getElementById(id);
    if (textBlock.style.display === "none" || textBlock.style.display === "") {
        textBlock.style.display = "inline";
        btn.textContent = "Скрыть";
    } else {
        textBlock.style.display = "none";
        btn.textContent = "...";
    }
}