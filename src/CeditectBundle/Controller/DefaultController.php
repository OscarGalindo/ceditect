<?php

namespace CeditectBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CeditectBundle:Default:index.html.twig', array('name' => $name));
    }
}
