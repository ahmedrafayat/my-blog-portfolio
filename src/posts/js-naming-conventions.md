---
title: "Naming Conventions in JavaScript"
path: "/blog/js-naming-conventions"
date: "2020-05-27"
coverImage: "../images/javascript-cover.png"
author: "Ahmed Rafayat"
excerpt: "It's a bit lonely in here :("
tags: ["javascript", "ES5", "ES6"]
---

## Why are the conventions needed anyway?
To put it simply, they exist so that everyone's code looks familiar, consistent and clean. Conventions help others understand your code faster and ensure no one can complain about your ugly ass code structure. Also makes sure purists (people who really care about how pretty code looks) don't go crazy when they read your code. It is recommended that wherever you work, there is some kind of convention there that everyone follows.  

## The four types of cases
Cases are way to write a particular **phrase**. Here, by phrase, I mean the name of the variable, function, class, file, etc. They cases are be:  
1. PasCal Case: first letter of every word in the phrase must be upper case
2. camelCase: same as PasCal, except that the first letter of a phrase must be lower case
3. snake_case: words in the phrase are separated by underscore
4. kebab-case: words in the phrase are separated by hiphen


## The Naming Conventions
The follow are conventions that are widely accepted in the JS community and are recommended that you follow:

1. **Variables**:
   1. For **scoped variables**, use camelCase
   ```js
   var name, firstName, lastName, dropDownLength, dummyText;
   ```
   2. For **global variables**, always write them at the top of you code block/file. Use camelCase if you plan on changing its value variable later. But if it's a constant, then write it in UPPERCASE and separate words with underscore.
   ```js
   // these values are constant and immutable
   const PI = 3.141592654;
   const API_BASE_URL = 'www.example.com/api/v1/';
    // this value will be changed later
   let globalCounter = 0;
   ```

2. **Function** or **Method**: Always use camelCase here but be mindful of the prefix. Since functions are basically actions, the first are usually prefixed with the   action name. Some common prefixes are: *get, fetch, put, update, check, set, change, calculate, mount*
   ```js
    function getName();
    function calculateDiscount();
   ```

3. **Class** or **React Component**: Use PasCal Case. Although classes are relatively new in javascript, the convention is old, and was probably inherited from other object oriented languages like Java & C#.
   ```js
   class MyComponent extends React.Component {
       constructor(props) {
           super(props);
       }
       render () {
           return <div>Something to render</div>;
       }
   }
   ```

4. Files: Usually, in frontend JS frameworks, filenames are written in PasCal case. But, developes of backend JS frameworks such as route name their files in kebab-case.  
   ```
   //Frontend example
   
   |--src
   |  |--components
   |    |--User
   |      |--UserProfile.js
   |      |--UserImage.js
   |  |--pages
   |    |--MainPage.js
   |--index.js
   ```
   ```
   //Backend example

   |--server.js
   |--routes
   |  |--product-route.js
   |  |--user-route
   |--auth
   |  |--auth.js
   ```
5. 