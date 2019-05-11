window.createMenu = (triggerSelector, items) => {
    const trigger = document.querySelector(triggerSelector);

    // if no trigger exists, warn and exit
    if (!trigger) {
        alert(
            "Please provide a valid selector for an element onto which to attach the menu!"
        );
        return;
    }
    // make sure the trigger always displays a pointer on hover
    trigger.addEventListener("mouseover", e => {
        trigger.style.cursor = "pointer";
    });
    trigger.addEventListener("mouseout", () => {
        trigger.style.cursor = "unset";
    });

    const box = trigger.getBoundingClientRect();

    // create container for the menu elements
    const container = document.createElement("ul");
    container.className = "menu-container";
    container.style.display = "none";
    container.style.opacity = 0;
    container.style.position = "absolute";
    container.style.top = 0;
    container.style.left = 0;

    // create elements for menu items
    const html = items
        .map(item => {
            return `
        <li class="menu-item">
            <a href="${item.href}">${item.text}</a>
        </li>
        `;
        })
        .reduce((acc, curr) => acc.concat(curr), "");

    // add elements to container
    container.innerHTML = html;

    // add elements on the body
    document.body.appendChild(container);

    // add event listener for clicks on clicker
    trigger.addEventListener("click", e => {
        e.stopPropagation();
        container.style.top = `${box.top + box.height + 5}px`;
        container.style.left = `${box.left}px`;
        const visible = Number(container.style.opacity);
        if (visible === 1) {
            container.style.display = "none";
            container.style.opacity = 0;
        } else {
            container.style.display = "block";
            container.style.opacity = 1;
        }
    });

    // add event listener for clicks outside the element to hide it
    window.addEventListener("click", e => {
        const target = e.target;
        const cond =
            target !== container &&
            !container.contains(target) &&
            Number(container.style.opacity) === 1;
        if (cond) {
            container.style.opacity = 0;
            container.style.display = "none";
        }
    });
};
