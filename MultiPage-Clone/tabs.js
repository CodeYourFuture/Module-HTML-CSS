// Get all tab elements
const tabs = document.querySelectorAll('.tab');

// Get all tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and tab contents
        tabs.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and its corresponding content
        tab.classList.add('active');
        tabContents[index].classList.add('active');
    });
});