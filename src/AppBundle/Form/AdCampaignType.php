<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use AppBundle\Entity\AdCampaign;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\LanguageType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;


class AdCampaignType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options){
        $builder
            ->add('name', null, array('required' => true, 'label' => false))
            ->add('start_date', null, array('widget' => 'single_text','required' => true, 'label' => false))
            ->add('end_date', null, array('widget' => 'single_text','required' => true, 'label' => false))
            ->add('budget', null, array('required' => true, 'label' => false))
            ->add('daily_budget', null, array('required' => true, 'label' => false))
            ->add('site_name', TextType::class, array(
                'required' => true,
                'label' => false
            ))
            ->add('site_url', TextType::class, array(
                'required' => true,
                'label' => false
            ))
            ->add('country', CountryType::class, array(
                'placeholder' => 'Choose an option',
                'label' => false,
                'required' => true,
                ))
            ->add('operating_system', ChoiceType::class, [
                'choices' => [
                    'iOS' => 'iOS',
                    'Android' => 'Android',
                ],
                'expanded'  => true,
                'multiple'  => true,
                'label' => false,
                'required' => false,
               ]) 
            ->add('manufacturer', ChoiceType::class, [
                'choices' => [
                    'Apple' => 'Apple',
                    'Samsung' => 'Samsung',
                    'Xiaomi' => 'Xiaomi',
                    'Meizu' => 'Meizu',
                    'HTC' => 'HTC',
                ],
                'expanded'  => true,
                'multiple'  => true,
                'label' => false,
                'required' => false,
               ])
            ->add('category', ChoiceType::class, [
                'choices' => [
                    'Books & Reference' => 'Books & Reference',
                    'Business' => 'Business',
                    'Comics' => 'Comics',
                    'Education' => 'Education',
                    'Communication' => 'Communication',
                    'Entertainment' => 'Entertainment',
                    'Finance' => 'Finance',
                    'Transportation' => 'Transportation',
                ],
                'expanded'  => true,
                'multiple'  => true,
                'label' => false,
                'required' => false,
               ])                   
            ->add('language', LanguageType::class, array(
                'expanded'  => false,
                'multiple' => true,
                'label' => false,
                'required' => false,
                ))
            ->add('bid', null, array('required' => true, 'label' => false))
            ->add('ad_image', HiddenType::class, array(
                'required' => true,
               
            ));
        $builder->add('submit', SubmitType::class, ['label' => 'Create Ad Campaign']);        
    }
    
    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefault('data_class', AdCampaign::class);   
    }

}