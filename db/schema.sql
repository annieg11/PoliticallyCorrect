-- create database 
CREATE DATABASE PoliticallyCorrect_db;

USE  PoliticallyCorrect_db;

CREATE table Representatives(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(200) NOT NULL,
partyName VARCHAR(200) NOT NULL,
districtNum INTEGER NOT NULL,
phoneNum INTEGER NOT NULL ,
url VARCHAR(2063) NOT NULL, 
primary key(id)
);

USE  PoliticallyCorrect_db;

CREATE table Districts (
id INT AUTO_INCREMENT NOT NULL,
districtNum INTEGER NOT NULL,
zipCode INTEGER NOT NULL,
primary key(id)
);

USE  PoliticallyCorrect_db;

CREATE table User(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(200) NOT NULL,
zipcode INTEGER NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
primary key(id)
);



