const createNavbar = () => {
    let nav = document.querySelector("#header");

    nav.innerHTML = `
        <a href="#">
            <img src="./img/logo.png" alt="" class="logo" />
        </a>
        <div class="wrapper">
            <ul class="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li>
                    <a href="cart.html" class="cart-item">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
                <i class="close fa-solid fa-xmark" onclick="hideMenuMobile()"></i>
            </ul>
        </div>
        <div class="mobile">
            <i class="cart-icon fa-solid fa-bag-shopping"></i>
            <i class="menu-icon fa-solid fa-outdent" onclick="showMenuMobile()"></i>
        </div>
    `;
};

function showMenuMobile() {
    let nav = document.querySelector("#header");
    nav.classList.add("active");
}

function hideMenuMobile() {
    let nav = document.querySelector("#header");
    nav.classList.remove("active");
}

createNavbar();
