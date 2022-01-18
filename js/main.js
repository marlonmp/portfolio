
import { toggle_active } from './toggle_active.js';
import { set_href } from './set_href.js';

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

// set herf to presentation icons
set_href('.icons > *');

// set herf to experence icons
set_href('#experiences_container .vertical_grid > div');