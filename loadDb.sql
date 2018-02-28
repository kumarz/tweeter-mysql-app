-- run this to set up the tables for the tweeter application

CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(15) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId_UNIQUE` (`userId`)
);


CREATE TABLE IF NOT EXISTS `followers` (
  `userId` int(11) NOT NULL,
  `followersUserId` int(11) NOT NULL,
  KEY `userId_idx` (`userId`),
  CONSTRAINT `followerUserId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE IF NOT EXISTS `messages` (
  `messageId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(40) DEFAULT NULL,
  `content` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`messageId`)
);