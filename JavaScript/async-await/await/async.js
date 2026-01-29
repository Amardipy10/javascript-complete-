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