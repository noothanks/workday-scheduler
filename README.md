# Workday Scheduler

This project includes a simple scheduler for someone working a typical 9-5.

The user has the ability to edit an appointment by clicking on a designeated time slot and typing a description. This can then be saved by clicking on the button following the time slot, which stores the appointments in localStorage.
The user can revisit their appointments at any time without losing their saved data.

Each time slot is color coded based on the current time (red), slots coming up(green), and slots that have passed (default grey).


Languages/Libraries used:
-
HTML
JavaScript
jQuery
Moment.js
CSS


## Authors

- [@noothanks](https://www.github.com/noothanks)


## Deployment

This project is currently deployed on GitHub Pages at the following link:
https://noothanks.github.io/workday-scheduler/


## Lessons Learned

This project required time manipulation via Moment.js. This library is now considered a legacy project, however, it's capabilities aligned with the demands of the project.

The color coding was done using jQuery selectors to dynamically add classes to the time slots relative to the current hour.



## Screenshots

![Screenshot](./screenshot.jpg)
