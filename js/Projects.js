import projects from './ProjectsData.js'; // Import project data

const projectContainer = document.getElementById("project-container");
const loadMoreBtn = document.getElementById("load-more-btn");
const initialDisplayCount = 4;
let displayedCount = initialDisplayCount;

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function displayProjects(limit) {
    projectContainer.innerHTML = ""; // Clear previous content
    projects.slice(0, limit).forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <span class="project-date">${formatDate(project.date)}</span>
            <button class="view-more-btn" data-index="${index}">View More</button>
            <div class="details hidden">
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">Github repo. link</a>
                <img src="${project.image}" alt="${project.title}">
            </div>
        `;
        
        projectContainer.appendChild(projectCard);
    });

    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling;
            details.classList.toggle('hidden');
            this.textContent = details.classList.contains('hidden') ? 'View More' : 'View Less';
        });
    });
}

// Initial display
displayProjects(displayedCount);

if (projects.length > initialDisplayCount) {
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.addEventListener('click', function () {
        displayedCount = projects.length;
        displayProjects(displayedCount);
        loadMoreBtn.style.display = 'none'; // Hide button after loading all projects
    });
}
