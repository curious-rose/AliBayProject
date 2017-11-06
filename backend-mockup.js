const assert = require('assert');

// const backEndMockup = require("backendMockUp.js")


function genUID() {
    return Math.floor(Math.random() * 100000000)
}

let itemsBought = {} // global variable recording all users' bought items as listing ID numbers
let itemsSold = {} //same for sold items
let allItems = {} //global variable recording all items whether sold or bought


/*
initializeUserIfNeeded adds the UID to our global state unless it's already there
parameter: [uid] the UID of the user.
returns: undefined
*/
function initializeUserIfNeeded(uid) {
    // If the user is not in our global state, add him
    if (!(uid in itemsBought)) itemsBought[uid] = [];
    if (!(uid in itemsSold)) itemsSold[uid] = []
    // There are many more things to do
}

/* 
createListing adds a new listing to our global state. 
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [blurb] A blurb describing the item
    returns: the ID of the new listing
*/
// example: let listing1ID = createListing(03444, 500000, "A very nice boat");

function createListing(sellerID, price, title, blurb) {
    //generates the "unique" listing ID which we'll use to track the item
        listingID = `item_${genUID()}`
    // console.log("creating item listing at allItems[" + listingID + "]")
    //plugs an object into allItemsForSale with the info of our listing
    allItems[listingID] = {
        sellerID,
        price,
        title,
        blurb,        
        forSale: true
    }
    //then lets us know what the listingID is, so we can find our object again
    return listingID;
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: an object that contains the price and the blurb
*/
function getItemDescription(listingID) {
    //gets the object from allItems at the location of the listingID
    let obj = allItems[listingID]
    //returns a new object, same as previous object but without sellerID or forSale
    return {
        price: obj.price,
        blurb: obj.blurb,
        title:obj.title
    }
}

/* 
buy changes the global state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in his history of purchases
The seller will see the listing in his history of items sold
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
    // console.log(`${allItems[listingID].blurb} just got sold and now its forSale is ${allItems[listingID].forSale}`)
}


/* 
allItemsSold returns the IDs of all the items sold by a seller
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
function allListings() {
    let results = []
    for (var ID in allItems) {
        let item = allItems[ID]
        if (item.forSale === true) {
            results.push(ID);
            // console.log(item)
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
        if (item.blurb.search(searchTerm) >= 0) {
            results.push(ID)
        }
    })
    return results;
}



// // The tests
// let sellerID = genUID();
// let buyerID = genUID();
// initializeUserIfNeeded(sellerID);
// initializeUserIfNeeded(buyerID);
// let listing1ID = createListing(sellerID, 500000,"Boat", "A very nice boat");
// let listing2ID = createListing(sellerID, 1000, "gloves","Faux fur gloves");
// let listing3ID = createListing(sellerID, 100, "shoes","Running shoes");
// let product2Description = getItemDescription(listing2ID);

// buy(buyerID, sellerID, listing2ID);
// buy(buyerID, sellerID, listing3ID);

// let allSold = allItemsSold(sellerID);
// let soldDescriptions = allSold.map(getItemDescription);

// let allBought = allItemsBought(buyerID);
// let allBoughtDescriptions = allBought.map(getItemDescription)

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
module.exports={
    genUID,
    initializeUserIfNeeded,
    buy,
    createListing,
    allItemsBought,
    allItemsSold,
    allListings,
    searchForListings,
    getItemDescription
}