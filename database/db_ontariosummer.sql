-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 11, 2020 at 12:48 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ontariosummer`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attractions`
--

DROP TABLE IF EXISTS `tbl_attractions`;
CREATE TABLE IF NOT EXISTS `tbl_attractions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `keywords` text COLLATE utf8_bin NOT NULL,
  `link` varchar(200) COLLATE utf8_bin NOT NULL,
  `price` varchar(5) COLLATE utf8_bin NOT NULL,
  `city` varchar(30) COLLATE utf8_bin NOT NULL,
  `address` varchar(200) COLLATE utf8_bin NOT NULL,
  `postal_code` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_attractions`
--

INSERT INTO `tbl_attractions` (`ID`, `name`, `img_url`, `description`, `keywords`, `link`, `price`, `city`, `address`, `postal_code`) VALUES
(1, 'Placeholder', '/images/subcategories/amusement-parks.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'amusement parks, art, resorts, experiences, recreation, outdoor activities, sightseeing', '', '$', 'London', '123 Fake St', 'N6E 2H9'),
(2, 'Placeholder', '/images/subcategories/campsites.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'campsites, cannabis, culture, experiences, history, natural wonders, outdoor activities, recreation, sightseeing', '', '$', 'Grand Bend', '345 IDK Ave', 'A3W 2H9');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

DROP TABLE IF EXISTS `tbl_categories`;
CREATE TABLE IF NOT EXISTS `tbl_categories` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `keywords` text COLLATE utf8_bin NOT NULL,
  `class` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`ID`, `name`, `img_url`, `description`, `keywords`, `class`) VALUES
(1, 'Family Fun', '/images/home/family-fun.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'amusement parks, hotels, resorts, events, recreation, campsites, sightseeing, natural wonders, culture, art, history, experiences', 'family'),
(2, 'Luxury Getaway', '/images/home/luxury-getaway.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'hotels, spas, resorts, shopping, nightlife, events, food, theatre, art, history, experiences, culture', 'luxury'),
(3, 'Wilderness Exploration', '/images/home/wilderness.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'campsites, natural wonders, outdoor activities, culture, cannabis, recreation, sightseeing, events', 'wilderness'),
(4, 'History & Culture', '/images/home/history-culture.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'history, culture, art, food, sightseeing, natural wonders, experiences, theatre, nightlife, hotels, campsites, outdoor activities, recreation', 'culture'),
(5, 'Business', '/images/home/business.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'hotels, resorts, nightlife, food, shopping, spas, sightseeing, experiences, events, theatre', 'business');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_keywords`
--

DROP TABLE IF EXISTS `tbl_keywords`;
CREATE TABLE IF NOT EXISTS `tbl_keywords` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `aka` text COLLATE utf8_bin NOT NULL,
  `class` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_keywords`
--

INSERT INTO `tbl_keywords` (`ID`, `name`, `img_url`, `description`, `aka`, `class`) VALUES
(1, 'Amusement Parks', '/images/subcategories/amusement-parks.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'theme parks, zoo, aquarium, roller coaster, family', 'amusement'),
(2, 'Hotels', '/images/subcategories/hotels.jpeg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'motels, sleeping, bed, room', 'hotels'),
(3, 'Campsites', '/images/subcategories/campsites.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'camping, trailer park', 'campsite'),
(4, 'Recreation', '/images/subcategories/recreation.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'fun, stuff to do', 'recreation');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `admin` tinyint(1) NOT NULL,
  `first_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `city` varchar(30) COLLATE utf8_bin NOT NULL,
  `country` varchar(30) COLLATE utf8_bin NOT NULL,
  `subdate` date NOT NULL,
  `update` date NOT NULL,
  `keywords` text COLLATE utf8_bin NOT NULL,
  `cities` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`ID`, `admin`, `first_name`, `last_name`, `email`, `img_url`, `city`, `country`, `subdate`, `update`, `keywords`, `cities`) VALUES
(1, 1, 'Amie', 'Collins', 'contact@amiecollins.ca', '', 'London, Ontario', 'Canada', '2020-02-10', '2020-02-10', 'theatre, campsites, recreation, nightlife, experiences, natural wonders, sightseeing, outdoor activities, art, history, food, culture, cannabis, amusement parks, spas', 'Ottawa, Hamilton, Smiths Falls');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
