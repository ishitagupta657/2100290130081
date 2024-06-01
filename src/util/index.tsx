export const fetchToken = async (): Promise<string> => {
    const response = await fetch('http://20.244.56.144/test/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: "goMart",
        clientID: "d8db19bb-74c9-4bda-9492-8fa38c669add",
        clientSecret: "CXdjfBMqUOskipPZ",
        ownerName: "Ishita Gupta",
        ownerEmail: "ishita.2125it1027@kiet.edu",
        rollNo: "2100290130081"
      }),
    });
  
    const data = await response.json();
    return data.access_token; 
  };