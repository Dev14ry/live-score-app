const API_KEY = "bc726753-297c-40b2-a960-5108fe8a9507";
 
// export const upComingMatches=()=>{
//     const URL = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;
//     // return fetch(URL)
//     // .then((response)=>response.json())
//     // .catch((error)=>console.log("Error",error));

// }

async function upComingMatches() {
    const response = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
  export default  upComingMatches;