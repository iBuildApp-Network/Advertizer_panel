<?php

namespace AppBundle\Controller;

use AppBundle\Entity\AdCampaign;
use AppBundle\Form\AdCampaignType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Adcampaign controller.
 *
 */
class AdCampaignController extends Controller
{
    /**
     * Lists all users adCampaign entities.
     *
     */
    public function indexAction()
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
     * Creates a new adCampaign entity.
     *
     */
    public function newAction(Request $request)
    {
        $adcamp = new AdCampaign();
       
        $curUser = $this->get('security.token_storage')->getToken()->getUser();
        $idUser = $curUser->getId();
        
        $adcamp->setUser($idUser);

        
        $form = $this->createForm(AdCampaignType::class, $adcamp, array(
            'method' => 'POST',
        ));
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($adcamp);
            $em->flush();

            return $this->redirectToRoute('mycampaigns');
        }

        return $this->render('Tools/new_ad_campaign.html.twig', ['campform' => $form->createView()]);
    }

    /**
     * Finds and displays a adCampaign entity.
     *
     */
    public function showAction(AdCampaign $adCampaign)
    {
        $deleteForm = $this->createDeleteForm($adCampaign);

        return $this->render('adcampaign/show.html.twig', array(
            'adCampaign' => $adCampaign,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing adCampaign entity.
     *
     */
    public function editAction(Request $request, AdCampaign $adCampaign)
    {
        $deleteForm = $this->createDeleteForm($adCampaign);
        $editForm = $this->createForm(AdCampaignType::class, $adCampaign);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('mycampaigns', array('id' => $adCampaign->getId()));
        }

        return $this->render('adcampaign/edit.html.twig', array(
            'adCampaign' => $adCampaign,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a adCampaign entity.
     *
     */
    public function deleteAction(Request $request, AdCampaign $adCampaign)
    {
        $form = $this->createDeleteForm($adCampaign);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($adCampaign);
            $em->flush();
        }

        return $this->redirectToRoute('mycampaigns');
    }

    /**
     * Creates a form to delete a adCampaign entity.
     *
     * @param AdCampaign $adCampaign The adCampaign entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(AdCampaign $adCampaign)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('adcampaign_delete', array('id' => $adCampaign->getId())))
            ->setMethod('GET')
            ->getForm()
        ;
    }
}
