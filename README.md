# Emerging Web Technologies Assignment

## Overview
This project demonstrates the use of Flexbox and Grid layout techniques in CSS to create responsive web layouts. The assignment includes three parts:
1. **Flexbox and Grid Layout Basics**
2. **Building a Personal Portfolio Website Using Flexbox and Grid**
3. **Migrating the Portfolio to React for Responsiveness**

---

## Part 1: Flexbox and Grid Layout Examples
This part showcases examples of Flexbox and Grid layouts using various CSS properties. The goal is to demonstrate an understanding of these techniques and their proper usage.

### Technologies Used:
- HTML5
- CSS3 (Flexbox, Grid)
  
### Key CSS Properties:
- **Flexbox:** `display: flex`, `justify-content: space-around`, `background-color`, `padding`, `flex: 1`
- **Grid:** `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap`, `background-color`, `padding`

---

## Part 2: Advanced Grid Layout Example
In this section, a more complex grid layout was created, where different column spans were used to demonstrate grid flexibility. The portfolio was designed with three pages, all using the grid layout.

### Technologies Used:
- HTML5
- CSS3 (Grid)
  
### Key CSS Properties:
- **Grid:** `display: grid`, `grid-template-columns: 1fr 2fr 1fr`, `grid-template-rows: auto`, `gap`, `background-color`, `padding`, `grid-column: span 2`

---

## Part 3: Responsive Design Using React
This part migrated the Flexbox and Grid layouts into a React-based project, demonstrating how to create responsive designs that adapt to different screen sizes. Media queries were used to ensure a seamless layout on various devices.

### Technologies Used:
- React
- HTML5
- CSS3 (Flexbox, Grid)
  
### Key CSS Properties:
- **Responsive Design:** `@media` queries, `display: flex`, `display: grid`, `grid-template-columns`, `flex-direction`, `padding`, `margin`

---

## Folder Structure
-Part 1: Has three files in it Code, screenshots and project
-Part 2 = Code, screenshots and project
-Part 3 = Code, screenshots and project

##Challenges Faced
Flexbox Alignment Issues:

Error: Struggled with aligning items properly using justify-content and align-items.
Resolution: Used tools like browser developer tools to inspect and adjust alignment properties.
Grid Column Spanning Confusion:

Error: Difficulty understanding how grid-column: span 2 affects the layout when combined with other items in the grid.
Resolution: Experimented with grid-template-columns and adjusted item placement until the layout worked as expected.
Responsive Design Problems:

Error: The layout broke on smaller screens because of fixed column widths.
Resolution: Implemented @media queries to make the design adapt to different screen sizes.
React Migration Challenges:

Error: Had trouble setting up the React environment and linking CSS files correctly.
Resolution: Learned to use import './App.css'; in the React project to include styles and ensured the folder structure was correct.
Media Query Debugging:

Error: Media queries weren’t applying as expected due to conflicting styles in the CSS file.
Resolution: Reviewed the cascading nature of CSS and placed media queries at the end of the CSS file.
GitHub Repository Setup:

Error: Faced issues with uploading large files or managing the folder structure on GitHub.
Resolution: Learned to use .gitignore to exclude unnecessary files and structured the folders neatly.
Cross-Browser Compatibility:

Error: The layout appeared differently in Chrome and Firefox.
Resolution: Tested the project on multiple browsers and made adjustments to ensure compatibility.
Understanding flex: 1 in Flexbox:

Error: Items were not resizing proportionally when using flex: 1.
Resolution: Reviewed how flex-grow, flex-shrink, and flex-basis work together and applied them correctly.
