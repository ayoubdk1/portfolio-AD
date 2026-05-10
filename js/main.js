document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    } else {
        // Default to dark as requested
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    });

    // Render Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && typeof projects !== 'undefined') {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'card fade-in';
            
            const techStackChips = project.techStack.map(tech => `<span class="chip">${tech}</span>`).join('');
            
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="card-media">
                <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <div class="tech-stack">
                        ${techStackChips}
                    </div>
                    <p class="card-description">${project.description}</p>
                </div>
                <div class="card-actions">
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">GitHub</a>
                    ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer && typeof skillsData !== 'undefined') {
        skillsData.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category fade-in';
            
            const skillsChips = category.skills.map(skill => `<span class="chip">${skill}</span>`).join('');
            
            categoryDiv.innerHTML = `
                <h3>${category.category}</h3>
                <div class="skills-chips">
                    ${skillsChips}
                </div>
            `;
            skillsContainer.appendChild(categoryDiv);
        });
    }

    // Scroll Animation Observer (Bonus Phase 8)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
