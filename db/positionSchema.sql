USE main_db;

DROP TABLE IF EXISTS positiondata;

CREATE TABLE positiondata(
	Id INT NOT NULL AUTO_INCREMENT,
    PositionTitile VARCHAR(100) NOT NULL,
	DateInserted DATETIME DEFAULT CURRENT_TIMESTAMP,
	DateUpdated DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (Id),
    FOREIGN KEY (UserId) REFERENCES userdata(Id),
    FOREIGN KEY (CompanyId) REFERENCES companydata(Id)

)