<?php

namespace app\controllers;

use app\core\Controller;

class PortfolioController extends Controller {

    public function index() {
        //Définir le titre de la page 
        $title = "PortFolio";
        //Joindre les styles
        $resetCss = "reset.css";
        $css = "style.css";

        //Charger la vue et passer le titre, les styles
        $this->view('sections/home', compact('title', 'resetCss', 'css'));
    }

    public function about() {
        $title = "Á propos de moi";

        $this->view('sections/about', compact('title'));
    }

    public function project() {

        $title = "Les projets";

        $this->view('sections/projects', compact('title'));
    }


}

?>