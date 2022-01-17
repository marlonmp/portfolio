
import { toggle_active } from './toggle_active.js';

// toggle activ for #skill set

toggle_active({
    nav: '#skill_set nav',
    buttons: '#skill_set nav h4',
    containers: '#skills_container > div'
});

// toggle activ for #experience

toggle_active({
    nav: '#experience nav',
    buttons: '#experience nav h3',
    containers: '#experiences_container > div'
});
