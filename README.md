# Online Social University Project - Learning Continues

This is a software engineering group repository consists all codes for 'Online Social University" Project. 

# Group Members
1] Ashawini Chudaman Thakur (GitHub ID - Ashawini27) (Link - https://github.com/Ashawini27)

2] Prachi Pundir (GitHub ID - prachipundir97) (Link - https://github.com/prachipundir97)

3] Muyang Wang (GitHub ID - recorder233) (Link - https://github.com/recorder233)

# Discription 

The project intends to offer free education and real-time university experience to inexperienced as well as professional software engineers. During COVID-19, many software engineers' lost their job, their is an enormous need for free education systems. The Online Social University project meets this requirement and is committed to offering free education to software engineers to enhance their skillset. The project is made up of different modules including a student management module, library management module, courses management module, one-on-one assistance and front-end development. The web interface enables students to register themself on the system and access the remaining components. While student management module allows administrators to manage students' records and course allocation each semester. The project is still in the form of components and the final integration of the systems is what we are currently working on.  

# Instruction to run the code

- Student and Library Management Module
     I> import projects into Netbeans Version 7.2 
     II> Link Microsoft Access Database to the Netbeans Services for the project
     III> Run the Code
     
- Course Management Module
     I> Use 'npm install' to install all the dependencies
     II> Use 'ng serve' from Angular CLI to run the code
     
     Note: for Front-end please check special instructions' set in readme.md file within the front-end directory
     
 # Instruction to run Tests
 
Executing the NetBeans code will automatically run all test cases as well for every Java module. For Course Management Module, tests can be ran by executing "ng test" using Angular CLI. We have mostly preferred performing Manual Black Box testing for these modules. Defining automated testing is our future work. 
     
 # Use Cases
 
 1] Use Case 1: User Registeration

Preconditions
     
     User must on our Register page.

Main Flow
     
     User register for our application with username and password [S1]. User will input their learning interest and knowledge level [S2]. User will see class         recommendation based on the information provided [S3]. 

Subflows

     [S1] User provide their learning interest and knowledge level
     [S2] Back end Server will store user information
     [S3] Back end will find courses based on user’s information then pass to the front end

Alternative Flows
     
     invalid or occupied username or invalid password


# Instruction to Execute UseCase
 I> Execute the Login Page of the Student Management System module in Netbeans
 
 II> After login into the system with userID - 'admin' and Password - 'pass', the system provides an option for user registration. 
 
 III> Fill out the registration form and save the data.
 
# Expected Behavior
The filled data for user registration should be saved into the database. Users can check it by selecting the view student information option and searching by studentID used selected. This should retrieve the same user data again from the database.  
