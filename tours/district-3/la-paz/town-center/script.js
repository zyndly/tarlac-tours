TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_11E33D7C_1CEB_00B5_41B3_7FDBFB406A66",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46, this.camera_39E33921_1E02_A645_41B4_165821668E3A); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 112.68,
        "hfov": 6.99,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.5
       }
      ],
      "items": [
       {
        "yaw": 112.68,
        "hfov": 6.99,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.5
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_11FF2947_1CEB_00D2_4198_EEC9357141B5",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -108.56,
        "hfov": 6.99,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.17
       }
      ],
      "items": [
       {
        "yaw": -108.56,
        "hfov": 6.99,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_11B543D3_1CED_07F2_4190_283B3C7FAAA2",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7, this.camera_39E6F912_1E02_A647_41B5_9958BF923E2C); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 12,
           "width": 12,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -178.1,
        "hfov": 7.02,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.58
       }
      ],
      "items": [
       {
        "yaw": -178.1,
        "hfov": 7.02,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -3.58
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_t.jpg"
   }
  ],
  "hfov": 360,
  "partial": false,
  "hfovMax": 150,
  "id": "panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40",
  "thumbnailUrl": "media/panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_t.jpg",
  "pitch": 0,
  "label": "La Paz Town Hall ",
  "class": "Panorama",
  "hfovMin": 150,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 639,
          "width": 1280,
          "url": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_137678A1_1CFB_004E_41B6_18CA877B072F",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030, this.camera_39F7A93F_1E02_A6BD_41BA_599976E6397F); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 12,
              "width": 12,
              "url": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -112.76,
           "hfov": 6.99,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.85
          }
         ],
         "items": [
          {
           "yaw": -112.76,
           "hfov": 6.99,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 25,
              "width": 25,
              "url": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -5.85
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_136C16C9_1CFB_01DE_41B6_8AB6B474D728",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40, this.camera_39CE694D_1E02_A6DD_419E_0C34DFCAD08B); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 12,
              "width": 12,
              "url": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 124.32,
           "hfov": 6.97,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -7.47
          }
         ],
         "items": [
          {
           "yaw": 124.32,
           "hfov": 6.97,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 25,
              "width": 25,
              "url": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -7.47
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_t.jpg"
      }
     ],
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7",
     "thumbnailUrl": "media/panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_t.jpg",
     "pitch": 0,
     "label": " Park",
     "class": "Panorama",
     "hfovMin": 150,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 639,
             "width": 1280,
             "url": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_1258F5BF_1CE5_03B2_41B9_C858DEE0B268",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7, this.camera_39EF98F2_1E02_A7C7_41BB_4AAA04C9690D); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 12,
                 "width": 12,
                 "url": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -170.66,
              "hfov": 7.03,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.29
             }
            ],
            "items": [
             {
              "yaw": -170.66,
              "hfov": 7.03,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 25,
                 "url": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -2.29
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_13A108CD_1CE7_01D6_41B9_EDDE9543B252",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46, this.camera_39EBA902_1E02_A647_41A0_3A50A77246AF); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 12,
                 "width": 12,
                 "url": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -121.82,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.9
             }
            ],
            "items": [
             {
              "yaw": -121.82,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 25,
                 "url": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -3.9
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_t.jpg"
         }
        ],
        "hfov": 360,
        "partial": false,
        "hfovMax": 150,
        "id": "panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030",
        "thumbnailUrl": "media/panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_t.jpg",
        "pitch": 0,
        "label": "Children's Park",
        "class": "Panorama",
        "hfovMin": 150,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7",
          "backwardYaw": -112.76,
          "yaw": -170.66,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 639,
                "width": 1280,
                "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_12E53588_1CEF_005E_41AD_55A253E3209E",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146, this.camera_39D6C97B_1E02_A6C5_415C_D32F420AFF9E); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 12,
                    "width": 12,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -117.62,
                 "hfov": 6.89,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.68
                }
               ],
               "items": [
                {
                 "yaw": -117.62,
                 "hfov": 6.89,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -11.68
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_1267A417_1CEF_0072_4193_5B0A4934BCBF",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030, this.camera_39C9C95D_1E02_A6FD_41B6_B06AFAF2F2C9); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 12,
                    "width": 12,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 0.77,
                 "hfov": 6.91,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -10.71
                }
               ],
               "items": [
                {
                 "yaw": 0.77,
                 "hfov": 6.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -10.71
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_12921282_1CEF_0052_41B7_87454E93C878",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40, this.camera_39C1096C_1E02_A6C3_41A7_C28596DFDC3E); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 12,
                    "width": 12,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 115.27,
                 "hfov": 6.98,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.14
                }
               ],
               "items": [
                {
                 "yaw": 115.27,
                 "hfov": 6.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 25,
                    "width": 25,
                    "url": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.14
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_t.jpg"
            }
           ],
           "hfov": 360,
           "partial": false,
           "hfovMax": 150,
           "id": "panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
           "thumbnailUrl": "media/panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_t.jpg",
           "pitch": 0,
           "label": "Left side",
           "class": "Panorama",
           "hfovMin": 150,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030",
             "backwardYaw": -121.82,
             "yaw": 0.77,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40",
             "backwardYaw": 112.68,
             "yaw": 115.27,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 639,
                   "width": 1280,
                   "url": "media/panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_125AF59C_1CEB_0076_41AE_4A73702BDAF0",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46, this.camera_39FC8930_1E02_A643_41A5_1F6A4A5810D6); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 12,
                       "width": 12,
                       "url": "media/panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 174.78,
                    "hfov": 6.86,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -12.65
                   }
                  ],
                  "items": [
                   {
                    "yaw": 174.78,
                    "hfov": 6.86,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 25,
                       "width": 25,
                       "url": "media/panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -12.65
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_t.jpg"
               }
              ],
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_16D308B2_1CE5_01B2_41B5_7521782E7146",
              "thumbnailUrl": "media/panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_t.jpg",
              "pitch": 0,
              "label": " La Paz Buen Viaje",
              "class": "Panorama",
              "hfovMin": 150,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
                "backwardYaw": -117.62,
                "yaw": 174.78,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": 174.78,
             "yaw": -117.62,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ]
          },
          "backwardYaw": 0.77,
          "yaw": -121.82,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": -170.66,
       "yaw": -112.76,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40",
       "backwardYaw": -178.1,
       "yaw": 124.32,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 124.32,
    "yaw": -178.1,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
    "backwardYaw": 115.27,
    "yaw": 112.68,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF64014_1CE7_0076_41AE_D4604245BC66_rollover.png",
   "id": "IconButton_0DF64014_1CE7_0076_41AE_D4604245BC66",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF64014_1CE7_0076_41AE_D4604245BC66.png",
   "pressedIconURL": "skin/IconButton_0DF64014_1CE7_0076_41AE_D4604245BC66_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_0DF6C014_1CE7_0076_41BA_3F1017FB1349",
  "buttonRestart": "this.IconButton_0C099014_1CE7_0076_4196_83094E3C54CD",
  "buttonPause": {
   "paddingRight": 0,
   "mode": "toggle",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "id": "IconButton_0DF63014_1CE7_0076_41B6_B1878EC6AC68",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF63014_1CE7_0076_41B6_B1878EC6AC68.png",
   "pressedIconURL": "skin/IconButton_0DF63014_1CE7_0076_41B6_B1878EC6AC68_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF67014_1CE7_0076_41BC_4A651AABCCA8_rollover.png",
   "id": "IconButton_0DF67014_1CE7_0076_41BC_4A651AABCCA8",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF67014_1CE7_0076_41BC_4A651AABCCA8.png",
   "pressedIconURL": "skin/IconButton_0DF67014_1CE7_0076_41BC_4A651AABCCA8_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF60014_1CE7_0076_41A7_99A5D2ED68FA_rollover.png",
   "id": "IconButton_0DF60014_1CE7_0076_41A7_99A5D2ED68FA",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF60014_1CE7_0076_41A7_99A5D2ED68FA.png",
   "pressedIconURL": "skin/IconButton_0DF60014_1CE7_0076_41A7_99A5D2ED68FA_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_0C098014_1CE7_0076_41B8_A1A7055A33F6",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF61014_1CE7_0076_41BC_AFB50FA9287E_rollover.png",
   "id": "IconButton_0DF61014_1CE7_0076_41BC_AFB50FA9287E",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF61014_1CE7_0076_41BC_AFB50FA9287E.png",
   "pressedIconURL": "skin/IconButton_0DF61014_1CE7_0076_41BC_AFB50FA9287E_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF62014_1CE7_0076_41B1_6172A05AF1EA_rollover.png",
   "id": "IconButton_0DF62014_1CE7_0076_41B1_6172A05AF1EA",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF62014_1CE7_0076_41B1_6172A05AF1EA.png",
   "pressedIconURL": "skin/IconButton_0DF62014_1CE7_0076_41B1_6172A05AF1EA_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 25,
   "paddingLeft": 0,
   "height": 40,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "minWidth": 0,
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_0DF6E014_1CE7_0076_4191_EBB824DDDF30_rollover.png",
   "id": "IconButton_0DF6E014_1CE7_0076_4191_EBB824DDDF30",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_0DF6E014_1CE7_0076_4191_EBB824DDDF30.png",
   "pressedIconURL": "skin/IconButton_0DF6E014_1CE7_0076_4191_EBB824DDDF30_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "hfovMax": 150,
  "partial": false,
  "id": "panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798",
  "thumbnailUrl": "media/panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_t.jpg",
  "pitch": 0,
  "label": "Right side",
  "class": "Panorama",
  "hfovMin": 150,
  "vfov": 180,
  "hfov": 360
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16B54C5D_1CE5_00F6_41A5_9D0E84D88B40_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_167AF0FE_1CE7_01B2_41B3_C5DA1C226798_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D7C6E3_1CE7_01D2_4184_7CD23AF46F46_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16C918C1_1CE7_01CE_41B9_FDA672B479B7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D498BF_1CE5_01B2_41AB_67F01FDD8030_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_16D308B2_1CE5_01B2_41B5_7521782E7146_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 0)"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39EF98F2_1E02_A7C7_41BB_4AAA04C9690D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 67.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39EBA902_1E02_A647_41A0_3A50A77246AF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -179.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39E6F912_1E02_A647_41B5_9958BF923E2C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -55.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39E33921_1E02_A645_41B4_165821668E3A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -64.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39FC8930_1E02_A643_41A5_1F6A4A5810D6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 62.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39F7A93F_1E02_A6BD_41BA_599976E6397F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 9.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39CE694D_1E02_A6DD_419E_0C34DFCAD08B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 1.9,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39C9C95D_1E02_A6FD_41B6_B06AFAF2F2C9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 58.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39C1096C_1E02_A6C3_41A7_C28596DFDC3E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -67.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_39D6C97B_1E02_A6C5_415C_D32F420AFF9E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -5.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_02937F33_1DEC_C20B_4186_E5F6FCC4B6FA",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_02937F33_1DEC_C20B_4186_E5F6FCC4B6FA.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_02937F33_1DEC_C20B_4186_E5F6FCC4B6FA.mp3"
  }
 }
], "children": [
 {
  "playbackBarBorderRadius": 4,
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingLeft": 0,
  "playbackBarHeadShadow": true,
  "progressBorderSize": 2,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
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
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 10,
  "progressLeft": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBorderRadius": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "transitionMode": "blending",
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "top": 0,
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "minWidth": 100,
  "minHeight": 50,
  "progressHeight": 20,
  "bottom": 0,
  "id": "MainViewer",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowHorizontalLength": 0,
  "left": 0,
  "toolTipFontStyle": "normal",
  "toolTipFontColor": "#606060",
  "right": 0
 },
 {
  "itemLabelFontWeight": "normal",
  "paddingRight": 20,
  "paddingTop": 10,
  "maxWidth": 800,
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 20,
  "scrollBarMargin": 2,
  "width": 153,
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorRatios": [],
  "borderSize": 0,
  "itemPaddingRight": 3,
  "backgroundOpacity": 0.2,
  "class": "ThumbnailList",
  "itemThumbnailWidth": 100,
  "horizontalAlign": "left",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadowHorizontalLength": 3,
  "shadow": false,
  "itemBackgroundOpacity": 0,
  "top": 104,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 80,
  "paddingBottom": 10,
  "maxHeight": 800,
  "minWidth": 0,
  "minHeight": 0,
  "itemBackgroundColor": [],
  "itemThumbnailShadowOpacity": 0.8,
  "itemMode": "normal",
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "itemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontWeight": "bold",
  "itemOpacity": 1,
  "scrollBarWidth": 10,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingLeft": 3,
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "itemThumbnailHeight": 75,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowBlurRadius": 4,
  "itemPaddingTop": 3,
  "itemVerticalAlign": "middle",
  "itemLabelFontSize": 14,
  "left": 0,
  "itemThumbnailShadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontStyle": "normal",
  "verticalAlign": "top"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 40,
  "width": 381,
  "paddingLeft": 0,
  "height": 49,
  "textDecoration": "none",
  "fontFamily": "Times New Roman",
  "textShadowColor": "#000000",
  "text": "La Paz Town Center",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "textShadowVerticalLength": 1,
  "top": 19,
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 30,
  "minHeight": 16,
  "textShadowHorizontalLength": 3,
  "fontColor": "#00FF00",
  "id": "label4056",
  "fontStyle": "normal",
  "paddingTop": 0,
  "horizontalAlign": "center",
  "left": 90,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "5.83%",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "10%",
  "top": "0.27%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "maxHeight": 150,
  "minWidth": 1,
  "minHeight": 1,
  "id": "Image_0C58211C_1CE5_0076_41A7_4B071F676EE8",
  "paddingTop": 0,
  "left": "0.15%",
  "url": "skin/Image_0C58211C_1CE5_0076_41A7_4B071F676EE8.png",
  "maxWidth": 150,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "6.278%",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "scaleMode": "fit_inside",
  "height": "10%",
  "top": "0.4%",
  "paddingBottom": 0,
  "maxHeight": 500,
  "minWidth": 1,
  "minHeight": 1,
  "borderRadius": 0,
  "id": "Image_0CBB3F86_1CE5_0052_41A7_586DD8B6723A",
  "url": "skin/Image_0CBB3F86_1CE5_0052_41A7_586DD8B6723A.png",
  "paddingTop": 0,
  "maxWidth": 500,
  "verticalAlign": "middle",
  "right": "0.3%"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 156,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "height": 139,
  "gap": 4,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Container",
  "shadow": false,
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 20,
  "minHeight": 20,
  "layout": "horizontal",
  "bottom": "0%",
  "id": "Container_0DF6D014_1CE7_0076_41B7_0E6D45F80EA1",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "left": "43.35%",
  "children": [
   "this.IconButton_0DF67014_1CE7_0076_41BC_4A651AABCCA8",
   "this.IconButton_0DF64014_1CE7_0076_41AE_D4604245BC66",
   {
    "paddingRight": 0,
    "overflow": "hidden",
    "width": 40,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "gap": 4,
    "backgroundOpacity": 0,
    "borderSize": 0,
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "height": "100%",
    "borderRadius": 0,
    "paddingBottom": 0,
    "minWidth": 20,
    "minHeight": 20,
    "layout": "vertical",
    "id": "Container_0DF65014_1CE7_0076_41AD_FA5B4745D1B9",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "children": [
     "this.IconButton_0DF62014_1CE7_0076_41B1_6172A05AF1EA",
     "this.IconButton_0DF63014_1CE7_0076_41B6_B1878EC6AC68",
     "this.IconButton_0DF60014_1CE7_0076_41A7_99A5D2ED68FA"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_0DF61014_1CE7_0076_41BC_AFB50FA9287E",
   "this.IconButton_0DF6E014_1CE7_0076_4191_EBB824DDDF30"
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 25,
  "paddingLeft": 0,
  "height": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 0,
  "minHeight": 0,
  "bottom": "0.27%",
  "rollOverIconURL": "skin/IconButton_0C099014_1CE7_0076_4196_83094E3C54CD_rollover.png",
  "id": "IconButton_0C099014_1CE7_0076_4196_83094E3C54CD",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_0C099014_1CE7_0076_4196_83094E3C54CD.png",
  "pressedIconURL": "skin/IconButton_0C099014_1CE7_0076_4196_83094E3C54CD_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.64%"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 25,
  "paddingLeft": 0,
  "height": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 0,
  "minHeight": 0,
  "bottom": "8.8%",
  "rollOverIconURL": "skin/IconButton_0DF6C014_1CE7_0076_41BA_3F1017FB1349_rollover.png",
  "id": "IconButton_0DF6C014_1CE7_0076_41BA_3F1017FB1349",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_0DF6C014_1CE7_0076_41BA_3F1017FB1349.png",
  "pressedIconURL": "skin/IconButton_0DF6C014_1CE7_0076_41BA_3F1017FB1349_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.72%"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 25,
  "paddingLeft": 0,
  "height": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 0,
  "minHeight": 0,
  "bottom": "4.4%",
  "rollOverIconURL": "skin/IconButton_0C098014_1CE7_0076_41B8_A1A7055A33F6_rollover.png",
  "id": "IconButton_0C098014_1CE7_0076_41B8_A1A7055A33F6",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_0C098014_1CE7_0076_41B8_A1A7055A33F6.png",
  "pressedIconURL": "skin/IconButton_0C098014_1CE7_0076_41B8_A1A7055A33F6_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.72%"
 },
 {
  "paddingRight": 0,
  "mode": "toggle",
  "width": 25,
  "paddingLeft": 0,
  "height": 40,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "paddingBottom": 0,
  "minWidth": 0,
  "minHeight": 0,
  "bottom": "14.8%",
  "id": "IconButton_0DF6F014_1CE7_0076_41BB_A1868B502F06",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_0DF6F014_1CE7_0076_41BB_A1868B502F06.png",
  "pressedIconURL": "skin/IconButton_0DF6F014_1CE7_0076_41BB_A1868B502F06_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.79%"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_0DF6F014_1CE7_0076_41BB_A1868B502F06",
 "gap": 10,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); }
 },
 "width": "100%",
 "borderSize": 0,
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minWidth": 20,
 "minHeight": 20,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "start": "this.playAudioList([this.audio_02937F33_1DEC_C20B_4186_E5F6FCC4B6FA]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})