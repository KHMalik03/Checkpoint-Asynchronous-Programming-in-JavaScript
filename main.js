// Task 01: 
async function iterateWithAsyncAwait(values) {

    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value); 
    }
}

// Task 02: 
async function awaitCall() {
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'Hello' });
        }, 2000); // 
    });

    const response = await fetchData();
    console.log(response.data); 
}


// Task 03:
async function awaitCallWithErrorHandling() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 2000); 
    });

    try {
        const response = await fetchData(); 
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// Task 04:
async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'Data from API 1' });
        }, 2000); 
    });

    const fetchData2 = () => new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'Data from API 2' });
        }, 3000); 
    });

    const [response1, response2] = await Promise.all([fetchData1(), fetchData2()]); 
    console.log('Combined Results:', { response1: response1.data, response2: response2.data }); 
}


// Task 05: 
async function parallelCalls(urls) {
    
    const fetchFromUrl = (url) => new Promise(resolve => {
        setTimeout(() => {
            resolve(`Response from ${url}`);
        }, Math.random() * 2000 + 1000); 
    });

    const fetchPromises = urls.map(url => fetchFromUrl(url)); 
    const responses = await Promise.all(fetchPromises); 

    console.log('All responses:', responses); 
}

