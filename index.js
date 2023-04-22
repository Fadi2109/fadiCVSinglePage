function onInit() {
  console.log("ready");
  renderRelativePage();
}

var relativePage = "main";

var personalDetails = [
  {
    item: "Name",
    value: "Safa Khier",
  },
  {
    item: "Tel",
    value: "+972-54-392-1507",
  },
  {
    item: "Email",
    value: "safakhier@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value:
      "with C++, Java, Swift, C#, Html, CSS, JavaScript, TypeScript, Linux and Office.",
  },
  {
    item: "Very good",
    value: "control of Firebase, SQL.",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB.",
  },
];
var languages = [
  {
    item: "Arabic",
    value: "Mother's tongue",
  },
  {
    item: "Hebrew",
    value: "Full command",
  },
  {
    item: "English",
    value: "Very good command",
  },
];
var workExperience = [
  {
    title: "Jul 2022 – Oct 2022, Bezeq",
    items: [
      "Preparing infrastructure and installing optical fibers for Bezeq company.",
    ],
  },
  {
    title: "Jun 2020 – Sep 2020, Kameel Engineers",
    items: ["Renovations of houses and public places"],
  },
];
var education = [
  {
    title: "2020 – today Software Engineer, Ort Brauda College",
    items: [
      "Bachelor of Science in Software Engineering, Expected Graduation: 2024.",
      "Completed coursework in data structures with a grade of 91, algorithms, introduction to systems programming with a grade of 94, object-oriented programming in Java, and operating systems in Linux.",
      "Demonstrated a strong understanding of software engineering principles and practices by achieving high grades in all relevant courses.",
      "Developed the ability to self-learn through personal projects and exploration of new technologies and programming languages.",
      "Previously served as a college exercise checker for a data structures course at ORT Braude.",
      "College, demonstrating attention to detail and a commitment to ensuring the quality of coursework.",
    ],
  },
  {
    title: "2019, High School Diploma",
    items: ["Graduate of Computer Science."],
  },
];
var social = [
  {
    item: "Development",
    value:
      "at ''Melah'' organization in Peqiin, where I participated in the development of the organization's mobile IOS applications.",
  },
  {
    item: "2 years",
    value: "participation in a 'Perah' project at a primary school in Peqiin",
  },
];

var myProjects = [
  {
    title: "Melah Duty Tracking App",
    desc: "An application that orginize shifts of the vollantiers in Melah orginization.",
    technologise: ["Swift", "SwiftUI", "UIKit", "Firebase"],
    createdAt: "1/3/2023",
    link: "https://apps.apple.com/il/app/%D7%9E%D7%A2%D7%A7%D7%91-%D7%AA%D7%95%D7%A8%D7%A0%D7%95%D7%AA/id6446208557?l=iw",
    img: "./Snapseed.jpg",
  },
  {
    title: "Melah Emergency App",
    desc: "An application that helps people in emergency situations.",
    technologise: ["Swift", "SwiftUI", "UIKit", "Firebase"],
    createdAt: "at Development",
    link: "https://www.wix.com/website-template/view/html/1896?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Flanding-pages%2Fcoming-soon&tpClick=view_button&esi=3ede5975-fde9-4c6d-b619-698c9b99d26c",
    img: "./IMG_0488-2.png",
  },
];

function renderPersonalDetails() {
  var ePersonaDetails = document.querySelector(".personalDetails");
  var strHTML = "";
  personalDetails.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (ePersonaDetails) ePersonaDetails.innerHTML = strHTML;
}

function renderSoftware() {
  var eSoftware = document.querySelector(".software");
  var strHTML = "";
  software.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSoftware) eSoftware.innerHTML = strHTML;
}

function renderLanguages() {
  var eLanguages = document.querySelector(".languages");
  var strHTML = "";
  languages.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eLanguages) eLanguages.innerHTML = strHTML;
}

function renderWorkExperience() {
  var eWorkExperience = document.querySelector(".workExperience");
  var strHTML = "";
  workExperience.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eWorkExperience) eWorkExperience.innerHTML = strHTML;
}

function renderEducation() {
  var eEducation = document.querySelector(".education");
  var strHTML = "";
  education.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eEducation) eEducation.innerHTML = strHTML;
}

function renderSocial() {
  var eSocial = document.querySelector(".social");
  var strHTML = "";
  social.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSocial) eSocial.innerHTML = strHTML;
}

function renderMyProjects() {
  var eMyProjects = document.querySelector(".myProjects");
  console.log("myProjects", myProjects);
  var strHTML = "";
  myProjects.forEach(function (item) {
    (strHTML += `<div class="card m-1 cardProj" style="width: 18rem">
    <img
      src="${item.img}"
      class="card-img-top"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        <span class="fs-5 fw-bolder">technologies:</span>
        <ul>
          `),
      item.technologise.forEach(function (item) {
        strHTML += `<li>${item}</li>`;
      }),
      (strHTML += `
      </ul>
      <p class="fs-6 text-primary">Created at: ${item.createdAt}</p>
      </p>
      <a href="${item.link}" target="_blank" class="btn btn-success col-12">Visit Project</a>
    </div>
  </div>`);
  });
  if (eMyProjects) eMyProjects.innerHTML = strHTML;
}

function renderRelativePage(page = "main") {
  var eContainer = document.querySelector(".container");
  htmlStr = "";
  switch (page) {
    case "main":
      htmlStr += `<div class="row">
      <div class="col-12 bg-primary header d-flex align-items-center p-4">
        <span class="fs-2 fw-bolder">Safa Khier CV</span>

        <span class="fs-2 ms-auto">
          <Button class="d-flex align-items-center navBtn" onClick="renderRelativePage('projects')">
            <span class="material-symbols-outlined fs-2"
              >integration_instructions
            </span>
            <span class="fs-3">My Projects</span>
          </Button>
        </span>
      </div>
      <div class="col-xs-12 col-lg-4 bg-primary-subtle lSide pt-2">
        <div class="col-12 d-flex justify-content-center">
          <img
            class="imageProfile"
            src="./WhatsApp Image 2023-04-21 at 19.32.29.jpeg"
            alt="profile image"
          />
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Personal details:</span>
          <ul class="personalDetails">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Software:</span>
          <ul class="software">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Languages:</span>
          <ul class="languages">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xs-12 col-lg-8 bg-primary-subtle rSide pt-2">
        <div class="col-12">
          <span class="fs-4 fw-bolder">Work Experience:</span>
          <ul class="workExperience">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder">Education:</span>
          <ul class="education">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
        <div class="col-12">
          <span class="fs-4 fw-bolder"
            >Social activities and volunteering:</span
          >
          <ul class="social">
            <li>
              <b>Name:</b>
              Fadi Khier
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-12 bg-dark text-light footer d-flex align-items-center justify-content-center"
      >
        <span>Created By Safa Khier &copy;</span>
        <a href="https://www.facebook.com/khiersafa?mibextid=LQQJ4d" target="_blank">
          <i class="bi bi-facebook ms-2 text-primary"></i>
        </a>
        <a href="https://instagram.com/safa_khier?igshid=YmMyMTA2M2Y=" target="_blank">
          <i class="bi bi-instagram ms-2 text-danger"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=972543921507&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <i class="bi bi-whatsapp ms-2 text-success"></i>
        </a>
      </div>
    </div>`;
      break;
    case "projects":
      htmlStr += `<div class="row">
      <div class="col-12 bg-primary header d-flex align-items-center p-4">
        <span class="fs-2 fw-bolder">My Projects</span>

        <span class="fs-2 ms-auto">
        <Button class="d-flex align-items-center navBtn" onClick="renderRelativePage('main')">
            <span class="material-symbols-outlined fs-2">badge </span>
            <span class="fs-3">Safa CV</span>
          </Button>
        </span>
      </div>
      <div class="col-12 bg-primary-subtle lSideP pt-2">
        <div class="row myProjects">
          <!-- the cards are here -->
        </div>
      </div>

      <div
        class="col-12 bg-dark text-light footer d-flex align-items-center justify-content-center"
      >
      <span>Created By Safa Khier &copy;</span>
      <a href="https://www.facebook.com/khiersafa?mibextid=LQQJ4d" target="_blank">
        <i class="bi bi-facebook ms-2 text-primary"></i>
      </a>
      <a href="https://instagram.com/safa_khier?igshid=YmMyMTA2M2Y=" target="_blank">
        <i class="bi bi-instagram ms-2 text-danger"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=972543921507&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <i class="bi bi-whatsapp ms-2 text-success"></i>
      </a>
      </div>
    </div>`;
      break;
    default:
      htmlStr += `<div class="row">
      <div class="col-12 header d-flex align-items-center justify-content-center fs-5">
        <span class="fs-2 fw-bolder"> Page Not Found 404</span>
        <img onclick="renderRelevantPage("main")" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404" />
        
      </div>
      
      </div>`;
      break;
  }
  if (eContainer && htmlStr) eContainer.innerHTML = htmlStr;
  renderAll();
}

function renderAll() {
  renderPersonalDetails();
  renderSoftware();
  renderLanguages();
  renderWorkExperience();
  renderEducation();
  renderSocial();
  renderMyProjects();
}
