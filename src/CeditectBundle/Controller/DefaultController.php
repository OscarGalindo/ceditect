<?php

namespace CeditectBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('CeditectBundle:Default:index.html.twig');
    }
}
