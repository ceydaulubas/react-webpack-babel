# EASY INSURANCE

Easy Insurance is an application that can see all invoices and add new invoices. Thanks to the filter feature people can filter and see invoices that they want to see directly.
## Tools

This project was generated with React, webpack and babel. 

## Preparation 

-I setup my own configuration in my own way. <br/>

Step 1: Firstly create a folder called react-webpack-babel (you can give name what you want) and navigate inside that folder in our command-line tool like Terminal. <br/>
Step 2: `npm init -y` <br/>
Step 3: `npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin` -> Now you can see packages has been added as devDependencies inside package.json file.<br/>
Step 4: `npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader` ->installed required packages for babel<br/>
Step 5: `npm install -D react react-dom` <br/>
Installation part is done. <br/>
Step 6: Now is the time to setup your webpack. You should create <b> webpack.config.js</b> file in the root of  react-webpack-babel directory. Later, you can copy and paste my codes on between 1 and 37 lines to your file. (In this way webpack set up is done) <br/>
Step 7: Time to jump to babel! <br/>
Create a <b>.babelrc file </b> in the root of your folder and can paste my code in this file to your file. <br/>
Step 8: Create <b>index.html</b> file inside public folder. Also you need to create 2 files inside src folder which are <b>app.js</b> and <b>index.js</b>.
Step 9: Lastly, you need to add piece of code inside package.json scripts field. (start and build)

## Running

After you clone or take this code to your local, firstly you should install npm in the terminal with an `npm install` statement. 
When you write `npm run api` in the terminal. You will go to `http://localhost:8080` directly on the browser.
## Resources

Webpack: https://webpack.js.org/ <br/>
Babel: https://babeljs.io/ <br/>
Configuration: https://dev.to/reachtokish/setup-a-basic-react-application-with-webpack-and-babel-1bge <br/>






