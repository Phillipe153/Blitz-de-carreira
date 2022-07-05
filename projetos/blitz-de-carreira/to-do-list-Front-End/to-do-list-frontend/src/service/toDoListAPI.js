

  export const toDoListAPI = async () => {
    const listTask = 'http://localhost:8080/listAllTask'
    try {
      const response = await fetch(listTask);      
      const  results  = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteTaskAPI = async (id) => {
    const listTask = 'http://localhost:8080/deleteTask'
    try {
      const response = await fetch(listTask, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },        
        body: JSON.stringify({"id": id})
        
      });  
      console.log(response);    
      const  results  = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const UpdateStatusTaskAPI = async (body) => {
    console.log(body);
    const listTask = 'http://localhost:8080/updateTask'
    try {
      const response = await fetch(listTask, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        
      });   
      const  results  = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  export const PostNewTaskAPI = async (body) => {
    console.log(body);
    const listTask = 'http://localhost:8080/postTask'
    try {
      const response = await fetch(listTask, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        
      });  
      console.log(response);    
      const  results  = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };
  
  
 