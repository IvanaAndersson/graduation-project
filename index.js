const homeLink = document.getElementById("home-link");

const aboutSection = document.getElementById("about");
const aboutLink = document.getElementById("about-link");
const servicesSection = document.getElementById("services");
const servicesLink = document.getElementById("services-link");
const projectsSection = document.getElementById("projects");
const projectsLink = document.getElementById("projects-link");
const contactsSection = document.getElementById("contacts");
const contactsLink = document.getElementById("contacts-link");
const menuCheckbox = document.getElementById("nav-main-toggle");

aboutLink.addEventListener("click", event => {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  menuCheckbox.checked = false;
});
servicesLink.addEventListener("click", event => {
  event.preventDefault();
  servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  menuCheckbox.checked = false;
});
projectsLink.addEventListener("click", event => {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  menuCheckbox.checked = false;
});
contactsLink.addEventListener("click", event => {
  event.preventDefault();
  contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  menuCheckbox.checked = false;
});
homeLink.addEventListener("click", event => {
  event.preventDefault();
  window.scroll({ behavior: "smooth", top: 0 });
  menuCheckbox.checked = false;
});

