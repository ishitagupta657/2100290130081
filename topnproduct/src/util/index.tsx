import { CRED } from "./constant";

export const fetchToken = async (): Promise<string> => {
    const response = await fetch('http://20.244.56.144/test/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: "goMart",
        ...CRED
       
      }),
    });
  
    const data = await response.json();
    return data.access_token; 
  };