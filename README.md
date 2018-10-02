# mongoose-crud

### GETTING STARTED
```sh
$ npm init
$ npm install 
```

### API LIST

| Route | HTTP | Description | input | output |
| --- | --- | --- | --- | --- |
| /books | POST | Create a new book | req.body: isbn,title,author,category,stock |  | 
| /books/lists | GET | Get a list of books |  | JSON Object |
| /books/:id | PUT | Update individual book information | req.body: isbn,title,author,category,stock | JSON Object  | 
| /books/:id | DELETE | Delete individual book information |  |   | 
| /customers | POST | Create a new customer | req.body: name, memberid, address, zipcode, phone | JSON Object | 
| /customers/lists | GET | Get a list of customers |  | JSON Object |
| /customers/:id | PUT | Update individual customer information | req.body: name, memberid, address, zipcode, phone | JSON Object  | 
| /customers/:id | DELETE | Delete individual customer information |  |   | 
| /transactions | POST | Create a new transaction | req.body: member, days, out_date, due_date, in_date, fine, booklist | JSON Object  | 
| /transactions/lists | GET | Get a list of transactions |  | JSON Object |
| /transactions/:id | PUT | Update individual transction information | req.body: member, days, out_date, due_date, in_date, fine, booklist | JSON Object  | 
| /transactions/:id | DELETE | Delete individual transaction information |  |   | 