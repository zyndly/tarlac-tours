TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E",
  "thumbnailUrl": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_t.jpg",
  "pitch": 0,
  "label": "1",
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_12F75260_1C36_05CA_41B0_A518A6E74676",
     "thumbnailUrl": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_t.jpg",
     "pitch": 0,
     "label": "3",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E",
       "backwardYaw": 9,
       "yaw": 96.47,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_1245229D_1C32_057A_41B6_1C1139B8884D",
        "thumbnailUrl": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_t.jpg",
        "pitch": 0,
        "label": "4",
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676",
          "backwardYaw": -97.87,
          "yaw": 136.97,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "panorama": {
           "hfov": 360,
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_117FCC69_1C36_7DDA_419D_8596B17334B8",
           "thumbnailUrl": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_t.jpg",
           "pitch": 0,
           "label": "2",
           "class": "Panorama",
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E",
             "backwardYaw": -59.91,
             "yaw": 154.13,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "panorama": "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D",
             "backwardYaw": -145.12,
             "yaw": 4.78,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 639,
                "width": 1280,
                "url": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_hq.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_126D0C74_1C32_1DCA_41B4_D7ABE6D31C7E",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D, this.camera_0DFE2212_1EAD_F4E8_41A0_55EC0DF9F1D2); this.mainPlayList.set('selectedIndex', 3)",
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
                    "width": 10,
                    "url": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 4.78,
                 "hfov": 5.58,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.32
                }
               ],
               "items": [
                {
                 "yaw": 4.78,
                 "hfov": 5.58,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 119,
                    "width": 20,
                    "url": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_0_HS_0_0.png",
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
               "id": "overlay_12459A10_1C32_054A_41BA_2E067652F1BB",
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E, this.camera_0DC4D207_1EAD_F4E8_41B9_0D9B668567A6); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 54,
                    "width": 10,
                    "url": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 154.13,
                 "hfov": 5.6,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -5.49
                }
               ],
               "items": [
                {
                 "yaw": 154.13,
                 "hfov": 5.6,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 108,
                    "width": 20,
                    "url": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -5.49
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_t.jpg"
            }
           ]
          },
          "backwardYaw": 4.78,
          "yaw": -145.12,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 639,
             "width": 1280,
             "url": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_12FCFB62_1C32_7BC9_41A2_A238FD894F66",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676, this.camera_0DE2A236_1EAD_F528_41BE_9A80494A7AA9); this.mainPlayList.set('selectedIndex', 2)",
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
                 "width": 10,
                 "url": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 136.97,
              "hfov": 5.58,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -7.32
             }
            ],
            "items": [
             {
              "yaw": 136.97,
              "hfov": 5.58,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 20,
                 "url": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_0_HS_0_0.png",
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
            "id": "overlay_1289EFB9_1C4E_1ABA_4192_D522E4796D48",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8, this.camera_0D1BB242_1EAD_F568_41B3_9FB73D0E2DCF); this.mainPlayList.set('selectedIndex', 1)",
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
                 "width": 10,
                 "url": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -145.12,
              "hfov": 5.58,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -7.32
             }
            ],
            "items": [
             {
              "yaw": -145.12,
              "hfov": 5.58,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 20,
                 "url": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -7.32
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1245229D_1C32_057A_41B6_1C1139B8884D_t.jpg"
         }
        ]
       },
       "backwardYaw": 136.97,
       "yaw": -97.87,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 639,
          "width": 1280,
          "url": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_125B8AFF_1C32_1AB6_41B0_F425689E8A6A",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D, this.camera_0DE8A22B_1EAD_F538_41A1_0DF9312568E4); this.mainPlayList.set('selectedIndex', 3)",
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
              "width": 10,
              "url": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -97.87,
           "hfov": 5.59,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.48
          }
         ],
         "items": [
          {
           "yaw": -97.87,
           "hfov": 5.59,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 20,
              "url": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -6.48
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_12AA9D19_1C32_1F7B_41AF_5AC426BD5304",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E, this.camera_0DF6821D_1EAD_F518_41B7_16734EBF224C); this.mainPlayList.set('selectedIndex', 0)",
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
              "width": 10,
              "url": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 96.47,
           "hfov": 5.62,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -2.82
          }
         ],
         "items": [
          {
           "yaw": 96.47,
           "hfov": 5.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 20,
              "url": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.82
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_12F75260_1C36_05CA_41B0_A518A6E74676_t.jpg"
      }
     ]
    },
    "backwardYaw": 96.47,
    "yaw": 9,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8",
    "backwardYaw": 154.13,
    "yaw": -59.91,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_11B96410_1C36_0D4A_41B6_1265B674D8D8",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8, this.camera_0DCC21FC_1EAD_F718_4182_974E77A3F13B); this.mainPlayList.set('selectedIndex', 1)",
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
           "width": 10,
           "url": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -59.91,
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.83
       }
      ],
      "items": [
       {
        "yaw": -59.91,
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 20,
           "url": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.83
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_124A6BF7_1C36_3AB7_4145_11401B4BC19E",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676, this.camera_0DDB71F0_1EAD_F728_41B2_D8F4E87598F2); this.mainPlayList.set('selectedIndex', 2)",
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
           "width": 10,
           "url": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 9,
        "hfov": 5.56,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.45
       }
      ],
      "items": [
       {
        "yaw": 9,
        "hfov": 5.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 20,
           "url": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -8.45
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_t.jpg"
   }
  ]
 },
 {
  "buttonMoveLeft": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 32,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DDCAEF_1C3E_1AD6_418D_A48B7F93FBC2_rollover.png",
   "id": "IconButton_17DDCAEF_1C3E_1AD6_418D_A48B7F93FBC2",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DDCAEF_1C3E_1AD6_418D_A48B7F93FBC2.png",
   "pressedIconURL": "skin/IconButton_17DDCAEF_1C3E_1AD6_418D_A48B7F93FBC2_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_17DD1AEF_1C3E_1AD6_41A2_19A36495FCBF",
  "buttonPause": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "toggle",
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_17DD9AEF_1C3E_1AD6_41A0_DD9593DAF89E",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DD9AEF_1C3E_1AD6_41A0_DD9593DAF89E.png",
   "pressedIconURL": "skin/IconButton_17DD9AEF_1C3E_1AD6_41A0_DD9593DAF89E_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DDFAEF_1C3E_1AD6_41B5_14566C056A3F_rollover.png",
   "id": "IconButton_17DDFAEF_1C3E_1AD6_41B5_14566C056A3F",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DDFAEF_1C3E_1AD6_41B5_14566C056A3F.png",
   "pressedIconURL": "skin/IconButton_17DDFAEF_1C3E_1AD6_41B5_14566C056A3F_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 32,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DD4AEF_1C3E_1AD6_41B7_1FDB0F22432A_rollover.png",
   "id": "IconButton_17DD4AEF_1C3E_1AD6_41B7_1FDB0F22432A",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DD4AEF_1C3E_1AD6_41B7_1FDB0F22432A.png",
   "pressedIconURL": "skin/IconButton_17DD4AEF_1C3E_1AD6_41B7_1FDB0F22432A_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_17DA0AEE_1C3E_1AD6_41BA_F77446C6407C",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveRight": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 32,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DD2AEF_1C3E_1AD6_419A_3CE4EC11FA86_rollover.png",
   "id": "IconButton_17DD2AEF_1C3E_1AD6_419A_3CE4EC11FA86",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DD2AEF_1C3E_1AD6_419A_3CE4EC11FA86.png",
   "pressedIconURL": "skin/IconButton_17DD2AEF_1C3E_1AD6_419A_3CE4EC11FA86_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 32,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DD8AEF_1C3E_1AD6_4184_A9BABA9B9C60_rollover.png",
   "id": "IconButton_17DD8AEF_1C3E_1AD6_4184_A9BABA9B9C60",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DD8AEF_1C3E_1AD6_4184_A9BABA9B9C60.png",
   "pressedIconURL": "skin/IconButton_17DD8AEF_1C3E_1AD6_4184_A9BABA9B9C60_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonPlayRight": {
   "paddingRight": 0,
   "minWidth": 0,
   "width": 20,
   "mode": "push",
   "height": 40,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "transparencyActive": false,
   "cursor": "hand",
   "borderRadius": 0,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "rollOverIconURL": "skin/IconButton_17DD3AEF_1C3E_1AD6_41B1_684166D5A983_rollover.png",
   "id": "IconButton_17DD3AEF_1C3E_1AD6_41B1_684166D5A983",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_17DD3AEF_1C3E_1AD6_41B1_684166D5A983.png",
   "pressedIconURL": "skin/IconButton_17DD3AEF_1C3E_1AD6_41B1_684166D5A983_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
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
  "id": "panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8",
 {
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
  "id": "panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676",
 {
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
  "id": "panorama_12F75260_1C36_05CA_41B0_A518A6E74676_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D",
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
  "id": "panorama_1245229D_1C32_057A_41B6_1C1139B8884D_camera",
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
    "media": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_161DCC28_1C3E_1D5A_41A6_0AF7DEE67E4E_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_117FCC69_1C36_7DDA_419D_8596B17334B8_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12F75260_1C36_05CA_41B0_A518A6E74676_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1245229D_1C32_057A_41B6_1C1139B8884D_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 0)"
   }
  ]
 },
 {
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
  "id": "camera_0DDB71F0_1EAD_F728_41B2_D8F4E87598F2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -83.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
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
  "id": "camera_0DCC21FC_1EAD_F718_4182_974E77A3F13B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -25.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
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
  "id": "camera_0DC4D207_1EAD_F4E8_41B9_0D9B668567A6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 120.09,
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
  "id": "camera_0DFE2212_1EAD_F4E8_41A0_55EC0DF9F1D2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 34.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
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
  "id": "camera_0DF6821D_1EAD_F518_41B7_16734EBF224C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -171,
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
  "id": "camera_0DE8A22B_1EAD_F538_41A1_0DF9312568E4",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -43.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
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
  "id": "camera_0DE2A236_1EAD_F528_41BE_9A80494A7AA9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 82.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
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
  "id": "camera_0D1BB242_1EAD_F568_41B3_9FB73D0E2DCF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -175.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_130327FC_1C4E_0ABA_41B9_E2C6D968A952",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_130327FC_1C4E_0ABA_41B9_E2C6D968A952.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_130327FC_1C4E_0ABA_41B9_E2C6D968A952.mp3"
  }
 }
], "children": [
 {
  "playbackBarBorderRadius": 4,
  "paddingRight": 0,
  "minWidth": 100,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "playbackBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
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
  "minHeight": 50,
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 10,
  "progressLeft": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBorderRadius": 4,
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
  "playbackBarProgressOpacity": 1,
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
  "top": 9,
  "borderRadius": 0,
  "bottom": 5,
  "progressHeight": 20,
  "id": "MainViewer",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
  "left": 0,
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "right": 0,
  "toolTipFontColor": "#606060"
 },
 {
  "itemPaddingTop": 3,
  "paddingLeft": 20,
  "verticalAlign": "top",
  "maxWidth": 800,
  "minHeight": 0,
  "itemLabelFontWeight": "normal",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailOpacity": 1,
  "minWidth": 0,
  "paddingRight": 20,
  "itemThumbnailBorderRadius": 5,
  "playList": "this.thumbnaillist5245_playlist",
  "scrollBarMargin": 2,
  "width": 151,
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "maxHeight": 800,
  "itemHorizontalAlign": "center",
  "borderSize": 0,
  "horizontalAlign": "left",
  "itemPaddingRight": 3,
  "class": "ThumbnailList",
  "itemBackgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "scrollBarWidth": 10,
  "shadow": false,
  "top": 118,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 66,
  "itemBackgroundColorRatios": [],
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundOpacity": 0.2,
  "itemOpacity": 1,
  "itemBackgroundColor": [],
  "itemThumbnailShadowOpacity": 0.8,
  "itemMode": "normal",
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "itemThumbnailHeight": 75,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowBlurRadius": 4,
  "itemThumbnailWidth": 100,
  "layout": "vertical",
  "itemLabelFontSize": 14,
  "left": 5,
  "paddingTop": 10,
  "scrollBarOpacity": 0.5,
  "itemLabelFontStyle": "normal",
  "itemVerticalAlign": "middle",
  "backgroundColorDirection": "vertical"
 },
 {
  "paddingRight": 0,
  "minWidth": 20,
  "width": 200,
  "overflow": "hidden",
  "scrollBarMargin": 2,
  "height": 113,
  "gap": 4,
  "borderSize": 0,
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "bottom": "5.54%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Container_17DCEAEF_1C3E_1AD6_41AD_C8CFBFB68BCF",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "minHeight": 20,
  "right": "42.94%",
  "layout": "horizontal",
  "children": [
   "this.IconButton_17DDFAEF_1C3E_1AD6_41B5_14566C056A3F",
   "this.IconButton_17DDCAEF_1C3E_1AD6_418D_A48B7F93FBC2",
   {
    "paddingRight": 0,
    "minWidth": 20,
    "width": 40,
    "overflow": "hidden",
    "scrollBarMargin": 2,
    "gap": 4,
    "borderSize": 0,
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "height": "100%",
    "borderRadius": 0,
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_17DDAAEF_1C3E_1AD6_41B4_66DF6018DD0E",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "minHeight": 20,
    "layout": "vertical",
    "children": [
     "this.IconButton_17DD8AEF_1C3E_1AD6_4184_A9BABA9B9C60",
     "this.IconButton_17DD9AEF_1C3E_1AD6_41A0_DD9593DAF89E",
     "this.IconButton_17DD4AEF_1C3E_1AD6_41B7_1FDB0F22432A"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_17DD2AEF_1C3E_1AD6_419A_3CE4EC11FA86",
   "this.IconButton_17DD3AEF_1C3E_1AD6_41B1_684166D5A983"
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 0,
  "width": 20,
  "mode": "push",
  "height": 32,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "9.67%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "rollOverIconURL": "skin/IconButton_17DD1AEF_1C3E_1AD6_41A2_19A36495FCBF_rollover.png",
  "id": "IconButton_17DD1AEF_1C3E_1AD6_41A2_19A36495FCBF",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_17DD1AEF_1C3E_1AD6_41A2_19A36495FCBF.png",
  "pressedIconURL": "skin/IconButton_17DD1AEF_1C3E_1AD6_41A2_19A36495FCBF_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "0.9%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 0,
  "width": 20,
  "mode": "push",
  "height": 32,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "4.57%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "rollOverIconURL": "skin/IconButton_17DA0AEE_1C3E_1AD6_41BA_F77446C6407C_rollover.png",
  "id": "IconButton_17DA0AEE_1C3E_1AD6_41BA_F77446C6407C",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_17DA0AEE_1C3E_1AD6_41BA_F77446C6407C.png",
  "pressedIconURL": "skin/IconButton_17DA0AEE_1C3E_1AD6_41BA_F77446C6407C_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "0.84%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 0,
  "width": 20,
  "mode": "toggle",
  "height": 40,
  "borderSize": 0,
  "class": "IconButton",
  "shadow": false,
  "horizontalAlign": "center",
  "transparencyActive": false,
  "cursor": "hand",
  "borderRadius": 0,
  "bottom": "18.7%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_17DD0AEF_1C3E_1AD6_4187_3267BDE0EFFD",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_17DD0AEF_1C3E_1AD6_4187_3267BDE0EFFD.png",
  "pressedIconURL": "skin/IconButton_17DD0AEF_1C3E_1AD6_4187_3267BDE0EFFD_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "0.97%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 1,
  "width": "4.041%",
  "maxHeight": 1090,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "7.391%",
  "top": "3.37%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Image_1042A219_1C32_057A_41A0_23B6E632E0FE",
  "url": "skin/Image_1042A219_1C32_057A_41A0_23B6E632E0FE.jpg",
  "paddingTop": 0,
  "maxWidth": 1100,
  "left": "1.03%",
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 35,
  "minWidth": 1,
  "width": "39.747%",
  "textDecoration": "none",
  "fontFamily": "Times New Roman",
  "textShadowColor": "#000000",
  "text": "Tarlac First Baptist Church Worship Center",
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "horizontalAlign": "center",
  "fontWeight": "normal",
  "textShadowOpacity": 1,
  "top": "4.24%",
  "borderRadius": 0,
  "textShadowHorizontalLength": -2,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "fontColor": "#00CC00",
  "id": "Label_113D2DA7_1C32_FF56_41B7_3144B599203B",
  "fontStyle": "normal",
  "height": "6.63%",
  "paddingTop": 0,
  "textShadowVerticalLength": 2,
  "left": "5.67%",
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 1,
  "width": "4.343%",
  "maxHeight": 500,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "8.043%",
  "top": "2.61%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Image_10566267_1C36_05D6_41B5_29DD4EA6F447",
  "url": "skin/Image_10566267_1C36_05D6_41B5_29DD4EA6F447.png",
  "paddingTop": 0,
  "maxWidth": 500,
  "paddingLeft": 0,
  "minHeight": 1,
  "right": "1.27%",
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_17DD0AEF_1C3E_1AD6_4187_3267BDE0EFFD",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "gap": 10,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } }
 },
 "width": "100%",
 "borderSize": 0,
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "start": "this.playAudioList([this.audio_130327FC_1C4E_0ABA_41B9_E2C6D968A952]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 20
})