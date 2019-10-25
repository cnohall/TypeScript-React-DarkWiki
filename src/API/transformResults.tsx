//STEP 1: Get substrings
//STEP 2: Get the searchword
//STEP 3: Append SearchWord to the API
//STEP 4: Replace substring with new substring (API + searchword)

const transformResults = function (API : string, jsonResult: string){
    const lists = document.getElementsByClassName("list-group-item");
    for (let i = 0; i< lists.length; i++){
        const innerHTML = lists[i].innerHTML;
        console.log(innerHTML);
        const originalSubstring = findSubstring(innerHTML)
        console.log(originalSubstring);
        const searchWord = findSearchWord(originalSubstring)
        console.log(searchWord)
    }
} 

const findSubstring = function (innerHTML: string) {
    const substring = innerHTML.substring(
        innerHTML.indexOf('"'), 
        innerHTML.indexOf('" ') + 1
    );
    return substring
}

const findSearchWord = function (innerHTML: string) {
    const stringLenght = innerHTML.length;
    const substring = innerHTML.substring(
        innerHTML.indexOf('wiki/') + 5, 
        innerHTML.indexOf('"', stringLenght-1)
    );
    return substring
}

export default transformResults;


