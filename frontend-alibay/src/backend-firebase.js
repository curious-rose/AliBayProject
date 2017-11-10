//May very well need to change this to "import" rather than "require" to make React happy.

const firebase = require ("firebase")

var config = {
    apiKey: "AIzaSyBLPyanpHUetFggO_bG7jgdDUKPOlrhigA",
    authDomain: "curious-rose-alibay.firebaseapp.com",
    databaseURL: "https://curious-rose-alibay.firebaseio.com",
    projectId: "curious-rose-alibay",
    storageBucket: "curious-rose-alibay.appspot.com",
    messagingSenderId: "946803609775"
  };
  firebase.initializeApp(config);

const database = firebase.database();


const itemsBoughtRef = database.ref("itemsBought") // database node recording all users' bought items as listing ID numbers
const itemsSoldRef = database.ref("itemsSold") //same for sold items
const allItemsRef = database.ref("allItems") //node recording all items whether sold or bought


function genUID() {
    return Math.floor(Math.random() * 100000000)
}
/* 
createListing
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [blurb] A blurb describing the item
    returns: A promise containing the ID of the new listing
*/
function createListing(sellerID, price, title, blurb) {
    //puts an child into allItemsRef, whose name is our item's listing ID
    //and whose value is an object with our item's info
    let listingID = `item_${genUID()}`
    let p1 = allItemsRef.child(listingID).set({
        sellerID,
        price,
        title,
        blurb,
        forSale: true
        //after setting, returns the listingID, so we can find our object again
        //or if there's an error, returns that error.
    }).then(() => listingID).catch(err=>console.log("pall" + err))
    return p1;



}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: A promise that contains an object containing the price and blurb properties.
*/
function getItemDescription(listingID) {
    //gets all listings from the database. kind of inefficient if we've got 10000 listings and we're running
    //getItemDescription 10000 times for some reason. But definitely up-to-date and accurate. 
    return allItemsRef.child(`${listingID}`)
        .once("value")
        .then(d => d.val())



}

/* 
buy changes the database state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in his history of purchases
The seller will see the listing in his history of items sold
    parameters: 
     [buyerID] The ID of buyer
     [sellerID] The ID of seller
     [listingID] The ID of listing
    returns: a promise
*/
function buy(buyerID, sellerID, listingID) {
    const p1 = itemsSoldRef.child(`${sellerID}/${listingID}`)
        .set("true")
    const p2 = itemsBoughtRef.child(`${buyerID}/${listingID}`)
        .set("true")
    const p3 = allItemsRef.child(`${listingID}`)
        .update({
            forSale: false
        })

    return Promise.all([p1, p2, p3])

}


/* 
allItemsSold returns the IDs of all the items sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: a promise containing an array of listing IDs
*/
function allItemsSold(sellerID) {
    return itemsSoldRef.child(`${sellerID}`).once("value")
        .then(d => d.val())
        .then(val => Object.keys(val))
}

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: a promise containing an array of listing IDs
*/
function allItemsBought(buyerID) {
    console.log(buyerID);
    return itemsBoughtRef.child(`${buyerID}`).once("value")
        .then(d => d.val())
        .then(val =>val ? Object.keys(val):[])
}

/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: a promise containing an array of listing IDs
*/
function allListings(sellerID) {
    return allItemsRef.once("value")
        .then(d => d.val(), err => err)
        //returns an object, with all keys being listing IDs and all values being objects
        //representing a listing
        .then(allItemsObj => {

            let forSaleArray = Object.keys(allItemsObj)
                //this is an array that we will filter
                .filter((ID) => allItemsObj[ID].forSale === true);
            if (sellerID === undefined) {
                // if no sellerID specified,
                //we return the filtered array, an array of listing IDs
                //for which the allItemsObjects are for sale
                return forSaleArray
            } else {
                //if sellerID is specified, we filter the array again
                //to check which allItemsObjects have this sellerID listed as their sellerID
                let forSaleBySellerID = forSaleArray.filter(ID => allItemsObj[ID].sellerID === sellerID)
                return forSaleBySellerID
            }

        })

}



/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: a promise containing an array of listing IDs
*/
function searchForListings(string, sellerID) {

    let searchTerm = string===undefined? "":`${string}`

    let searchRegEx = new RegExp(`${searchTerm}`, "i")
    //we search for items on sale (with optional filter by seller)
    return allItemsRef.once("value")
    .then(d => d.val(), err => err)
    //returns an object, with all keys being listing IDs and all values being objects
    //representing a listing
    .then(allItemsObj => {

        let searchResults = Object.keys(allItemsObj)
        //first filter: items are for sale
        .filter((ID) => allItemsObj[ID].forSale === true &&
        //second filter: blurb or title match search string
        (searchRegEx.test(allItemsObj[ID].blurb) || 
        searchRegEx.test(allItemsObj[ID].title)))
        

        if (sellerID === undefined) {
            // if no sellerID specified,
            //we return the search results
            return searchResults
        } else {
            //if sellerID is specified, we filter the array again
            //to check which results have this sellerID listed as their sellerID
            let searchResultsBySeller = 
            searchResults.filter(ID => allItemsObj[ID].sellerID === sellerID)

            return searchResultsBySeller
        }

    })
    //we return the array of items which match searchTerm in blurb or title

}

// The tests
async function test() {
    await database.ref('/').set(null);
    let sellerID = genUID();
        // let sellerID = 'hqgm6MorpPUhS9NhtTN4g3HdG2x1'
    let buyerID = genUID();
        // let buyerID = 'hqgm6MorpPUhS9NhtTN4g3HdG2x1'

    console.log("all good")

    let listing1ID = await createListing(sellerID, 500000, "boat", "A very nice boat")
    let listing2ID = await createListing(sellerID, 1000, "gloves", "Faux fur gloves")
    let listing3ID = await createListing(sellerID, 100, "shoes", "A life-sized bronze statue of your parents embracing a pleased-looking walrus with the engraving 'you never know how much room there is for love until you open up and look inside :)'")

    let product2Description = await getItemDescription(listing2ID)

    await buy(buyerID, sellerID, listing2ID)
    await buy(buyerID, sellerID, listing3ID)

    let allSold = await allItemsSold(sellerID)
    let soldDescriptions = await Promise.all(allSold.map(getItemDescription))
    let allBought = await allItemsBought(buyerID)
    let allBoughtDescriptions = await Promise.all(allBought.map(getItemDescription))
    let listings = await allListings()
    let boatListings = await searchForListings("boat")
    let shoeListings = await searchForListings("shoes")
    let boatDescription = await getItemDescription(listings[0])
    let boatBlurb = boatDescription.blurb;
    let boatPrice = boatDescription.price;
    // assert(allSold.length == 2, "allsold is the wrong length"); // The seller has sold 2 items
    // assert(allBought.length == 2); // The buyer has bought 2 items
    // assert(listings.length == 1); // Only the boat is still on sale
    // assert(boatListings.length == 1, ); // The boat hasn't been sold yet
    // assert(shoeListings.length == 0, "shoe is too long"); // The shoes have been sold
    // assert(boatBlurb == "A very nice boat");
    // assert(boatPrice == 500000);
    console.log("all tests passed")
}
//uncomment this next line to run Jacques' async tests
// test().catch(err => console.log(err))

const backendFunctions = {
    genUID,
    buy,
    createListing,
    allItemsBought,
    allItemsSold,
    allListings,
    searchForListings,
    getItemDescription
}

export default backendFunctions;