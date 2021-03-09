# Live Search from Swapi.dev

React application, which is a search client for The Star Wars API (https://swapi.dev):

- in the center of the screen there is an input field (like Google or Yandex)
- after entering 3 or more characters, make a request to the API to all resources, except Root
- display the received data under the search field
- each item in the list consists of 2 parts, on the left is the name of the resource (for example Luke Skywalker), on the right is its type (People, Film, etc.)
- the search phrase is highlighted in bold (for example Luke **Sky**walker)
- when selecting a list item, hide the list and display detailed information about the selected resource below the input field

## Demonstration:

you can see the project:
https://swapi-dev-app.herokuapp.com/

---

![Cone image](https://github.com/x4aekx/star-wars-app/raw/main/src/image/swapi.png)

---

## Used technologies:

- Typescript
- Jest, react-testing-library
- Material-ui
- React
- Redux
- Redux-thunk
- axios
- third party api: Swapi.dev

## Run project:

for run project

1. Clone repository
   `git clone https://github.com/x4AEKx/star-wars-app.git your-folder`

1. Type
   `npm install && npm run start`

for run test

1. Type
   `npm run test`
