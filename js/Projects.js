import projects from './ProjectsData.js'; // Import project data

const projectContainer = document.getElementById("project-container");
const loadMoreBtn = document.getElementById("load-more-btn");
const initialDisplayCount = 4;
let displayedCount = initialDisplayCount;
let isAllProjectsVisible = false;

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function displayProjects(limit) {
    projectContainer.innerHTML = ""; // Clear previous content
    projects.slice(0, limit).forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = `
            backdrop-blur-lg bg-trasnparent min-w-[350px] lg:min-w-[760px] max-w-[900px] mx-auto
            shadow-lg rounded-lg p-6 transition-all duration-300 transform 
            
        `;

        projectCard.innerHTML = `
            <h3 class="text-xl font-bold ">${project.title}</h3>
            <span class="text-sm font-bold">${formatDate(project.date)}</span>
            <button class="view-more-btn mt-3 text-blue-600 px-3 hover:underline font-medium" data-index="${index}">View More</button>
            <div class="details hidden mt-4 border-t border-gray-300 pt-3">
                <p class="text-justify">${project.description}</p>
                <div class="flex gap-4 mt-2">
                    <a href="${project.github}" target="_blank" class="text-blue-500 dark:text-blue-400 hover:underline font-bold">GitHub Repository</a>
                    ${project.youtube ? `<a href="${project.youtube}" target="_blank" class="text-red-500 dark:text-red-400 hover:underline font-bold">YouTube Video</a>` : ""}
                </div>
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

// Toggle "Find More Projects" button
function toggleLoadMoreButton() {
    if (isAllProjectsVisible) {
        loadMoreBtn.textContent = "Find More Projects";
        displayedCount = initialDisplayCount;
    } else {
        loadMoreBtn.textContent = "Collapse Projects";
        displayedCount = projects.length;
    }
    isAllProjectsVisible = !isAllProjectsVisible;
    displayProjects(displayedCount);
}

// Initial display
displayProjects(displayedCount);

if (projects.length > initialDisplayCount) {
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.addEventListener('click', toggleLoadMoreButton);
}
