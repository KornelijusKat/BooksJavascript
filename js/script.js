function createBook(title, ISBN, publishing_year, pages, quantity, price){
    return{
        title,
        ISBN,
        publishing_year,
        pages,
        quantity,
        price
    };
}
function createCategory(categoryName, bookArray){
    return{
        category: categoryName,
        books:bookArray
    };
}
const inventory = [
    createCategory("Informacinės technologijos", [
        createBook("Programavimas linksmai", "IT-12345", 2024, 250, 12, 25),
        createBook("Coding with Ant Farms", "IT-12346", 2021, 300, 8, 10),
        createBook("Programavimas nelinksmai", "IT-13755", 2019, 1250, 5, 250),
        createBook("Zack Brannigan's Big Book Of Code", "IT-11312", 2021, 450, 20, 60),
        createBook("C++ for dummies", "IT-12789", 2017, 200, 10, 45),
    ]),
    createCategory("Fantastika", [
        createBook("Twinkle Toes", "FA-12747", 2021, 150, 30, 15),
        createBook("WH40k Septic Tank Cleaners", "FA-19395", 2020, 350, 8, 10),
        createBook("WH40k Horus Legacy", "FA-12115", 2018, 150, 3, 20),
        createBook("Harry Potter and the Lizards School", "FA-18185", 2012, 350, 4, 25),
        createBook("Harry Potter and the Illuminati Throne", "FA-18186", 2015, 260, 10, 40),
    ]),
    createCategory("Historical Fiction", [
        createBook("Vinland saga", "HF-11145", 2020, 450, 20, 10),
        createBook("Stuck in the Trench", "HF-19395", 1960, 350, 10, 15),
        createBook("The end of shield formations", "HF-12115", 2012, 100, 4, 30),
        createBook("WW2 Immersive Memory", "HF-18185", 2021, 350, 10, 200),
        createBook("Alexander's Fall", "HF-18186", 2005, 200, 3, 50)
    ]),
    createCategory("Science Fiction", [
        createBook("Puddle: Waves Of Earrakia", "SC-12555", 2017, 350, 120, 30),
        createBook("Nebula", "SC-19395", 2000, 550, 10, 20),
        createBook("Mars the final frontier", "SC-12115", 2021, 129, 5, 40),
        createBook("Nuclear fission Empire", "SC-20185", 1950, 150, 4, 25),
        createBook("Beggar's Galaxy", "SC-18185", 2010, 460, 1, 40)
    ]),
    createCategory("Mystery & Thriller", [
        createBook("MJ and the EP file", "MT-11111", 2021, 400, 5, 28),
        createBook("Apple of your eye", "MT-19395", 2010, 150, 2, 20),
        createBook("Golden egg", "MT-12115", 1994, 1000, 4, 40),
        createBook("The memory", "MT-18185", 1978, 380, 3, 22),
        createBook("Mortuary files", "MT-18185", 2010, 560, 4, 50)
    ]),
];
function printBook(book){
    if(book.publishing_year === 2021){
        console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}, New Book!`);
    }
    else{
    console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}`);
    }
}
function printBooks(category){
    for(const book of category){
        printBook(book);
    }
}
function printCategories(category){
    if(category.books.length > 0){
        console.log(`Category: ${category.category}`);
    }
}
function bookLister(inventory){
    for(const category of inventory){
        //console.log(`Category: ${category.category}`);
        printCategories(category);
        printBooks(category.books)
        /*for(const book of category.books){
            //Praeitas kodas pries extra uzduoti
            if(book.publishing_year === 2021){
                console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}, New Book!`);
            }
            else{
            console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}`);
            }
        }*/      
    }
}
function calcBookValue(book){
    return book.price * book.quantity;
}
function calcCategoryValue(books){
    let categoryValue = 0;
    for(const book of books){
        categoryValue += calcBookValue(book)
    }
    return categoryValue;
}
function printCategoryValue(categoryName, categoryValue){
    console.log(`Category: ${categoryName} total value: ${categoryValue} Euro`);
}
function totalInventoryValue(inventory){
    let inventoryValue = 0;
    for(const category of inventory){
        let categoryValue = calcCategoryValue(category.books);
        inventoryValue += categoryValue;
        printCategoryValue(category.category, categoryValue)  
    }
    console.log("Total inventory price: "+ inventoryValue + " Euro");
    return inventoryValue;
}
//bookLister(inventory);
//totalInventoryValue(inventory);
//Extra functions ______________________________________________________________________________________
console.log("Start of the extra functions   ! ! ! ! ! ");
function filterCategory(inventoryFilter, filterRequest){
    return inventoryFilter.filter((cat) => cat.category === filterRequest);
}
function filterTitle(inventoryFilter, filterRequest){
    return inventoryFilter.filter((cat) => cat.books = cat.books.filter((book) => book.title == filterRequest))
}
function filterPages(inventoryFilter, filterRequest){
    let filteredArray = inventoryFilter.slice();
    return inventoryFilter.filter((cat) => cat.books = cat.books.filter((book) => book.pages == filterRequest))  
}
function filterInventory(selectedFilter, filterRequest ,inventory){
    if(selectedFilter == "category"){
        return filterCategory(inventory, filterRequest);
    }
    else if(selectedFilter == "title"){
        return filterTitle(inventory, filterRequest)
    }
    else if (selectedFilter == "pages"){
        return filterPages(inventory,filterRequest);
    }
}
function flatBooksArray(inventory){
    return inventory.map(category => category.books).flat()
}
function minPrice(inventory){
    return Math.min(...flatBooksArray(inventory).map((book)=>book.price));
}
function maxPrice(inventory){
    return Math.max(...flatBooksArray(inventory).map((book)=>book.price)); 
}
function minMaxPrice(selectedFilter, inventory){
    if(selectedFilter == "min")
    {
        return minPrice(inventory);    
    }
    else if(selectedFilter == "max"){
        return maxPrice(inventory);
    }
}
function printPrice(selectedFilter, inventory){
    console.log(selectedFilter + " price is " + minMaxPrice(selectedFilter, inventory) + " euro")
}
function sortBookByPrice(bookArray, order){
    bookArray.sort((a,b)=>{
        if(a.price > b.price) return 1 * order;
        if(a.price < b.price) return -1 * order;
        if(a.price == b.price) return 0
    });
    return bookArray;
}
function sortBookByTitle(bookArray, order){
    bookArray.sort((a,b)=>{
        if(a.title > b.title) return 1 * order;
        if(a.title < b.title) return -1 * order;
        if(a.title == b.title) return 0
    });
    return bookArray;
}
function sortBookByQuantity(bookArray, order){
    bookArray.sort((a,b)=>{
        if(a.quantity > b.quantity) return 1 * order;
        if(a.quantity < b.quantity) return -1 * order;
        if(a.quantity == b.quantity) return 0
    });
    return bookArray;
}
function bookSorter(bookArray,selectedFilter, order){
   if(selectedFilter === "price"){
       return sortBookByPrice(bookArray, order);
   }
   else if(selectedFilter === "title"){
       return sortBookByTitle(bookArray, order);
   }
   else if(selectedFilter === "quantity"){
       return  sortBookByQuantity(bookArray, order);
   }
   return bookArray;
}
function sortedBookListerWithCategories(inventory,selectedFilter, order){
    for(const category of inventory){
        printCategories(category);
        printBooks(bookSorter(category.books,selectedFilter, order))
    }
}
//Sorts books by price | title | author -1 for Descending, 1 for Ascending
//Knygos neturejo authoriu, tai gal omenyje buvo quantity?
    //sortedBookListerWithCategories(inventory,"title", 1 );
//Prints min or max price from all books or any array thats not in an array
    //printPrice("max",inventory);
//Filters books and prints result, needs precise title :/
    //bookLister(filterInventory("title","The memory", inventory));

//Dom part Above is the previous assignment functions to call.
fillInitialList(inventory);
function getBookString(book){
    if(book.publishing_year === 2021){
     return  `Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}, New Book!`;
    }
    else{
    return `Title ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quantity},  Price: ${book.price}`;
    }
}
document.querySelector(`.bookSection__form button`).addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(`.bookSection .bookSection__list`).innerHTML = " ";
    fillInitialList(filterList(inventory,document.querySelector(".bookSection__form .categorySelect").value,document.querySelector(".bookSection__form .form__titleInput").value,document.querySelector(".bookSection__form .form__pagesRange").value));
})
function fillInitialList(inventory){
    for(const category of inventory){
        const li = document.createElement('li');
       
        for(const book of category.books){
            const bookElement = document.createElement('p');
            bookElement.textContent = getBookString(book);
            li.append(bookElement);
        }
        const bookSection = document.querySelector(`.bookSection .bookSection__list`);
        bookSection.appendChild(li);
    }
}
function fillSortedList(inventory, sortRequest, order){
    for(const category of inventory){
        const li = document.createElement('li');
        console.log(category.books);
        console.log(bookSorter(category.books,sortRequest, order));
        for(const book of  bookSorter(category.books,sortRequest, order)){
            const bookElement = document.createElement('p');
            bookElement.textContent = getBookString(book);
            li.append(bookElement);
        }
        console.log(li);
        const bookSection = document.querySelector(`.bookSection .bookSection__list`);
        bookSection.appendChild(li);
    }
}
function fillMathList(inventory){
    for(const category of inventory){
        const li = document.createElement('li');
        for(const book of category.books){
            const bookElement = document.createElement('p');
            bookElement.textContent = getBookString(book);
            li.append(bookElement);
        }
        const bookSection = document.querySelector(`.mathSection__list`);
        bookSection.appendChild(li);
    }
}
function fillInventoryValue(inventory){
    let inventoryValue = 0;
    const li = document.createElement('li');
    const inv = document.createElement('p');
    for(const category of inventory){
        let categoryValue = calcCategoryValue(category.books);
        inventoryValue += categoryValue;
        const cat = document.createElement('p');
        cat.textContent = `Category: ${category.category} total value: ${categoryValue} Euro`;
        li.append(cat);
    }
    console.log("Total inventory price: "+ inventoryValue + " Euro");
    const mathSection = document.querySelector(`.mathSection__list`);
    inv.textContent = "Total inventory price: "+ inventoryValue + " Euro";
    li.append(inv);
    mathSection.appendChild(li);
}
function filterList(inventory,filterRequestCategory,filterRequestTitle,filterRequestPages){
    let newArray = JSON.parse(JSON.stringify(inventory));
    if(filterRequestCategory == "all"){
        return newArray;
    }
    if(filterRequestCategory != "all"){
    newArray = filterCategory(newArray, filterRequestCategory);
    }
    if(filterRequestTitle != ""){
    newArray = filterTitle(newArray, filterRequestTitle);
    }
    if(filterRequestPages != "0"){
    newArray = filterPages(newArray, filterRequestPages );
    }
    return newArray;
}
function getSortedArray(){
    return inventory.map(category => ({
        ...category, 
        books: bookSorter([...category.books], document.querySelector(".sortForm__sortSelect").value, 1)
    }));
}
document.querySelector(".bookSection__sortForm button").addEventListener(`click`,(e)=>{
    e.preventDefault();
    document.querySelector(`.bookSection .bookSection__list`).innerHTML = " ";
    let newArray = inventory.map(category => ({
        ...category, 
        books: bookSorter([...category.books], document.querySelector(".sortForm__sortSelect").value, 1)
    }));
    console.log(document.querySelector(".sortForm__sortSelect").value);
    console.log(bookSorter(newArray,document.querySelector(".sortForm__sortSelect").value,1));
    fillSortedList(newArray,document.querySelector(".sortForm__sortSelect"),1);
})
function filterByPrice(inventoryFilter,filterRequest){
    return inventoryFilter.filter((cat) => cat.books = cat.books.filter((book) => book.price == filterRequest))
}
function getBookMinMax(filterRequest,inventory){
    let newArray = JSON.parse(JSON.stringify(inventory));
    return filterByPrice(newArray,minMaxPrice(filterRequest,newArray));
}
document.querySelector(".mathSection__minBtn").addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(`.mathSection__list`).innerHTML = " ";
    fillMathList(getBookMinMax("min",inventory));
})
document.querySelector(".mathSection__maxBtn").addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(`.mathSection__list`).innerHTML = " ";
    fillMathList(getBookMinMax("max",inventory));
})
document.querySelector(".mathSection__inventoryVal").addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(`.mathSection__list`).innerHTML = " ";
    fillInventoryValue(inventory)
})