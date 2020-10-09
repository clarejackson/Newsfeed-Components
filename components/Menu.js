// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuMaker = (array) => {
  const menuDiv = document.createElement('div');
  const ul = document.createElement('ul');
  const img = document.querySelector('img')
  menuDiv.appendChild(ul);
  // const li1 = document.createElement('li');
  // const li2 = document.createElement('li');
  // const li3 = document.createElement('li');
  // const li4 = document.createElement('li');
  // const li5 = document.createElement('li');
  // const li6 = document.createElement('li');

  // li1.textContent = array[0];
  // li2.textContent = array[1];
  // li3.textContent = array[2];
  // li4.textContent = array[3];
  // li5.textContent = array[4];
  // li6.textContent = array[5];

  array.forEach(item => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = item;
    
  });
 
  menuDiv.classList.add('menu');

  img.classList.add('menu-button')
  // const menuButton = document.querySelector('.menu-button');
  img.addEventListener("click", () => {
    menuDiv.classList.toggle('menu--open');
  });

  
  // ul.appendChild(li1);
  // ul.appendChild(li2);
  // ul.appendChild(li3);
  // ul.appendChild(li4);
  // ul.appendChild(li5);
  // ul.appendChild(li6);

 console.log(menuDiv);

  return menuDiv;
};

const menuParent = document.querySelector('.header')
menuParent.appendChild(menuMaker(menuItems));
