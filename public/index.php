<?php

require_once __DIR__ . '/../vendor/autoload.php';


use app\core\Router;
use app\controllers\PortfolioController;

// Initialisation du routeur
$router = new Router();

// Définition des routes
$router->add('', 'PortfolioController', 'index');       // Page principale (home)
$router->add('sections/about', 'PortfolioController', 'about'); // Section About
$router->add('sections/projects', 'PortfolioController', 'projects'); // Section Projects
$router->add('sections/contact', 'PortfolioController', 'contact'); // Section Contact

// Récupération de l'URL
$url = $_GET['page'] ?? '';

// Dispatch (appel du bon contrôleur et de la bonne méthode)
$router->dispatch($url);

?>
