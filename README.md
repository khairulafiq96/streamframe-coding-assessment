# streamframe-coding-assessment
Basic tasking system assessment for the Software Engineer position

## The app
[https://main.d3rep8e9zc5f3e.amplifyapp.com/](https://main.d3rep8e9zc5f3e.amplifyapp.com/)

## Requirements
1. Users are able to add & edit tasks. These includes :
- Task title
- Task Status
- Task Parent
2. Parent Tasks status must reflect the latest changes in child tasks. Conditions are : 
- Task is considered "Complete" when all of the dependencies is Done/Complete
- Task is only able revert to "Done" once "Complete". This happens when :
  - One of the dependencies contains "In Progress"
- Task is able to update its parent Task. The changes must reflect the latest parent status.
3. Display the total dependencies status for : 
- Complete
- Done
- In progress
4. ~~Filter the tasks according to the status~~
- > This feature only displays the parent tasks

## Data
The data are stored locally in the browser local storage with persistent storage.

Data:
```json
{
    "TaskId":{
        "title" : string,
        "status" : In Progress | Done | Complete (string),
        "parent" : string,
        "TaskId" : {
            "title" : string,
            "status" : In Progress | Done | Complete (string),
            "parent" : string,
        },
        "TaskId" : {
            "title" : string,
            "status" : In Progress | Done | Complete (string),
            "parent" : string,
        }
    }

}
```

Example data : 
```json
{
    "d3237199-f23e-4673-afef-7af4384ab2cb": {
        "title": "P1",
        "status": "In Progress",
        "parent": "d3237199-f23e-4673-afef-7af4384ab2cb",
        "8b713825-c629-4b58-80a9-5a8c978e389e": {
            "title": "C1",
            "status": "In Progress",
            "parent": "d3237199-f23e-4673-afef-7af4384ab2cb"
        }
    },
    "c71b4f01-dc56-49e4-a268-d3bef13e9fa7": {
        "title": "P2",
        "status": "In Progress",
        "parent": "c71b4f01-dc56-49e4-a268-d3bef13e9fa7",
        "dbdccbdd-613a-4486-a191-dd0ef494b5be": {
            "title": "C2",
            "status": "In Progress",
            "parent": "c71b4f01-dc56-49e4-a268-d3bef13e9fa7"
        }
    },
    "b83a5adf-cd8d-4b55-a7ab-2a4a727510bf": {
        "title": "P3",
        "status": "In Progress",
        "parent": "b83a5adf-cd8d-4b55-a7ab-2a4a727510bf",
        "1ad40e7c-7255-4f25-a758-0bf9cacfed19": {
            "title": "C3",
            "status": "In Progress",
            "parent": "b83a5adf-cd8d-4b55-a7ab-2a4a727510bf"
        }
    }
}
```
## Main Functions

### utils/General.js
General functions that is being used throughout the app

`filterTaskId(task : Object)`

> returns the taskId of the task object

`searchObj(tasks : Object, target : string)`

> returns the task object details based on the target task id

`editParameter(taskId : string, parentId : string)`

> return boolean if the task is a parent or child

`getParent(target : Object)`

> returns string the parent of the task object

`dependenciesStatus(tasks : Object, parentId : string)`

> returns string of total number of child tasks with complete, done status

`updateParentStatus(obj : Object, parentId : string)`

> returns object of updated parent status in corresponding of child tasks status based on the requirement (2)

### reducers/tasks.js
Reducers to manipulate the tasks object in the local storage

`ADD_TASKS`
> Appends the newly created parent task into the tasks object

`ADD_CHILDTASK`
> Appends the newly created child task into the task object with the selected parent

`EDIT_TASK`
> Updates the selected task (parent/child) with the latest details/parents


## Challenges

1. Data Structure. The current data structure required a lot of filtering and lots of code has to be written. Therefore a better data structure should be implemented. By having an array in the child, it removes the need to convert the object and lots more features with the array functions. 
```json
{   
    "taskId" :string,
    "title" : string,
    "status" : In Progress | Done | Complete (string),
    "child" : [
        {
            "taskId" :string,
            "title" : string,
            "status" : In Progress | Done | Complete (string),
            "child" : []
        },
        {
            "taskId" :string,
            "title" : string,
            "status" : In Progress | Done | Complete (string),
            "child" : []
        }
    ],
    {
            "taskId" :string,
            "title" : string,
            "status" : In Progress | Done | Complete (string),
            "child" : []
    }
}

```
2. Parent and child
The current data structure strictly consist of only one parent and multiple child. Multiple parents tasks are not developed.


## How to run
Install Dependencies
> npm i

Start the Application
> npm start