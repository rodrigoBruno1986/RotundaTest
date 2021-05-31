
let url = "www.rotundasoftware.com/6/api/listings/3?sort=desc&limit=10"; 

const getVariables =(urlString) => {
    let firstSplit = urlString.split("/"); 
    let secondSplit = firstSplit[(firstSplit.length - 1)].split("?");
    let thirdSplit = secondSplit[(secondSplit.length - 1)].split("&");

    let obj = {
        version: firstSplit[1],
        collection: firstSplit[3],
        id: secondSplit[0],
        sort: extractValue(thirdSplit[0]),
        limit: extractValue(thirdSplit[1])
    };
   
    let myJSON = JSON.stringify(obj, null, 2);

    document.write("<pre>" + myJSON + "</pre>" );
    console.log(obj);
    
}

const extractValue = (values) =>{
    let res = values.split("=");
    return res[0];
}

getVariables(url);
