

export const restaurantMenuMockData = {
    "restaurantinfo": {
        "@context": "http://schema.org",
        "@type": "Restaurant",
        "@id": "https://www.swiggy.com/restaurants/southy-cafe-district-park-janakpuri-delhi-731685",
        "name": "Southy Cafe",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/8febdcc128f3e7be17cdf6700dcfc51b",
        "servesCuisine": "South Indian",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "District Park",
            "addressLocality": "Janakpuri",
            "addressRegion": "Delhi",
            "addressCountry": "IN",
            "postalCode": ""
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4",
            "ratingCount": "100"
        },
        "priceRange": "₹400 for two",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.623438,
            "longitude": 77.092026
        },
        "potentialAction": {
            "@type": "OrderAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.swiggy.com/restaurants/southy-cafe-district-park-janakpuri-delhi-731685?utm_source=google&utm_medium=place_action",
                "inLanguage": "en-US",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform"
                ]
            },
            "deliveryMethod": [
                "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
            ],
            "priceSpecification": [
                {
                    "@type": "DeliveryChargeSpecification",
                    "appliesToDeliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
                    "priceCurrency": "INR",
                    "price": 30.0,
                    "eligibleTransactionVolume": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "INR",
                        "price": 0.0
                    }
                },
                {
                    "@type": "DeliveryChargeSpecification",
                    "appliesToDeliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
                    "priceCurrency": "INR",
                    "price": 0.0,
                    "eligibleTransactionVolume": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "INR",
                        "price": 150.0
                    }
                }
            ]
        }
    },
    "menu": {
        "misc": {
            "isClosed": false,
            "isUnserviceable": false,
            "isFavorite": false,
            "vegOnly": false,
            "nonVegOnly": false,
            "restaurantId": "",
            "isMenuDisabled": false
        },
        "filters": {
            "vegFilter": false,
            "searchText": ""
        },
        "restaurant": {},
        "collections": [],
        "allCollections": [],
        "items": {},
        "fetching": false,
        "showRestaurantCollection": false,
        "menuRestaurantCollection": {
            "restaurants": [],
            "title": ""
        },
        "timestamp": 0,
        "statusCode": 0,
        "carriedData": {
            "selectedCategory": ""
        },
        "menuCarousels": null,
        "pl": {
            "data": {
                "statusCode": 0,
                "data": {
                    "statusCode": 0,
                    "firstOffsetRequest": true,
                    "cards": [
                        {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "731685",
                                "name": "Southy Cafe",
                                "city": "Delhi",
                                "slugs": {
                                    "restaurant": "southy-janakpuri-janakpuri",
                                    "city": "delhi"
                                },
                                "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                                "cloudinaryImageId": "8febdcc128f3e7be17cdf6700dcfc51b",
                                "locality": "District Park",
                                "areaName": "Janakpuri",
                                "costForTwo": "40000",
                                "costForTwoMessage": "₹400 for two",
                                "cuisines": ["South Indian"],
                                "avgRating": 4,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "731685",
                                    "fees": [{
                                        "name": "distance",
                                        "fee": 7600
                                    }, {
                                        "name": "time"
                                    }, {
                                        "name": "special"
                                    }],
                                    "totalFee": 7600,
                                    "icon": "v1648208530/surgecreatives/info",
                                    "message": "Far (6.9 kms) | Additional delivery fee will apply"
                                },
                                "parentId": "471129",
                                "avgRatingString": "4.0",
                                "totalRatingsString": "100+ ratings",
                                "sla": {
                                    "restaurantId": "731685",
                                    "deliveryTime": 34,
                                    "minDeliveryTime": 34,
                                    "maxDeliveryTime": 34,
                                    "lastMileTravel": 6.9,
                                    "serviceability": "SERVICEABLE",
                                    "stressFactor": 1,
                                    "rainMode": "RAIN_MODE_NONE",
                                    "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                                    "zoneId": 71,
                                    "slaString": "34 MINS",
                                    "lastMileTravelString": "6.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2024-01-18 23:00:00",
                                    "visibility": true,
                                    "opened": true,
                                    "restaurantClosedMeta": {}
                                },
                                "aggregatedDiscountInfo": {
                                    "header": "50% off",
                                    "shortDescriptionList": [{
                                        "meta": "50% off | Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }, {
                                        "meta": "15% off | Use PARTY",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }],
                                    "descriptionList": [{
                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }, {
                                        "meta": "15% off | Use code PARTY",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }],
                                    "visible": true
                                },
                                "badges": {},
                                "slugString": "southy-janakpuri-janakpuri",
                                "isOpen": true,
                                "labels": [{
                                    "title": "Timings",
                                    "message": "null"
                                }, {
                                    "title": "Address",
                                    "message": "SHOP NO- 3, GROUND FLOOR, DISTRICT PARK JANAKPURI, NEW DELHI, DWARKA, South West , Delhi-110058"
                                }, {
                                    "title": "Cuisines",
                                    "message": "South Indian"
                                }],
                                "totalRatings": 100,
                                "aggregatedDiscountInfoV2": {
                                    "header": "50% off",
                                    "shortDescriptionList": [{
                                        "meta": "50% off | Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }, {
                                        "meta": "15% off | Use PARTY",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }],
                                    "descriptionList": [{
                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }, {
                                        "meta": "15% off | Use code PARTY",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }],
                                    "couponDetailsCta": "View coupon details"
                                },
                                "type": "F",
                                "nudgeBanners": [{
                                    "minValue": 630,
                                    "maxValue": 900,
                                    "priority": 2,
                                    "couponCode": "PARTY",
                                    "discountInfo": {
                                        "discountType": "Percentage",
                                        "value": 15
                                    },
                                    "lockedMessage": "Add items worth ₹<amount> to unlock flat 15% off | Code PARTY",
                                    "unlockedMessage": "PARTY Coupon Unlocked! Use it to save flat 15% off",
                                    "logoCtx": {}
                                }],
                                "headerBanner": {
                                    "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/731685"
                                },
                                "expectationNotifiers": [{
                                    "text": "Far (6.9 kms) | Additional delivery fee will apply",
                                    "icon": {
                                        "imageId": "v1648208530/surgecreatives/info"
                                    },
                                    "popup": {
                                        "cta": {}
                                    },
                                    "type": "DISTANCE_FEE_FOOD_LM",
                                    "enrichedText": "<b>Far (6.9 kms)</b> | Additional delivery fee will apply",
                                    "halfCardPopup": {
                                        "halfCardPopupHeader": {}
                                    }
                                }],
                                "ratingSlab": "RATING_SLAB_4",
                                "orderabilityCommunication": {
                                    "title": {},
                                    "subTitle": {},
                                    "message": {},
                                    "customIcon": {}
                                },
                                "hasBestsellerItems": true,
                                "cartOrderabilityNudgeBanner": {
                                    "parameters": {},
                                    "presentation": {}
                                },
                                "latLong": "28.623438,77.092026"
                            },
                            "analytics": {}
                        }, {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "layout": {
                                "rows": 1,
                                "columns": 4,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 12,
                                "lineSpacing": 10,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 10,
                                        "right": 10,
                                        "bottom": 16
                                    }
                                },
                                "scrollBar": {}
                            },
                            "id": "offerCollectionWidget_UX4",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                    "offers": [{
                                        "info": {
                                            "header": "50% OFF UPTO ₹100",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": ["2b19b06f-7106-4631-a144-0d27582fda1b"],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE TRYNEW",
                                            "description": "ABOVE ₹159",
                                            "offerType": "offers",
                                            "restId": "731685",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }, {
                                        "info": {
                                            "header": "FLAT 15% OFF",
                                            "offerTag": "FLAT DEAL",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": ["ebb80e7e-83d1-4fc7-9c02-a9333488556c"],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE PARTY",
                                            "description": "ABOVE ₹900",
                                            "offerType": "offers",
                                            "restId": "731685",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }, {
                                        "info": {
                                            "header": "FLAT ₹125 OFF",
                                            "offerTag": "FLAT DEAL",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": ["a13aa599-f46c-4b07-a02b-6633495b14de"],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE FLATDEAL",
                                            "description": "ABOVE ₹499",
                                            "offerType": "offers",
                                            "restId": "731685",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }, {
                                        "info": {
                                            "header": "FLAT ₹120 OFF",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                                            "offerIds": ["0681e750-4d60-4066-9e7d-be11d720f180"],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE AXIS120",
                                            "description": "ABOVE ₹500",
                                            "offerType": "offers",
                                            "restId": "731685",
                                            "offerLogo": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }],
                                    "habitMilestoneInfo": {
                                        "callout": {}
                                    }
                                }
                            }
                        }, {
                            "@type": "cardGroup",
                            "cards": [{
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                "isPureVeg": true,
                                "badges": {},
                                "vegOnlyDetails": {
                                    "imageId": "AutoVegOnly_qkjowj",
                                    "title": "Showing only vegetarian options.",
                                    "description": "Tap on the VEG ONLY button to turn off the setting"
                                },
                                "topRatedFilter": {},
                                "kidsCategoryFilter": {
                                    "attributes": {
                                        "displayText": "Kids Favourites",
                                        "tooltip": {
                                            "enabled": true,
                                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                                        }
                                    }
                                },
                                "vegFilter": {
                                    "attributes": {
                                        "displayText": "VEG"
                                    }
                                },
                                "nonvegFilter": {
                                    "attributes": {
                                        "displayText": "NONVEG"
                                    }
                                }
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Recommended",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372907",
                                            "name": "Podi thattai idli                        ",
                                            "category": "Idlis Vadas",
                                            "imageId": "e7716c5d53c728cdcd63738b035e3542",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "19 ratings",
                                                    "ratingCountV2": "19"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372908",
                                            "name": "Dahi vada                         ",
                                            "category": "Idlis Vadas",
                                            "imageId": "aogophcfoixkawwydlgc",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.7",
                                                    "ratingCount": "5 ratings",
                                                    "ratingCountV2": "5"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372909",
                                            "name": "Vegetable upma                          ",
                                            "category": "Idlis Vadas",
                                            "imageId": "af3dufs5nj4x67ccsmbv",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "14 ratings",
                                                    "ratingCountV2": "14"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372912",
                                            "name": "Plain dosa                                       ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "ul9qpgypfkwtwwkay46v",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 14900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "13 ratings",
                                                    "ratingCountV2": "13"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372913",
                                            "name": "Masala dosa                                        ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "9f01f5291ec097e8feda03bcd3913d86",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "123 ratings",
                                                    "ratingCountV2": "123"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372915",
                                            "name": "Mysore plain dosa                                          ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "56c6b7c25279e060e64a70a6954d70c2",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.7",
                                                    "ratingCount": "3 ratings",
                                                    "ratingCountV2": "3"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372916",
                                            "name": "Mysore masala dosa                                            ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "ywq3fcgm9y0ajjxixo9w",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "25 ratings",
                                                    "ratingCountV2": "25"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372918",
                                            "name": "Onion plain dosa                                           ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "cad66b0213b48e9d5baf829174e39010",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372919",
                                            "name": "Onion masala dosa                                              ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "cad66b0213b48e9d5baf829174e39010",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.1",
                                                    "ratingCount": "17 ratings",
                                                    "ratingCountV2": "17"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372925",
                                            "name": "Paper plain dosa                                                    ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "e94b4b2ab208863700da7376fe7ce0d6",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372926",
                                            "name": "Paper masala dosa                                                       ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "e94b4b2ab208863700da7376fe7ce0d6",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372928",
                                            "name": "Rava plain dosa                                                             ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372929",
                                            "name": "Rava masala dosa                                                              ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "41 ratings",
                                                    "ratingCountV2": "41"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372930",
                                            "name": "Rava paneer masala dosa                                                               ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 22900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.5",
                                                    "ratingCount": "4 ratings",
                                                    "ratingCountV2": "4"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372931",
                                            "name": "Rava mysore plain dosa                                                                ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "1.3",
                                                    "ratingCount": "3 ratings",
                                                    "ratingCountV2": "3"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372932",
                                            "name": "Rava mysore masala dosa                                                                 ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372934",
                                            "name": "Rava onion plain dosa                                                                   ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372935",
                                            "name": "Rava onion masala dosa                                                                    ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "15 ratings",
                                                    "ratingCountV2": "15"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372937",
                                            "name": "Onion uthapam                                                                       ",
                                            "category": "Uthapam",
                                            "imageId": "d323ae8e8e10547cef1a495ec2b89a2a",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "7 ratings",
                                                    "ratingCountV2": "7"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372938",
                                            "name": "Mix vegetable uthapam                                                                      ",
                                            "category": "Uthapam",
                                            "imageId": "phh2aykom3b5usnqbbtf",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "showImage": true,
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "16 ratings",
                                                    "ratingCountV2": "16"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }],
                                "type": "CATEGORY_TYPE_RECOMMENDED"
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Idlis Vadas",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372902",
                                            "name": "Idli sambar                   ",
                                            "category": "Idlis Vadas",
                                            "imageId": "b7f23735c827640fa4d963e5c384da4d",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 11900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "65 ratings",
                                                    "ratingCountV2": "65"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372903",
                                            "name": "Vada sambar                    ",
                                            "category": "Idlis Vadas",
                                            "imageId": "13f99ed8f14c22cf215006603857b54d",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 13900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "40 ratings",
                                                    "ratingCountV2": "40"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372906",
                                            "name": "Thattai idli                       ",
                                            "category": "Idlis Vadas",
                                            "imageId": "67db635dd64e69fa84905cc0a8d26250",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 13500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.5",
                                                    "ratingCount": "7 ratings",
                                                    "ratingCountV2": "7"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372907",
                                            "name": "Podi thattai idli                        ",
                                            "category": "Idlis Vadas",
                                            "imageId": "e7716c5d53c728cdcd63738b035e3542",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "19 ratings",
                                                    "ratingCountV2": "19"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372908",
                                            "name": "Dahi vada                         ",
                                            "category": "Idlis Vadas",
                                            "imageId": "aogophcfoixkawwydlgc",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.7",
                                                    "ratingCount": "5 ratings",
                                                    "ratingCountV2": "5"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372909",
                                            "name": "Vegetable upma                          ",
                                            "category": "Idlis Vadas",
                                            "imageId": "af3dufs5nj4x67ccsmbv",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "14 ratings",
                                                    "ratingCountV2": "14"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372910",
                                            "name": "Chow chow bhath                           ",
                                            "category": "Idlis Vadas",
                                            "imageId": "a64cb6d27eecc7dc7b8931da710d5462",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372911",
                                            "name": "Pineapple rava kesarl                             ",
                                            "category": "Idlis Vadas",
                                            "imageId": "68fe1585335e6581e11b32283a13bb4f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 14900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.4",
                                                    "ratingCount": "5 ratings",
                                                    "ratingCountV2": "5"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "130036602",
                                            "name": "Rasam With Papad",
                                            "category": "Idlis Vadas",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 5500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Akki Rice Dosas",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372912",
                                            "name": "Plain dosa                                       ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "ul9qpgypfkwtwwkay46v",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 14900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "13 ratings",
                                                    "ratingCountV2": "13"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372913",
                                            "name": "Masala dosa                                        ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "9f01f5291ec097e8feda03bcd3913d86",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 16500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "123 ratings",
                                                    "ratingCountV2": "123"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372914",
                                            "name": "Paneer masala dosa                                         ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "9f01f5291ec097e8feda03bcd3913d86",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.3",
                                                    "ratingCount": "7 ratings",
                                                    "ratingCountV2": "7"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372915",
                                            "name": "Mysore plain dosa                                          ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "56c6b7c25279e060e64a70a6954d70c2",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.7",
                                                    "ratingCount": "3 ratings",
                                                    "ratingCountV2": "3"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372916",
                                            "name": "Mysore masala dosa                                            ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "ywq3fcgm9y0ajjxixo9w",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "25 ratings",
                                                    "ratingCountV2": "25"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372917",
                                            "name": "Mysore paneer dosa                                             ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "56c6b7c25279e060e64a70a6954d70c2",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372918",
                                            "name": "Onion plain dosa                                           ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "cad66b0213b48e9d5baf829174e39010",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372919",
                                            "name": "Onion masala dosa                                              ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "cad66b0213b48e9d5baf829174e39010",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.1",
                                                    "ratingCount": "17 ratings",
                                                    "ratingCountV2": "17"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372920",
                                            "name": "Onion paneer dosa                                                ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "cad66b0213b48e9d5baf829174e39010",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 22000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372921",
                                            "name": "Podi ghee roast plain dosa *                                                     ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "9f01f5291ec097e8feda03bcd3913d86",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372922",
                                            "name": "Podi ghee roast masala dosa *                                                  ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "9f01f5291ec097e8feda03bcd3913d86",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "27 ratings",
                                                    "ratingCountV2": "27"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372923",
                                            "name": "Open podi ghee roast plain dosa                                                          ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "f260778a4406bc835f37211a2f7c4ec7",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 22000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372924",
                                            "name": "Open podi ghee roast masala dosa                                                      ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "fc15f9d2a983feda481d11e2252bb35c",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 23500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372925",
                                            "name": "Paper plain dosa                                                    ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "e94b4b2ab208863700da7376fe7ce0d6",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372926",
                                            "name": "Paper masala dosa                                                       ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "e94b4b2ab208863700da7376fe7ce0d6",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372927",
                                            "name": "Special set dosa                                                            ",
                                            "category": "Akki Rice Dosas",
                                            "imageId": "eee790f1792a80694d93808db7390e41",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "5 ratings",
                                                    "ratingCountV2": "5"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "130867766",
                                            "name": "Butter Roast Plain",
                                            "category": "Akki Rice Dosas",
                                            "description": "Crispy and delicioues dosa",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19700,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "130867835",
                                            "name": "Ghee Roast Plain Dosa",
                                            "category": "Akki Rice Dosas",
                                            "description": "Crispy and delicious dosa",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "130867839",
                                            "name": "Buter Roast Masala",
                                            "category": "Akki Rice Dosas",
                                            "description": "Crispy and delicious dosa ",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "130867852",
                                            "name": "Ghee Roast Masala",
                                            "category": "Akki Rice Dosas",
                                            "description": "Crispy and deliciouse dosa",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Rava Dosas",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372928",
                                            "name": "Rava plain dosa                                                             ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 17500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372929",
                                            "name": "Rava masala dosa                                                              ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "41 ratings",
                                                    "ratingCountV2": "41"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372930",
                                            "name": "Rava paneer masala dosa                                                               ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 22900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.5",
                                                    "ratingCount": "4 ratings",
                                                    "ratingCountV2": "4"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372931",
                                            "name": "Rava mysore plain dosa                                                                ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 18900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "1.3",
                                                    "ratingCount": "3 ratings",
                                                    "ratingCountV2": "3"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372932",
                                            "name": "Rava mysore masala dosa                                                                 ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372933",
                                            "name": "Rava mysore paneer dosa                                                                  ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 23900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372934",
                                            "name": "Rava onion plain dosa                                                                   ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372935",
                                            "name": "Rava onion masala dosa                                                                    ",
                                            "category": "Rava Dosas",
                                            "imageId": "aa83c68d5a22b7590616c947f3b1f24f",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 20500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "15 ratings",
                                                    "ratingCountV2": "15"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Uthapam",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372936",
                                            "name": "Plain uthapam                                                                     ",
                                            "category": "Uthapam",
                                            "imageId": "ca45e1ff493d5f16c0c81d8c8b2271b1",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372937",
                                            "name": "Onion uthapam                                                                       ",
                                            "category": "Uthapam",
                                            "imageId": "d323ae8e8e10547cef1a495ec2b89a2a",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "7 ratings",
                                                    "ratingCountV2": "7"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372938",
                                            "name": "Mix vegetable uthapam                                                                      ",
                                            "category": "Uthapam",
                                            "imageId": "phh2aykom3b5usnqbbtf",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "16 ratings",
                                                    "ratingCountV2": "16"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372939",
                                            "name": "Coconut uthapam                                                                        ",
                                            "category": "Uthapam",
                                            "imageId": "ca45e1ff493d5f16c0c81d8c8b2271b1",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 21000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372940",
                                            "name": "Paneer uthapam                                                                         ",
                                            "category": "Uthapam",
                                            "imageId": "59b2877693c92eaf57bea41df33f7876",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 22500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "4 ratings",
                                                    "ratingCountV2": "4"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Combo",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372941",
                                            "name": "Southy rice of the day                                                                          ",
                                            "category": "Combo",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 19500,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372942",
                                            "name": "South snacks platter                                                                           ",
                                            "category": "Combo",
                                            "imageId": "b9b6304776f1eba8da1e0e50427c5857",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 29000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "2.9",
                                                    "ratingCount": "8 ratings",
                                                    "ratingCountV2": "8"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                "title": "Hot And Cold Beverages",
                                "itemCards": [{
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372943",
                                            "name": "Filter coffee                                                                                  ",
                                            "category": "Hot And Cold Beverages",
                                            "imageId": "uivnkpbutijvbtf7we8u",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 7900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {
                                                "text": "Bestseller",
                                                "textColor": "#ffffff",
                                                "topBackgroundColor": "#d53d4c",
                                                "bottomBackgroundColor": "#b02331"
                                            },
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "isBestseller": true,
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "22 ratings",
                                                    "ratingCountV2": "22"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372944",
                                            "name": "Masala chai                                                                                    ",
                                            "category": "Hot And Cold Beverages",
                                            "imageId": "0650cd4aa0636decc9eaef47abbac298",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 7900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "3 ratings",
                                                    "ratingCountV2": "3"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372945",
                                            "name": "Butter milk                                                                                     ",
                                            "category": "Hot And Cold Beverages",
                                            "imageId": "6c7b372c7949c00a7c6923a2ad8206eb",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 5900,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {
                                                    "rating": "4.7",
                                                    "ratingCount": "4 ratings",
                                                    "ratingCountV2": "4"
                                                }
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }, {
                                    "card": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                        "info": {
                                            "id": "119372946",
                                            "name": "Nannari Sharbat                   ",
                                            "category": "Hot And Cold Beverages",
                                            "imageId": "957c38147dce0eb5de62f4fcb626b3f0",
                                            "inStock": 1,
                                            "isVeg": 1,
                                            "price": 10000,
                                            "variants": {},
                                            "variantsV2": {},
                                            "itemAttribute": {
                                                "vegClassifier": "VEG"
                                            },
                                            "ribbon": {},
                                            "type": "ITEM",
                                            "itemBadge": {},
                                            "badgesV2": {},
                                            "ratings": {
                                                "aggregatedRating": {}
                                            }
                                        },
                                        "analytics": {},
                                        "hideRestaurantDetails": true
                                    }
                                }]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                                "type": "FSSAI",
                                "imageId": "fssai_final_edss9i",
                                "text": ["License No. 13323011000408"]
                            }, {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                "name": "Southy Cafe",
                                "area": "Janakpuri",
                                "completeAddress": "SHOP NO- 3, GROUND FLOOR, DISTRICT PARK JANAKPURI, NEW DELHI, DWARKA, South West , Delhi-110058"
                            }]
                        }],
                    "isQCLink": false
                },
                "showImages": true
            },
            "fetching": false,
            "error": false,
            "fresh": true
        },
        "search_pl": {},
        "search_query": "",
        "isQCLink": false
    },
    "user": {},
    "swgyOptions": {
        "newRelicCustomEventEnabled": true,
        "gtmEnabled": true,
        "sentryEnabled": true,
        "isTestAgent": false,
        "dataPlatformHost": "https://analytics.swiggy.com",
        "tnsApiHost": "fna.swiggy.com",
        "paymentSecretKey": "22ZsWnFBjrQc2vu6eqQE"
    },
    "customize": {
        "item": {},
        "selectedAddons": {},
        "selectedVariants": {},
        "fromCart": false,
        "currentStep": 1,
        "totalSteps": 2,
        "variantsV2": {
            "pricingModelHash": {},
            "variantsHash": {},
            "addonsHash": {}
        },
        "pricingModelKey": "",
        "validVariants": [],
        "validAddons": [],
        "shouldShowModal": false,
        "updatingExistingCustomization": false,
        "restaurantId": 0,
        "errorAddonGroupId": "",
        "error": {
            "show": false,
            "message": ""
        }
    },
    "payment": {
        "data": {},
        "fetchingMethods": false,
        "wallet": {},
        "payLater": {},
        "upi": {
            "showTimer": false,
            "vpaAddress": "",
            "newVpa": false,
            "maxPollTimeInMin": 3,
            "paasId": null
        },
        "splitPayChecked": false
    },
    "auth": {},
    "account": {
        "addresses": [],
        "orders": [],
        "currentFoodOrdersFetched": [],
        "totalOrders": 0,
        "offers": [],
        "favourites": {},
        "cards": [],
        "wallets": [],
        "vpas": [],
        "swiggyMoneyHistory": [],
        "fetching": false,
        "fetchingFailed": false,
        "hasMoreTxns": true,
        "super": {
            "fetching": false,
            "failed": false,
            "data": {}
        }
    },
    "search": {
        "query": "",
        "dishQuery": "",
        "result": {},
        "dishFirstResponse": null,
        "dishFirstTab": null,
        "searchInProgress": false,
        "recentSearches": {},
        "showSuggestions": true,
        "suggestions": {},
        "autoSuggestInProgress": false,
        "preSearchInProgress": false,
        "preSearchResult": {
            "statusCode": 0,
            "data": {
                "statusMessage": "done successfully",
                "firstOffsetRequest": true,
                "cards": [{
                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RecentSearches",
                    "id": "recentSearchesWidget",
                    "title": "Recent Searches",
                    "minItemsToDisplay": 3,
                    "maxItemsToDisplay": 5
                }]
            }
        },
        "preSearchDoneOnce": false
    },
    "support": {
        "issueTypes": {},
        "conversations": {},
        "issueDetails": {}
    },
    "meals": {
        "canCheckout": false,
        "id": null,
        "metaData": {},
        "maxTotal": null,
        "minTotal": null,
        "groups": [],
        "fetching": false,
        "error": false,
        "errorMessage": null,
        "cartMealGroups": {},
        "openGroupIndex": 0,
        "validation": {
            "error": false
        },
        "finalPriceCalculated": false
    },
    "webPaymentsConfig": {
        "paymentOrderReturnUrl": "https://www.swiggy.com/web-checkout/order-received",
        "walletAddMoneyReturnUrl": "https://www.swiggy.com/payments/money-received",
        "analyticsHost": "https://analytics.swiggy.com",
        "apiHost": "https://payments.swiggy.com",
        "newrelicEndpoint": "https://insights-collector.newrelic.com/v1/accounts/737486/events",
        "newrelicKey": "CPDMQSXvjxGCdL_E02P9eZ-NJcEg-uGk",
        "environment": "production",
        "paymentHost": "https://chkout.swiggy.com"
    }
};

