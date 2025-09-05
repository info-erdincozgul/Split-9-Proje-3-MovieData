# Movie Database
## Project Description
This project is a movie database application built using React. It allows users to view a list of movies, see movie details, add new movies, and edit or delete existing ones. The application manages movies through an API and offers additional features like a favorite movie list.
## Key Features
* Movie Listing and Details: The application displays a list of movies fetched from an API. Users can navigate to each movie's detail page to see detailed information (director, genre, metascore, description).
* CRUD Operations:
    * Add New Movie: The AddMovieForm component allows creating new movies by sending a POST request to the API.
    * Edit Movie: The EditMovieForm component enables updating a movie's information. Existing movie data pre-populates the form, and changes are sent via a PUT request to the API.
    * Delete Movie: Movies can be deleted from the Movie component using a DELETE request.
* Favorite Movies: Users can add movies they like to a favorites list and remove them from it. Favorite movies are displayed in the FavoriteMovieList component.
* Dark/Light Mode: A dark mode feature has been added using a useState hook and a useLocalStorage custom hook in App.jsx. This feature saves the user's preference in local storage, so the mode setting is preserved even after a page refresh.
* API Integration: The useAxios custom hook is used to manage API communication. This hook supports HTTP methods like GET, POST, PUT, and DELETE, tracks request statuses (loading, error), and can handle redirection after successful requests.
## Project Structure
- src/components/:
    * AddMovieForm.jsx: Form for adding a new movie.
    * EditMovieForm.jsx: Form for editing an existing movie.
    * Movie.jsx: Page that displays a single movie's details.
    * MovieHeader.jsx: Menu and title component at the top of the movie list page.
    * MovieList.jsx: Main table component where movies are listed.
    * FavoriteMovieList.jsx: Component that lists favorite movies.
    * MovieListItem.jsx: Component for each row in the movie list.
* src/hooks/:
    * useAxios.jsx: A custom hook written to manage API requests.
    * useLocalStorage.jsx: A custom hook used to store data in localStorage.
* App.jsx: The main application component, containing routing and state management.
## How to Run
To run this project locally, you must have Node.js and npm installed.
1. Install Required Packages:
```
npm install
```
2. Start the Application:
```
npm run dev
```
3. View in Browser: After the command runs, your project will typically open automatically at http://localhost:5173/.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* Custom React Hooks: You'll learn how to encapsulate repeating logical functions into custom hooks, such as useAxios for handling API requests and useLocalStorage for managing state that persists in the browser's local storage.
* API Integration (axios): You'll learn how to perform CRUD (Create, Read, Update, Delete) operations by making GET, POST, PUT, and DELETE requests using the axios library.
* Form Management: You'll understand how to manage form state and user input by creating a single state object to handle changes across multiple input fields. This is demonstrated in both AddMovieForm and EditMovieForm.
* Persistence with LocalStorage: You'll understand how to use the browser's localStorage to persist user data, specifically seen with the darkMode toggle, so the user's preference is remembered even after they refresh the page.