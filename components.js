const EL = (name, el) => {
    return customElements.define(name, el)
}

EL('main-app',
    class extends HTMLElement {
        api = new Figma.Api({
            personalAccessToken: '58018-48bd1f1c-142b-42b6-9b8c-29af938a201e'
        });

        connectedCallback() {
            this.api.getFile('hVKDlMRrCmwWQXUcVjDTJK').then((file) => {
                var target = file.document.children[0];
                var prep = `
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
                    <div class="content">`

                for (var i in target.children)
                    prep += `<iframe width="500px" height="300px" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/hVKDlMRrCmwWQXUcVjDTJK/Buttons-DS.2020?node-id=${target.children[i].id}"></iframe>`

                prep += `
                    </div>
                </div>
                </div>
      `
                this.innerHTML += prep
                var dropdown = document.getElementsByClassName("component-section");
                var i;

                for (var i = 0; i < dropdown.length; i++) {
                    dropdown[i].addEventListener("click", function () {
                        for (var j = 0; j < dropdown.length; j++) {
                            if (dropdown[j] != this) {
                                dropdown[j].classList.remove("active");
                                var dropdownContent = dropdown[j].nextElementSibling;
                                dropdownContent.style.display = "none";
                            }
                        }
                        this.classList.toggle("active");
                        var dropdownContent = this.nextElementSibling;
                        if (dropdownContent.style.display === "block") {
                            dropdownContent.style.display = "none";
                        } else {
                            dropdownContent.style.display = "block";
                        }
                    });
                }

                var main = document.getElementsByClassName("main")[0]
                main.onscroll = function () {
                    myFunction()
                };

                var navbar = document.getElementsByClassName("topbar")[0];
                var sticky = navbar.offsetTop;

                function myFunction() {
                    if (main.scrollTop >= sticky) {
                        navbar.classList.add("sticky")
                    } else {
                        navbar.classList.remove("sticky");
                    }
                }
            })
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
            for (var i = 0; i < sections.length; i++)
                if (sections[i] != null)
                    this.innerHTML += `
            <p>${sections[i]}</p>
    `;
        }
    }
);