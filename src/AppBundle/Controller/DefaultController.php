<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\AdCampaign;
use AppBundle\Form\AdCampaignType;
use AppBundle\Entity\Task;
use AppBundle\Entity\User;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;


class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->redirectToRoute('mycampaigns');
    }
    
    /**
     * 
     * @Route("/mycampaigns", name="mycampaigns")
     */
    public function MyCampaignsAction(Request $request)
    {
      
        $curUser = $this->get('security.token_storage')->getToken()->getUser();
        $idUser = $curUser->getId();
        
        $repository = $this->getDoctrine()->getRepository(AdCampaign::class);
        
        $mycamps = $repository->findBy(
            array('user' => $idUser)
        );
        
        return $this->render('mycampaigns.html.twig', array('vcamp' => $mycamps));
    }
 
}
