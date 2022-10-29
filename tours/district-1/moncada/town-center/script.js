TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 640,
       "width": 1280,
       "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_349DFCB5_3F53_E4B0_41B5_B57ECEA8976B",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2, this.camera_3FB9C5F1_1E02_E9C4_41A4_1A90012CE493); this.mainPlayList.set('selectedIndex', 1)",
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
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -32.55,
        "hfov": 6.75,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.33
       }
      ],
      "items": [
       {
        "yaw": -32.55,
        "hfov": 6.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -16.33
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_330374A6_3F52_3B50_41C1_D2915C380420",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135, this.camera_3FBDF5D3_1E02_E9C4_41A6_3ED9CCF571B8); this.mainPlayList.set('selectedIndex', 2)",
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
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 31.49,
        "hfov": 6.8,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.71
       }
      ],
      "items": [
       {
        "yaw": 31.49,
        "hfov": 6.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.71
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_t.jpg"
   }
  ],
  "hfov": 360,
  "partial": false,
  "hfovMax": 150,
  "id": "panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
  "thumbnailUrl": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_t.jpg",
  "pitch": 0,
  "label": "Moncada Town Hall",
  "class": "Panorama",
  "hfovMin": 120,
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
          "height": 640,
          "width": 1280,
          "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_33242C14_3F56_2B70_418F_57FA322B282C",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1, this.camera_3FFEF6DA_1E02_EBC4_4194_11901C776FBA); this.mainPlayList.set('selectedIndex', 0)",
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
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -137.12,
           "hfov": 6.7,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -17.62
          }
         ],
         "items": [
          {
           "yaw": -137.12,
           "hfov": 6.7,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -17.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_33BDA2B6_3F56_7CB0_41C8_BA5287D1DFA8",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3, this.camera_3FF586EC_1E02_EBDD_418C_6BE274063C30); this.mainPlayList.set('selectedIndex', 3)",
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
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 55.43,
           "hfov": 6.87,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -12.45
          }
         ],
         "items": [
          {
           "yaw": 55.43,
           "hfov": 6.87,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -12.45
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_t.jpg"
      }
     ],
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
     "thumbnailUrl": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_t.jpg",
     "pitch": 0,
     "label": "Right side ",
     "class": "Panorama",
     "hfovMin": 126,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
       "backwardYaw": 31.49,
       "yaw": -137.12,
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
             "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_31A2E076_3F5E_7BB3_41C0_E1F18AB2BBE7",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0, this.camera_3FDBE684_1E02_EA4C_41A7_21656B89AFC7); this.mainPlayList.set('selectedIndex', 4)",
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
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 2.38,
              "hfov": 6.98,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -6.78
             }
            ],
            "items": [
             {
              "yaw": 2.38,
              "hfov": 6.98,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.78
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_31A229FE_3F52_6CB0_41B6_E94B0996649C",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135, this.camera_3FA38667_1E02_EACC_419A_9BC7E7FE6B6C); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
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
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -159.34,
              "hfov": 6.81,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -14.55
             }
            ],
            "items": [
             {
              "yaw": -159.34,
              "hfov": 6.81,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -14.55
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_t.jpg"
         }
        ],
        "hfov": 360,
        "partial": false,
        "hfovMax": 150,
        "id": "panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
        "thumbnailUrl": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_t.jpg",
        "pitch": 0,
        "label": "Going to the Police Station",
        "class": "Panorama",
        "hfovMin": 120,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
          "backwardYaw": 55.43,
          "yaw": -159.34,
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
                "height": 640,
                "width": 1280,
                "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_310860A1_3F52_3B50_41C5_C11C5A1E4101",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3, this.camera_3FEA16FB_1E02_EBC4_41A2_6DA04CFD829C); this.mainPlayList.set('selectedIndex', 3)",
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
                    "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -146.4,
                 "hfov": 6.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -12.77
                }
               ],
               "items": [
                {
                 "yaw": -146.4,
                 "hfov": 6.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -12.77
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_t.jpg"
            }
           ],
           "hfov": 360,
           "partial": false,
           "hfovMax": 150,
           "id": "panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
           "thumbnailUrl": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_t.jpg",
           "pitch": 0,
           "label": "Moncada police station",
           "class": "Panorama",
           "hfovMin": 120,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
             "backwardYaw": 2.38,
             "yaw": -146.4,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ]
          },
          "backwardYaw": -146.4,
          "yaw": 2.38,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": -159.34,
       "yaw": 55.43,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": -137.12,
    "yaw": 31.49,
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
          "height": 640,
          "width": 1280,
          "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_332EB920_3F56_ED50_41C0_2E1BA6D05A29",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1, this.camera_3F0A6724_1E02_EA4C_41B9_0E94C6054F3A); this.mainPlayList.set('selectedIndex', 0)",
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
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -7.64,
           "hfov": 6.89,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -11.48
          }
         ],
         "items": [
          {
           "yaw": -7.64,
           "hfov": 6.89,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.48
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_C0F7A923_D084_A014_41DA_58DE5AA03286",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404, this.camera_3F3EE732_1E02_EA44_41BB_3E72300D68E8); this.mainPlayList.set('selectedIndex', 8)",
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
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 129.18,
           "hfov": 6.91,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -10.83
          }
         ],
         "items": [
          {
           "yaw": 129.18,
           "hfov": 6.91,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -10.83
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_t.jpg"
      }
     ],
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
     "thumbnailUrl": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_t.jpg",
     "pitch": 0,
     "label": "Left side ",
     "class": "Panorama",
     "hfovMin": 120,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
       "backwardYaw": -32.55,
       "yaw": -7.64,
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
             "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_2B84A337_3F6E_3DB0_41C8_797174E3E8E6",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7, this.camera_3FB4160F_1E02_EA5B_4199_F70D02080DE6); this.mainPlayList.set('selectedIndex', 6)",
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
                 "width": 12,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -34.17,
              "hfov": 6.77,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.52
             }
            ],
            "items": [
             {
              "yaw": -34.17,
              "hfov": 6.77,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 33,
                 "width": 25,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -15.52
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_28E1D5E1_3F52_24D0_41CE_68F829CA6756",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077, this.camera_3FA8E648_1E02_EAC4_418E_06BBDAC94AE2); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 19,
                 "width": 12,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 47.02,
              "hfov": 6.79,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.04
             }
            ],
            "items": [
             {
              "yaw": 47.02,
              "hfov": 6.79,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "width": 25,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -15.04
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_C1DE7070_D085_E0F4_41E6_B5B96F989010",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2, this.camera_3FAF962F_1E02_EA5C_41B0_AD377F2FCA39); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 10,
                 "width": 12,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 103.3,
              "hfov": 6.82,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -14.07
             }
            ],
            "items": [
             {
              "yaw": 103.3,
              "hfov": 6.82,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 21,
                 "width": 25,
                 "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -14.07
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_t.jpg"
         }
        ],
        "hfov": 360,
        "partial": false,
        "hfovMax": 150,
        "id": "panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
        "thumbnailUrl": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_t.jpg",
        "pitch": 0,
        "label": "Front of the Plaza",
        "class": "Panorama",
        "hfovMin": 120,
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
                "height": 640,
                "width": 1280,
                "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_29479AC3_3F6D_ECD0_41C7_6D9F5A16DBD7",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404, this.camera_3FC876BC_1E02_EBBC_41A5_2AE071639A6A); this.mainPlayList.set('selectedIndex', 8)",
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
                    "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -2.79,
                 "hfov": 6.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -13.42
                }
               ],
               "items": [
                {
                 "yaw": -2.79,
                 "hfov": 6.84,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -13.42
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_2D1B080C_3F6E_6B50_41C3_03AAF2FE3C29",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09, this.camera_3FD516A3_1E02_EA44_4177_FB051CD91EDE); this.mainPlayList.set('selectedIndex', 5)",
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
                    "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 167.99,
                 "hfov": 6.54,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -21.51
                }
               ],
               "items": [
                {
                 "yaw": 167.99,
                 "hfov": 6.54,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -21.51
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_t.jpg"
            }
           ],
           "hfov": 360,
           "partial": false,
           "hfovMax": 150,
           "id": "panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
           "thumbnailUrl": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_t.jpg",
           "pitch": 0,
           "label": "Left side",
           "class": "Panorama",
           "hfovMin": 120,
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
                   "height": 640,
                   "width": 1280,
                   "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_2B075FBC_3F72_24B0_41BF_67F372E4BCC8",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077, this.camera_3F15C716_1E02_EA4C_41B6_C1966A6824E4); this.mainPlayList.set('selectedIndex', 7)",
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
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 7.88,
                    "hfov": 6.93,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -9.54
                   }
                  ],
                  "items": [
                   {
                    "yaw": 7.88,
                    "hfov": 6.93,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -9.54
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_2EF671D3_3F72_5CF0_41C1_77E9EF3FB645",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7, this.camera_3FE12708_1E02_EA44_41BB_9FECE0C27609); this.mainPlayList.set('selectedIndex', 6)",
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
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -139.61,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.66
                   }
                  ],
                  "items": [
                   {
                    "yaw": -139.61,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.66
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_2A0056F1_3F72_24B0_41C0_EFD18C440C50",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56, this.camera_DE0C6662_D067_AB2B_41E3_0BA2297DB7F5)",
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
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 160.23,
                    "hfov": 5.95,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -32.18
                   }
                  ],
                  "items": [
                   {
                    "yaw": 160.23,
                    "hfov": 5.95,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -32.18
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_t.jpg"
               }
              ],
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
              "thumbnailUrl": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_t.jpg",
              "pitch": 0,
              "label": "Inside",
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
                "backwardYaw": 167.99,
                "yaw": -139.61,
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
                      "height": 640,
                      "width": 1280,
                      "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_hq.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_2D031F1D_3F6E_2570_41CF_7F796CB99036",
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404, this.camera_3F2BC750_1E02_EAC4_41A6_BDCE3C61BB99); this.mainPlayList.set('selectedIndex', 8)",
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
                          "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 167.67,
                       "hfov": 5.64,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -36.71
                      }
                     ],
                     "items": [
                      {
                       "yaw": 167.67,
                       "hfov": 5.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 25,
                          "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -36.71
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_28428FB6_3F6E_24B0_41B1_379B460392E6",
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09, this.camera_3F374740_1E02_EAC4_41A0_962A1DBFB6EA); this.mainPlayList.set('selectedIndex', 5)",
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
                          "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -74.27,
                       "hfov": 6.93,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -9.86
                      }
                     ],
                     "items": [
                      {
                       "yaw": -74.27,
                       "hfov": 6.93,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "width": 25,
                          "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -9.86
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_t.jpg"
                  }
                 ],
                 "hfov": 360,
                 "partial": false,
                 "hfovMax": 150,
                 "id": "panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
                 "thumbnailUrl": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_t.jpg",
                 "pitch": 0,
                 "label": "Right side",
                 "class": "Panorama",
                 "hfovMin": 120,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
                   "backwardYaw": 7.88,
                   "yaw": -74.27,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
                   "backwardYaw": 47.02,
                   "yaw": 167.67,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ]
                },
                "backwardYaw": -74.27,
                "yaw": 7.88,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": -139.61,
             "yaw": 167.99,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
             "backwardYaw": -34.17,
             "yaw": -2.79,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ]
          },
          "backwardYaw": -2.79,
          "yaw": -34.17,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
          "backwardYaw": 129.18,
          "yaw": 103.3,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
          "backwardYaw": 167.67,
          "yaw": 47.02,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": 103.3,
       "yaw": 129.18,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": -7.64,
    "yaw": -32.55,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009E7DF2_0EE6_00EF_4164_545A2535D832_rollover.png",
   "id": "IconButton_009E7DF2_0EE6_00EF_4164_545A2535D832",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E7DF2_0EE6_00EF_4164_545A2535D832.png",
   "pressedIconURL": "skin/IconButton_009E7DF2_0EE6_00EF_4164_545A2535D832_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F",
  "buttonRestart": "this.IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B",
  "buttonPause": {
   "paddingRight": 0,
   "mode": "toggle",
   "width": 20,
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
   "id": "IconButton_009E0DF2_0EE6_00EF_4192_9A8265A74C45",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E0DF2_0EE6_00EF_4192_9A8265A74C45.png",
   "pressedIconURL": "skin/IconButton_009E0DF2_0EE6_00EF_4192_9A8265A74C45_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009E4DF2_0EE6_00EF_418B_5D8BD70A7446_rollover.png",
   "id": "IconButton_009E4DF2_0EE6_00EF_418B_5D8BD70A7446",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E4DF2_0EE6_00EF_418B_5D8BD70A7446.png",
   "pressedIconURL": "skin/IconButton_009E4DF2_0EE6_00EF_418B_5D8BD70A7446_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009E3DF2_0EE6_00EF_418C_42900AE4C41A_rollover.png",
   "id": "IconButton_009E3DF2_0EE6_00EF_418C_42900AE4C41A",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E3DF2_0EE6_00EF_418C_42900AE4C41A.png",
   "pressedIconURL": "skin/IconButton_009E3DF2_0EE6_00EF_418C_42900AE4C41A_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009E2DF2_0EE6_00EF_4177_1950FADE33A9_rollover.png",
   "id": "IconButton_009E2DF2_0EE6_00EF_4177_1950FADE33A9",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E2DF2_0EE6_00EF_4177_1950FADE33A9.png",
   "pressedIconURL": "skin/IconButton_009E2DF2_0EE6_00EF_4177_1950FADE33A9_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009E1DF2_0EE6_00EF_417E_D02C1A957D1A_rollover.png",
   "id": "IconButton_009E1DF2_0EE6_00EF_417E_D02C1A957D1A",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009E1DF2_0EE6_00EF_417E_D02C1A957D1A.png",
   "pressedIconURL": "skin/IconButton_009E1DF2_0EE6_00EF_417E_D02C1A957D1A_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 20,
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
   "rollOverIconURL": "skin/IconButton_009FDDF2_0EE6_00EF_4171_A68D9CA58D0B_rollover.png",
   "id": "IconButton_009FDDF2_0EE6_00EF_4171_A68D9CA58D0B",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_009FDDF2_0EE6_00EF_4171_A68D9CA58D0B.png",
   "pressedIconURL": "skin/IconButton_009FDDF2_0EE6_00EF_4171_A68D9CA58D0B_pressed.png",
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
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -4.74,
   "class": "PanoramaCameraPosition",
   "pitch": 9.97
  }
 },
 "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_357F681B_3F52_2B70_414B_52B5D10662A2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -15.44,
   "class": "PanoramaCameraPosition",
   "pitch": -1.02
  }
 },
 "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -143.98,
   "class": "PanoramaCameraPosition",
   "pitch": -0.28
  }
 },
 "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 120,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -101.73,
   "class": "PanoramaCameraPosition",
   "pitch": -4.8
  }
 },
 "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_4E663F8A_4152_7B0A_41B4_DCA6DB75173A",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -64.35,
   "class": "PanoramaCameraPosition",
   "pitch": 1.49
  }
 },
 "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 36.64,
   "class": "PanoramaCameraPosition",
   "pitch": 15.53
  }
 },
 "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
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
    "media": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 0)"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FBDF5D3_1E02_E9C4_41A6_3ED9CCF571B8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 42.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FB9C5F1_1E02_E9C4_41A4_1A90012CE493",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 172.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FB4160F_1E02_EA5B_4199_F70D02080DE6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 177.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FAF962F_1E02_EA5C_41B0_AD377F2FCA39",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -50.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FA8E648_1E02_EAC4_418E_06BBDAC94AE2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -12.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FA38667_1E02_EACC_419A_9BC7E7FE6B6C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -124.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FDBE684_1E02_EA4C_41A7_21656B89AFC7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 33.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_3FD536A3_1E02_EA44_41B5_248944BC49ED",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FD516A3_1E02_EA44_4177_FB051CD91EDE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 40.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FC876BC_1E02_EBBC_41A5_2AE071639A6A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 145.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FFEF6DA_1E02_EBC4_4194_11901C776FBA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -148.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FF586EC_1E02_EBDD_418C_6BE274063C30",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 120,
   "yaw": 20.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FEA16FB_1E02_EBC4_41A2_6DA04CFD829C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 120,
   "yaw": -177.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3FE12708_1E02_EA44_41BB_9FECE0C27609",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -12.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3F15C716_1E02_EA4C_41B6_C1966A6824E4",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 105.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3F0A6724_1E02_EA4C_41B9_0E94C6054F3A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 147.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3F3EE732_1E02_EA44_41BB_3E72300D68E8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -76.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_3F377741_1E02_EAC4_418D_69D5BD298D91",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3F374740_1E02_EAC4_41A0_962A1DBFB6EA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 11250,
     "yawDelta": 89.55,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 3750,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_3F2BC750_1E02_EAC4_41A6_BDCE3C61BB99",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -132.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_0987DDB5_1DE4_C60F_41AC_3A6DD24190A9",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_0987DDB5_1DE4_C60F_41AC_3A6DD24190A9.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_0987DDB5_1DE4_C60F_41AC_3A6DD24190A9.mp3"
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
  "width": 163,
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
  "top": 132,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 52,
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
  "width": 409,
  "paddingLeft": 0,
  "height": 49,
  "textDecoration": "none",
  "fontFamily": "Times New Roman",
  "textShadowColor": "#000000",
  "text": "Moncada Town Center",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "textShadowVerticalLength": 1,
  "top": 27,
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
  "left": 67,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 1,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "height": 188,
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
  "id": "Container_278E1B3D_3F57_EDB0_41C8_FFA34F3C19D7",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "41.26%"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 20,
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
  "bottom": "14.26%",
  "rollOverIconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B_rollover.png",
  "id": "IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B.png",
  "pressedIconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.43%"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 20,
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
  "bottom": "5.33%",
  "rollOverIconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F_rollover.png",
  "id": "IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F.png",
  "pressedIconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.35%"
 },
 {
  "paddingRight": 0,
  "mode": "push",
  "width": 20,
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
  "bottom": "9.6%",
  "rollOverIconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C_rollover.png",
  "id": "IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C.png",
  "pressedIconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.35%"
 },
 {
  "paddingRight": 0,
  "mode": "toggle",
  "width": 20.04,
  "paddingLeft": 0,
  "height": 31,
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
  "bottom": "2.27%",
  "id": "IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C.png",
  "pressedIconURL": "skin/IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "1.34%"
 },
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "6.577%",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "scaleMode": "fit_inside",
  "height": "10%",
  "top": "0.13%",
  "paddingBottom": 0,
  "maxHeight": 500,
  "minWidth": 1,
  "minHeight": 1,
  "borderRadius": 0,
  "id": "Image_4B9BF052_4152_651A_41B9_6C477D5435DB",
  "url": "skin/Image_4B9BF052_4152_651A_41B9_6C477D5435DB.png",
  "paddingTop": 0,
  "maxWidth": 500,
  "verticalAlign": "middle",
  "right": "0.15%"
 },
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "5.979%",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "10%",
  "top": "0.53%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "maxHeight": 640,
  "minWidth": 1,
  "minHeight": 1,
  "id": "Image_DD3AB544_D063_696F_41D8_6394CA5EE323",
  "paddingTop": 0,
  "left": "0.07%",
  "url": "skin/Image_DD3AB544_D063_696F_41D8_6394CA5EE323.jpg",
  "maxWidth": 640,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 136,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "height": 123,
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
  "id": "Container_009F9DF2_0EE6_00EF_41A2_08036D775CD6",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "children": [
   "this.IconButton_009E4DF2_0EE6_00EF_418B_5D8BD70A7446",
   "this.IconButton_009E7DF2_0EE6_00EF_4164_545A2535D832",
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
    "id": "Container_009E6DF2_0EE6_00EF_416A_D9D2FBA069B4",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "children": [
     "this.IconButton_009E1DF2_0EE6_00EF_417E_D02C1A957D1A",
     "this.IconButton_009E0DF2_0EE6_00EF_4192_9A8265A74C45",
     "this.IconButton_009E3DF2_0EE6_00EF_418C_42900AE4C41A"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_009E2DF2_0EE6_00EF_4177_1950FADE33A9",
   "this.IconButton_009FDDF2_0EE6_00EF_4171_A68D9CA58D0B"
  ],
  "verticalAlign": "middle",
  "right": "44.1%"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C",
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
 "start": "this.playAudioList([this.audio_0987DDB5_1DE4_C60F_41AC_3A6DD24190A9]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})