// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const rolesAndDescriptions = [
    {
      role: "A Software Engineer",
      description: " that welcomes challenges and architects solutions."
    },
    {
      role: "A QA Engineer",
      description: "who ensures software quality through rigorous testing and automation."
    },
    {
      role: "A Full Stack Developer",
      description: "that develops seamless web applications, working across both front-end and back-end."
    },
    {
      role: "A Machine Learning Engineer",
      description: "who builds an intelligent systems that leverage data to make smart decisions."
    }
  ];
  
  let currentIndex = 0;
  
  function updateHeroContent() {
    const roleElement = document.getElementById("changing-role");
    const descriptionElement = document.getElementById("changing-description");
  
    currentIndex = (currentIndex + 1) % rolesAndDescriptions.length;
  
    // Update role and description
    roleElement.textContent = rolesAndDescriptions[currentIndex].role;
    descriptionElement.textContent = rolesAndDescriptions[currentIndex].description;
  
  
  }
  
  setInterval(updateHeroContent, 5000);
  

  // Select buttons and projects
const showMoreButton = document.getElementById("show-more");
const showLessButton = document.getElementById("show-less");
const projects = document.querySelectorAll(".project");

// Initial setup: Show first 3 projects and hide "Show Less"
showLessButton.classList.add("hidden");
projects.forEach((project, index) => {
  if (index >= 3) {
    project.classList.add("hidden");
  }
});

// Handle "Show More" button
showMoreButton.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.remove("hidden");
  });

  // Toggle button visibility
  showMoreButton.classList.add("hidden");
  showLessButton.classList.remove("hidden");
});

// Handle "Show Less" button
showLessButton.addEventListener("click", () => {
  projects.forEach((project, index) => {
    if (index >= 3) {
      project.classList.add("hidden");
    }
  });

  // Toggle button visibility
  showLessButton.classList.add("hidden");
  showMoreButton.classList.remove("hidden");
});
