

const baseurl = 'https://httpbin.org/';

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export async function uploadFilesToCloud (notes: string): Promise<any>{
    const rawResponse = await fetch(baseurl+'post',  {
        method: 'POST',
        headers:defaultHeaders,
        body : notes
    } )
    const response = await rawResponse.json();
    return response
  }