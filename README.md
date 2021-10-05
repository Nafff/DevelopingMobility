# DevelopingMobility

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview
DevelopingMobility is a platform designed to help the user alleviate pain and discomfort in our new work from home world. Users are able to select areas where they feel tension or pain from a clickable model on the home page. When the user clicks a body part will be redirected to a page containing streches and mobility drills for that muscle group. Users can click on specifc stretches to see more information. On the stretch details page they can favorite stretches and add them to a routine. Users have their own profile page where they can view their favorites stretches and routines.

<br>

## MVP

The DevelopingMobility MVP will include a home page with clickable human body model that will redirect the user to specific muscle detail pages. The muscle detail pages will contain a list of streches and mobility drills that will each redirect to a detail page with a video and more information about the stretch. Users can add a stretch to a drop down list of their routines or add as a favorite. Users can edit their routines and their profile details.

<br>

### Goals

- _A home page that will redirect the user to specific muscle detail pages based on their selection_
- _Muscle detail page that lists available stretches_
- _Strech detail page that shows information about the stretch, a button to save as favorite, and a drop down list to add to routine_
- _Full user authentication_
- _User profile page that displays information about the user as well as showing their favorited stretches and saved routines_
- _User can edit profile_
- _User can create or edit routines_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Library used for building UI components._ |
|   React Router   | _Library used to enable dynamic routing._  |
|      Axios       | _Library allowing us to make http requests and communicate with the backend._ |
|    Material UI   | _Library used for frontend styling._ |
|      Rails       | _Framework used for the development of the backend of the website._ |
|    PostgreSQL    | _Database management system used for backend._ |
|      Bcrypt      | _Dependency used for password hashing for authentication._ |
|       Jwt        | _Dependency for transmitting data securly between frontend and backend._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

![Component Tree Picture](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633423891/DevelopingMobility/Screen_Shot_2021-10-05_at_4.51.02_AM_amlhlg.png)
<br>
[Component Tree](https://whimsical.com/developingmovement-AVfPkfX3adU8zENYZfH3MF)

#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Home
          |__ Home.jsx
          |__ Home.css
      |__ Stretches
          |__ Stretches.jsx
          |__ Stretches.css
      |__ StretchDetail
          |__ StretchDetail.jsx
          |__ StretchDetail.css
      |__ StretchCreate
          |__ StretchCreate.jsx
          |__ StretchCreate.css
      |__ UserProfile
          |__ UserProfile.jsx
          |__ UserProfile.css
      |__ Login
          |__ Login.jsx
          |__ Login.css
      |__ Register
          |__ Register.jsx
          |__ Register.css
|__ services/
      |__ auth.js
      |__ config.js
      |__ stretches.jsx
      |__ routines.js
      |__ favorites.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Dummy Link](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633377516/DevelopingMobility/Screen_Shot_2021-10-04_at_3.35.43_PM_bkusvu.png)
<br>
[ERD Link](https://drive.google.com/file/d/142HUdcaSB7qtiuELs_oyPxQT3mR7W3DN/view?usp=sharing)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
