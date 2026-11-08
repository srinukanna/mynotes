## Introduction
Data: 
```
values or facts  which represents about something
```
Ex : (i)Expense Tracker Application
```
Food
$100
04-09-2026
```
(ii) instagram like software data 

```
User
name
email
password hash

Post
caption
image
created time

Like
user
post

Comment
text
user
post
```
#### Where does a normal program keep data ?

* CPP

```

int age =12;
string name ='Kanna';
```
 (or)
 
* JS

```
const user = {
    name:"kanna",
    age :20
}
```

#### Program 
```
Set of instructions to a computer
```
#### Process
 ```
 program in execution or when the program is running 
 ```
 * while it is running

 ```
 Program
   ↓
Variables / Objects
   ↓
Memory (RAM)
```
* We cant keep everything in variables.

* while the program in execution state it will keep the program in ram(temporary storage).

#### RAM
* It is a temporary storage unit.
* Where the memory releases when the program execution exits.
```
Application off state
```
#### File Systems
* Here the file systems comes to the picture.
* Once the data is stored in files,the data stored in disk space.
* So,even the program execution exits the data still remains without lost.

#### Problems By Traditional Methods:
```
* Searching
* Data Duplication
* Multiple users at the same time
* Faiure in Middle
* Security and Controlled access
```

### File system vs Database Management system
* Data redundancy and Inconsistency
* Data Integrity
* Accessing the data 
* Data isolation
* Atomicity
* Concurrent access anomalies 
* Security


```
Data → RAM is temporary → need persistence → files can persist data → files work, but managing large structured application data yourself becomes difficult → DBMS helps manage it → database vs DBMS → relational database → table/row/column → schema.
```



