const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//begin dom manipulation//


//begin navBar//
let navServices = document.querySelectorAll('a')[0];
navServices.textContent = siteContent['nav']['nav-item-1'];

let navProduct = document.querySelectorAll('a')[1];
navProduct.textContent = siteContent['nav']['nav-item-2'];

let navVision = document.querySelectorAll('a')[2];
navVision.textContent = siteContent['nav']['nav-item-3'];

let navFeatures = document.querySelectorAll('a')[3];
navFeatures.textContent = siteContent['nav']['nav-item-4'];

let navAbout = document.querySelectorAll('a')[4];
navAbout.textContent = siteContent['nav']['nav-item-5'];

let navContact = document.querySelectorAll('a')[5];
navContact.textContent = siteContent['nav']['nav-item-6'];


let codeSnippet = document.getElementById('cta-img');
codeSnippet.setAttribute('src', 'img/header-img.png')

let headerText = document.querySelector('h1');
headerText.textContent = siteContent['cta']['h1'];

let startBtn = document.querySelector('button');
startBtn.textContent = siteContent['cta']['button'];

let featuresTitle = document.querySelector('h4');
featuresTitle.textContent = siteContent['main-content']['features-h4']

let featuresText = document.querySelector('p');
featuresText.textContent = siteContent['main-content']['features-content']

let aboutTitle = document.querySelectorAll('h4')[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('p')[1];
aboutContent.textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

let servicesTitle = document.querySelectorAll('h4')[2];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('p')[2];
servicesContent.textContent = siteContent['main-content']['services-content'];

let productTitle = document.querySelectorAll('h4')[3];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

let visionTitle = document.querySelectorAll('h4')[4];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

let contactTitle = document.querySelectorAll('h4')[5];
contactTitle.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('p')[5];
contactAddress.textContent = siteContent['contact']['address'];

let contactPhone = document.querySelectorAll('p')[6];
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.querySelectorAll('p')[7];
contactEmail.textContent = siteContent['contact']['email'];

let footerText = document.querySelectorAll('p')[8];
footerText.textContent = siteContent['footer']['copyright']
