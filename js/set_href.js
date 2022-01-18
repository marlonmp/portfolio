export function set_href(query) {
    const icons = document.querySelectorAll(query);

    icons.forEach(function(element) {
        element.addEventListener('click', function(event) {
            const url = event.currentTarget.getAttribute('href');

            window.open(url, '_blank').focus();
        });
    });
}