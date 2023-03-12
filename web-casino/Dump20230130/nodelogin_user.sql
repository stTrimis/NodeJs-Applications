-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: nodelogin
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL,
  `comments` text,
  `status` varchar(10) DEFAULT 'active',
  `account_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,NULL,NULL,NULL,NULL,NULL,'removed',NULL),(4,'sasdasdas','ssassssssss','ss@ss','200','heyyy','active',NULL),(5,'Israel','Adesanya','iadesanya@ufc.com','200','','active',NULL),(6,'Henry','Cejudo','hcejudo@ufc.com','012345 678910','','active',NULL),(7,'Valentina','Shevchenko','vshevchenko@ufc.com','012345 678910','','active',NULL),(8,'Tyron','Woodley','twoodley@ufc.com','012345 678910','','active',NULL),(9,'Rose','Namajunas ','rnamajunas@ufc.com','012345 678910','','active',NULL),(10,'Tony','Ferguson ','tferguson@ufc.com','012345 678910','','active',NULL),(11,'Jorge','Masvidal ','jmasvidal@ufc.com','012345 678910','','active',NULL),(12,'Nate','Diaz ','ndiaz@ufc.com','012345 678910','','active',NULL),(13,'Conor','McGregor ','cmcGregor@ufc.com','012345 678910','','active',NULL),(14,'Cris','Cyborg ','ccyborg@ufc.com','012345 678910','','active',NULL),(15,'Tecia','Torres ','ttorres@ufc.com','012345 678910','','active',NULL),(16,'Ronda','Rousey ','rrousey@ufc.com','012345 678910','','active',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-30 17:53:52
