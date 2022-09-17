TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_349DFCB5_3F53_E4B0_41B5_B57ECEA8976B",
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
           "height": 59,
           "width": 12,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -32.55,
        "hfov": 6.75,
        "pitch": -16.33
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2, this.camera_54E9D9F7_4152_671A_41B6_2DAEDBD97910); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": -32.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -16.33
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_330374A6_3F52_3B50_41C1_D2915C380420",
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
           "height": 59,
           "width": 12,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 31.49,
        "hfov": 6.8,
        "pitch": -14.71
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135, this.camera_54FFD9E8_4152_6736_41B0_3CAB9E7DAD32); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": 31.49,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -14.71
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 640,
       "width": 1280,
       "url": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Moncada Town Hall",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_33242C14_3F56_2B70_418F_57FA322B282C",
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
              "height": 59,
              "width": 12,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -137.12,
           "hfov": 6.7,
           "pitch": -17.62
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1, this.camera_54D55A06_4152_64FA_4191_7E43546CB262); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -137.12,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -17.62
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_33BDA2B6_3F56_7CB0_41C8_BA5287D1DFA8",
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
              "height": 59,
              "width": 12,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 55.43,
           "hfov": 6.87,
           "pitch": -12.45
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3, this.camera_52FBFA62_4152_653A_41BC_860A8C5365E8); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "items": [
          {
           "yaw": 55.43,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -12.45
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 640,
          "width": 1280,
          "url": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_hq.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "Right side of moncada town hall",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
       "backwardYaw": 31.49,
       "yaw": -137.12,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_31A2E076_3F5E_7BB3_41C0_E1F18AB2BBE7",
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
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": 2.38,
              "hfov": 6.98,
              "pitch": -6.78
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0, this.camera_543A299D_4152_670E_41BD_BED4F1993E0C); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "yaw": 2.38,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -6.78
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_31A229FE_3F52_6CB0_41B6_E94B0996649C",
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
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -159.34,
              "hfov": 6.81,
              "pitch": -14.55
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135, this.camera_5425E9AB_4152_670A_41C8_7B31BACF076B); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "items": [
             {
              "yaw": -159.34,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -14.55
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_31B590CF_3F52_5CD0_41CB_03C812097451",
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
                 "height": 59,
                 "width": 12,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": 55.11,
              "hfov": 6.86,
              "pitch": -12.61
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56, this.camera_541179BC_4152_670E_41C4_C7283B9F925F); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": 55.11,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -12.61
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 639,
             "width": 1280,
             "url": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_hq.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "Going to the Police Station",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_310860A1_3F52_3B50_41C5_C11C5A1E4101",
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
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -146.4,
                 "hfov": 6.86,
                 "pitch": -12.77
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3, this.camera_54503941_4152_6776_41CA_7999F9EF3ED5); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "items": [
                {
                 "yaw": -146.4,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -12.77
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 640,
                "width": 1280,
                "url": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_hq.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "Moncada police station",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
             "backwardYaw": 2.38,
             "yaw": -146.4,
             "distance": 1
            }
           ]
          },
          "backwardYaw": -146.4,
          "yaw": 2.38,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
          "backwardYaw": 55.43,
          "yaw": -159.34,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_31D369B7_3F72_2CB0_418E_6BB7487415C5",
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
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -116.65,
                 "hfov": 6.79,
                 "pitch": -15.2
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09, this.camera_52E38A81_4152_65F6_41BF_A03FA84C9013); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "items": [
                {
                 "yaw": -116.65,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -15.2
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_30E1B2E8_3F72_DCD0_41CA_791D912C003E",
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
                    "height": 59,
                    "width": 12,
                    "url": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 111.06,
                 "hfov": 6.36,
                 "pitch": -25.24
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3, this.camera_52FF9A72_4152_651A_41B9_58383E869287); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "items": [
                {
                 "yaw": 111.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -25.24
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 639,
                "width": 1280,
                "url": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_hq.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "Back",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
             "backwardYaw": 55.11,
             "yaw": 111.06,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "partial": false,
              "hfovMax": 120,
              "id": "panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_2B075FBC_3F72_24B0_41BF_67F372E4BCC8",
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
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 7.88,
                    "hfov": 6.93,
                    "pitch": -9.54
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077, this.camera_5469E91D_4152_670E_41C6_9E92B5177605); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 7.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -9.54
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_2EF671D3_3F72_5CF0_41C1_77E9EF3FB645",
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
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -139.61,
                    "hfov": 7,
                    "pitch": -5.66
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7, this.camera_547B38DC_4152_650E_41C6_59F2F040B771); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -139.61,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -5.66
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_2A0056F1_3F72_24B0_41C0_EFD18C440C50",
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
                       "height": 59,
                       "width": 12,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 160.23,
                    "hfov": 5.95,
                    "pitch": -32.18
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56, this.camera_546208FE_4152_650A_41CA_A26C92A699A6); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 160.23,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -32.18
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 640,
                   "width": 1280,
                   "url": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_hq.jpeg"
                  }
                 ]
                }
               }
              ],
              "thumbnailUrl": "media/panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_t.jpg",
              "pitch": 0,
              "class": "Panorama",
              "label": "Inside",
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "partial": false,
                 "hfovMax": 120,
                 "id": "panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_29479AC3_3F6D_ECD0_41C7_6D9F5A16DBD7",
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
                          "height": 59,
                          "width": 12,
                          "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -2.79,
                       "hfov": 6.84,
                       "pitch": -13.42
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404, this.camera_540379CB_4152_670A_41BF_88EDF4241747); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -2.79,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 25,
                          "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -13.42
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_2D1B080C_3F6E_6B50_41C3_03AAF2FE3C29",
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
                          "height": 59,
                          "width": 12,
                          "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 167.99,
                       "hfov": 6.54,
                       "pitch": -21.51
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09, this.camera_540E59D9_4152_6716_4158_B391E08248B4); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 167.99,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 25,
                          "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -21.51
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 640,
                      "width": 1280,
                      "url": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_hq.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "thumbnailUrl": "media/panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_t.jpg",
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
                    "id": "panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_2B84A337_3F6E_3DB0_41C8_797174E3E8E6",
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
                             "height": 59,
                             "width": 12,
                             "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -83.98,
                          "hfov": 6.85,
                          "pitch": -12.93
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7, this.camera_545FB964_4152_673E_41B8_D6D433CC23F1); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -83.98,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.85,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 119,
                             "width": 25,
                             "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -12.93
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "id": "overlay_28E1D5E1_3F52_24D0_41CE_68F829CA6756",
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
                             "height": 59,
                             "width": 12,
                             "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 100.39,
                          "hfov": 6.84,
                          "pitch": -13.26
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077, this.camera_5445597E_4152_670A_41CE_E82FF06EEEBF); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 100.39,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.84,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 119,
                             "width": 25,
                             "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -13.26
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 639,
                         "width": 1280,
                         "url": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_hq.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "thumbnailUrl": "media/panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_t.jpg",
                    "pitch": 0,
                    "class": "Panorama",
                    "label": "Front of the Plaza",
                    "hfov": 360,
                    "hfovMin": 60,
                    "vfov": 180,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
                      "backwardYaw": -2.79,
                      "yaw": -83.98,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "hfovMax": 120,
                       "id": "panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_2D031F1D_3F6E_2570_41CF_7F796CB99036",
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
                                "height": 59,
                                "width": 12,
                                "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 167.67,
                             "hfov": 5.64,
                             "pitch": -36.71
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404, this.camera_52E5EA91_4152_6516_41A9_1BEE749E7409); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 167.67,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.64,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 119,
                                "width": 25,
                                "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -36.71
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "id": "overlay_28428FB6_3F6E_24B0_41B1_379B460392E6",
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
                                "height": 59,
                                "width": 12,
                                "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "yaw": -74.27,
                             "hfov": 6.93,
                             "pitch": -9.86
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09, this.camera_52E9AAA1_4152_6536_4194_BE0F925D54D8); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -74.27,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.93,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 119,
                                "width": 25,
                                "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -9.86
                            }
                           ]
                          }
                         ],
                         "thumbnailUrl": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 640,
                            "width": 1280,
                            "url": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_hq.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "thumbnailUrl": "media/panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_t.jpg",
                       "pitch": 0,
                       "class": "Panorama",
                       "label": "Right side",
                       "hfov": 360,
                       "hfovMin": 60,
                       "vfov": 180,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
                         "backwardYaw": 100.39,
                         "yaw": 167.67,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
                         "backwardYaw": 7.88,
                         "yaw": -74.27,
                         "distance": 1
                        }
                       ]
                      },
                      "backwardYaw": 167.67,
                      "yaw": 100.39,
                      "distance": 1
                     }
                    ]
                   },
                   "backwardYaw": -83.98,
                   "yaw": -2.79,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
                   "backwardYaw": -139.61,
                   "yaw": 167.99,
                   "distance": 1
                  }
                 ]
                },
                "backwardYaw": 167.99,
                "yaw": -139.61,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56",
                "backwardYaw": -116.65,
                "yaw": 160.23,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
                "backwardYaw": -74.27,
                "yaw": 7.88,
                "distance": 1
               }
              ]
             },
             "backwardYaw": 160.23,
             "yaw": -116.65,
             "distance": 1
            }
           ]
          },
          "backwardYaw": 111.06,
          "yaw": 55.11,
          "distance": 1
         }
        ]
       },
       "backwardYaw": -159.34,
       "yaw": 55.43,
       "distance": 1
      }
     ]
    },
    "backwardYaw": -137.12,
    "yaw": 31.49,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_332EB920_3F56_ED50_41C0_2E1BA6D05A29",
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
              "height": 59,
              "width": 12,
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -7.64,
           "hfov": 6.89,
           "pitch": -11.48
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1, this.camera_5433198E_4152_670A_41CE_E2BA1FD79C6A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -7.64,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -11.48
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 640,
          "width": 1280,
          "url": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_hq.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_357F681B_3F52_2B70_414B_52B5D10662A2_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "Left side of moncada town hall",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1",
       "backwardYaw": -32.55,
       "yaw": -7.64,
       "distance": 1
      }
     ]
    },
    "backwardYaw": -7.64,
    "yaw": -32.55,
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
   "id": "IconButton_278F5B3D_3F57_EDB0_415B_87DE7A1E4544",
   "rollOverIconURL": "skin/IconButton_278F5B3D_3F57_EDB0_415B_87DE7A1E4544_rollover.png",
   "iconURL": "skin/IconButton_278F5B3D_3F57_EDB0_415B_87DE7A1E4544.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278F5B3D_3F57_EDB0_415B_87DE7A1E4544_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C",
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
   "id": "IconButton_278FAB3D_3F57_EDB0_41A6_F14A04B3EDF1",
   "rollOverIconURL": "skin/IconButton_278FAB3D_3F57_EDB0_41A6_F14A04B3EDF1_rollover.png",
   "iconURL": "skin/IconButton_278FAB3D_3F57_EDB0_41A6_F14A04B3EDF1.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278FAB3D_3F57_EDB0_41A6_F14A04B3EDF1_pressed.png",
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
   "id": "IconButton_278F1B3D_3F57_EDB0_41BC_75A4824D990B",
   "rollOverIconURL": "skin/IconButton_278F1B3D_3F57_EDB0_41BC_75A4824D990B_rollover.png",
   "iconURL": "skin/IconButton_278F1B3D_3F57_EDB0_41BC_75A4824D990B.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278F1B3D_3F57_EDB0_41BC_75A4824D990B_pressed.png",
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
   "id": "IconButton_278F6B3D_3F57_EDB0_4188_D8F790CE80C9",
   "iconURL": "skin/IconButton_278F6B3D_3F57_EDB0_4188_D8F790CE80C9.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278F6B3D_3F57_EDB0_4188_D8F790CE80C9_pressed.png",
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
   "id": "IconButton_278F8B3D_3F57_EDB0_41B7_12EBA62B944E",
   "rollOverIconURL": "skin/IconButton_278F8B3D_3F57_EDB0_41B7_12EBA62B944E_rollover.png",
   "iconURL": "skin/IconButton_278F8B3D_3F57_EDB0_41B7_12EBA62B944E.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278F8B3D_3F57_EDB0_41B7_12EBA62B944E_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B",
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
   "id": "IconButton_278F2B3D_3F57_EDB0_419C_06F9C0E22B5D",
   "rollOverIconURL": "skin/IconButton_278F2B3D_3F57_EDB0_419C_06F9C0E22B5D_rollover.png",
   "iconURL": "skin/IconButton_278F2B3D_3F57_EDB0_419C_06F9C0E22B5D.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278F2B3D_3F57_EDB0_419C_06F9C0E22B5D_pressed.png",
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
   "id": "IconButton_278FBB3D_3F57_EDB0_419F_83B3C74172BD",
   "rollOverIconURL": "skin/IconButton_278FBB3D_3F57_EDB0_419F_83B3C74172BD_rollover.png",
   "iconURL": "skin/IconButton_278FBB3D_3F57_EDB0_419F_83B3C74172BD.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_278FBB3D_3F57_EDB0_419F_83B3C74172BD_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "id": "panorama_363C7BB2_3F52_2CB0_41BD_D50C7F1CF2C1_camera",
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
 "this.panorama_357F681B_3F52_2B70_414B_52B5D10662A2",
 {
  "id": "panorama_357F681B_3F52_2B70_414B_52B5D10662A2_camera",
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
 "this.panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135",
 {
  "id": "panorama_36392E9C_3F52_2770_41C3_1A25EDA5B135_camera",
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
 "this.panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3",
 {
  "id": "panorama_3139F3CF_3F5E_5CD0_41C1_AC940914EDC3_camera",
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
 "this.panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0",
 {
  "id": "panorama_32A04A82_3F5E_2F50_4196_E4823B0D28E0_camera",
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
 "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56",
 {
  "id": "panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_camera",
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
 "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
 {
  "id": "panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_4E663F8A_4152_7B0A_41B4_DCA6DB75173A",
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
 "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
 {
  "id": "panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
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
 "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
 {
  "id": "panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
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
 "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
 {
  "id": "panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
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
    "media": "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
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
    "media": "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_31DA2354_3F6E_7DF0_41BC_1C28B945EB56_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C9EAF12_3F75_E570_41A2_6ED1B0DAAD09_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2C750FA8_3F72_2550_41A4_122AF7D07DF7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2D76D302_3F72_7D50_41C7_B7DA9FA0E077_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2A50AC5B_3F72_2BF0_41A7_A4F2365F2404_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 0)"
   }
  ]
 },
 {
  "id": "camera_547B38DC_4152_650E_41C6_59F2F040B771",
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
   "yaw": -12.01,
   "pitch": 0
  }
 },
 {
  "id": "camera_546208FE_4152_650A_41CA_A26C92A699A6",
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
   "yaw": 63.35,
   "pitch": 0
  }
 },
 {
  "id": "camera_5469E91D_4152_670E_41C6_9E92B5177605",
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
   "yaw": 105.73,
   "pitch": 0
  }
 },
 {
  "id": "camera_54503941_4152_6776_41CA_7999F9EF3ED5",
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
   "yaw": -177.62,
   "pitch": 0
  }
 },
 {
  "id": "camera_545FB964_4152_673E_41B8_D6D433CC23F1",
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
   "yaw": 177.21,
   "pitch": 0
  }
 },
 {
  "id": "camera_5445597E_4152_670A_41CE_E82FF06EEEBF",
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
   "yaw": -12.33,
   "pitch": 0
  }
 },
 {
  "id": "camera_5433198E_4152_670A_41CE_E2BA1FD79C6A",
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
   "yaw": 147.45,
   "pitch": 0
  }
 },
 {
  "id": "camera_543A299D_4152_670E_41BD_BED4F1993E0C",
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
   "yaw": 33.6,
   "pitch": 0
  }
 },
 {
  "id": "camera_5425E9AB_4152_670A_41C8_7B31BACF076B",
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
   "yaw": -124.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_541179BC_4152_670E_41C4_C7283B9F925F",
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
   "yaw": -68.94,
   "pitch": 0
  }
 },
 {
  "id": "camera_540379CB_4152_670A_41BF_88EDF4241747",
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
   "yaw": 96.02,
   "pitch": 0
  }
 },
 {
  "id": "camera_540E59D9_4152_6716_4158_B391E08248B4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_540E69D9_4152_6716_41AF_5E967EE6909E",
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
   "yaw": 40.39,
   "pitch": 0
  }
 },
 {
  "id": "camera_54FFD9E8_4152_6736_41B0_3CAB9E7DAD32",
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
   "yaw": 42.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_54E9D9F7_4152_671A_41B6_2DAEDBD97910",
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
   "yaw": 172.36,
   "pitch": 0
  }
 },
 {
  "id": "camera_54D55A06_4152_64FA_4191_7E43546CB262",
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
   "yaw": -148.51,
   "pitch": 0
  }
 },
 {
  "id": "camera_52FBFA62_4152_653A_41BC_860A8C5365E8",
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
   "yaw": 20.66,
   "pitch": 0
  }
 },
 {
  "id": "camera_52FF9A72_4152_651A_41B9_58383E869287",
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
   "yaw": -124.89,
   "pitch": 0
  }
 },
 {
  "id": "camera_52E38A81_4152_65F6_41BF_A03FA84C9013",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_52E39A81_4152_65F6_41C1_A66EC09A48B6",
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
   "yaw": -19.77,
   "pitch": 0
  }
 },
 {
  "id": "camera_52E5EA91_4152_6516_41A9_1BEE749E7409",
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
   "yaw": -79.61,
   "pitch": 0
  }
 },
 {
  "id": "camera_52E9AAA1_4152_6536_4194_BE0F925D54D8",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_52E9BAA1_4152_6536_4199_5DB2969D996A",
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
   "yaw": -172.12,
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
  "paddingRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
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
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "toolTipPaddingTop": 4,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressHeight": 20,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
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
  "paddingLeft": 0,
  "playbackBarOpacity": 1,
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
  "top": 28,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": 19,
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
  "right": 0,
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
  "width": 219,
  "maxHeight": 800,
  "verticalAlign": "top",
  "itemLabelFontFamily": "Arial",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "borderRadius": 5,
  "paddingLeft": 20,
  "itemBackgroundColorRatios": [],
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailWidth": 100,
  "itemHorizontalAlign": "center",
  "itemLabelHorizontalAlign": "center",
  "itemLabelGap": 5,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailHeight": 75,
  "itemPaddingRight": 3,
  "scrollBarWidth": 10,
  "minHeight": 0,
  "itemBackgroundColor": [],
  "shadow": false,
  "itemBackgroundOpacity": 0,
  "top": 76,
  "itemBorderRadius": 0,
  "bottom": 108,
  "horizontalAlign": "left",
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
  "left": 0,
  "itemThumbnailShadowColor": "#000000"
 },
 {
  "paddingRight": 0,
  "fontSize": 40,
  "borderRadius": 0,
  "height": 49,
  "width": 408,
  "fontFamily": "Times New Roman",
  "text": "Moncada Town Hall",
  "textDecoration": "none",
  "fontStyle": "normal",
  "paddingLeft": 0,
  "minHeight": 16,
  "shadow": false,
  "borderSize": 0,
  "horizontalAlign": "center",
  "top": 26,
  "fontWeight": "bold",
  "paddingBottom": 0,
  "minWidth": 30,
  "fontColor": "#00FF00",
  "backgroundOpacity": 0,
  "id": "label4056",
  "paddingTop": 0,
  "class": "Label",
  "left": 11,
  "verticalAlign": "middle"
 },
 {
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "overflow": "scroll",
  "height": 20,
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
  "horizontalAlign": "center",
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
  "bottom": "0%",
  "paddingBottom": 0,
  "minWidth": 20,
  "backgroundOpacity": 0,
  "id": "Container_278E1B3D_3F57_EDB0_41C8_FFA34F3C19D7",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "layout": "horizontal",
  "class": "Container",
  "contentOpaque": false,
  "left": 564.95,
  "right": "41.63%",
  "children": [
   "this.IconButton_278F1B3D_3F57_EDB0_41BC_75A4824D990B",
   "this.IconButton_278F2B3D_3F57_EDB0_419C_06F9C0E22B5D",
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
    "id": "Container_278F3B3D_3F57_EDB0_41A2_72F05CA24B0A",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "layout": "vertical",
    "class": "Container",
    "children": [
     "this.IconButton_278F5B3D_3F57_EDB0_415B_87DE7A1E4544",
     "this.IconButton_278F6B3D_3F57_EDB0_4188_D8F790CE80C9",
     "this.IconButton_278F8B3D_3F57_EDB0_41B7_12EBA62B944E"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_278FAB3D_3F57_EDB0_41A6_F14A04B3EDF1",
   "this.IconButton_278FBB3D_3F57_EDB0_419F_83B3C74172BD"
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
  "bottom": "26.93%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B",
  "rollOverIconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B_rollover.png",
  "iconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_278F0B3D_3F57_EDB0_41BB_EB13B2C6C16B_pressed.png",
  "class": "IconButton",
  "right": "1.2%",
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
  "bottom": "10.13%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F",
  "rollOverIconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F_rollover.png",
  "iconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_278E0B3D_3F57_EDB0_41BD_658B5EF0D81F_pressed.png",
  "class": "IconButton",
  "right": "0.9%",
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
  "bottom": "16.53%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C",
  "rollOverIconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C_rollover.png",
  "iconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_278CFB3D_3F57_EDB0_41CC_49AFE5D4BE2C_pressed.png",
  "class": "IconButton",
  "right": "1.05%",
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
  "bottom": "3.33%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C",
  "iconURL": "skin/IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C_pressed.png",
  "class": "IconButton",
  "right": "0.82%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "maxWidth": 500,
  "maxHeight": 500,
  "borderRadius": 0,
  "height": "12.667%",
  "url": "skin/Image_4B9BF052_4152_651A_41B9_6C477D5435DB.png",
  "horizontalAlign": "center",
  "width": "8.595%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "shadow": false,
  "scaleMode": "fit_inside",
  "top": "4.93%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "id": "Image_4B9BF052_4152_651A_41B9_6C477D5435DB",
  "paddingTop": 0,
  "class": "Image",
  "right": "0.07%",
  "verticalAlign": "middle"
 }
], 
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_278FDB3D_3F57_EDB0_41C5_4A027C2BA81C",
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