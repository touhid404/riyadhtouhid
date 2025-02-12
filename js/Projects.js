import projects from './ProjectsData.js'; // Import project data

const projectContainer = document.getElementById("project-container");
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options); // Format like 'Feb 10, 2025'
}
// Function to generate project cards
function displayProjects() {
    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card"; // Use the formal class for cards

        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
             <span class="project-date">${formatDate(project.date)}</span>
            <button class="view-more-btn" data-index="${index}">View More</button>
            <div class="details hidden">
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">Github repo.</a>
                <img src="${project.image}" alt="${project.title}">
            </div>
        `;

        projectContainer.appendChild(projectCard);
    });

    // Add event listeners for "View More" buttons
    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling;
            details.classList.toggle('hidden');
            this.textContent = details.classList.contains('hidden') ? 'View More' : 'View Less';
        });
    });
}

// Call the function to display projects
displayProjects();
