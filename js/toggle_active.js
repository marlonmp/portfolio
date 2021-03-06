export function toggle_active(queries) {
    const

        nav = document.querySelector(queries.nav),

        buttons = document.querySelectorAll(queries.buttons),

        containers = document.querySelectorAll(queries.containers);

    // Toggle the active class between a button and its container.

    nav.addEventListener('click', function(e){
        
        if (e.target.classList.contains('active')) return;
        
        if (e.target == e.currentTarget) return;
        
        buttons.forEach(function(element, index) {
            
            element.classList.remove('active');
            containers[index].classList.remove('active');
            
            if (element == e.target) {
                element.classList.add('active');
                containers[index].classList.add('active');
            }
        });
    });
}