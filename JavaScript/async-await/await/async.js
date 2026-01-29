function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000);
    });
  }
  
  async function getData() {
    console.log("Fetching data...");
    
    const result = await fetchData(); // waits here
    console.log(result);
    
    console.log("Done");
  }
  
  getData();


  //example
  async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!response.ok) {
        throw new Error("Network response failed");
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("API Error:", error.message);
    }
  }
  
  getUsers();