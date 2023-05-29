const createFooter = () => {
    let footer = document.getElementById("footer");

    footer.innerHTML = `
        <div class="col">
            <img class="logo" src="./img/logo.png" alt="" />
            <h4>Contact</h4>
            <p><strong>Address:</strong> 562 wellington road, street 32, san francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91)01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00. Mon - Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Private Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">help</a>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From app store or google play</p>
            <div class="row">
                <img src="./img/pay/app.jpg" alt="" />
                <img src="./img/pay/play.jpg" alt="" />
            </div>
            <p>Secured payment gateways</p>
            <img src="./img/pay/pay.png" alt="" />
        </div>

        <div class="copyright">
            <p>© 2023, HTML - CSS - JS, E-commerce Template</p>
        </div>
    `;
};

createFooter();
