<?php

namespace app\core;

class Router {
    private $routes = [];

    public function add($path, $controller, $method) {
        $this->routes[$path] = ['controller' => $controller, 'method' => $method];
    }

    public function dispatch($url) {
        $url = trim($url, '/'); // Nettoyer l'URL

        if (array_key_exists($url, $this->routes)) {
            $controllerName = $this->routes[$url]['controller'];
            $methodName = $this->routes[$url]['method'];

            $controllerClass = "app\\controllers\\$controllerName";
            if (class_exists($controllerClass)) {
                $controller = new $controllerClass();
                if (method_exists($controller, $methodName)) {
                    return $controller->$methodName();
                }
            }
        }
        // Page non trouvée
        http_response_code(404);
        echo "404 - Page non trouvée";
        exit;
    }
}

?>
