TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_4B574F1F_40EC_6BDF_4179_65BAACA4C8E6",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 13,
           "width": 12,
           "url": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -114.06,
        "hfov": 6.99,
        "pitch": -6.13
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544, this.camera_5346EBBF_4172_3B0A_41B2_CB3ADCA86D37); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": -114.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 25,
           "url": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.13
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_4CB70FCA_40EC_EAA1_41CD_B914117380EA",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 13,
           "width": 12,
           "url": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 33.43,
        "hfov": 6.99,
        "pitch": -6.45
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": 33.43,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 25,
           "url": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.45
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Goshen Entrance",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_4D8A650E_40E4_3FBE_41C3_3C3AB719755A",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 13,
              "width": 12,
              "url": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -37.4,
           "hfov": 6.83,
           "pitch": -13.76
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697, this.camera_4EB2729A_40E4_FAA6_41C8_1CCF88961BF1); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -37.4,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 26,
              "width": 25,
              "url": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -13.76
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_4D77D457_40FC_7DAF_41C5_945370E81012",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 18,
              "width": 12,
              "url": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 137.59,
           "hfov": 6.87,
           "pitch": -12.26
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697, this.camera_5301DC79_4172_3D16_41CF_772F7C0F6974); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "items": [
          {
           "yaw": 137.59,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 36,
              "width": 25,
              "url": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -12.26
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 639,
          "width": 1280,
          "url": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_hq.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "Left side",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_4D8D1CD2_40E4_2EA1_41AC_63549F62474B",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 13,
                 "width": 12,
                 "url": "media/panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -92.39,
              "hfov": 6.84,
              "pitch": -13.31
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544, this.camera_5378BB9C_4172_3B0E_41AE_DC840D0A4383); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": -92.39,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 25,
                 "url": "media/panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -13.31
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 639,
             "width": 1280,
             "url": "media/panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_hq.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "Center",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
          "backwardYaw": 137.59,
          "yaw": -92.39,
          "distance": 1
         }
        ]
       },
       "backwardYaw": -92.39,
       "yaw": 137.59,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A",
       "backwardYaw": -114.06,
       "yaw": 137.59,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_4EBB22C6_40FC_3AAE_41CC_9FF6EF4E38BA",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 13,
                 "width": 12,
                 "url": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -104.35,
              "hfov": 6.94,
              "pitch": -9.23
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544, this.camera_535D8C1F_4172_3D0A_41CC_E82106CCEE33); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "yaw": -104.35,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 25,
                 "url": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -9.23
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_4E2D1FEB_40FC_6A67_41B2_BE9692209310",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 13,
                 "width": 12,
                 "url": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 111.39,
              "hfov": 6.87,
              "pitch": -12.14
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2, this.camera_53549C02_4172_3CFA_41A4_C314F1CB7031); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "yaw": 111.39,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 25,
                 "url": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -12.14
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 639,
             "width": 1280,
             "url": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_hq.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "Back",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_4C01C21C_40E4_15A1_41C0_3F370EF0B8D5",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 18,
                    "width": 12,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 84.86,
                 "hfov": 6.96,
                 "pitch": -8.37
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697, this.camera_534EDBDD_4172_3B0E_41CF_8120BA418D36); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "items": [
                {
                 "yaw": 84.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 36,
                    "width": 25,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -8.37
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_4C039714_40E4_7BA2_41C1_2D1AD39D2623",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 13,
                    "width": 12,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 31.17,
                 "hfov": 7.03,
                 "pitch": -2.1
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "yaw": 31.17,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.03,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 26,
                    "width": 25,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -2.1
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_4E091F09_40E3_EBA3_41B2_8E5FD19E2B0F",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 13,
                    "width": 12,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -72.98,
                 "hfov": 6.95,
                 "pitch": -8.91
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": -72.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 26,
                    "width": 25,
                    "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -8.91
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 639,
                "width": 1280,
                "url": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_hq.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "Right Side2",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697",
             "backwardYaw": 111.39,
             "yaw": 84.86,
             "distance": 1
            }
           ]
          },
          "backwardYaw": 84.86,
          "yaw": 111.39,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
          "backwardYaw": 137.59,
          "yaw": -104.35,
          "distance": 1
         }
        ]
       },
       "backwardYaw": -104.35,
       "yaw": 137.59,
       "distance": 1
      }
     ]
    },
    "backwardYaw": 137.59,
    "yaw": -114.06,
    "distance": 1
   }
  ]
 },
 {
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3754DB_40EC_FEA6_41C9_4F2A21386619",
   "rollOverIconURL": "skin/IconButton_4F3754DB_40EC_FEA6_41C9_4F2A21386619_rollover.png",
   "iconURL": "skin/IconButton_4F3754DB_40EC_FEA6_41C9_4F2A21386619.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3754DB_40EC_FEA6_41C9_4F2A21386619_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_4F34B4DB_40EC_FEA6_41C9_7F0336648996",
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3724DB_40EC_FEA6_41B5_753F8164CE38",
   "rollOverIconURL": "skin/IconButton_4F3724DB_40EC_FEA6_41B5_753F8164CE38_rollover.png",
   "iconURL": "skin/IconButton_4F3724DB_40EC_FEA6_41B5_753F8164CE38.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3724DB_40EC_FEA6_41B5_753F8164CE38_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3494DB_40EC_FEA6_41BE_622BAFA54EA2",
   "rollOverIconURL": "skin/IconButton_4F3494DB_40EC_FEA6_41BE_622BAFA54EA2_rollover.png",
   "iconURL": "skin/IconButton_4F3494DB_40EC_FEA6_41BE_622BAFA54EA2.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3494DB_40EC_FEA6_41BE_622BAFA54EA2_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "paddingRight": 0,
   "mode": "toggle",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3744DB_40EC_FEA6_41B9_D67807D1261B",
   "iconURL": "skin/IconButton_4F3744DB_40EC_FEA6_41B9_D67807D1261B.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3744DB_40EC_FEA6_41B9_D67807D1261B_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "class": "PanoramaPlayer",
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3734DB_40EC_FEA6_41C9_2D9FEC6F7842",
   "rollOverIconURL": "skin/IconButton_4F3734DB_40EC_FEA6_41C9_2D9FEC6F7842_rollover.png",
   "iconURL": "skin/IconButton_4F3734DB_40EC_FEA6_41C9_2D9FEC6F7842.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3734DB_40EC_FEA6_41C9_2D9FEC6F7842_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_4F37E4DB_40EC_FEA5_41C0_78925973FDF9",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_4F34A4DB_40EC_FEA6_41CE_9FA99E2B3C1B",
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3484DB_40EC_FEA6_41C7_97737287C1C0",
   "rollOverIconURL": "skin/IconButton_4F3484DB_40EC_FEA6_41C7_97737287C1C0_rollover.png",
   "iconURL": "skin/IconButton_4F3484DB_40EC_FEA6_41C7_97737287C1C0.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3484DB_40EC_FEA6_41C7_97737287C1C0_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_4F3714DB_40EC_FEA6_41CA_BB3D33ECBACB",
   "rollOverIconURL": "skin/IconButton_4F3714DB_40EC_FEA6_41CA_BB3D33ECBACB_rollover.png",
   "iconURL": "skin/IconButton_4F3714DB_40EC_FEA6_41CA_BB3D33ECBACB.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_4F3714DB_40EC_FEA6_41CA_BB3D33ECBACB_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "id": "panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
 {
  "id": "panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_4C203DDA_40E4_2EA1_41B7_2024D15FB7D8",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 13,
           "width": 12,
           "url": "media/panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 175.43,
        "hfov": 7.02,
        "pitch": -3.4
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "yaw": 175.43,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 26,
           "width": 25,
           "url": "media/panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.4
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Right side 1",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "id": "panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2",
 {
  "id": "panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F",
 {
  "id": "panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697",
 {
  "id": "panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4ADC4961_40E4_1663_41A8_D70D82970E1A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AFB9D9E_40E4_2EA1_41B0_404BCF087544_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AD82530_40E4_7FE2_41B5_877C0B009F48_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AEA422A_40E4_35E1_41C5_FF2F34B84ED2_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AF6066D_40E4_3A62_41BF_1BBB7F6DF64F_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4AEF8348_40E4_7BA1_41C2_76D71BE0F697_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 0)"
   }
  ]
 },
 {
  "id": "camera_5378BB9C_4172_3B0E_41AE_DC840D0A4383",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.41,
   "pitch": 0
  }
 },
 {
  "id": "camera_5346EBBF_4172_3B0A_41B2_CB3ADCA86D37",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.41,
   "pitch": 0
  }
 },
 {
  "id": "camera_534EDBDD_4172_3B0E_41CF_8120BA418D36",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.61,
   "pitch": 0
  }
 },
 {
  "id": "camera_53549C02_4172_3CFA_41A4_C314F1CB7031",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.14,
   "pitch": 0
  }
 },
 {
  "id": "camera_535D8C1F_4172_3D0A_41CC_E82106CCEE33",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.41,
   "pitch": 0
  }
 },
 {
  "id": "camera_5328CC3D_4172_3D0E_4169_A6539854B3B6",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.61,
   "pitch": 0
  }
 },
 {
  "id": "camera_53354C60_4172_3D36_41C4_1FC67C7AEAB4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 65.94,
   "pitch": 0
  }
 },
 {
  "id": "camera_5301DC79_4172_3D16_41CF_772F7C0F6974",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.65,
   "pitch": 0
  }
 }
], "children": [
 {
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "progressBottom": 1,
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 10,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadHeight": 30,
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 2,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "paddingLeft": 0,
  "width": "100%",
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "top": 27,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": "1.47%",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "progressBorderRadius": 4,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipFontWeight": "normal"
 },
 {
  "itemThumbnailShadow": true,
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelFontWeight": "normal",
  "paddingRight": 20,
  "paddingTop": 10,
  "maxWidth": 800,
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundColor": [
   "#000000"
  ],
  "maxHeight": 800,
  "verticalAlign": "top",
  "itemLabelFontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "borderRadius": 5,
  "paddingLeft": 20,
  "horizontalAlign": "left",
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailWidth": 100,
  "itemHorizontalAlign": "center",
  "itemBackgroundColorRatios": [],
  "itemLabelHorizontalAlign": "center",
  "itemLabelGap": 5,
  "borderSize": 0,
  "itemThumbnailHeight": 75,
  "itemPaddingRight": 3,
  "scrollBarWidth": 10,
  "minHeight": 0,
  "itemBackgroundColor": [],
  "shadow": false,
  "itemThumbnailShadowHorizontalLength": 3,
  "top": 89,
  "itemBorderRadius": 0,
  "bottom": 95,
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "itemMode": "normal",
  "paddingBottom": 10,
  "minWidth": 0,
  "itemThumbnailShadowOpacity": 0.8,
  "itemPaddingLeft": 3,
  "scrollBarColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "itemThumbnailShadowBlurRadius": 4,
  "layout": "vertical",
  "class": "ThumbnailList",
  "itemThumbnailScaleMode": "fit_outside",
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0.2,
  "itemPaddingTop": 3,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontSize": 14,
  "itemBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "itemLabelFontStyle": "normal",
  "itemVerticalAlign": "middle",
  "left": 3,
  "itemThumbnailShadowColor": "#000000"
 },
 {
  "paddingRight": 0,
  "fontSize": 40,
  "borderRadius": 0,
  "height": 49,
  "width": 292,
  "fontFamily": "Times New Roman",
  "text": "Goshen Resort",
  "textDecoration": "none",
  "fontStyle": "normal",
  "paddingLeft": 0,
  "minHeight": 16,
  "shadow": false,
  "borderSize": 0,
  "horizontalAlign": "center",
  "top": 31,
  "fontWeight": "bold",
  "paddingBottom": 0,
  "minWidth": 30,
  "fontColor": "#00FF66",
  "backgroundOpacity": 0,
  "id": "label4056",
  "paddingTop": 0,
  "class": "Label",
  "left": 6,
  "verticalAlign": "middle"
 },
 {
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "height": 18,
  "borderRadius": 0,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "width": "100%",
  "gap": 6,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "shadow": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "bottom": "0%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "class": "Container",
  "backgroundColorDirection": "vertical",
  "left": "0%",
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "height": 188,
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "gap": 4,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 20,
  "shadow": false,
  "scrollBarWidth": 10,
  "bottom": "0.67%",
  "paddingBottom": 0,
  "minWidth": 20,
  "backgroundOpacity": 0,
  "id": "Container_4F37D4DC_40EC_FEA2_41CC_9A2F5213593A",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "layout": "horizontal",
  "class": "Container",
  "left": "41.85%",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "children": [
   "this.IconButton_4F3494DB_40EC_FEA6_41BE_622BAFA54EA2",
   "this.IconButton_4F3484DB_40EC_FEA6_41C7_97737287C1C0",
   {
    "paddingRight": 0,
    "overflow": "hidden",
    "width": 40,
    "height": "100%",
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 4,
    "paddingLeft": 0,
    "borderSize": 0,
    "minHeight": 20,
    "shadow": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "minWidth": 20,
    "backgroundOpacity": 0,
    "id": "Container_4F3764DB_40EC_FEA6_41B2_381DA1E8D629",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "layout": "vertical",
    "class": "Container",
    "children": [
     "this.IconButton_4F3754DB_40EC_FEA6_41C9_4F2A21386619",
     "this.IconButton_4F3744DB_40EC_FEA6_41B9_D67807D1261B",
     "this.IconButton_4F3734DB_40EC_FEA6_41C9_2D9FEC6F7842"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_4F3724DB_40EC_FEA6_41B5_753F8164CE38",
   "this.IconButton_4F3714DB_40EC_FEA6_41CA_BB3D33ECBACB"
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "height": 40,
  "width": 40,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "bottom": "9.87%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_4F37E4DB_40EC_FEA5_41C0_78925973FDF9",
  "rollOverIconURL": "skin/IconButton_4F37E4DB_40EC_FEA5_41C0_78925973FDF9_rollover.png",
  "iconURL": "skin/IconButton_4F37E4DB_40EC_FEA5_41C0_78925973FDF9.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_4F37E4DB_40EC_FEA5_41C0_78925973FDF9_pressed.png",
  "class": "IconButton",
  "right": "0.83%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "height": 40,
  "width": 40,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "bottom": "17.07%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_4F34B4DB_40EC_FEA6_41C9_7F0336648996",
  "rollOverIconURL": "skin/IconButton_4F34B4DB_40EC_FEA6_41C9_7F0336648996_rollover.png",
  "iconURL": "skin/IconButton_4F34B4DB_40EC_FEA6_41C9_7F0336648996.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_4F34B4DB_40EC_FEA6_41C9_7F0336648996_pressed.png",
  "class": "IconButton",
  "right": "0.82%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "toggle",
  "height": 40,
  "width": 40,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "bottom": "2.81%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_4F37F4DB_40EC_FEA6_41AF_09530F218EA5",
  "iconURL": "skin/IconButton_4F37F4DB_40EC_FEA6_41AF_09530F218EA5.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_4F37F4DB_40EC_FEA6_41AF_09530F218EA5_pressed.png",
  "class": "IconButton",
  "right": "0.75%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "height": 40,
  "width": 40,
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "bottom": "26.67%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_4F34A4DB_40EC_FEA6_41CE_9FA99E2B3C1B",
  "rollOverIconURL": "skin/IconButton_4F34A4DB_40EC_FEA6_41CE_9FA99E2B3C1B_rollover.png",
  "iconURL": "skin/IconButton_4F34A4DB_40EC_FEA6_41CE_9FA99E2B3C1B.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_4F34A4DB_40EC_FEA6_41CE_9FA99E2B3C1B_pressed.png",
  "class": "IconButton",
  "right": "0.82%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "maxWidth": 500,
  "maxHeight": 500,
  "borderRadius": 0,
  "height": "14.933%",
  "url": "skin/Image_53870968_416E_2736_41BA_9B35E68FE9E4.png",
  "horizontalAlign": "center",
  "width": "10.09%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "shadow": false,
  "scaleMode": "fit_inside",
  "top": "4.67%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "id": "Image_53870968_416E_2736_41BA_9B35E68FE9E4",
  "paddingTop": 0,
  "class": "Image",
  "right": "0%",
  "verticalAlign": "middle"
 }
], 
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_4F37F4DB_40EC_FEA6_41AF_09530F218EA5",
 "borderRadius": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "paddingBottom": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})