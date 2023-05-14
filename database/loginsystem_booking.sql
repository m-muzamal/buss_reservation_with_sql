CREATE DATABASE  IF NOT EXISTS `loginsystem` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `loginsystem`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: loginsystem
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `idbooking` int NOT NULL AUTO_INCREMENT,
  `bookingname` varchar(45) NOT NULL,
  `bookingphone` varchar(45) NOT NULL,
  `bookingcnic` varchar(45) NOT NULL,
  `bookingroute` varchar(45) NOT NULL,
  `bookingdate` varchar(45) NOT NULL,
  `bookingseats` varchar(45) NOT NULL,
  `bookingseatno` varchar(45) NOT NULL,
  PRIMARY KEY (`idbooking`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'muzammla','03154237255','33303-0771212','lahore to rajana','32-3-2345','2',''),(2,'muzammla','03154237255','33303-0771212','lahore to rajana','32-3-2345','2',''),(3,'Muzammal','03154237255','33303-07190759','lahore to rajan','23-3-2023','3',''),(4,'Muzammal','03154237255','33303-07190759','lahore to rajan','23-3-2023','3',''),(5,'Maryam','03154237255','33303-07190759','lahore to rajan','23-3-2023','3',''),(6,'Momna Arif','03154237255','33303-0719075-9','Lahore to Rajan','23-3-2023','31, 21, 22, 32',''),(7,'Imran yousaf','03154237255','33303-2342345-4','Lahore to Rajan','23-3-2023','2','6, 7'),(8,'Imran yousaf','03154237255','33303-2342345-4','Lahore to Rajan','23-3-2023','2','6, 7'),(9,'Imran Yousaf','03154237255','33303-0719075-9','Lahore to Rajan','23-3-2023','2','6, 7'),(10,'Muhammad Muzammal','03154237255','33303-07190759','Lahore to Rajan','23-3-2023','2','16, 6'),(11,'Muhammad Muzammal','03154237255','33303-07190759','Lahore to Rajan','23-3-2023','2','16, 6');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-14  7:37:29
