// app.js: fetches content from content.json and populates the page

async function loadContent() {
    try {
        const response = await fetch('assets/content.json');
        const data = await response.json();

        // Update date
        const dateElem = document.getElementById('date');
        if (dateElem && data.date) {
            const dateObj = new Date(data.date);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateElem.textContent = dateObj.toLocaleDateString(undefined, options);
        }

        // Populate news
        const newsList = document.getElementById('news-list');
        if (newsList && Array.isArray(data.news)) {
            data.news.forEach(item => {
                const li = document.createElement('li');
                const title = document.createElement('h3');
                title.textContent = item.title;
                const body = document.createElement('p');
                body.textContent = item.body;
                li.appendChild(title);
                li.appendChild(body);
                newsList.appendChild(li);
            });
        }

        // Populate jokes
        const jokesList = document.getElementById('jokes-list');
        if (jokesList && Array.isArray(data.jokes)) {
            data.jokes.forEach(joke => {
                const li = document.createElement('li');
                li.textContent = joke;
                jokesList.appendChild(li);
            });
        }

        // Populate shorts
        const shortsList = document.getElementById('shorts-list');
        if (shortsList && Array.isArray(data.shorts)) {
            data.shorts.forEach(item => {
                const li = document.createElement('li');
                const title = document.createElement('h3');
                title.textContent = item.title;
                const script = document.createElement('p');
                script.textContent = item.script;
                li.appendChild(title);
                li.appendChild(script);
                shortsList.appendChild(li);
            });
        }

        // Populate videos
        const videosList = document.getElementById('videos-list');
        if (videosList && Array.isArray(data.videos)) {
            data.videos.forEach(item => {
                const div = document.createElement('div');
                div.style.marginBottom = '1rem';
                if (item.title) {
                    const h3 = document.createElement('h3');
                    h3.textContent = item.title;
                    div.appendChild(h3);
                }
                if (item.embed) {
                    const iframe = document.createElement('iframe');
                    iframe.src = item.embed;
                    iframe.width = '100%';
                    iframe.height = '315';
                    iframe.title = item.title || 'Video';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    div.appendChild(iframe);
                }
                if (item.description) {
                    const p = document.createElement('p');
                    p.textContent = item.description;
                    div.appendChild(p);
                }
                videosList.appendChild(div);
            });
        }
    } catch (error) {
        console.error('Failed to load content:', error);
    }
}

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', loadContent);
