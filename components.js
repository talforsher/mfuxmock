const EL = (name, el) => {
    return customElements.define(name, el)
}

addEventListener("load", function () {
    var dropdown = document.getElementsByClassName("component-section");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
})

EL('main-app',
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <div class="app">
                <side-bar class="sidebar"></side-bar>
                <div class="gap"></div>
                <div class="main">
                    <div class="topbar">
                    <div>
                        <h1>Components</h1>
                    </div>
                    <div>
                    </div>
                    <div>
                        <h2 class="section">Buttons</h2>
                    </div>
                    <div>
                        <h2 class="version">2020_07</h2>
                    </div>
                    </div>
                    <div class="intro">intro</div>
                    <div class="content">
                    <div>content</div>
                    </div>
                </div>
                </div>
      `;
        }
    }
);

EL('side-bar',
    class extends HTMLElement {
        subSections = {
            principles: ["hey", "oh"],
            components: ["this", "that"],
            tokens: ["here", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there"],
            downloads: ["for", "what?"],
    }
        connectedCallback() {
            const subSections = this.subSections
            this.innerHTML = `
            <div class=sidebar-head>
                <div class="sidebar-head-top">
                    <p>EverythingUX</p>
                    <img src="assets/img/arrow.svg" />
                </div>
                <img class="search-icon" src="assets/img/search.svg" />
                <input type="text" class="search" placeholder="search"></input>
            </div>
            <div class=sidebar-main>
                <components-sections image="assets/img/placeholder.svg" section="Principles" sub-sections=${subSections.principles}></components-sections>
                <components-sections image="assets/img/placeholder.svg" section="Components" sub-sections=${subSections.components}></components-sections>
                <components-sections image="assets/img/placeholder.svg" section="Tokens" sub-sections=${subSections.tokens}></components-sections>
                <components-sections image="assets/img/placeholder.svg" section="Downloads" sub-sections=${subSections.downloads}></components-sections>
            </div> 
    `;
        }
    }
);

EL('components-sections',
    class extends HTMLElement {
        subSections = this.getAttribute("sub-sections")
        connectedCallback() {
            this.innerHTML = `
            <div class="component-section">
                <img src=${this.getAttribute("image")} />
                <p>${this.getAttribute("section")}</p>
            </div>
            <dropdown-container component=${this.getAttribute("sub-sections")} class="dropdown-container"></dropdown-container>
    `;
        }
    }
);

EL('dropdown-container',
    class extends HTMLElement {
        connectedCallback() {
            const sections = this.getAttribute("component").split(",")
            for(var i = 0; i < sections.length; i++)
            if (sections[i] != null)
            this.innerHTML += `
            <p>${sections[i]}</p>
    `;
        }
    }
);