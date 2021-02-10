-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.13-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para 3prendero
CREATE DATABASE IF NOT EXISTS `3prendero` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `3prendero`;

-- Volcando estructura para tabla 3prendero.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo` int(11) NOT NULL,
  `id_sexo` int(11) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `id_talle` int(11) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `image` varchar(100) NOT NULL,
  `Created_at` date DEFAULT NULL,
  `Updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sexo_fk_idx` (`id_sexo`),
  KEY `tipo_fk_idx` (`id_tipo`),
  KEY `id_talle` (`id_talle`),
  CONSTRAINT `id_sexo` FOREIGN KEY (`id_sexo`) REFERENCES `sexos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_talle` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id`),
  CONSTRAINT `id_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla 3prendero.productos: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `id_tipo`, `id_sexo`, `nombre_producto`, `descripcion`, `id_talle`, `precio`, `image`, `Created_at`, `Updated_at`) VALUES
	(1, 1, 1, 'Levis', 'Remera levis rosa hombre', 1, 700, 'Remera levis rosa hombre.jpg', NULL, NULL),
	(2, 1, 1, 'Remera verde', 'Remera verde de hombre terra', 1, 820, 'Remera verde de hombre terra.jpg', NULL, NULL),
	(3, 1, 1, 'Camisa Mistral', 'Camisa blanca de hombre mistral', 1, 2100, 'Camisa blanca de hombre mistral.jpg', NULL, NULL),
	(4, 3, 1, 'Campera Fincas', 'Campera negra de  hombre fincas', 1, 2400, 'Campera negra de  hombre fincas.jpg', NULL, NULL),
	(5, 4, 1, 'Zapatillas Topper', 'Zapatilla negra para hombre Topper', 1, 1300, 'Zapatilla negra para hombre Topper.jpg', NULL, NULL),
	(6, 1, 1, 'Lacoste Remera', 'Remera blanca Lacoste para hombre', 1, 850, 'Remera blanca Lacoste para hombre.jpg', NULL, NULL),
	(7, 4, 1, 'Zapatilla Reebok', 'Zapatilla negra Reebok para hombre', 1, 2500, 'Zapatilla negra Reebok para hombre.jpg', NULL, NULL),
	(8, 1, 1, 'Remera Old School', 'Remera gris Old School para hombre', 1, 600, 'Remera gris Old School para hombre.jpg', NULL, NULL),
	(9, 2, 1, 'Levis Jean', 'Jean Levis azul para hombre', 1, 1600, 'Jean Levis azul para hombre.jpg', NULL, NULL),
	(10, 2, 1, 'Bermuda', 'Bermuda para hombre', 1, 1530, 'Bermuda para hombre.jpg', NULL, NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla 3prendero.sexos
CREATE TABLE IF NOT EXISTS `sexos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla 3prendero.sexos: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `sexos` DISABLE KEYS */;
INSERT INTO `sexos` (`id`, `nombre`) VALUES
	(1, 'Hombre'),
	(2, 'Mujer'),
	(3, 'Unisex');
/*!40000 ALTER TABLE `sexos` ENABLE KEYS */;

-- Volcando estructura para tabla 3prendero.talles
CREATE TABLE IF NOT EXISTS `talles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla 3prendero.talles: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` (`id`, `nombre`) VALUES
	(2, 'L'),
	(3, 'M'),
	(4, 'S'),
	(1, 'XL'),
	(5, 'XS');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;

-- Volcando estructura para tabla 3prendero.tipos
CREATE TABLE IF NOT EXISTS `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla 3prendero.tipos: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` (`id`, `nombre`) VALUES
	(1, 'Remeras'),
	(2, 'Pantalones'),
	(3, 'Buzos'),
	(4, 'Calzados');
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;

-- Volcando estructura para tabla 3prendero.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `repassword` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `image` varchar(100) NOT NULL DEFAULT '',
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla 3prendero.usuarios: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `username`, `email`, `password`, `repassword`, `date`, `image`, `createdAt`, `updatedAt`) VALUES
	(26, 'Emilio', 'Zuccarelli', 'Emilio27', 'emiliozuccarelli@gmail.com', '$2b$10$/6R2dsCKWC4Kn865MIveCenFqS/2S69vgu0vCW74LpX.TsBgHr82a', '123456', '2021-02-10', 'emiliozuccarelli@gmail.com.png', NULL, NULL),
	(33, 'Pablo', 'Lujambio', 'Pablo22', 'pablolujambio@gmail.com', '$2b$10$iKMjijS3rdXK.f04zRkyBenqXlWMZ/V2u.OeKxKg3yrZTZ5Bbiuve', '12345678', '2021-02-02', 'pablolujambio@gmail.com.jpg', NULL, NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
