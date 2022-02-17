-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 17 Lut 2022, 23:42
-- Wersja serwera: 8.0.28-0ubuntu0.20.04.3
-- Wersja PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `casino_game`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `csgo-case`
--

CREATE TABLE `csgo-case` (
  `skins_id` int NOT NULL,
  `skins_var` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `skins_price` int NOT NULL,
  `skins_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Zrzut danych tabeli `csgo-case`
--

INSERT INTO `csgo-case` (`skins_id`, `skins_var`, `skins_price`, `skins_name`) VALUES
(1, 'img.blue', 25, 'USP-S | Blueprint'),
(2, 'img.purple2', 50, 'AWP | PAW'),
(3, 'img.purple', 75, 'Desert Eagle | Night'),
(4, 'img.pink2', 100, 'Glock-18 | Bullet Queen'),
(5, 'img.pink', 125, 'AK-47 | Frontside Misty'),
(6, 'img.red2', 150, 'M4A4 | Neo-Noir'),
(7, 'img.red', 175, 'M4A1-S | Hyper Beast'),
(8, 'img.yellow3', 250, 'Skeleton Knife | Slaughter'),
(9, 'img.yellow2', 350, 'Butterfly Knife | Doppler'),
(10, 'img.yellow', 500, 'M9 Bayonet | Tiger Tooth');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `csgo-case`
--
ALTER TABLE `csgo-case`
  ADD PRIMARY KEY (`skins_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
