TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
  "thumbnailUrl": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_t.jpg",
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
     "id": "panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA",
     "thumbnailUrl": "media/panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_t.jpg",
     "pitch": 0,
     "label": "3",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
       "backwardYaw": 98.16,
       "yaw": 116.86,
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
          "url": "media/panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_1A9E72E2_1485_C41B_41A8_6CF553D73FC9",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6, this.camera_0CEB2168_1EED_B727_41A5_BD3581DDFCE2); this.mainPlayList.set('selectedIndex', 0)",
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
              "url": "media/panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 116.86,
           "hfov": 6.94,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -9.01
          }
         ],
         "items": [
          {
           "yaw": 116.86,
           "hfov": 6.94,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -9.01
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_t.jpg"
      }
     ]
    },
    "backwardYaw": 116.86,
    "yaw": 98.16,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C",
     "thumbnailUrl": "media/panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_t.jpg",
     "pitch": 0,
     "label": "2",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
       "backwardYaw": 143.16,
       "yaw": -20.81,
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
          "url": "media/panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_1A64C44F_148D_CC29_4193_398EAA981FCB",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6, this.camera_0C99E144_1EED_B76F_417C_528D6AA7146C); this.mainPlayList.set('selectedIndex', 0)",
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
              "url": "media/panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -20.81,
           "hfov": 5.54,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -10.14
          }
         ],
         "items": [
          {
           "yaw": -20.81,
           "hfov": 5.54,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 20,
              "url": "media/panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -10.14
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_t.jpg"
      }
     ]
    },
    "backwardYaw": -20.81,
    "yaw": 143.16,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A",
     "thumbnailUrl": "media/panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_t.jpg",
     "pitch": 0,
     "label": "4",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
       "backwardYaw": -37.12,
       "yaw": 164.11,
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
          "url": "media/panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_1A630DAD_1483_5C69_41AA_2EA6CD34C0E6",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6, this.camera_0CFED17E_1EED_B718_4176_460374FB3061); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "width": 12,
              "url": "media/panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 164.11,
           "hfov": 7.02,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -3.38
          }
         ],
         "items": [
          {
           "yaw": 164.11,
           "hfov": 7.02,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 25,
              "url": "media/panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -3.38
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_t.jpg"
      }
     ]
    },
    "backwardYaw": 164.11,
    "yaw": -37.12,
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
       "height": 640,
       "width": 1280,
       "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_194F84D3_148C_CC38_4197_8BE08859F128",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C, this.camera_0CF53197_1EED_B7E8_41A9_5250EF35A1B0); this.mainPlayList.set('selectedIndex', 1)",
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
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 143.16,
        "hfov": 5.61,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.64
       }
      ],
      "items": [
       {
        "yaw": 143.16,
        "hfov": 5.61,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 20,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.64
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_1A94E36A_148C_C4EB_4188_B801C07A7B9C",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
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
           "width": 12,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -0.14,
        "hfov": 6.95,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.86
       }
      ],
      "items": [
       {
        "yaw": -0.14,
        "hfov": 6.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 151,
           "width": 25,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -8.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_195DEDAA_1487_DC6B_41AB_BC93EFFC60EA",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA, this.camera_0CFB7189_1EED_B7F8_41BD_614D62283A79); this.mainPlayList.set('selectedIndex', 2)",
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
           "width": 10,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 98.16,
        "hfov": 5.62,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.67
       }
      ],
      "items": [
       {
        "yaw": 98.16,
        "hfov": 5.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "width": 20,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_1A77B305_1483_4419_41B1_B85600CDA7EA",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A, this.camera_0CCE81A4_1EED_B728_41A5_DA25E8362DD5); this.mainPlayList.set('selectedIndex', 3)",
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
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -37.12,
        "hfov": 5.58,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.89
       }
      ],
      "items": [
       {
        "yaw": -37.12,
        "hfov": 5.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 20,
           "url": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.89
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_t.jpg"
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
   "rollOverIconURL": "skin/IconButton_1873EBAF_1487_4469_41AF_F7296F88ABFF_rollover.png",
   "id": "IconButton_1873EBAF_1487_4469_41AF_F7296F88ABFF",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1873EBAF_1487_4469_41AF_F7296F88ABFF.png",
   "pressedIconURL": "skin/IconButton_1873EBAF_1487_4469_41AF_F7296F88ABFF_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_18735BAF_1487_4469_419D_3D8F5F8B688E",
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
   "id": "IconButton_18738BAF_1487_4469_41B0_3FAC42B1C3CB",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_18738BAF_1487_4469_41B0_3FAC42B1C3CB.png",
   "pressedIconURL": "skin/IconButton_18738BAF_1487_4469_41B0_3FAC42B1C3CB_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_18700BAF_1487_4469_41A1_F955D3B3C404_rollover.png",
   "id": "IconButton_18700BAF_1487_4469_41A1_F955D3B3C404",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_18700BAF_1487_4469_41A1_F955D3B3C404.png",
   "pressedIconURL": "skin/IconButton_18700BAF_1487_4469_41A1_F955D3B3C404_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_18739BAF_1487_4469_4181_1A0E91758039_rollover.png",
   "id": "IconButton_18739BAF_1487_4469_4181_1A0E91758039",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_18739BAF_1487_4469_4181_1A0E91758039.png",
   "pressedIconURL": "skin/IconButton_18739BAF_1487_4469_4181_1A0E91758039_pressed.png",
   "paddingLeft": 0,
   "minHeight": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_18705BAF_1487_4469_41AE_E6031115D353",
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
   "rollOverIconURL": "skin/IconButton_18736BAF_1487_4469_416F_A8EB9C1C9ECC_rollover.png",
   "id": "IconButton_18736BAF_1487_4469_416F_A8EB9C1C9ECC",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_18736BAF_1487_4469_416F_A8EB9C1C9ECC.png",
   "pressedIconURL": "skin/IconButton_18736BAF_1487_4469_416F_A8EB9C1C9ECC_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_1873ABAF_1487_4469_41A8_962E5161E40B_rollover.png",
   "id": "IconButton_1873ABAF_1487_4469_41A8_962E5161E40B",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1873ABAF_1487_4469_41A8_962E5161E40B.png",
   "pressedIconURL": "skin/IconButton_1873ABAF_1487_4469_41A8_962E5161E40B_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_18737BAF_1487_4469_41A2_5E3BDD7DCF30_rollover.png",
   "id": "IconButton_18737BAF_1487_4469_41A2_5E3BDD7DCF30",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_18737BAF_1487_4469_41A2_5E3BDD7DCF30.png",
   "pressedIconURL": "skin/IconButton_18737BAF_1487_4469_41A2_5E3BDD7DCF30_pressed.png",
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
     "yawDelta": 83.55,
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
  "id": "panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": -59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA",
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
  "id": "panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A",
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
  "id": "panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7",
  "thumbnailUrl": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_t.jpg",
  "pitch": 0,
  "label": "5",
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00",
     "thumbnailUrl": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_t.jpg",
     "pitch": 0,
     "label": "6",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965",
        "thumbnailUrl": "media/panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_t.jpg",
        "pitch": 0,
        "label": "7",
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00",
          "backwardYaw": -6.05,
          "yaw": -148.64,
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
             "url": "media/panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_1B37E872_149C_C4FB_417D_B2E7BE65679D",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00, this.camera_0CE54173_1EED_B728_41A5_D40C3BD6131B); this.mainPlayList.set('selectedIndex', 5)",
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
                 "url": "media/panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -148.64,
              "hfov": 6.6,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.28
             }
            ],
            "items": [
             {
              "yaw": -148.64,
              "hfov": 6.6,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -20.28
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_t.jpg"
         }
        ]
       },
       "backwardYaw": -148.64,
       "yaw": -6.05,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7",
       "backwardYaw": -1.83,
       "yaw": 176.48,
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
          "url": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_1A5D1D2D_149C_DC69_419E_EB84FE04588A",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965, this.camera_0C95D14F_1EED_B779_41BE_114A660DD750); this.mainPlayList.set('selectedIndex', 6)",
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
              "url": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -6.05,
           "hfov": 6.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -10.99
          }
         ],
         "items": [
          {
           "yaw": -6.05,
           "hfov": 6.9,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 25,
              "url": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -10.99
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_1B226E2D_149D_3C69_41A0_B5C7807DF7C2",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7, this.camera_0CEF215C_1EED_B71F_41B5_9D5796409781); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "width": 12,
              "url": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 176.48,
           "hfov": 6.75,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -16.34
          }
         ],
         "items": [
          {
           "yaw": 176.48,
           "hfov": 6.75,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "width": 25,
              "url": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_0_HS_1_0.png",
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
       "thumbnailUrl": "media/panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_t.jpg"
      }
     ]
    },
    "backwardYaw": 176.48,
    "yaw": -1.83,
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
       "url": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_1BBDC2F8_1485_C5F6_418B_48BBF9944FC9",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
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
           "width": 12,
           "url": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -148.92,
        "hfov": 7,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.07
       }
      ],
      "items": [
       {
        "yaw": -148.92,
        "hfov": 7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 151,
           "width": 25,
           "url": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.07
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_1BCC42B5_1485_4479_41AF_EEB222F14EB3",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00, this.camera_0C9DF138_1EED_B727_41B5_B5D3868672CD); this.mainPlayList.set('selectedIndex', 5)",
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
           "url": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -1.83,
        "hfov": 6.8,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.65
       }
      ],
      "items": [
       {
        "yaw": -1.83,
        "hfov": 6.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "width": 25,
           "url": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.65
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_t.jpg"
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
  "id": "panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00",
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
  "id": "panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": -59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_camera",
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
    "media": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E3343C2_1485_C41A_4193_2416247EE6C6_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_19CCC7B5_1483_4C79_41AB_97AAD9EA4F8C_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A2800D2_148F_C43A_41A2_CD4C23B373FA_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A8D8434_1485_4C7E_4157_D791A0FE374A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1AF84490_1485_4C37_4194_5E6CB421B3F7_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1A56D17C_1483_C4EE_41B2_C23978BB4E00_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1BC27D14_149D_FC3F_41A7_7FEA1A68B965_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 0)"
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
  "id": "camera_0C9DF138_1EED_B727_41B5_B5D3868672CD",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -3.52,
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
     "yawDelta": 83.55,
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
  "id": "camera_0C99E144_1EED_B76F_417C_528D6AA7146C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -36.84,
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
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": -59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_0C95D14F_1EED_B779_41BE_114A660DD750",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 31.36,
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
  "id": "camera_0CEF215C_1EED_B71F_41B5_9D5796409781",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 178.17,
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
     "yawDelta": 83.55,
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
  "id": "camera_0CEB2168_1EED_B727_41A5_BD3581DDFCE2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -81.84,
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
  "id": "camera_0CE54173_1EED_B728_41A5_D40C3BD6131B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 173.95,
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
     "yawDelta": 83.55,
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
  "id": "camera_0CFED17E_1EED_B718_4176_460374FB3061",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 142.88,
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
  "id": "camera_0CFB7189_1EED_B7F8_41BD_614D62283A79",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -63.14,
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
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "duration": 7500,
     "yawDelta": -59.7,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "duration": 2500,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_0CF53197_1EED_B7E8_41A9_5250EF35A1B0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 159.19,
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
  "id": "camera_0CCE81A4_1EED_B728_41A5_DA25E8362DD5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -15.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_1B4AE986_1483_441B_419A_1E58BF6A4CD2",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_1B4AE986_1483_441B_419A_1E58BF6A4CD2.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_1B4AE986_1483_441B_419A_1E58BF6A4CD2.mp3"
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
  "top": 5,
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
  "width": 110,
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
  "top": 122,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 120,
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
  "left": 1,
  "paddingTop": 10,
  "scrollBarOpacity": 0.5,
  "itemLabelFontStyle": "normal",
  "itemVerticalAlign": "middle",
  "backgroundColorDirection": "vertical"
 },
 {
  "paddingRight": 0,
  "minWidth": 1,
  "width": "4.403%",
  "maxHeight": 500,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "8.043%",
  "top": "2.07%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Image_180D2199_1487_C429_41A3_6AADBA098884",
  "url": "skin/Image_180D2199_1487_C429_41A3_6AADBA098884.png",
  "paddingTop": 0,
  "maxWidth": 500,
  "paddingLeft": 0,
  "minHeight": 1,
  "right": "1.45%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 20,
  "width": 136.05,
  "overflow": "hidden",
  "scrollBarMargin": 2,
  "height": 116,
  "gap": 4,
  "borderSize": 0,
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "bottom": "5.11%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Container_18732BAF_1487_4469_41AD_EB454956343C",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "minHeight": 20,
  "right": "44.75%",
  "layout": "horizontal",
  "children": [
   "this.IconButton_18700BAF_1487_4469_41A1_F955D3B3C404",
   "this.IconButton_1873EBAF_1487_4469_41AF_F7296F88ABFF",
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
    "id": "Container_1873CBAF_1487_4469_4193_1492B95EB0BD",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "minHeight": 20,
    "layout": "vertical",
    "children": [
     "this.IconButton_1873ABAF_1487_4469_41A8_962E5161E40B",
     "this.IconButton_18738BAF_1487_4469_41B0_3FAC42B1C3CB",
     "this.IconButton_18739BAF_1487_4469_4181_1A0E91758039"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_18736BAF_1487_4469_416F_A8EB9C1C9ECC",
   "this.IconButton_18737BAF_1487_4469_41A2_5E3BDD7DCF30"
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
  "bottom": "13.91%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "rollOverIconURL": "skin/IconButton_18735BAF_1487_4469_419D_3D8F5F8B688E_rollover.png",
  "id": "IconButton_18735BAF_1487_4469_419D_3D8F5F8B688E",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_18735BAF_1487_4469_419D_3D8F5F8B688E.png",
  "pressedIconURL": "skin/IconButton_18735BAF_1487_4469_419D_3D8F5F8B688E_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "1.33%",
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
  "bottom": "8.8%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "rollOverIconURL": "skin/IconButton_18705BAF_1487_4469_41AE_E6031115D353_rollover.png",
  "id": "IconButton_18705BAF_1487_4469_41AE_E6031115D353",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_18705BAF_1487_4469_41AE_E6031115D353.png",
  "pressedIconURL": "skin/IconButton_18705BAF_1487_4469_41AE_E6031115D353_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "1.27%",
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
  "bottom": "20.65%",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_18734BAF_1487_4469_41AA_58B2F1FAEE7D",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_18734BAF_1487_4469_41AA_58B2F1FAEE7D.png",
  "pressedIconURL": "skin/IconButton_18734BAF_1487_4469_41AA_58B2F1FAEE7D_pressed.png",
  "paddingLeft": 0,
  "minHeight": 0,
  "right": "1.21%",
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 4,
  "paddingRight": 0,
  "fontSize": 41,
  "minWidth": 1,
  "width": "17.431%",
  "textDecoration": "none",
  "fontFamily": "Lucida Sans Unicode",
  "textShadowColor": "#000000",
  "text": "Aloha Resort",
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "horizontalAlign": "center",
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "top": "4.13%",
  "borderRadius": 0,
  "textShadowHorizontalLength": -2,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "fontColor": "#00CC00",
  "id": "Label_1B3CA489_149F_CC29_4195_4DA80910F9ED",
  "fontStyle": "normal",
  "height": "5.109%",
  "paddingTop": 0,
  "textShadowVerticalLength": 2,
  "left": "6.2%",
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "minWidth": 1,
  "width": "5.066%",
  "maxHeight": 182,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "8.804%",
  "top": "2.17%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "id": "Image_04A6B4EC_149D_4DEE_41A4_150786AB5FB7",
  "url": "skin/Image_04A6B4EC_149D_4DEE_41A4_150786AB5FB7.png",
  "paddingTop": 0,
  "maxWidth": 185,
  "left": "0.9%",
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_18734BAF_1487_4469_41AA_58B2F1FAEE7D",
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
 "start": "this.playAudioList([this.audio_1B4AE986_1483_441B_419A_1E58BF6A4CD2]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 20
})