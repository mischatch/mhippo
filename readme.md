Overview
========

This is an opportunity for you to demonstrate your capabilities in an actual project. You can choose the pace that you work at, and unless otherwise noted in the requirements, you have the freedom to choose how to approach the project. Whenever you are ready please submit a link to your own repository where you cloned the project.

Project Requirements
====================

1.  Create a single-page app to display and manage profile listings. Use the sample app from this repository as a starting point.

1.  Please refer to the provided designs and the requirements below for details. Designs can be accessed in Zeplin. You will be required you to create a free account at Zeplin and receive an invite from us to access the project.

1.  Zeplin:
	1. You will receive an email to the Zeplin project containing the project designs and assetts.

	1.  In Zeplin you can:

		1.  Download all assets as PNG and SVG as needed. To download assets go to the desired artboard/screen and click the knife icon in the upper right corner.

		2.  Inspect each element to determine colors, font sizes and names, relative distance of each element to other elements, shadows, border radiuses, etc.

1.  The user must be able to:

	1.  See an initial list of profiles

	2.  Add new profiles

	3.  Remove profiles

	4.  Filter the results via a simple search

1.  You must determine how to divide the designs into appropriate React components.

1.  Feel free to add and use any libraries that you want (e.g. lodash).

1.  Do not write a backend REST API for the data and actions.

1.  You should manage the app state using Redux (i.e. adding, removing, etc., actions should flow through Redux).

1.  Clicking/tapping on the logo should use a smooth animation to scroll the page to the top.

1.  Search: as soon as a user starts typing in the search box the results should automatically start filtering after each keystroke. The fields to search are name and bio. Just display the profiles that match the criteria.

1.  The list of profiles should be sorted alphabetically by name.

1.  New Profile / Edit Profile form:

	1.  All fields are required

	2.  The name field should require that at least two names to be entered to be valid

	3.  When an image URL is entered the image should load in the area in front of it.

	4.  Auto capitalization - auto capitalize the first letter of each of these fields:

		1.  Name

		2.  Occupation

		3.  City

	6.  Social profiles - for the purpose of this project these are just toggle buttons. When clicked/tapped their state changes as shown in the designs. Only the social icons for the activated buttons will show in the profile view.

	7.  The save button should be disabled unless all the required fields are entered.

1.  Profile card sizing

	1.  Width should be no longer than 660px

	2.  For wider screens that allow it, fit two cards per row

	3.  The minimum card width is 580px

	4.  For mobile devices the cards should stretch to the screen width less any margins you can take from the designs.

	5.  The short bio inside the card should never be taller than 3 lines regardless of its width. The third line, if present, should be fading to white (see design screen 01).

Bonus
=====

Only if you have time and decide to do it, make the app responsive (use the provided designs for reference). For our purposes phone is considered any screen with width below 480px. Small screens and tablets are below 767px screen width.

Constraints
===========

-   The app must be using React (babel) and Redux store

-   Make the app responsive so it works both on mobile and desktop devices.

-   For CSS use

	-   SCSS for the code

	-   BEM for the naming methodology

-   Approach the project with the mindset as if

	-   it will be integrated into a hypothetical main codebase, i.e. other developers should be able to work on it and understand it.

	-   Certain components and design elements you create will be reused in other parts of the app

-   Use industry best practices for every aspect of the project as you see fit.

-   For the logo and the icons use SVGs. The social icons can be PNGs.

Deliverables
============

-   A full project that we can build and run on a localhost machine using only npm.

-   Submit your final work as a repository on your Github account that we can checkout.

Questions / Comments
====================

If you run into any issues or come up with any questions during the project, make note of it and decide on a direction. We can discuss these during the follow-up interview, where you can explain your reasoning for going in the direction you did. If you run into a roadblock or come across a major issue with the requirements please email George.
