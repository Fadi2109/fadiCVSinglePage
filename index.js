function onInit() {
  console.log("ready");
  renderRelativePage();
}

var relativePage = "main";

var personalDetails = [
  {
    item: "Name",
    value: "Fadi Khier",
  },
  {
    item: "Tel",
    value: "+972-53-520-2511",
  },
  {
    item: "Email",
    value: "fk.1996.5@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value: "with Web Applications, Vue, Angular and Office",
  },
  {
    item: "Very good",
    value: "control of Firebase",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB",
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
    title: "2022 – Today, Carpenter and renovations man",
    items: ["Carpenter and renovations man"],
  },
  {
    title: "2015 – 2019, Carpentry worker",
    items: [
      "First begin as CNC machiene worker",
      "after that planning and supervision",
    ],
  },
  {
    title: "2014 – 2015, Renovations man",
    items: ["All renovation works such as plaster, paint, flooring and more"],
  },
];
var education = [
  {
    title: "2023 – Full Stack programming course at Coding Academy College",
    items: ["Frontend: Vue, React, Angular", "Backend: Node.js, MongoDB"],
  },
  {
    title: "2023 – Software Practical Engineer, Ort Brauda College",
    items: ["Administrative site for a planning and construction company"],
  },
  {
    title: "2014 – 2017, Mechatronics Practical Engineer, Ort Brauda College",
    items: [
      "I developed textbooks for the public schools based on my analysis of the Arabic language's grammatical structure",
    ],
  },
];
var social = [
  {
    item: "Development",
    value:
      "and publication of a grammatical analysis method in Arabic helping teachers and students understand the various topics of syntax",
  },
  {
    item: "Volunteering",
    value: "in helping Arabic students reach matriculation",
  },
  {
    item: "Representative",
    value: "of the Student Association at TAU",
  },
  {
    item: "2 years",
    value:
      "participation in a 'Perah' project at an innovative school in Yarka",
  },
];

var myProjects = [
  {
    title: "To Be Programmer",
    desc: "A website for a programming course",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "1/3/2023",
    link: "https://fadi2109.github.io/ProCode-ToBeProgrammer/",
    img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_05-1.jpg",
  },
  {
    title: "To Be Programmer",
    desc: "A website for a programming course",
    technologise: ["HTML", "CSS", "JS"],
    createdAt: "1/3/2023",
    link: "https://fadi2109.github.io/ProCode-ToBeProgrammer/",
    img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_05-1.jpg",
  },
  {
    title: "Calculator",
    desc: "A website of calculator",
    technologise: ["HTML", "CSS", "JS"],
    createdAt: "2/4/2023",
    link: "https://fadi2109.github.io/calculator/",
    img: "https://media.istockphoto.com/id/1137975153/es/vector/icono-de-calculadora-se%C3%B1al-contable-calcular-el-s%C3%ADmbolo-de-finanzas-vector-de-stock.jpg?s=612x612&w=0&k=20&c=C4mDvCMZ8pfwgBVvX0_fR8pQtRIHlSHhui2k82XRbOM=",
  },
  {
    title: "Trivia Game",
    desc: "A website of Trivia Game",
    technologise: ["HTML", "CSS", "JS"],
    createdAt: "3/4/2023",
    link: "https://fadi2109.github.io/TriviaGame/",
    img: "./png-clipart-pub-quiz-game-question-trivia-others-game-question-removebg-preview.png",
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
        <span class="fs-2 fw-bolder">Fadi Khier CV</span>

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
            src="https://i.ibb.co/kyZBRcL/avatar.jpg"
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
        <span>Created By Fadi Khier &copy;</span>
        <a href="http://facebook.com " target="_blank">
          <i class="bi bi-facebook ms-2 text-primary"></i>
        </a>
        <a href="http://instagram.com" target="_blank">
          <i class="bi bi-instagram ms-2 text-danger"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=972535202511&text&type=phone_number&app_absent=0"
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
            <span class="fs-3">Fadi CV</span>
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
        <span>Created By Fadi Khier &copy;</span>
        <a href="http://facebook.com " target="_blank">
          <i class="bi bi-facebook ms-2 text-primary"></i>
        </a>
        <a href="http://instagram.com" target="_blank">
          <i class="bi bi-instagram ms-2 text-danger"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=972535202511&text&type=phone_number&app_absent=0"
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
