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

![Landing Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429866/DevelopingMobility/Screen_Shot_2021-10-05_at_6.27.32_AM_unof5a.png)

- Landing

![Sign Up Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429866/DevelopingMobility/Screen_Shot_2021-10-05_at_6.28.06_AM_ge0kv5.png)

- Sign Up

![Sign In Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.28.24_AM_m37f2n.png)

- Sign In

![Home Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429866/DevelopingMobility/Screen_Shot_2021-10-05_at_6.27.52_AM_fo9ay3.png)

- Home

![Stretches Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429866/DevelopingMobility/Screen_Shot_2021-10-05_at_6.28.40_AM_fjkkam.png)

- Stretches

![Stretch Detail Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.28.55_AM_vr2raq.png)

- Stretch Detail

![User Profile Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.29.06_AM_z8pegi.png)

- User Profile

![Edit User Profile Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.29.19_AM_qvewaq.png)

- Edit User Profile

![Routine Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.29.33_AM_goyzo2.png)

- Routine

![Edit Routine Image](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633429865/DevelopingMobility/Screen_Shot_2021-10-05_at_6.29.45_AM_fvsjto.png)

- Edit Routine

[Wireframe Link](https://www.figma.com/file/tOAMy2ExoRh0F3ny3AJCyx/Developing-Mobility?node-id=0%3A1)


#### Component Tree

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
      |__ LandingPage
          |__ LandingPage.jsx
          |__ LandingPage.css
      |__ Home
          |__ Home.jsx
          |__ Home.css
      |__ Stretches
          |__ Stretches.jsx
          |__ Stretches.css
      |__ StretchDetail
          |__ StretchDetail.jsx
          |__ StretchDetail.css
      |__ UserProfile
          |__ UserProfile.jsx
          |__ UserProfile.css
      |__ EditUserProfile
          |__ EditUserProfile.jsx
          |__ EditUserProfile.css
      |__ Routine
          |__ Routine.jsx
          |__ Routine.css
      |__ EditRoutine
          |__ EditRoutine.jsx
          |__ EditRoutine.css
      |__ SignUp
          |__ SignUp.jsx
          |__ SignUp.css
      |__ SignIn
          |__ SignIn.jsx
          |__ SignIn.css
|__ services/
      |__ auth.js
      |__ config.js
      |__ stretches.jsx
      |__ routines.js

```

#### Time Estimates

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup Rails and Database | H | 6hrs| 0hrs | 0hrs |
| Seed Database | H | 4hrs| 0hrs | 0hrs |
| Setup React and Frontend | H | 2hrs| 0hrs | 0hrs |
| Link front and back ends | H | 2hrs| 0hrs | 0hrs |
| Create Layout | H | 2hrs| 0hrs | 0hrs |
| Create Containers | H | 6hrs| 0hrs | 0hrs |
| Create Screens | H | 12hrs| 0hrs | 0hrs |
| Material UI Styling | H | 20hrs| 0hrs| 0hrs |
| Material UI Grid | H | 5hrs| 0hrs | 0hrs |
| Media Queries | H | 5hrs| 0hrs| 0hrs |
| Total | H | 64hrs| 0hrs | 0hrs |

<br>

### Server (Back End)

#### ERD Model

![ERD Picture](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633424568/DevelopingMobility/Screen_Shot_2021-10-05_at_5.02.25_AM_xbcqw2.png)
<br>
[ERD Link](https://drive.google.com/file/d/142HUdcaSB7qtiuELs_oyPxQT3mR7W3DN/view?usp=sharing)
<br>

***

## Post-MVP

- _Dark mode_
- _Usable timer widget_
- _Users can comment on stretches and give them ratings_

***

## Code Showcase

Coming soon.

## Code Issues & Resolutions

Coming soon.
