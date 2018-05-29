<?php
// src/AppBundle/Entity/AdCampaign.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="campaigns")
 */
class AdCampaign
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;
    
    /**
     * @ORM\Column(type="date", length=100)
     */
    private $start_date;
    
    /**
     * @ORM\Column(type="date", length=100)
     */
    private $end_date;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $budget;
    
    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $daily_budget;
    
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $site_name;
    
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $site_url;
    
    /**
     * @ORM\Column(type="string", length=100)
     */
    protected $country;
    
    /**
     * @ORM\Column(type="json_array")
     */
    protected $operating_system;
    
    /**
     * @ORM\Column(type="json_array")
     */
    protected $manufacturer;
    
    /**
     * @ORM\Column(type="json_array")
     */
    protected $category;
    
    /**
     * @ORM\Column(type="json_array")
     */
    protected $language;
    
    /**
     * @ORM\Column(type="decimal", scale=3)
     */
    private $bid;
    
    /**
     * @ORM\Column(type="text")
     */
    private $ad_image;
    
    /**
     * @ORM\Column(type="integer")
     */
    private $user;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return AdCampaign
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return AdCampaign
     */
    public function setStartDate($startDate)
    {
        $this->start_date = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->start_date;
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     *
     * @return AdCampaign
     */
    public function setEndDate($endDate)
    {
        $this->end_date = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->end_date;
    }

    /**
     * Set budget
     *
     * @param string $budget
     *
     * @return AdCampaign
     */
    public function setBudget($budget)
    {
        $this->budget = $budget;

        return $this;
    }

    /**
     * Get budget
     *
     * @return string
     */
    public function getBudget()
    {
        return $this->budget;
    }

    /**
     * Set dailyBudget
     *
     * @param string $dailyBudget
     *
     * @return AdCampaign
     */
    public function setDailyBudget($dailyBudget)
    {
        $this->daily_budget = $dailyBudget;

        return $this;
    }

    /**
     * Get dailyBudget
     *
     * @return string
     */
    public function getDailyBudget()
    {
        return $this->daily_budget;
    }

    /**
     * Set siteName
     *
     * @param string $siteName
     *
     * @return AdCampaign
     */
    public function setSiteName($siteName)
    {
        $this->site_name = $siteName;

        return $this;
    }

    /**
     * Get siteName
     *
     * @return string
     */
    public function getSiteName()
    {
        return $this->site_name;
    }

    /**
     * Set siteUrl
     *
     * @param string $siteUrl
     *
     * @return AdCampaign
     */
    public function setSiteUrl($siteUrl)
    {
        $this->site_url = $siteUrl;

        return $this;
    }

    /**
     * Get siteUrl
     *
     * @return string
     */
    public function getSiteUrl()
    {
        return $this->site_url;
    }

    /**
     * Set bid
     *
     * @param string $bid
     *
     * @return AdCampaign
     */
    public function setBid($bid)
    {
        $this->bid = $bid;

        return $this;
    }

    /**
     * Get bid
     *
     * @return string
     */
    public function getBid()
    {
        return $this->bid;
    }

    /**
     * Set country
     *
     * @param string $country
     *
     * @return AdCampaign
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set manufacturer
     *
     * @param array $manufacturer
     *
     * @return AdCampaign
     */
    public function setManufacturer($manufacturer)
    {
        $this->manufacturer = $manufacturer;

        return $this;
    }

    /**
     * Get manufacturer
     *
     * @return array
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }
    
    /**
     * Set language
     *
     * @param array $language
     *
     * @return AdCampaign
     */
    public function setLanguage($language)
    {
        $this->language = $language;

        return $this;
    }

    /**
     * Get language
     *
     * @return array
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     * Set category
     *
     * @param array $category
     *
     * @return AdCampaign
     */
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return array
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set operatingSystem
     *
     * @param array $operatingSystem
     *
     * @return AdCampaign
     */
    public function setOperatingSystem($operatingSystem)
    {
        $this->operating_system = $operatingSystem;

        return $this;
    }

    /**
     * Get operatingSystem
     *
     * @return array
     */
    public function getOperatingSystem()
    {
        return $this->operating_system;
    }

    /**
     * Set user
     *
     * @param integer $user
     *
     * @return AdCampaign
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return integer
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set adImage
     *
     * @param string $adImage
     *
     * @return AdCampaign
     */
    public function setAdImage($adImage)
    {
        $this->ad_image = $adImage;

        return $this;
    }

    /**
     * Get adImage
     *
     * @return string
     */
    public function getAdImage()
    {
        return $this->ad_image;
    }
}
