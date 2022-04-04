## Personal Recipe Database:
### Planning:
[x][ERD](https://app.diagrams.net/#G1MqDDsvIvhallFey1jAG0LgLoytx39ud2) [x][CHDFront](https://app.diagrams.net/?libs=general;uml#G1nNtV15sex5iGXi4iTizss3mec5Ngt85l) 
[x][Trello](https://trello.com/b/EYk7a46M/recipe-trello)    
[x][GitHub](https://github.com/Neoj1sec142/Personal_Recipe.git)
***
### Back End:   
[x] Build functional server/DB   
[x] Build models from ERD  
[x] Begin routes set up  
[x] Refactor Seed Data   
[x] Create page/add new recipe function  
[x] Get recipe function  
[] Update recipe function  
[] Delete recipe function   
[x] Connect DB to front
***
Front End:   
[x] React boilerplate set up
* Homepage:   
    [x] Nav Bar   
    [x] Search Recipe Bar 
    [x] Access Data in DB  
    [] Ability to display search results
* Add New Page:   
    [x] Page for all input for new recipes
    [x] set up input functionality
    [x] set up post 
    [x] add submit button
    [] add update method
    [x] add delete method
* All Recipes:   
    [] Should just display names   
    [] OnClick should displpay       recipe page
* About Page:    
    [x] Should display the vision of the app with credits and refs
***
#### Tech Used:
* Node
* React
* Javascript
* Mongo
* Mongoose
* Express
***
References:
***
#### Install List:
* Back:
    * npm i morgan 
    * npm i cors
	* npm i express
    * npm i body-parser
* Front:
    * npm i axios
    * npx create-react-app 
    * npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-		svg-core @fortawesome/free-brands-svg-icons

***
#### Credits:
* Shout out to the GA repos that come in clutch when I'm in panic mode because I forgot what I was doing or I got stuck. And Jermeys new repo he created to help with the axois calls.

#### Directions:
* To create a recipe you have to click the submit button twice    
* To delete you need to copy the id from the recipes page and paste it into the input bar at the top then click the submitt button
* All of the recipes can be viewed on the recieps page
* The task page still needs a little work, the post is set up but for some reason  its not reading the data
* Still need to find the correct way to set up the update route front&back