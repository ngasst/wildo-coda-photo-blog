(() => {
    const pages = ["home", "categories", "about us", "contact"];
    const nav = document.createElement("nav");
    nav.classList = ["photo-blog-nav"];
    pages.forEach(page => {
        const navDiv = document.createElement("div");
        navDiv.textContent = page
            .split(" ")
            .map(word =>
                [
                    word.charAt(0).toUpperCase(),
                    ...word.filter((_, i) => i > 0)
                ].join("")
            );
    });