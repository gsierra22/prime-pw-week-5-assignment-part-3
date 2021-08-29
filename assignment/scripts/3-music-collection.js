console.log('***** Music Collection *****')
//create array named collection
let collection=[]
//Create a function with the properties: title, artist, yearPublished
function addToCollection (title, artist, yearPublished){
    let Album = {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished
}//Put variables in object
collection.push(Album);//Adds album to collection
return Album;//Displays the aforementioned values
}// Created function

addToCollection ('Skyrim','Jeremy Soule',2011)
addToCollection ('Ballads Rule Ok','Screaming Orphans',2015)
addToCollection ('Oblivion','Jeremy Soule',2006)
addToCollection ('Morrowind','Jeremy Soule',2002)
addToCollection ('Toy Theatre','Screaming Orphans',2013)
addToCollection ('Abbey Road','The Beatles',1969)
console.log(collection);//Displays the 6 recently added albums

function showCollection (collectionArray){
    console.log(collectionArray.length)
    for (let i=0; i<collectionArray.length;i++){
        console.log (collectionArray[i].albumTitle,'by', collectionArray[i].albumArtist, 'published in:', collectionArray[i].albumYear)
}
showCollection(collection);
}


function findByArtist (artistName){
    let artistList = []
    for (let i=0; i<collection.length; i++){
        if (collection[i]. albumArtist === artistName){
            artistList.push (collection[i])
        }
    }
return artistList
}

console.log(findByArtist('Jeremy Soule'))

console.log(findByArtist ('The Beatles'))

//console.log (artistList)

console.log(findByArtist('Simon and Garfunkle'))

//console.log (artistList);


function search(artistSearch, yearSearch){
    let searchArray = []
    for (let j=0; j< collection.length; j++){
        if (artistSearch === '' && yearSearch === ''){
            searchArray = collection
        }
        else if  (collection[j].albumArtist === artistSearch && collection[j].albumYear=== yearSearch){
            searchArray.push (collection[j])        
        }
    }
    return searchArray
}

console.log (search('',''))// should show full collection

console.log (search('Jeremy Soule',2006))//value in array

console.log (search('apple',2001))




