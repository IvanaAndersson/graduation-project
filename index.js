const menuCheckbox = document.getElementById("nav-main-toggle");
//references to all links
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const servicesLink = document.getElementById("services-link");
const projectsLink = document.getElementById("projects-link");
const contactsLink = document.getElementById("contacts-link");
const links = [homeLink, aboutLink, servicesLink, projectsLink, contactsLink];

//references to all sections
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services");
const projectsSection = document.getElementById("projects");
const contactsSection = document.getElementById("contacts");

const linksToSections = {
  about: aboutSection,
  services: servicesSection,
  projects: projectsSection,
  contacts: contactsSection,
};

const scrollToSection = (section) => {
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  menuCheckbox.checked = false;
};

links.forEach((link) => {
  const sectionName = link.id.split("-")[0];

  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (sectionName === "home") {
      window.scroll({ behavior: "smooth", top: 0 });
    } else {
      scrollToSection(linksToSections[sectionName]);
    }
  });
});
