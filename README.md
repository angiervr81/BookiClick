# Web Development Project 4 - *BookiClick*

Submitted by: **Angie Rivera**

This web app: **The web app; BookiClick allows users to dicover random fiction books using the Google Books API. Each click generates a new random book displaying its title, author, category, and cover image. Users can "ban" authors or categories to prevent future results from those attributes, view a seesion history of discovered books, and clear their history at any time.**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [X] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [X] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [X] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [X] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [X] Multiple types of attributes are clickable and can be added to the ban list
- [X] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Challenges
**Building BookiClick was a fun challenge!. The main diffculty was managing the filtering logic to ensure banned authors and categories didn't appear in later API calls, while keeping the results feeling random. Handing updates for the ban list and history without refreshing the page also required careful handing.**

## Future Features
- Add more categories
- A read list 
- Change history to wishlist

## Rescoures
- API : [Google Books API](https://developers.google.com/books/docs/v1/using)
- Theme Background: [Freepik]([https://www.freepik.com/search?format=search&last_filter=query&last_value=book&query=book](https://www.freepik.com/free-vector/books-seamless-pattern-doodle-outline-textbooks_21957290.htm#fromView=search&page=1&position=4&uuid=2806c3f3-7242-4db0-886f-939f5a741b70&query=book))
- Fonts: [Google Font APT](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap)

## Development Tools
- React — UI library for building reusable components
- Vite — Build tool for faster React setup
- VS Code — Code editor used
  
## License

    Copyright [2025] [Angie Rivera]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
