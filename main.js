document.querySelectorAll(".hidden").forEach((e) => {
    console.log(e);
    e.querySelectorAll("img").forEach((element) => {
        element.addEventListener("click", () => {
            e.classList.toggle("hidden");
        })
    })
});
