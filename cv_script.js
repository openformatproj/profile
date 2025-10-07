(function() {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const printDate = new Date().toLocaleDateString('en-US', dateOptions);
    const headerText = `Current version: ${printDate}. Updated version: https://openformatproj.github.io/profile/cv.html`;
    document.documentElement.setAttribute('header-text', headerText);
})();