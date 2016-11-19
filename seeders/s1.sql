CREATE table Representatives(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(200) NOT NULL,
party VARCHAR(200) NOT NULL,
districtNum INTEGER NOT NULL,
phoneNum VARCHAR(200) NOT NULL ,
url VARCHAR(2063) NOT NULL, 
primary key(id)
);
SELECT * FROM Representatives WHERE id<12 ORDER BY name;
INSERT INTO Representatives
VALUES ("Donald Norcross","Democrat",1,"8564277000","https://norcross.house.gov",
        ("Frank LoBiondo"," Republican",2,"2022256572","http://lobiondo.house.gov",
        ("Tom MacArthur","Republican",3,"2022254765","https://macarthur.house.gov",
        (" Christopher “Chris” Smith","Republican",4,"6095857878","http://chrissmith.house.gov",
        ("Scott Garrett","Republican",5,"9733002000","http://garrett.house.gov",
        ("Frank Pallone Jr.","Democrat",6,"7322498892","https://pallone.house.gov",
        ("Leonard Lance","Republican",7,"9087886900","http://lance.house.gov",
        ("Rep. Albio Sires","Democrat",8,"2013090301","http://sires.house.gov",
        ("Bill Pascrell Jr.","Democrat",9,"2019352248","http://pascrell.house.gov",
        ("Donald Payne Jr.","Democrat",10,"2013690392","http://payne.house.gov",
        ("Rodney Frelinghuysen","Republican",11,"9739840711","https://frelinghuysen.house.gov",
        ("Bonnie Watson Coleman","Democrat",12,"6098830026","https://watsoncoleman.house.gov",

