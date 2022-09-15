TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 150,
  "id": "panorama_31B31149_3A70_BBED_41BE_AA99049543EF",
  "thumbnailUrl": "media/panorama_31B31149_3A70_BBED_41BE_AA99049543EF_t.jpg",
  "pitch": 0,
  "label": "People's Park 1",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_31B31149_3A70_BBED_41BE_AA99049543EF_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_31C8130A_3A70_DF6F_41CD_1FECB759038F",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED, this.camera_4C0E674A_4157_7BF3_41B7_B8E77F35CF04); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "width": 12,
           "url": "media/panorama_31B31149_3A70_BBED_41BE_AA99049543EF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 65.95,
        "hfov": 7,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.63
       }
      ],
      "items": [
       {
        "yaw": 65.95,
        "hfov": 7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_31B31149_3A70_BBED_41BE_AA99049543EF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.63
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_31B31149_3A70_BBED_41BE_AA99049543EF_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 120,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
     "thumbnailUrl": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_t.jpg",
     "pitch": 0,
     "label": "Center of People's Park & Children's Park  2",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 639,
          "width": 1280,
          "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_3678D3BD_3A71_7EA5_41C9_818B4871ED70",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF, this.camera_4C29172D_4157_7BB1_41B0_A34AB95967A4); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 12,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 116.02,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.51
          }
         ],
         "items": [
          {
           "yaw": 116.02,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -4.51
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_36E823C0_3A71_5EDB_417F_2DF22D71AEC8",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14, this.camera_4C37F70E_4157_7B72_41C7_903CCA28E56A); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 15,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -2.25,
           "hfov": 8.4,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.35
          }
         ],
         "items": [
          {
           "yaw": -2.25,
           "hfov": 8.4,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "width": 30,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -5.35
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_292C5FCC_3A97_46EB_4187_C9420C067555",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F, this.camera_4C38271C_4157_7B90_41C2_F05B8E1931EA); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 12,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -91.55,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -3.94
          }
         ],
         "items": [
          {
           "yaw": -91.55,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -3.94
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_t.jpg"
      }
     ],
     "class": "Panorama",
     "hfovMin": 120,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 150,
        "id": "panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14",
        "thumbnailUrl": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_t.jpg",
        "pitch": 0,
        "label": "Children's Park 3",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 639,
             "width": 1280,
             "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_37531297_3A77_7965_41A7_7799B560E3C5",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED, this.camera_4C62E6BE_4157_7A92_4180_ADB8F084015B); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 172.41,
              "hfov": 8.99,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.96
             }
            ],
            "items": [
             {
              "yaw": 172.41,
              "hfov": 8.99,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 32,
                 "width": 32,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.96
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_373CB39A_3A77_BF6F_41CB_906A3500C6C5",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497, this.camera_4C5796D5_4157_7A96_41C8_9FA19D548783); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 3.23,
              "hfov": 7.02,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.1
             }
            ],
            "items": [
             {
              "yaw": 3.23,
              "hfov": 7.02,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.1
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_360F9A92_3A73_497F_41B0_B51C2D7B7F26",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -101.11,
              "hfov": 6.97,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -7.61
             }
            ],
            "items": [
             {
              "yaw": -101.11,
              "hfov": 6.97,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -7.61
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_37B4F595_3A73_DB65_4192_4C6C988688F6",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 123.05,
              "hfov": 6.95,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -8.73
             }
            ],
            "items": [
             {
              "yaw": 123.05,
              "hfov": 6.95,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -8.73
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_t.jpg"
         }
        ],
        "class": "Panorama",
        "hfovMin": 120,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
          "backwardYaw": -2.25,
          "yaw": 172.41,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfov": 360,
           "partial": false,
           "hfovMax": 150,
           "id": "panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
           "thumbnailUrl": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_t.jpg",
           "pitch": 0,
           "label": "Children's Park - center 4",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 639,
                "width": 1280,
                "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_375BF2B6_3A70_DEA7_41C9_49F1F0389A04",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14, this.camera_4CD59777_4157_7B91_41C4_5D5DC9645033); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -97.17,
                 "hfov": 6.97,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.32
                }
               ],
               "items": [
                {
                 "yaw": -97.17,
                 "hfov": 6.97,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.32
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_343B3A27_3A71_49A5_41B6_0A6E543057A1",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04, this.camera_4CC63786_4157_7B70_41CD_8C8BBE0B8C8A); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 31.36,
                 "hfov": 6.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -9.01
                }
               ],
               "items": [
                {
                 "yaw": 31.36,
                 "hfov": 6.94,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -9.01
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_342119A9_3A70_CAAD_41B6_B29007F31E0A",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB, this.camera_4CE26768_4157_7BBF_41C4_B8A735BF467C); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 139.64,
                 "hfov": 6.97,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.32
                }
               ],
               "items": [
                {
                 "yaw": 139.64,
                 "hfov": 6.97,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.32
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_344467F8_3A73_46AB_41CC_822D50BF2641",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655, this.camera_4A1337C0_4157_7AEF_4186_ED3F48B761F4); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 87.05,
                 "hfov": 7.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.94
                }
               ],
               "items": [
                {
                 "yaw": 87.05,
                 "hfov": 7.01,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.94
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_t.jpg"
            }
           ],
           "class": "Panorama",
           "hfovMin": 120,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB",
              "thumbnailUrl": "media/panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_t.jpg",
              "pitch": 0,
              "label": "Children's Park - back, right 8",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 639,
                   "width": 1280,
                   "url": "media/panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_35711BA7_3A70_CEA5_41A0_35362DBFA515",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497, this.camera_4C1C573C_4157_7B97_41CB_7669F4BB4095); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 3.52,
                    "hfov": 6.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.49
                   }
                  ],
                  "items": [
                   {
                    "yaw": 3.52,
                    "hfov": 6.78,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -15.49
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
                "backwardYaw": 139.64,
                "yaw": 3.52,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": 3.52,
             "yaw": 139.64,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14",
             "backwardYaw": 3.23,
             "yaw": -97.17,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_37D39205_3A73_D965_41C4_254C1AFD6E04",
              "thumbnailUrl": "media/panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_t.jpg",
              "pitch": 0,
              "label": "Children's Park - back, left 7",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 639,
                   "width": 1280,
                   "url": "media/panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_345B4F34_3A71_C7BB_41BB_E8BB318B21DE",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497, this.camera_4C5D36EE_4157_7AB2_41A5_97658DE3D101); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 6.33,
                    "hfov": 6.72,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.18
                   }
                  ],
                  "items": [
                   {
                    "yaw": 6.33,
                    "hfov": 6.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -17.18
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
                "backwardYaw": 31.36,
                "yaw": 6.33,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": 6.33,
             "yaw": 31.36,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655",
              "thumbnailUrl": "media/panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_t.jpg",
              "pitch": 0,
              "label": "Children's Park - back, center 9",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 639,
                   "width": 1280,
                   "url": "media/panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_35749C24_3A77_495B_41C2_AD3F31BA0A80",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497, this.camera_4CF19759_4157_7B91_41BF_FF700E408E06); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -126.7,
                    "hfov": 6.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -19.72
                   }
                  ],
                  "items": [
                   {
                    "yaw": -126.7,
                    "hfov": 6.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -19.72
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
                "backwardYaw": 87.05,
                "yaw": -126.7,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": -126.7,
             "yaw": 87.05,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ]
          },
          "backwardYaw": -97.17,
          "yaw": 3.23,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": 172.41,
       "yaw": -2.25,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F",
        "thumbnailUrl": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_t.jpg",
        "pitch": 0,
        "label": "Gymnasium - front",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 639,
             "width": 1280,
             "url": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_295D3C92_3A91_497C_41C6_7A95003D4852",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED, this.camera_4C42F6FC_4157_7A96_41CE_23DF29437F8F); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -82.83,
              "hfov": 7,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -5.63
             }
            ],
            "items": [
             {
              "yaw": -82.83,
              "hfov": 7,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -5.63
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_2E886BC3_3A91_CEDD_41AB_0EFA8BEBB31D",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 10)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 84.52,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.79
             }
            ],
            "items": [
             {
              "yaw": 84.52,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -4.79
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_t.jpg"
         }
        ],
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
          "backwardYaw": -91.55,
          "yaw": -82.83,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": -82.83,
       "yaw": -91.55,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF",
       "backwardYaw": 65.95,
       "yaw": 116.02,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 116.02,
    "yaw": 65.95,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEC3E1E_3A71_4967_416F_2676A0AE7456_rollover.png",
   "id": "IconButton_2AEC3E1E_3A71_4967_416F_2676A0AE7456",
   "iconURL": "skin/IconButton_2AEC3E1E_3A71_4967_416F_2676A0AE7456.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEC3E1E_3A71_4967_416F_2676A0AE7456_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_2AED8E1E_3A71_4967_41CB_18360905D1E0",
  "buttonRestart": "this.IconButton_2AEC5E1E_3A71_4967_41CC_A6F9C9DB03F8",
  "buttonPause": {
   "paddingRight": 0,
   "mode": "toggle",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "id": "IconButton_2AEC0E1E_3A71_4967_41C7_243A532D3542",
   "iconURL": "skin/IconButton_2AEC0E1E_3A71_4967_41C7_243A532D3542.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEC0E1E_3A71_4967_41C7_243A532D3542_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEC4E1E_3A71_4967_4199_639FA915F154_rollover.png",
   "id": "IconButton_2AEC4E1E_3A71_4967_4199_639FA915F154",
   "iconURL": "skin/IconButton_2AEC4E1E_3A71_4967_4199_639FA915F154.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEC4E1E_3A71_4967_4199_639FA915F154_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEDFE1E_3A71_4967_41CC_8C41E04D1BF6_rollover.png",
   "id": "IconButton_2AEDFE1E_3A71_4967_41CC_8C41E04D1BF6",
   "iconURL": "skin/IconButton_2AEDFE1E_3A71_4967_41CC_8C41E04D1BF6.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEDFE1E_3A71_4967_41CC_8C41E04D1BF6_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_2AEC6E1D_3A71_4965_41CD_2D3A69D186E2",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEDEE1E_3A71_4967_41A2_CD2A38B248F4_rollover.png",
   "id": "IconButton_2AEDEE1E_3A71_4967_41A2_CD2A38B248F4",
   "iconURL": "skin/IconButton_2AEDEE1E_3A71_4967_41A2_CD2A38B248F4.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEDEE1E_3A71_4967_41A2_CD2A38B248F4_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEC1E1E_3A71_4967_41BD_CA4E361982F2_rollover.png",
   "id": "IconButton_2AEC1E1E_3A71_4967_41BD_CA4E361982F2",
   "iconURL": "skin/IconButton_2AEC1E1E_3A71_4967_41BD_CA4E361982F2.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEC1E1E_3A71_4967_41BD_CA4E361982F2_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 40,
   "minWidth": 0,
   "paddingLeft": 0,
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_2AEDCE1E_3A71_4967_41B7_387B48780FDF_rollover.png",
   "id": "IconButton_2AEDCE1E_3A71_4967_41B7_387B48780FDF",
   "iconURL": "skin/IconButton_2AEDCE1E_3A71_4967_41B7_387B48780FDF.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2AEDCE1E_3A71_4967_41B7_387B48780FDF_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_31B31149_3A70_BBED_41BE_AA99049543EF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
 {
  "id": "panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14",
 {
  "id": "panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
 {
  "id": "panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 150,
  "partial": false,
  "id": "panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8",
  "thumbnailUrl": "media/panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_t.jpg",
  "pitch": 0,
  "label": "Children's Park - right 5",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_37EB11C1_3A70_BADD_41B8_847BA1157D76",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "width": 12,
           "url": "media/panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -4.08,
        "hfov": 6.61,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20
       }
      ],
      "items": [
       {
        "yaw": -4.08,
        "hfov": 6.61,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -20
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 120,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 150,
  "partial": false,
  "id": "panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD",
  "thumbnailUrl": "media/panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_t.jpg",
  "pitch": 0,
  "label": "Children's Park - left 6",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_37BED406_3A7F_D967_41B3_815DCD8A0975",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "width": 12,
           "url": "media/panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -80.02,
        "hfov": 6.75,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.34
       }
      ],
      "items": [
       {
        "yaw": -80.02,
        "hfov": 6.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -16.34
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 120,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04",
 {
  "id": "panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB",
 {
  "id": "panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655",
 {
  "id": "panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F",
 {
  "id": "panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4",
  "thumbnailUrl": "media/panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_t.jpg",
  "pitch": 0,
  "label": "Gymnasium ( right side)",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 640,
       "width": 1280,
       "url": "media/panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_31B31149_3A70_BBED_41BE_AA99049543EF_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_368B746D_3A70_D9AA_41C4_666EF5890CED_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36AD78FB_3A70_CAAD_41B8_8C1499668C14_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_374CF996_3A77_CB67_41B7_FBCD837F7497_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36CED67F_3A71_D9A5_418C_3E212463E8C8_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36B5ADC3_3A71_CADD_41B2_0FBE00DAB9BD_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_37D39205_3A73_D965_41C4_254C1AFD6E04_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_37A05BC3_3A73_4EDD_41AA_3BBCAB4EAFDB_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_378EECCD_3A73_4AE5_41C5_C7EBF382B655_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_29AECE33_3A97_C9BD_41B4_268AB46D117F_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_29D75D6A_3A97_CBAF_41A0_F8974960BFE4_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 0)"
   }
  ]
 },
 {
  "id": "camera_4C62E6BE_4157_7A92_4180_ADB8F084015B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 177.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C5796D5_4157_7A96_41C8_9FA19D548783",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 82.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C5D36EE_4157_7AB2_41A5_97658DE3D101",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -148.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C42F6FC_4157_7A96_41CE_23DF29437F8F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 88.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C37F70E_4157_7B72_41C7_903CCA28E56A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -7.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C38271C_4157_7B90_41C2_F05B8E1931EA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 97.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C29172D_4157_7BB1_41B0_A34AB95967A4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -114.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C1C573C_4157_7B97_41CB_7669F4BB4095",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -40.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4C0E674A_4157_7BF3_41B7_B8E77F35CF04",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -63.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4CF19759_4157_7B91_41BF_FF700E408E06",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -92.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4CE26768_4157_7BBF_41C4_B8A735BF467C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -176.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4CD59777_4157_7B91_41C4_5D5DC9645033",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -176.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4CC63786_4157_7B70_41CD_8C8BBE0B8C8A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -173.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4A1337C0_4157_7AEF_4186_ED3F48B761F4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 53.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": 59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "audio_2CE33F6C_3C5A_3C86_41CC_608C01CA8AC2",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_2CE33F6C_3C5A_3C86_41CC_608C01CA8AC2.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_2CE33F6C_3C5A_3C86_41CC_608C01CA8AC2.mp3"
  }
 }
], "children": [
 {
  "playbackBarBorderRadius": 4,
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 2,
  "playbackBarHeadShadow": true,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "playbackBarHeadHeight": 30,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipBackgroundColor": "#FFFFFF",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 10,
  "minWidth": 100,
  "progressLeft": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "transitionMode": "blending",
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "top": 5,
  "borderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 20,
  "bottom": 7,
  "id": "MainViewer",
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
  "progressBorderRadius": 4,
  "left": 0,
  "toolTipFontStyle": "normal",
  "right": 0,
  "toolTipFontColor": "#606060"
 },
 {
  "itemPaddingTop": 3,
  "itemVerticalAlign": "middle",
  "verticalAlign": "top",
  "itemLabelFontWeight": "normal",
  "paddingRight": 20,
  "paddingTop": 10,
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "width": 319,
  "scrollBarMargin": 2,
  "minWidth": 0,
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "itemHorizontalAlign": "center",
  "selectedItemLabelFontWeight": "bold",
  "paddingLeft": 20,
  "borderSize": 0,
  "horizontalAlign": "left",
  "itemPaddingRight": 3,
  "maxWidth": 800,
  "class": "ThumbnailList",
  "itemThumbnailWidth": 100,
  "itemBackgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "shadow": false,
  "itemThumbnailShadowSpread": 1,
  "top": 77,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 93,
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemThumbnailShadowOpacity": 0.8,
  "itemMode": "normal",
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "itemPaddingBottom": 3,
  "scrollBarWidth": 10,
  "itemThumbnailHeight": 75,
  "itemPaddingLeft": 3,
  "maxHeight": 800,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontFamily": "Arial",
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundColorRatios": [],
  "itemThumbnailScaleMode": "fit_outside",
  "minHeight": 0,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowBlurRadius": 4,
  "itemThumbnailShadow": true,
  "itemLabelFontSize": 14,
  "left": 0,
  "itemLabelGap": 5,
  "scrollBarOpacity": 0.5,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.2,
  "layout": "vertical"
 },
 {
  "textShadowBlurRadius": 4,
  "paddingRight": 0,
  "fontSize": 40,
  "width": 613,
  "textShadowVerticalLength": 5,
  "minWidth": 30,
  "paddingLeft": 0,
  "height": 59,
  "textDecoration": "none",
  "fontFamily": "Lucida Sans Unicode",
  "textShadowColor": "#000000",
  "text": "Gymnasium and People’s Park",
  "borderSize": 0,
  "class": "Label",
  "textShadowHorizontalLength": -2,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "top": 17,
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "fontColor": "#00FF00",
  "id": "label4056",
  "fontStyle": "normal",
  "paddingTop": 0,
  "minHeight": 16,
  "left": 9,
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 392,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "paddingLeft": 0,
  "height": 137,
  "gap": 4,
  "borderSize": 0,
  "class": "Container",
  "layout": "horizontal",
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "bottom": "2.72%",
  "id": "Container_2AED7E1E_3A71_4967_41C0_D66C6EBD0606",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "minHeight": 20,
  "backgroundOpacity": 0,
  "right": "36.43%",
  "children": [
   "this.IconButton_2AEC4E1E_3A71_4967_4199_639FA915F154",
   "this.IconButton_2AEC3E1E_3A71_4967_416F_2676A0AE7456",
   {
    "children": [
     "this.IconButton_2AEC1E1E_3A71_4967_41BD_CA4E361982F2",
     "this.IconButton_2AEC0E1E_3A71_4967_41C7_243A532D3542",
     "this.IconButton_2AEDFE1E_3A71_4967_41CC_8C41E04D1BF6"
    ],
    "paddingRight": 0,
    "overflow": "hidden",
    "width": 40,
    "scrollBarMargin": 2,
    "minWidth": 20,
    "paddingLeft": 0,
    "gap": 4,
    "borderSize": 0,
    "class": "Container",
    "layout": "vertical",
    "horizontalAlign": "center",
    "height": "100%",
    "scrollBarWidth": 10,
    "borderRadius": 0,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Container_2AEC2E1E_3A71_4967_41B4_9BE21DF393B7",
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   "this.IconButton_2AEDEE1E_3A71_4967_41A2_CD2A38B248F4",
   "this.IconButton_2AEDCE1E_3A71_4967_41B7_387B48780FDF"
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 40,
  "minWidth": 0,
  "paddingLeft": 0,
  "height": 40,
  "borderSize": 0,
  "class": "IconButton",
  "horizontalAlign": "center",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "14.46%",
  "rollOverIconURL": "skin/IconButton_2AED8E1E_3A71_4967_41CB_18360905D1E0_rollover.png",
  "id": "IconButton_2AED8E1E_3A71_4967_41CB_18360905D1E0",
  "iconURL": "skin/IconButton_2AED8E1E_3A71_4967_41CB_18360905D1E0.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2AED8E1E_3A71_4967_41CB_18360905D1E0_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.69%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 40,
  "minWidth": 0,
  "paddingLeft": 0,
  "height": 40,
  "borderSize": 0,
  "class": "IconButton",
  "horizontalAlign": "center",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "10%",
  "rollOverIconURL": "skin/IconButton_2AEC6E1D_3A71_4965_41CD_2D3A69D186E2_rollover.png",
  "id": "IconButton_2AEC6E1D_3A71_4965_41CD_2D3A69D186E2",
  "iconURL": "skin/IconButton_2AEC6E1D_3A71_4965_41CD_2D3A69D186E2.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2AEC6E1D_3A71_4965_41CD_2D3A69D186E2_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.69%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 40,
  "minWidth": 0,
  "paddingLeft": 0,
  "height": 40,
  "borderSize": 0,
  "class": "IconButton",
  "horizontalAlign": "center",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "5.11%",
  "rollOverIconURL": "skin/IconButton_2AEC5E1E_3A71_4967_41CC_A6F9C9DB03F8_rollover.png",
  "id": "IconButton_2AEC5E1E_3A71_4967_41CC_A6F9C9DB03F8",
  "iconURL": "skin/IconButton_2AEC5E1E_3A71_4967_41CC_A6F9C9DB03F8.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2AEC5E1E_3A71_4967_41CC_A6F9C9DB03F8_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.57%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "toggle",
  "width": 40,
  "minWidth": 0,
  "paddingLeft": 0,
  "height": 40,
  "borderSize": 0,
  "class": "IconButton",
  "horizontalAlign": "center",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "26.63%",
  "id": "IconButton_2AEDBE1E_3A71_4967_41CB_2615A85450F8",
  "iconURL": "skin/IconButton_2AEDBE1E_3A71_4967_41CB_2615A85450F8.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2AEDBE1E_3A71_4967_41CB_2615A85450F8_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.69%",
  "verticalAlign": "middle"
 },
 {
  "right": "0.97%",
  "paddingRight": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "url": "skin/Image_2BDDDDA5_3A6F_4AA5_41C9_36B676062760.png",
  "width": "5.79%",
  "borderSize": 0,
  "maxWidth": 500,
  "class": "Image",
  "scaleMode": "fit_inside",
  "height": "7.609%",
  "top": "3.04%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "id": "Image_2BDDDDA5_3A6F_4AA5_41C9_36B676062760",
  "paddingTop": 0,
  "maxHeight": 500,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_2AEDBE1E_3A71_4967_41CB_2615A85450F8",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "paddingLeft": 0,
 "gap": 10,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 },
 "borderSize": 0,
 "class": "Player",
 "width": "100%",
 "horizontalAlign": "left",
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "start": "this.playAudioList([this.audio_2CE33F6C_3C5A_3C86_41CC_608C01CA8AC2]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})