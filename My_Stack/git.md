# Git configuration

```
    git config --global user.name 'srinu'
    git config --global user.email 'srinu@example.com'
```

*  ```--global``` It effects all new projects

# Git creating  a repository and push the code

### There are different methods:

#### First Method:

 * first create a new repository on git hub 
 * Then clone the repository using clone option
 * do the first commit using some message by clicking commit button
 * if u are a new user it will prompt you to give the username and user email with password.

 #### Second Method :

 * create a new repository in github ,the option is present in the navigation bar.
 * copy the path of ur project folder.
 * use these commands to create the new repository.

  ``` 
    git init
    git remote add -origin
```



 ### Branches problems

 * sometimes if it says your main branch is behind u have to click branches option
 * after u have to click on that branch
   
   The problem is happened ,because sometimes u may change the path for the folder for ur convenience.
   
* after that u have to follow some below commands

```
   git branch -M main
   git push origin main
```


 
