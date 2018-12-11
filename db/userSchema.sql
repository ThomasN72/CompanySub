USE main_db;


DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata(
	Id INT NOT NULL AUTO_INCREMENT,
	UserName VARCHAR(60) NOT NULL,
	Password VARCHAR(60) NOT NULL,
    Email VARCHAR(100),
    PhoneNumber INT (15),
    FirstName VARCHAR(60),
    LastName VARCHAR(60),
	DateInserted DATETIME DEFAULT CURRENT_TIMESTAMP,
	DateUpdated DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (Email),
    PRIMARY KEY (Id)
);