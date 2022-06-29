CREATE SCHEMA IF NOT EXISTS `letsorganize` DEFAULT CHARACTER SET utf8 ;
USE `letsorganize` ;

CREATE TABLE IF NOT EXISTS `letsorganize`.`clothes` (
  `idcolthes` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL ,
  `price` VARCHAR(45) NOT NULL,
  `imageUrl` VARCHAR(1000) NOT NULL,
  `inStock` VARCHAR(45) NOT NULL,
  `articleLeft` INT NULL,
  PRIMARY KEY (`idcolthes`),
  UNIQUE INDEX `idcolthes_UNIQUE` (`idcolthes` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `letsorganize`.`Tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `adresse` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE IF NOT EXISTS `letsorganize`.`favorites` (
  `idcolthes` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL ,
  `price` VARCHAR(45) NOT NULL,
  `imageUrl` VARCHAR(1000) NOT NULL,
  `inStock` VARCHAR(45) NOT NULL,
  `articleLeft` INT NULL,
  PRIMARY KEY (`idcolthes`),
  UNIQUE INDEX `idcolthes_UNIQUE` (`idcolthes` ASC) VISIBLE);

