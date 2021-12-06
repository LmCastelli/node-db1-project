-- Database Queries

-- Find all customers with postal code 1010

SELECT * FROM Customers where postalcode = 1010;

-- Find the phone number for the supplier with the id 11

SELECT phone FROM [Suppliers] where supplierid = 11;

-- List first 10 orders placed, sorted descending by the order date

SELECT *  FROM orders order by orderid limit 10; 
-- this is the first 10 orders, the readme asked for first 10 but asking for that specific date to be at the top makes it seem like you wanted the last 10, either way here are the first 10!

-- Find all customers that live in London, Madrid, or Brazil

SELECT * FROM [Customers] where city = 'London' or city = 'Brazil' or city = 'Madrid';

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

INSERT INTO customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
Values ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth");

-- Update Bilbo Baggins record so that the postal code changes to "11122"

UPDATE Customers 
SET postalcode = 11122
where contactname = "Bilbo Baggins" 

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted



-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
