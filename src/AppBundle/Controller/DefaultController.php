<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\AdCampaign;
use AppBundle\Entity\User;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\Validator\Constraints\NotBlank;


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
    
    /**
     * 
     * @Route("/balance", name="balance")
     */
    public function showAction()
    {
       $user = $this->getUser();

        return $this->render('Tools/advertiser_panel.html.twig', array('user' => $user));
    }
    
    /**
     * 
     * @Route("/{id}/stats", name="stats")
     */
    public function statsAction(AdCampaign $adCampaign)
    {
        $this->denyAccessUnlessGranted('ROLE_USER', null, 'Unable to access this page!');
        
        $repository = $this->getDoctrine()->getRepository(AdCampaign::class);
        
        $camp = $repository->findOneBy(
            array('id' => $adCampaign->getId())
        );
        
        return $this->render('Tools/campaign_stats.html.twig', array('camp' => $camp));
    }
 
}
