# Countdown App

This application is a countdown timer that allows users to set an end date and name an event. The countdown starts from the current time and displays the remaining time to the specified end date in the format: Days, Hours(h), Minutes(m), Seconds(s). The text displayed on the screen is designed to always fill the entire width of the screen, resizing as necessary. The event name and end date are persisted between page reloads.

Here is a link to the deployed app:
[FrontendChallenge](https://pontus-broberg.github.io/FrontendChallenge/)

## Installation and Running the App Locally

1. Install the necessary dependencies using `npm install`.
2. Run the application using `ng serve`.
3. Open your browser and navigate to `http://localhost:4200/`.

The application will automatically reload if you change any of the source files.

## Suggestions for Improvement

1. Text resizing functoin is far from perfect as it today relies on some hard coded values. An alternative solution could be based on comparing the pixel length of the text and it's bounding wrapper and then resizing the font size using binary search to ensure good performance. 
2. Improve on the welcome message and page behaviour when no date or title is set.
3. Improve timer calculate correct time based on time zone and current user location.
4. Add validation to ensure that the end date is not in the past.
5. Implement a feature to allow multiple countdown timers.
6. Add tests to ensure the application works as expected. 

## Making the App Production Ready

1. Implement a build process with minification for production-ready code.
2. Set up Continuous Integration/Continuous Deployment (CI/CD) for automated testing and deployment.
3. Ensure the application is fully responsive and works across all major browsers and devices.
4. Implement error tracking and logging for easier debugging in production.
5. Conduct performance testing and optimize as necessary for a smooth user experience.

## Further Help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.