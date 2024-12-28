import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurandCard
 *      - Image
 *      - Name
 *      - Rating
 *      - Cuisine
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>  {
  return(
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Logo"/>
      </div>
      <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
      </ul>
    </div>
  )
}

const RestaurantCard = (resData) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } = resData?.resData?.info;
  return(
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + cloudinaryImageId} alt="Res Img"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

const resList = [
  {
    "info": {
      "id": "686198",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Metro Station",
      "areaName": "Moti Jheel",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "61955",
      "avgRatingString": "4.3",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/chinese-wok-metro-station-moti-jheel-rest686198",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "334231",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/24ccd347-8b26-40c9-bccb-f88229f678bb_334231.jpg",
      "locality": "Kidwai Nagar",
      "areaName": "Swaroop Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "4.7K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "528"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/pizza-hut-kidwai-nagar-swaroop-nagar-rest334231",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "573915",
      "name": "Rollsking",
      "cloudinaryImageId": "f8f3wctsekyzkthjroj4",
      "locality": "Arya Nagar",
      "areaName": "Swaroop Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food",
        "Rolls & Wraps",
        "North Indian",
        "Snacks"
      ],
      "avgRating": 4.4,
      "parentId": "4697",
      "avgRatingString": "4.4",
      "totalRatingsString": "777",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-27 23:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Rolls.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/rollsking-arya-nagar-swaroop-nagar-rest573915",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "240108",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_240108.JPG",
      "locality": "Rave Moti",
      "areaName": "Rawat Pur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "29K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.8",
          "ratingCount": "1.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/burger-king-rave-moti-rawat-pur-rest240108",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "77700",
      "name": "R.S Bhojnalaya",
      "cloudinaryImageId": "wniumg41joijmp5bscis",
      "locality": "Avon Market Road",
      "areaName": "Kakadeo",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Thalis",
        "North Indian",
        "Punjabi",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "163921",
      "avgRatingString": "4.2",
      "totalRatingsString": "48K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-27 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/r-s-bhojnalaya-avon-market-road-kakadeo-rest77700",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "732264",
      "name": "Khadak Singh Da Dhaba",
      "cloudinaryImageId": "8144bf37947c161953f656308d1bfc30",
      "locality": "Rajeet nagar",
      "areaName": "Lajpat Nagar 61",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Tandoor",
        "Indian",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "13170",
      "avgRatingString": "4.3",
      "totalRatingsString": "2.6K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/khadak-singh-da-dhaba-rajeet-nagar-lajpat-nagar-61-rest732264",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "538760",
      "name": "Side Walk Bakehouse & Cafe",
      "cloudinaryImageId": "1005de73d618b55d60dc9ea0809b4171",
      "locality": "Arya Nagar",
      "areaName": "Swaroop Nagar",
      "costForTwo": "₹550 for two",
      "cuisines": [
        "Beverages",
        "Continental",
        "Pizzas",
        "Burgers",
        "Cafe",
        "Desserts",
        "Bakery",
        "Italian"
      ],
      "avgRating": 4.3,
      "parentId": "473251",
      "avgRatingString": "4.3",
      "totalRatingsString": "802",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
            "description": "bolt!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/side-walk-bakehouse-and-cafe-arya-nagar-swaroop-nagar-rest538760",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "686199",
      "name": "Big Bowl",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686199.JPG",
      "locality": "Metro Station",
      "areaName": "Moti Jheel",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "434792",
      "avgRatingString": "4.3",
      "totalRatingsString": "386",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-28 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2f2eb9fd-4998-48c2-87ee-d427669e339a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kanpur/big-bowl-metro-station-moti-jheel-rest686199",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      This is Footer
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
