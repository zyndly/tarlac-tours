TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 150,
  "id": "panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95",
  "thumbnailUrl": "media/panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_t.jpg",
  "pitch": 0,
  "label": "1",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_305BEE82_3C1F_5AFB_41CD_54F1B54967FF",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93, this.camera_4D4ED075_4159_F596_41A6_D8177BEC10DE); this.mainPlayList.set('selectedIndex', 1)",
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
           "url": "media/panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 6.05,
        "hfov": 7.03,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.25
       }
      ],
      "items": [
       {
        "yaw": 6.05,
        "hfov": 7.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.25
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_t.jpg"
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
     "id": "panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93",
     "thumbnailUrl": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_t.jpg",
     "pitch": 0,
     "label": "2",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 639,
          "width": 1280,
          "url": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_31FCAAC8_3C1F_7A77_41A1_BC3DEBDB7E04",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F, this.camera_4D20D0C1_4159_F6F1_419E_7E397B9A7C40); this.mainPlayList.set('selectedIndex', 2)",
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
              "url": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 36.7,
           "hfov": 7,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.63
          }
         ],
         "items": [
          {
           "yaw": 36.7,
           "hfov": 7,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_0_HS_0_0.png",
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
         "id": "overlay_31E2BDED_3C1E_DE09_4191_95DF2FE1F438",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95, this.camera_4D2D009F_4159_F692_41C1_62CB3A908B44); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 26,
              "width": 12,
              "url": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 168.61,
           "hfov": 6.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -11.27
          }
         ],
         "items": [
          {
           "yaw": 168.61,
           "hfov": 6.9,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 53,
              "width": 25,
              "url": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -11.27
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_t.jpg"
      }
     ],
     "class": "Panorama",
     "hfovMin": 120,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95",
       "backwardYaw": 6.05,
       "yaw": 168.61,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 150,
        "id": "panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F",
        "thumbnailUrl": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_t.jpg",
        "pitch": 0,
        "label": "3",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 640,
             "width": 1280,
             "url": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_31C97771_3C1D_2A19_4197_23A1B5AE1C58",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58, this.camera_4D7B9015_4159_F596_41C7_7D0776D211D3); this.mainPlayList.set('selectedIndex', 3)",
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
                 "url": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 54.42,
              "hfov": 6.99,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -6.33
             }
            ],
            "items": [
             {
              "yaw": 54.42,
              "hfov": 6.99,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -6.33
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_337441D9_3C1D_6609_41CC_1703DBA664E1",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93, this.camera_4D716022_4159_F5B3_41C1_24A7E84C4D3A); this.mainPlayList.set('selectedIndex', 1)",
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
                 "url": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -50.77,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.64
             }
            ],
            "items": [
             {
              "yaw": -50.77,
              "hfov": 7.01,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -4.64
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_t.jpg"
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
           "id": "panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
           "thumbnailUrl": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_t.jpg",
           "pitch": 0,
           "label": "4",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 639,
                "width": 1280,
                "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_32697196_3C1B_661B_41C9_6E211D3EA561",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0, this.camera_4D553061_4159_F5AE_41BA_C7B851B455BB); this.mainPlayList.set('selectedIndex', 4)",
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
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -163.55,
                 "hfov": 6.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -9.58
                }
               ],
               "items": [
                {
                 "yaw": -163.55,
                 "hfov": 6.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -9.58
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_31BDA844_3C1B_267F_41C5_B61B89DC9590",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506, this.camera_4D6FB030_4159_F5AE_41C7_EFBE02C65F07); this.mainPlayList.set('selectedIndex', 5)",
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
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 23.2,
                 "hfov": 7.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -4.23
                }
               ],
               "items": [
                {
                 "yaw": 23.2,
                 "hfov": 7.01,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -4.23
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_31C58F04_3C1A_DBFF_41B2_3EA2E6A73F22",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016, this.camera_4D5CB04C_4159_F5F6_41CE_8610AB4726F9); this.mainPlayList.set('selectedIndex', 7)",
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
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 62.3,
                 "hfov": 7,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -5.63
                }
               ],
               "items": [
                {
                 "yaw": 62.3,
                 "hfov": 7,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_2_0.png",
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
               "id": "overlay_33B9EBA9_3C0A_DA09_41B4_08F9C3B7406D",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F, this.camera_4D65203E_4159_F592_41A9_50EE92C233BC); this.mainPlayList.set('selectedIndex', 2)",
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
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -66.52,
                 "hfov": 6.96,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.89
                }
               ],
               "items": [
                {
                 "yaw": -66.52,
                 "hfov": 6.96,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.89
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_t.jpg"
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
              "id": "panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506",
              "thumbnailUrl": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_t.jpg",
              "pitch": 0,
              "label": "6",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 639,
                   "width": 1280,
                   "url": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_32636020_3C17_2637_41BD_8EFC480F6DF4",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58, this.camera_4D7EF009_4159_F57E_41BE_30CB78822CB4); this.mainPlayList.set('selectedIndex', 3)",
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
                       "url": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -36.14,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.35
                   }
                  ],
                  "items": [
                   {
                    "yaw": -36.14,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_0_HS_0_0.png",
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
                  "id": "overlay_331C9B7C_3C17_7A0F_41A6_B3C0619F0DA4",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
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
                       "url": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 89.86,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.35
                   }
                  ],
                  "items": [
                   {
                    "yaw": 89.86,
                    "hfov": 7,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -5.35
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
                "backwardYaw": 23.2,
                "yaw": -36.14,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": -36.14,
             "yaw": 23.2,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F",
             "backwardYaw": 54.42,
             "yaw": -66.52,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016",
              "thumbnailUrl": "media/panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_t.jpg",
              "pitch": 0,
              "label": "museo de tarlac 8",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 640,
                   "width": 1280,
                   "url": "media/panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_330FDC77_3C17_3E19_41B0_8D523F54AC9B",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58, this.camera_4D413084_4159_F576_41B8_B7021C2690E7); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 46,
                       "width": 12,
                       "url": "media/panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 146.67,
                    "hfov": 1.96,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -73.83
                   }
                  ],
                  "items": [
                   {
                    "yaw": 146.67,
                    "hfov": 1.96,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 93,
                       "width": 25,
                       "url": "media/panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -73.83
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
                "backwardYaw": 62.3,
                "yaw": 146.67,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": 146.67,
             "yaw": 62.3,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": {
              "hfov": 360,
              "partial": false,
              "hfovMax": 150,
              "id": "panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0",
              "thumbnailUrl": "media/panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_t.jpg",
              "pitch": 0,
              "label": "5",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 640,
                   "width": 1280,
                   "url": "media/panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_hq.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_31E8C318_3C15_6A17_41BD_37CD935D1C42",
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58, this.camera_4D3AF091_4159_F56E_41C2_F1CEDF650408); this.mainPlayList.set('selectedIndex', 3)",
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
                       "url": "media/panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -27.42,
                    "hfov": 7.02,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.8
                   }
                  ],
                  "items": [
                   {
                    "yaw": -27.42,
                    "hfov": 7.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "width": 25,
                       "url": "media/panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -3.8
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_t.jpg"
               }
              ],
              "class": "Panorama",
              "hfovMin": 120,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
                "backwardYaw": -163.55,
                "yaw": -27.42,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ]
             },
             "backwardYaw": -27.42,
             "yaw": -163.55,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ]
          },
          "backwardYaw": -66.52,
          "yaw": 54.42,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93",
          "backwardYaw": 36.7,
          "yaw": -50.77,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": -50.77,
       "yaw": 36.7,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 168.61,
    "yaw": 6.05,
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
   "rollOverIconURL": "skin/IconButton_2C587521_3C0D_2E39_41CC_6FE4E5813E17_rollover.png",
   "id": "IconButton_2C587521_3C0D_2E39_41CC_6FE4E5813E17",
   "iconURL": "skin/IconButton_2C587521_3C0D_2E39_41CC_6FE4E5813E17.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C587521_3C0D_2E39_41CC_6FE4E5813E17_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_2C594521_3C0D_2E39_41BE_32846707304F",
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
   "id": "IconButton_2C58D521_3C0D_2E39_41B4_BA8CE2EBF78A",
   "iconURL": "skin/IconButton_2C58D521_3C0D_2E39_41B4_BA8CE2EBF78A.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C58D521_3C0D_2E39_41B4_BA8CE2EBF78A_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_2C584521_3C0D_2E39_41CB_15FE946FE9CB_rollover.png",
   "id": "IconButton_2C584521_3C0D_2E39_41CB_15FE946FE9CB",
   "iconURL": "skin/IconButton_2C584521_3C0D_2E39_41CB_15FE946FE9CB.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C584521_3C0D_2E39_41CB_15FE946FE9CB_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_2C58F521_3C0D_2E39_41CB_54DC3D7A00CD_rollover.png",
   "id": "IconButton_2C58F521_3C0D_2E39_41CB_54DC3D7A00CD",
   "iconURL": "skin/IconButton_2C58F521_3C0D_2E39_41CB_54DC3D7A00CD.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C58F521_3C0D_2E39_41CB_54DC3D7A00CD_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_2C5FB521_3C0D_2E39_41B7_FD05DA5F661C",
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
   "rollOverIconURL": "skin/IconButton_2C589521_3C0D_2E39_41C7_EA8096B7F9B3_rollover.png",
   "id": "IconButton_2C589521_3C0D_2E39_41C7_EA8096B7F9B3",
   "iconURL": "skin/IconButton_2C589521_3C0D_2E39_41C7_EA8096B7F9B3.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C589521_3C0D_2E39_41C7_EA8096B7F9B3_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_2C582521_3C0D_2E39_41C6_87264E37043A_rollover.png",
   "id": "IconButton_2C582521_3C0D_2E39_41C6_87264E37043A",
   "iconURL": "skin/IconButton_2C582521_3C0D_2E39_41C6_87264E37043A.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C582521_3C0D_2E39_41C6_87264E37043A_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_2C588521_3C0D_2E39_41C8_3DE43788AB02_rollover.png",
   "id": "IconButton_2C588521_3C0D_2E39_41C8_3DE43788AB02",
   "iconURL": "skin/IconButton_2C588521_3C0D_2E39_41C8_3DE43788AB02.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_2C588521_3C0D_2E39_41C8_3DE43788AB02_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_camera",
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
 "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93",
 {
  "id": "panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_camera",
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
 "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F",
 {
  "id": "panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_camera",
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
 "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
 {
  "id": "panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_camera",
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
 "this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0",
 {
  "id": "panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_camera",
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
 "this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506",
 {
  "id": "panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_camera",
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
  "id": "panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044",
  "thumbnailUrl": "media/panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_t.jpg",
  "pitch": 0,
  "label": "ma. christina park right 5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "hfovMin": 120,
  "vfov": 180,
  "hfov": 360
 },
 {
  "id": "panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_camera",
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
 "this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016",
 {
  "id": "panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_camera",
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
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3654AC9B_3C1E_DE09_41CB_1024059DAA95_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36214C23_3C1F_7E38_41C6_EB338E3ACF93_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360071FC_3C1F_260F_41C2_AFBE38ACD35F_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_36002945_3C1F_2679_41BE_2D1CF440BE58_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3600CD95_3C1F_FE19_412F_211D5430D5F0_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360EED07_3C1F_3FF9_419A_6B589CAF2506_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3609F8CD_3C1F_2609_41C8_651D5FE63044_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_360931FA_3C1E_E60B_41C8_DC3D3E53A016_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 0)"
   }
  ]
 },
 {
  "id": "camera_4D7EF009_4159_F57E_41BE_30CB78822CB4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -156.8,
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
  "id": "camera_4D7B9015_4159_F596_41C7_7D0776D211D3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 113.48,
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
  "id": "camera_4D716022_4159_F5B3_41C1_24A7E84C4D3A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -143.3,
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
  "id": "camera_4D6FB030_4159_F5AE_41C7_EFBE02C65F07",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 143.86,
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
  "id": "camera_4D65203E_4159_F592_41A9_50EE92C233BC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -125.58,
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
  "id": "camera_4D5CB04C_4159_F5F6_41CE_8610AB4726F9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -33.33,
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
  "id": "camera_4D553061_4159_F5AE_41BA_C7B851B455BB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 152.58,
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
  "id": "camera_4D4ED075_4159_F596_41A6_D8177BEC10DE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -11.39,
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
  "id": "camera_4D413084_4159_F576_41B8_B7021C2690E7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -117.7,
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
  "id": "camera_4D3AF091_4159_F56E_41C2_F1CEDF650408",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 16.45,
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
  "id": "camera_4D2D009F_4159_F692_41C1_62CB3A908B44",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": -173.95,
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
  "id": "camera_4D20D0C1_4159_F6F1_419E_7E397B9A7C40",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 150,
   "yaw": 129.23,
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
  "id": "audio_2C049901_3C5E_247E_41C7_E7A6A5E804CD",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_2C049901_3C5E_247E_41C7_E7A6A5E804CD.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_2C049901_3C5E_247E_41C7_E7A6A5E804CD.mp3"
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
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
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
  "toolTipBackgroundColor": "#F6F6F6",
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
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "transitionMode": "blending",
  "progressBorderRadius": 4,
  "playbackBarHeight": 20,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "top": 8,
  "borderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 20,
  "bottom": 7,
  "id": "MainViewer",
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
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
  "width": 213,
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
  "top": 78,
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
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 31,
  "width": 571,
  "textShadowVerticalLength": 3,
  "minWidth": 30,
  "paddingLeft": 0,
  "height": 74,
  "textDecoration": "none",
  "fontFamily": "Lucida Sans Unicode",
  "textShadowColor": "#000000",
  "text": "Ma. Christina Park & Museo de tarlac",
  "borderSize": 0,
  "class": "Label",
  "textShadowHorizontalLength": -2,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "top": 14,
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "fontColor": "#009900",
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
  "height": 139,
  "gap": 4,
  "borderSize": 0,
  "class": "Container",
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "bottom": "1.09%",
  "id": "Container_2C596522_3C0D_2E3B_41A4_99741595F4D4",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "minHeight": 20,
  "left": "37.52%",
  "backgroundOpacity": 0,
  "children": [
   "this.IconButton_2C584521_3C0D_2E39_41CB_15FE946FE9CB",
   "this.IconButton_2C587521_3C0D_2E39_41CC_6FE4E5813E17",
   {
    "children": [
     "this.IconButton_2C582521_3C0D_2E39_41C6_87264E37043A",
     "this.IconButton_2C58D521_3C0D_2E39_41B4_BA8CE2EBF78A",
     "this.IconButton_2C58F521_3C0D_2E39_41CB_54DC3D7A00CD"
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
    "id": "Container_2C586521_3C0D_2E39_41C6_85F7F7D82FE6",
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   "this.IconButton_2C589521_3C0D_2E39_41C7_EA8096B7F9B3",
   "this.IconButton_2C588521_3C0D_2E39_41C8_3DE43788AB02"
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
  "bottom": "9.78%",
  "rollOverIconURL": "skin/IconButton_2C594521_3C0D_2E39_41BE_32846707304F_rollover.png",
  "id": "IconButton_2C594521_3C0D_2E39_41BE_32846707304F",
  "iconURL": "skin/IconButton_2C594521_3C0D_2E39_41BE_32846707304F.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2C594521_3C0D_2E39_41BE_32846707304F_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.21%",
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
  "bottom": "4.46%",
  "rollOverIconURL": "skin/IconButton_2C5FB521_3C0D_2E39_41B7_FD05DA5F661C_rollover.png",
  "id": "IconButton_2C5FB521_3C0D_2E39_41B7_FD05DA5F661C",
  "iconURL": "skin/IconButton_2C5FB521_3C0D_2E39_41B7_FD05DA5F661C.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2C5FB521_3C0D_2E39_41B7_FD05DA5F661C_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.15%",
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
  "bottom": "20.65%",
  "id": "IconButton_2C58A521_3C0D_2E39_41B9_0069C6831B14",
  "iconURL": "skin/IconButton_2C58A521_3C0D_2E39_41B9_0069C6831B14.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_2C58A521_3C0D_2E39_41B9_0069C6831B14_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.21%",
  "verticalAlign": "middle"
 },
 {
  "right": "1.75%",
  "paddingRight": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "url": "skin/Image_2D1DA191_3C0B_6619_41C2_7E0D4DA7F5FA.png",
  "width": "5.73%",
  "borderSize": 0,
  "maxWidth": 500,
  "class": "Image",
  "scaleMode": "fit_inside",
  "height": "8.804%",
  "top": "2.83%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "id": "Image_2D1DA191_3C0B_6619_41C2_7E0D4DA7F5FA",
  "paddingTop": 0,
  "maxHeight": 500,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 16,
  "minWidth": 1,
  "textShadowVerticalLength": 1,
  "paddingLeft": 0,
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "text": "Zoom In",
  "fontFamily": "Lucida Sans Unicode",
  "width": "6.031%",
  "borderSize": 0,
  "class": "Label",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 0,
  "fontWeight": "normal",
  "textShadowOpacity": 1,
  "shadow": false,
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "10.43%",
  "fontColor": "#009900",
  "id": "Label_2DA13EA5_3C0B_FA39_41C8_9F564F00647B",
  "fontStyle": "normal",
  "height": "3.261%",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "3.44%",
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 16,
  "minWidth": 1,
  "textShadowVerticalLength": 1,
  "paddingLeft": 0,
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "text": "Zoom Out",
  "fontFamily": "Lucida Sans Unicode",
  "width": "6.031%",
  "borderSize": 0,
  "class": "Label",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 0,
  "fontWeight": "normal",
  "textShadowOpacity": 1,
  "shadow": false,
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "4.89%",
  "fontColor": "#009900",
  "id": "Label_2D6F474B_3C0B_2A09_41C9_276D85ACE33A",
  "fontStyle": "normal",
  "height": "3.261%",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "3.14%",
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 16,
  "minWidth": 1,
  "textShadowVerticalLength": 1,
  "paddingLeft": 0,
  "textDecoration": "none",
  "textShadowColor": "#000000",
  "text": "Music",
  "fontFamily": "Lucida Sans Unicode",
  "width": "6.031%",
  "borderSize": 0,
  "class": "Label",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 0,
  "fontWeight": "normal",
  "textShadowOpacity": 1,
  "shadow": false,
  "borderRadius": 0,
  "paddingBottom": 0,
  "bottom": "21.3%",
  "fontColor": "#009900",
  "id": "Label_2DF81363_3C0B_2A39_4171_0D7580E9848D",
  "fontStyle": "normal",
  "height": "3.261%",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "3.86%",
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_2C58A521_3C0D_2E39_41B9_0069C6831B14",
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
 "start": "this.playAudioList([this.audio_2C049901_3C5E_247E_41C7_E7A6A5E804CD]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})