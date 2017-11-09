const assert = require('assert');

// const backEndMockup = require("backendMockUp.js")


function genUID() {
    return Math.floor(Math.random() * 100000000)
}

let itemsBought = {} // global variable recording all users' bought items as listing ID numbers
let itemsSold = {} //same for sold items
let allItems = {} //global variable recording all items whether sold or bought
let itemsSelling = {} //records items that all users are currently selling, as ID numbers

/*
initializeUserIfNeeded will register the user if they're not already in the registry of buyers, 
and the same for the registry of sellers.
parameter: [uid] the UID of the user.
returns: undefined
*/
function initializeUserIfNeeded(uid) {
    if (!(uid in itemsBought)) itemsBought[uid] = [];
    if (!(uid in itemsSold)) itemsSold[uid] = []
    if (!(uid in itemsSelling)) itemsSelling[uid] = []

}

/* 
createListing will add an item to the registry of items, and list it as for sale.
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [title] the title of the item
      [blurb] A blurb describing the item
      
    returns: the ID of the new listing

    example: let listing1ID = createListing(43444, 249999, "Boat", "A very nice boat with a sail");
    listing1ID === item_401400 or a similar-looking listing ID
*/

function createListing(price, title, blurb, sellerID) {
    //generates the "unique" listing ID which we'll use to track the item
    let listingID = `item_${genUID()}`
    // //if it's taken, generates a new ID. Cause 1 in 100000000 chances do happen sometimes >:|
    // while (allItems[listingID]) {
    //     listingID = `item_${genUID()}`

    // }
    //puts an property into allItemsForSale, whose name is our item's listing ID
    //and whose value is an object with our item's info
    allItems[listingID] = {
        price,
        title,
        blurb,
        sellerID,
        forSale: true
    }
    //adds it to the items Selling array as a listing ID
    itemsSelling[sellerID][listingID] = true

    //then returns the listingID, so we can find our object again
    return listingID;
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: an object that contains the price, blurb and title
*/
function getItemDescription(listingID) {
    //gets the object from allItems at the location of the listingID
   
    return  allItems[listingID]
        
    
}

/* 
buy changes the global state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in their history of purchases
The seller will see the listing in their history of items sold
    parameters: 
     [buyerID] The ID of buyer
     [sellerID] The ID of seller
     [listingID] The ID of listing
    returns: undefined
*/
function buy(buyerID, sellerID, listingID) {
    itemsSold[sellerID].push(listingID)
    itemsBought[buyerID].push(listingID)
    allItems[listingID].forSale = false;
    itemsSelling[sellerID][listingID] = false;
}


/* 
allItemsSelling returns the IDs of all the items currently being sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/

function allItemsSelling(sellerID) {
    let results = []
    //does a for-in loop(like forEach for an object), saying "for each property in this object, 
    //check if its value is true. if so, push it to the results".
    for (var ID in itemsSelling[sellerID]) {
        if (itemsSelling[sellerID][ID] === true) {
            results.push(ID);
        }
        return results;
    }
}

/* 
allItemsSold returns the IDs of all the items already sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/

function allItemsSold(sellerID) {
    return itemsSold[sellerID]
}

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
function allItemsBought(buyerID) {
    return itemsBought[buyerID]
}

/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: an array of listing IDs
*/
function allListings(userId) {
    let results = []
    //does a for-in loop(like forEach for an object), saying "for each property in this object, 
    //check if its forSale value is true. if so, push it to the results".
    for (var ID in allItems) {
        let item = allItems[ID]
        console.log('item: ', item)
        if (item.forSale === true) {
            if(userId === undefined || userId === item.sellerID){
                results.push(ID);                
            }
        }
    }
    return results;
}

/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: an array of listing IDs
*/
function searchForListings(searchTerm) {
    let results = []
    allListings().forEach(ID => {
        let item = getItemDescription(ID)
        if (item.blurb.search(searchTerm) >= 0 || item.title.search(searchTerm) >= 0) {
            results.push(ID)
        }
    })
    return results;
}



// // The tests
let sellerID = genUID();
let buyerID = genUID();
initializeUserIfNeeded(sellerID);
initializeUserIfNeeded(buyerID);
let listing1ID = createListing( 500000, "Boat", "A very nice boat", sellerID,);
let listing2ID = createListing(1000, "gloves", "Faux fur gloves", sellerID);
let listing3ID = createListing(100, "shoes", "Running shoes", sellerID,);
let product2Description = getItemDescription(listing2ID);

buy(buyerID, sellerID, listing2ID);
buy(buyerID, sellerID, listing3ID);

let allSold = allItemsSold(sellerID);
let soldDescriptions = allSold.map(getItemDescription);

let allBought = allItemsBought(buyerID);
let allBoughtDescriptions = allBought.map(getItemDescription)
let allSelling = allItemsSelling(sellerID)


// let listings = allListings();
// let boatListings = searchForListings("boat");
// let shoeListings = searchForListings("shoes");

// let boatDescription = getItemDescription(listings[0])
// let boatBlurb = boatDescription.blurb;
// let boatPrice = boatDescription.price;

// assert(allSold.length == 2); // The seller has sold 2 items
// assert(allBought.length == 2); // The buyer has bought 2 items
// assert(listings.length == 1); // Only the boat is still on sale
// assert(boatListings.length == 1); // The boat hasn't been sold yet
// assert(shoeListings.length == 0); // The shoes have been sold
// assert(boatBlurb == "A very nice boat");
// assert(boatPrice == 500000);
// console.log("nice all tests passed")
const backendFunctions = {
    genUID,
    initializeUserIfNeeded,
    buy,
    createListing,
    allItemsBought,
    allItemsSold,
    allListings,
    searchForListings,
    getItemDescription,
    itemsBought
}

export default backendFunctions;