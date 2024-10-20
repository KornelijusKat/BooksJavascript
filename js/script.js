const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019,  
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "Coding with ant farms",
                "ISBN": "IT-12347",
                "publishing_year": 2018,  
                "pages": 150,
                "quantity": 8,
                "price": 10
            },
            {
                "title": "Programavimas nelinksmai",
                "ISBN": "IT-13755",
                "publishing_year": 2019,  
                "pages": 1250,
                "quantity": 5,
                "price": 250
            },
            {
                "title": "Zack Brannigan's Big Book Of Code",
                "ISBN": "IT-11312",
                "publishing_year": 2021,  
                "pages": 450,
                "quantity": 20,
                "price": 60
            },
            {
                "title": "c++ for dummies",
                "ISBN": "IT-12789",
                "publishing_year": 2017,  
                "pages": 200,
                "quantity": 10,
                "price": 45
            },
        ]
    },
    {
        "category": "Fantastika",
        "books": [
            {
                "title": "Twinkle toes",
                "ISBN": "FA-12747",
                "publishing_year": 2021,  
                "pages": 150,
                "quantity": 30,
                "price": 15
            },
            {
                "title": "WH40k septic tank cleaners",
                "ISBN": "FA-19395",
                "publishing_year": 2020,  
                "pages": 350,
                "quantity": 8,
                "price": 10
            },
            {
                "title": "WH40k Horus Legacy",
                "ISBN": "FA-12115",
                "publishing_year": 2018,  
                "pages": 150,
                "quantity": 3,
                "price": 20
            },
            {
                "title": "Harry Potter and the lizards school",
                "ISBN": "FA-18185",
                "publishing_year": 2012,  
                "pages": 350,
                "quantity": 4,
                "price": 25
            },
            {
                "title": "Harry Potter and the illiuminati throne",
                "ISBN": "FA-18185",
                "publishing_year": 2015,  
                "pages": 260,
                "quantity": 10,
                "price": 40
            },
        ]
    },
    {
        "category": "Historical Fiction",
        "books": [
            {
                "title": "Vinland saga",
                "ISBN": "HF-11145",
                "publishing_year": 2020,  
                "pages": 450,
                "quantity": 20,
                "price": 10
            },
            {
                "title": "Stuck in the Trench",
                "ISBN": "HF-19395",
                "publishing_year": 1960,  
                "pages": 350,
                "quantity": 10,
                "price": 15
            },
            {
                "title": "The end of shield formations",
                "ISBN": "HF-12115",
                "publishing_year": 2012,  
                "pages": 100,
                "quantity": 4,
                "price": 30
            },
            {
                "title": "WW2 Immersive Memory",
                "ISBN": "HF-18185",
                "publishing_year": 2021,  
                "pages": 350,
                "quantity": 10,
                "price": 200
            },
            {
                "title": "Alexander's Fall",
                "ISBN": "HF-18185",
                "publishing_year": 2005,  
                "pages": 200,
                "quantity": 3,
                "price": 50
            },
        ]
    },
    {
        "category": "Science Fiction",
        "books": [
            {
                "title": "Puddle: Waves Of Earrakia",
                "ISBN": "SC-12555",
                "publishing_year": 2017,  
                "pages": 350,
                "quantity": 120,
                "price": 30
            },
            {
                "title": "Nebula",
                "ISBN": "SC-19395",
                "publishing_year": 2000,  
                "pages": 550,
                "quantity": 10,
                "price": 20
            },
            {
                "title": "Mars the final frontier",
                "ISBN": "SC-12115",
                "publishing_year": 2021,  
                "pages": 129,
                "quantity": 5,
                "price": 40
            },
            {
                "title": "Nuclear fission Empire",
                "ISBN": "SC-20185",
                "publishing_year": 1950,  
                "pages": 150,
                "quantity": 4,
                "price": 25
            },
            {
                "title": "Beggar's Galaxy",
                "ISBN": "SC-18185",
                "publishing_year": 2010,  
                "pages": 460,
                "quantity": 1,
                "price": 40
            },
        ]
    },
    {
        "category": "Mystery & Thriller",
        "books": [
            {
                "title": "MJ and the EP file",
                "ISBN": "MT-11111",
                "publishing_year": 2021,  
                "pages": 400,
                "quantity": 5,
                "price": 28
            },
            {
                "title": "Apple of your eye",
                "ISBN": "MT-19395",
                "publishing_year": 2010,  
                "pages": 150,
                "quantity": 2,
                "price": 20
            },
            {
                "title": "Golden egg",
                "ISBN": "MT-12115",
                "publishing_year": 1994,  
                "pages": 1000,
                "quantity": 4,
                "price": 40
            },
            {
                "title": "The memory",
                "ISBN": "MT-18185",
                "publishing_year": 1978,  
                "pages": 380,
                "quantity": 3,
                "price": 22
            },
            {
                "title": "Mortiary files",
                "ISBN": "MT-18185",
                "publishing_year": 2010,  
                "pages": 560,
                "quantity": 4,
                "price": 50
            },
        ]
    }
]
function bookLister(inventory){
    for(const category of inventory){
        console.log(`Category: ${category.category}`);
        for(const book of category.books){
            if(book.publishing_year === 2021){
                console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quanity},  Price: ${book.price}, New Book!`);
            }
            else{
            console.log(`Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year}, Pages: ${book.pages}, Quantity: ${book.quanity},  Price: ${book.price}`);
            }
        }
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
}
bookLister(inventory);
totalInventoryValue(inventory);