// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Hashir",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};

// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I'm a software developer with a passion for solving complex challenges. Since I was 14, I’ve built websites, researched malware, and explored computer security. I’ve also created games purely for fun, combining my love for coding with my passion for gaming. Currently, I’m pursuing a BS in Computer Science, constantly pushing myself to grow and excel in the field.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "C++",
    faClass: "fab fa-cuttlefish",
  },
  {
    name: "C#",
    svg: 'M653.3 1.3C641 3 630.5 5.9 619 10.7c-4.9 2.1-63.7 34.5-130.5 72.1l-182 102.3-153 86-99 56.5c-8.8 6.2-25.4 23-31.6 32.2-10 14.6-17.1 31.5-21.1 50-1.7 8.1-1.8 23-1.8 326l1.8 326c7.4 34.5 27.1 64.7 54.1 83 3.9 2.6 41.5 24.1 83.6 47.7l484 270.1c15.3 6 29.6 8.5 48 8.6 22 0 41.1-4.4 59.4-13.6 4.4-2.2 73.7-40.9 154-86l267.1-150 141-81.3c24.4-18.9 40.6-44.9 47.7-76.6l2.3-10.4V735.8l-1.8-326c-5.9-27.7-19-51.6-38.3-70-13.9-13.2 4.5-2.5-242.4-141.2L939 130.3 801.5 53 725 11.1c-11.5-5-23.1-8.1-36.2-9.8-13.5-1.8-22.3-1.8-35.5 0zm53.8 352c50.9 4.8 96.5 18.3 142 42 37.4 19.4 69.1 43.3 100.3 75.8 8.5 8.8 27.1 30.7 27.1 31.9 0 .8-8.3 5.8-43 25.8l-80.4 46.6-15.9 9.3-10.1-9.6c-17.6-16.6-35.5-29.2-55.2-39.1-41.5-20.7-87.1-28.2-132.4-21.6-24.4 3.5-44 9.7-67.6 21.4-66.1 32.7-110.8 94.5-122 169-2.4 15.9-2.4 46.4 0 62 7.4 48.3 27.6 89.5 61 124.7 26.9 28.4 68.2 52 107.7 61.7 67.3 16.4 138.2.6 192.9-43.1 4.1-3.3 11.6-9.8 16.6-14.6l9.1-8.6 10.4 6.1 80.9 46.8 46.9 27.5c2.1 2-10.8 17.5-33.4 40-33.4 33.4-63.7 55.1-104 74.6-39.6 19-79 30.3-126.5 36.1-14 1.7-65.9 1.7-80.5 0-90.8-10.8-170.1-49.2-232.7-112.8-42.7-43.5-71.3-89.7-90.8-146.9-26.6-78.3-26.7-165.7-.2-244.5C345.5 500.3 434.7 410.7 548 372.1c25.6-8.7 57.8-15.8 83-18.2l14.5-1.4c10.4-1 47.5-.5 61.6.8zm348.4 254.5v32h32 32v-32-32h32 32v32 32h32 32v32 32h-32-32v32 32h32 32v32 32h-32-32v32 32h-32-32v-32-32h-32-32v32 32h-32-32v-32-32h-32-32v-32-32h32 32v-32-32h-32-32v-32-32h32 32v-32-32h32 32v32zm0 128v32h32 32v-32-32h-32-32v32z',
    size: "0 0 1300 1500",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",

  },
  {
    name: "Azure",
    svg: 'M17,4v9.74l-4,3.28-6.2-2.26V17L3.29,12.41l10.23.8V4.44Zm-3.41.49L7.85,1V3.29L2.58,4.84,1,6.87v4.61l2.26,1V6.57Z',
    vbox: "0 0 25 25",
    //faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "E-Medic",
    skills: ["C#, MySQL, Photoshop"],
    url: "https://github.com/Hashir-Z/E-Medic",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "E-Corp",
    skills: ["C#, MySQL, Photoshop"],
    url: "",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Half Life Alyx: MK Edition",
    skills: ["Unreal Engine, C#, Blender"],
    url: "https://icedwhisper.itch.io/half-life-alyx-mk-edition-mouse-keyboard-remake",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Half Life Alyx: FakeVR Mod",
    skills: ["Lua Scripting, Pascal"],
    url: "https://www.nexusmods.com/halflifealyx/mods/1",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Endless Runner",
    skills: ["Unreal Engine, C#"],
    url: "https://youtu.be/LTCSfhn5kXY",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Certifications";
const certifications = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Fundamentals of Accelerated Data Science",
    url: "https://drive.google.com/file/d/18fUq1Bc98ZPZY-KY7_SIPHpE_kG9aYne/view?usp=drive_link",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Azure Fundementals (AZ-900)",
    url: "https://www.ucertify.com/my/certificate.php?certificate_guid=K1O5UE73",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Energy & Leadership",
    url: "https://drive.google.com/file/d/1jXyrKXz2f35GwljbiiejRd5Rjfz7zh7T/view?usp=sharing",
  },
];

const section5Title = "Side Projects";
const SideProj = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project6",
    name: "Unreal Academy | YouTube",
    skills: ["Sony Vegas, Photoshop, Marketing"],
    url: "https://www.youtube.com/@UnrealAcademy",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project7",
    name: "Game Play On Intel - Website",
    skills: ["HTML, CSS, Javascript, Blogger"],
    url: "https://gameplayonintel.blogspot.com/",
  },
];

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section6Title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to reach out if you have any questions, project ideas, or just want to connect. I’m always open to discussing new opportunities and collaborations. You can contact me via email or through my social media profiles.",
  copyright: "Hashir Bin Zahid",
  contactUrl: "https://formspree.io/f/xvgpnvyv",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Hashir-Z/",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  //instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/Hashir-Z/",
  resume: "https://drive.google.com/file/d/1_-9o_4djAy9J1Wq_5SUZQoDMVtNumWnj/",
};

// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  certifications as miscellaneous,
  SideProj,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
};
