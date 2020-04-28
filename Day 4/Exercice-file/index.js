 const taskInput=document.getElementById("new-task");//Add a new task.
 const addButton=document.getElementsByTagName("button");
const incompleteTaskHolder=document.getElementById("incomplete-tasks");

let createNewTaskElement=function(taskString){

	let listItem=document.createElement("li");


	//label
	let label=document.createElement("label");//label
	//input (text)
	let editInput=document.createElement("input");//text
	//button.edit
    let editButton=document.createElement("button");//edit button
    
    //button.delete
	let deleteButton=document.createElement("button");//delete button



	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	deleteButton.innerText="Delete";
		//and appending.
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        return listItem;
    }

    var addTask=function(){
        console.log("Add Task...");
        //Create a new list item with the text from the #new-task:
        var listItem=createNewTaskElement(taskInput.value);
    
        //Append listItem to incompleteTaskHolder
        incompleteTaskHolder.appendChild(listItem);
        
        taskInput.value="";
    
    }
    
    //Edit an existing task.
    
    var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");
    
    
    var listItem=this.parentNode;
    
    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains("editMode");
            //If class of the parent is .editmode
            if(containsClass){
    
            //switch to .editmode
            //label becomes the inputs value.
                label.innerText=editInput.value;
            }else{
                editInput.value=label.innerText;
            }
    
            //toggle .editmode on the parent.
            listItem.classList.toggle("editMode");
    }
    
    
    
    
    //Delete task.
    var deleteTask=function(){
            console.log("Delete Task...");
    
            var listItem=this.parentNode;
            var ul=listItem.parentNode;
            //Remove the parent list item from the ul.
            ul.removeChild(listItem);
    
    }
    
    
    //Mark task completed
    var taskCompleted=function(){
            console.log("Complete Task...");
        
        //Append the task list item to the #completed-tasks
        var listItem=this.parentNode;
        completedTasksHolder.appendChild(listItem);
                    bindTaskEvents(listItem, taskIncomplete);
    
    }
    
    
    var taskIncomplete=function(){
            console.log("Incomplete Task...");
    //Mark task as incomplete.
        //When the checkbox is unchecked
            //Append the task list item to the #incomplete-tasks.
            var listItem=this.parentNode;
        incompleteTaskHolder.appendChild(listItem);
                bindTaskEvents(listItem,taskCompleted);
    }
    
    
    
    var ajaxRequest=function(){
        console.log("AJAX Request");
    }
    
    //The glue to hold it all together.
    
    
    //Set the click handler to the addTask function.
    addButton.onclick=addTask;
    addButton.addEventListener("click",addTask);
    addButton.addEventListener("click",ajaxRequest);
    
    
    var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
        console.log("bind list item events");
    //select ListItems children
        var checkBox=taskListItem.querySelector("input[type=checkbox]");
        var editButton=taskListItem.querySelector("button.edit");
        var deleteButton=taskListItem.querySelector("button.delete");
    
    
                //Bind editTask to edit button.
                editButton.onclick=editTask;
                //Bind deleteTask to delete button.
                deleteButton.onclick=deleteTask;
                //Bind taskCompleted to checkBoxEventHandler.
                checkBox.onchange=checkBoxEventHandler;
    }
    
  
    
    
    
   
    
    
    
    
    // Issues with usabiliy don't get seen until they are in front of a human tester.
    
    //prevent creation of empty tasks.
    
    //Shange edit to save when you are in edit mode.