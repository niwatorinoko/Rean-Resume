document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("projects-container");

    // JSONデータを取得
    const response = await fetch("projects.json"); 
    const projects = await response.json();

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-6", "col-lg-4", "mb-4"); // 中画面2列、大画面3列

        projectCard.innerHTML = `
            <div class="portfolio-card shadow-sm p-3 h-100">
                <div class="portfolio-card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="portfolio-card-title">${project.title}</h5>
                        <p class="portfolio-card-text">${project.summary}</p>
                    </div>
                    <div class="portfolio-social-icons mt-3">
                        <a href="${project.source}" target="_blank">
                            <img src="images/github.png" height="20px" width="20px" alt="GitHub">
                        </a>
                        ${project.demo ? `<a href="${project.demo}" target="_blank">
                            <img src="images/url.png" height="20px" width="20px" alt="Demo">
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;

        container.appendChild(projectCard);
    });
});
