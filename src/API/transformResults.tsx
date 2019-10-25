//STEP 1: Get substrings
//STEP 2: Get the searchword
//STEP 3: Append SearchWord to the API
//STEP 4: Replace substring with new substring (API + searchword)

const transformResults = function (API : string, jsonResult: string){

} 

const findSubstrings = function (json: string) {
    const subStrings = json.substring(
        json.indexOf("href=") + 1, 
        json.indexOf(" ")
    );
}


export default transformResults;


