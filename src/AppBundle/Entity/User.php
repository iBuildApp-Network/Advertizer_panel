<?php
// src/AppBundle/Entity/User.php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    
    /**
     * @ORM\Column(type="string", length=42)
     * @Assert\Regex("/^0x[A-Fa-f0-9]+$/")
     */
    private $ethereum_address;
    
    /**
     * Set ethereumAddress
     *
     * @param string $ethereumAddress
     *
     * @return User
     */
    public function setEthereumAddress($ethereumAddress)
    {
        $this->ethereum_address = $ethereumAddress;

        return $this;
    }

    /**
     * Get ethereumAddress
     *
     * @return string
     */
    public function getEthereumAddress()
    {
        return $this->ethereum_address;
    }

    public function __construct()
    {
        parent::__construct();
       
    }
}