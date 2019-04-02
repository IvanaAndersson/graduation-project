const homeLink = document.getElementById("home-link");

const aboutSection = document.getElementById("about");
const aboutLink = document.getElementById("about-link");
const servicesSection = document.getElementById("services");
const servicesLink = document.getElementById("services-link");
const projectsSection = document.getElementById("projects");
const projectsLink = document.getElementById("projects-link");
const contactsSection = document.getElementById("contacts");
const contactsLink = document.getElementById("contacts-link");

aboutLink.addEventListener("click", event => {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
servicesLink.addEventListener("click", event => {
  event.preventDefault();
  servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
projectsLink.addEventListener("click", event => {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
contactsLink.addEventListener("click", event => {
  event.preventDefault();
  contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
homeLink.addEventListener("click", event => {
  event.preventDefault();
  window.scroll({ behavior: "smooth", top: 0 });
});

