class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Brand Logo -->
        <a class="navbar-brand" href="#">
          <img src="./assets/logo/logo.png" alt="Logo" />
        </a>
        <!-- Navbar Toggler for Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav flex-fill mb-2 mb-lg-0 justify-content-end gap-xl-5 g-5 text-lg-start text-center"
          >
            <!-- Home Link -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="index.html"
                id="home"
                >الرئيسية</a
              >
            </li>
            <!-- About Link -->
            <li class="nav-item">
              <a class="nav-link" href="about.html" id="about">من نحن</a>
            </li>
            <!-- Services for Individuals Link -->
            <li class="nav-item">
              <a
                class="nav-link"
                href="services-individual.html"
                id="servicesIndividual"
                >خدماتنا-افراد</a
              >
            </li>
            <!-- Services for Companies Link -->
            <li class="nav-item">
              <a
                class="nav-link"
                href="services-company.html"
                id="servicesCompany"
                >خدماتنا-شركات</a
              >
            </li>
            <!-- Contact Link -->
            <li class="nav-item">
              <a class="nav-link" href="contact.html" id="contact"
                >تواصل معنا</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define("navbar-header", Navbar);




class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="mt-5">
<div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <div class="footer-content text-md-start text-center">
        <h3 class="mb-3">شركة مهن للموارد البشرية</h3>
        <ul>
          <li><a href="#">الرئيسية</a></li>
          <li><a href="#">من نحن</a></li>
          <li><a href="#">خدماتنا</a></li>
          <li><a href="#">تواصل معنا</a></li>
        </ul>
      </div>
    </div>

    <div class="col-md-4">
      <div class="footer-content text-md-start text-center">
        <h3 class="mb-3">تواصل معنا في أي وقت</h3>
        <ul>
          <li>
            <i class="fa-solid fa-location-dot me-2"></i>الخبر، شارع الملك
            فهد برج أسمنت الشرقية، الطابق الأرضي.
          </li>
          <li>
            <i class="fa-solid fa-phone me-2"></i>
            الهاتف: 920005065
          </li>
          <li>
            <i class="fa-solid fa-envelope me-2"></i>
            info@mehan.sa
          </li>
          <li>
            <i class="fa-solid fa-fax me-2"></i>
            الفاكس: 1089-887-013
          </li>
        </ul>
      </div>
    </div>

    <div class="col-md-4">
      <div class="footer-content text-md-start text-center">
        <h3 class="mb-3 text-md-start text-center">ساعات العمل:</h3>
        <ul>
          <li>الأحد إلى الخميس 8 ص - 5 م</li>
          <li>
            <img
              src="./assets/footer/instagram.svg"
              alt="Instagram"
            />
            <img src="./assets/footer/twitter.svg" alt="Twitter" />
            <img src="./assets/footer/facebook.svg" alt="Facebook" />
            <img src="./assets/footer/whatsapp.svg" alt="WhatsApp" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</footer>
`;
}
}
customElements.define("footer-ele", Footer);




//add active class based on URL
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  console.log("====================================");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});