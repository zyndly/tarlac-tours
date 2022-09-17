TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE",
  "thumbnailUrl": "media/panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_t.jpg",
  "pitch": 0,
  "label": "Right side of St. Raymund",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_221E4284_376A_89A8_41AB_5D983ADB2F3C",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_2459935B_376A_8F58_41B3_12086A83894E, this.camera_4DAD5C0A_4159_6D73_41CE_719AA4047684); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 57,
           "width": 10,
           "url": "media/panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 115.59,
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.83
       }
      ],
      "items": [
       {
        "yaw": 115.59,
        "hfov": 5.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 20,
           "url": "media/panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.83
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_t.jpg"
   }
  ],
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_2459935B_376A_8F58_41B3_12086A83894E",
     "thumbnailUrl": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_t.jpg",
     "pitch": 0,
     "label": "St. Raymund Church",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 640,
          "width": 1280,
          "url": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_2275761C_3769_88D8_4190_AE5F9F729486",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE, this.camera_4DA1DC22_4159_6DB2_4177_23FE65A5AA18); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "width": 10,
              "url": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -86.91,
           "hfov": 5.62,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -2.39
          }
         ],
         "items": [
          {
           "yaw": -86.91,
           "hfov": 5.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "width": 20,
              "url": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -2.39
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_23E9A308_3769_88B8_41C0_F432155065DB",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A, this.camera_4DA77C15_4159_6D90_41BD_BC7096B518F4); this.mainPlayList.set('selectedIndex', 2)",
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
              "width": 10,
              "url": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 0,
           "hfov": 5.61,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 4.08
          }
         ],
         "items": [
          {
           "yaw": 0,
           "hfov": 5.61,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "width": 20,
              "url": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 4.08
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_2459935B_376A_8F58_41B3_12086A83894E_t.jpg"
      }
     ],
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfov": 360,
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_24580648_376A_88B8_41B0_EC0C4A24590A",
        "thumbnailUrl": "media/panorama_24580648_376A_88B8_41B0_EC0C4A24590A_t.jpg",
        "pitch": 0,
        "label": "St. Raymund Inside",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 639,
             "width": 1280,
             "url": "media/panorama_24580648_376A_88B8_41B0_EC0C4A24590A_hq.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_22568DB5_3776_FBE8_4197_BCCA1CCFB7F4",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_2459935B_376A_8F58_41B3_12086A83894E, this.camera_4D998C2D_4159_6DB1_41B2_76B9D9F7DFBC); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 104,
                 "width": 25,
                 "url": "media/panorama_24580648_376A_88B8_41B0_EC0C4A24590A_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 163.69,
              "hfov": 14.06,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.7
             }
            ],
            "items": [
             {
              "yaw": 163.69,
              "hfov": 14.06,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 208,
                 "width": 50,
                 "url": "media/panorama_24580648_376A_88B8_41B0_EC0C4A24590A_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 0.7
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_24580648_376A_88B8_41B0_EC0C4A24590A_t.jpg"
         }
        ],
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_2459935B_376A_8F58_41B3_12086A83894E",
          "backwardYaw": 0,
          "yaw": 163.69,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": 163.69,
       "yaw": 0,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": "this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE",
       "backwardYaw": 115.59,
       "yaw": -86.91,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": -86.91,
    "yaw": 115.59,
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
   "rollOverIconURL": "skin/IconButton_21E0D041_3716_88A8_41A2_F0FCC8AAEE0D_rollover.png",
   "id": "IconButton_21E0D041_3716_88A8_41A2_F0FCC8AAEE0D",
   "iconURL": "skin/IconButton_21E0D041_3716_88A8_41A2_F0FCC8AAEE0D.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E0D041_3716_88A8_41A2_F0FCC8AAEE0D_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_21E02043_3716_88A8_41BA_5B5E2996BB76",
  "buttonRestart": "this.IconButton_21E0F041_3716_88A8_41BF_CE94E26842D9",
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
   "id": "IconButton_21E09041_3716_88A8_41B3_BFC18501F414",
   "iconURL": "skin/IconButton_21E09041_3716_88A8_41B3_BFC18501F414.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E09041_3716_88A8_41B3_BFC18501F414_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_21E0C041_3716_88A8_41AF_86C7BB0DE356_rollover.png",
   "id": "IconButton_21E0C041_3716_88A8_41AF_86C7BB0DE356",
   "iconURL": "skin/IconButton_21E0C041_3716_88A8_41AF_86C7BB0DE356.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E0C041_3716_88A8_41AF_86C7BB0DE356_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_21E06041_3716_88A8_41BA_550693D9541E_rollover.png",
   "id": "IconButton_21E06041_3716_88A8_41BA_550693D9541E",
   "iconURL": "skin/IconButton_21E06041_3716_88A8_41BA_550693D9541E.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E06041_3716_88A8_41BA_550693D9541E_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_21E0E041_3716_88A8_41CB_1A5212F4FC96",
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
   "rollOverIconURL": "skin/IconButton_21E07041_3716_88A8_41CB_0B9716B0C27C_rollover.png",
   "id": "IconButton_21E07041_3716_88A8_41CB_0B9716B0C27C",
   "iconURL": "skin/IconButton_21E07041_3716_88A8_41CB_0B9716B0C27C.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E07041_3716_88A8_41CB_0B9716B0C27C_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_21E08041_3716_88A8_4166_C9B09106D357_rollover.png",
   "id": "IconButton_21E08041_3716_88A8_4166_C9B09106D357",
   "iconURL": "skin/IconButton_21E08041_3716_88A8_4166_C9B09106D357.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E08041_3716_88A8_4166_C9B09106D357_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_21E04041_3716_88A8_41CB_2D754842C7E6_rollover.png",
   "id": "IconButton_21E04041_3716_88A8_41CB_2D754842C7E6",
   "iconURL": "skin/IconButton_21E04041_3716_88A8_41CB_2D754842C7E6.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_21E04041_3716_88A8_41CB_2D754842C7E6_pressed.png",
   "minHeight": 0,
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 90.84,
   "class": "PanoramaCameraPosition",
   "pitch": 13.68
  },
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
  "automaticZoomSpeed": 10
 },
 "this.panorama_2459935B_376A_8F58_41B3_12086A83894E",
 {
  "id": "panorama_2459935B_376A_8F58_41B3_12086A83894E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -36.26,
   "class": "PanoramaCameraPosition",
   "pitch": 14.23
  },
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
  "automaticZoomSpeed": 10
 },
 "this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A",
 {
  "id": "panorama_24580648_376A_88B8_41B0_EC0C4A24590A_camera",
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
  "automaticZoomSpeed": 10
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2459935B_376A_8F58_41B3_12086A83894E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2459935B_376A_8F58_41B3_12086A83894E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2371DFF5_376A_B768_41A5_50EBDDDB31AE_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2459935B_376A_8F58_41B3_12086A83894E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_2459935B_376A_8F58_41B3_12086A83894E_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_24580648_376A_88B8_41B0_EC0C4A24590A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 0)"
   }
  ]
 },
 {
  "id": "camera_4DAD5C0A_4159_6D73_41CE_719AA4047684",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 93.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4DA77C15_4159_6D90_41BD_BC7096B518F4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -16.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4DA1DC22_4159_6DB2_4177_23FE65A5AA18",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -64.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_4D998C2D_4159_6DB1_41B2_76B9D9F7DFBC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -180,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
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
  "automaticZoomSpeed": 10
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
  "top": 0,
  "borderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 20,
  "bottom": 0,
  "id": "MainViewer",
  "playbackBarBorderSize": 2,
  "toolTipPaddingRight": 6,
  "left": 0,
  "toolTipFontStyle": "normal",
  "right": 0,
  "toolTipFontColor": "#606060"
 },
 {
  "itemThumbnailShadowVerticalLength": 3,
  "paddingRight": 20,
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarMargin": 1,
  "itemLabelTextDecoration": "none",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorRatios": [],
  "itemThumbnailShadowSpread": 1,
  "selectedItemLabelFontWeight": "bold",
  "maxWidth": 800,
  "itemThumbnailHeight": 75,
  "shadow": false,
  "horizontalAlign": "left",
  "itemBorderRadius": 0,
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarWidth": 5,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowOpacity": 0.8,
  "itemMode": "normal",
  "scrollBarColor": "#FFFFFF",
  "itemPaddingLeft": 3,
  "scrollBarVisible": "rollOver",
  "paddingTop": 10,
  "itemThumbnailScaleMode": "fit_outside",
  "minHeight": 0,
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowBlurRadius": 4,
  "itemPaddingTop": 3,
  "itemLabelFontSize": 14,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontWeight": "normal",
  "minWidth": 0,
  "paddingLeft": 20,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "borderSize": 0,
  "class": "ThumbnailList",
  "layout": "vertical",
  "itemBackgroundOpacity": 0,
  "itemLabelGap": 5,
  "top": "14.67%",
  "itemBackgroundColor": [],
  "borderRadius": 0,
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "bottom": 93,
  "itemLabelPosition": "bottom",
  "id": "thumbnaillist5245",
  "maxHeight": 800,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailShadow": true,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "itemVerticalAlign": "middle",
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowColor": "#000000",
  "right": 1607,
  "verticalAlign": "top",
  "left": "0%"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 307.19,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "paddingLeft": 0,
  "height": 132.03,
  "gap": 4,
  "borderSize": 0,
  "class": "Container",
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "bottom": "2.07%",
  "id": "Container_21E03043_3716_88A8_41C9_DC67CE16CE17",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "minHeight": 20,
  "left": "39.37%",
  "backgroundOpacity": 0,
  "children": [
   "this.IconButton_21E0C041_3716_88A8_41AF_86C7BB0DE356",
   "this.IconButton_21E0D041_3716_88A8_41A2_F0FCC8AAEE0D",
   {
    "children": [
     "this.IconButton_21E08041_3716_88A8_4166_C9B09106D357",
     "this.IconButton_21E09041_3716_88A8_41B3_BFC18501F414",
     "this.IconButton_21E06041_3716_88A8_41BA_550693D9541E"
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
    "id": "Container_21E0A041_3716_88A8_41C2_F0B920FD7763",
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "minHeight": 20,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   "this.IconButton_21E07041_3716_88A8_41CB_0B9716B0C27C",
   "this.IconButton_21E04041_3716_88A8_41CB_2D754842C7E6"
  ],
  "verticalAlign": "middle"
 },
 {
  "textShadowBlurRadius": 4,
  "paddingRight": 0,
  "fontSize": 50,
  "width": 433.05,
  "textShadowVerticalLength": 4,
  "minWidth": 10,
  "paddingLeft": 0,
  "textDecoration": "none",
  "fontFamily": "Lucida Sans Unicode",
  "textShadowColor": "#000000",
  "text": "St. Raymund",
  "borderSize": 0,
  "class": "Label",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": -2,
  "fontWeight": "normal",
  "textShadowOpacity": 1,
  "top": "1.72%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "fontColor": "#00CC00",
  "id": "Label_209CB85C_3729_9958_41BE_CBDCF07224E1",
  "fontStyle": "normal",
  "height": "12.391%",
  "paddingTop": 0,
  "minHeight": 1,
  "left": "1.39%",
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 },
 {
  "right": "0%",
  "paddingRight": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "url": "skin/Image_20F2FB4F_3736_F8B8_41C9_44D9D8102D8B.png",
  "width": "9.771%",
  "borderSize": 0,
  "maxWidth": 500,
  "class": "Image",
  "scaleMode": "fit_inside",
  "height": "10.761%",
  "top": "3.37%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "shadow": false,
  "id": "Image_20F2FB4F_3736_F8B8_41C9_44D9D8102D8B",
  "paddingTop": 0,
  "maxHeight": 500,
  "minHeight": 1,
  "backgroundOpacity": 0,
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
  "bottom": "11.74%",
  "rollOverIconURL": "skin/IconButton_21E0E041_3716_88A8_41CB_1A5212F4FC96_rollover.png",
  "id": "IconButton_21E0E041_3716_88A8_41CB_1A5212F4FC96",
  "iconURL": "skin/IconButton_21E0E041_3716_88A8_41CB_1A5212F4FC96.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_21E0E041_3716_88A8_41CB_1A5212F4FC96_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.16%",
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
  "bottom": "16.64%",
  "rollOverIconURL": "skin/IconButton_21E02043_3716_88A8_41BA_5B5E2996BB76_rollover.png",
  "id": "IconButton_21E02043_3716_88A8_41BA_5B5E2996BB76",
  "iconURL": "skin/IconButton_21E02043_3716_88A8_41BA_5B5E2996BB76.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_21E02043_3716_88A8_41BA_5B5E2996BB76_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.22%",
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
  "bottom": "29.03%",
  "id": "IconButton_21E05041_3716_88A8_41C4_0559086F5B61",
  "iconURL": "skin/IconButton_21E05041_3716_88A8_41C4_0559086F5B61.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_21E05041_3716_88A8_41C4_0559086F5B61_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.28%",
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
  "bottom": "7.07%",
  "rollOverIconURL": "skin/IconButton_21E0F041_3716_88A8_41BF_CE94E26842D9_rollover.png",
  "id": "IconButton_21E0F041_3716_88A8_41BF_CE94E26842D9",
  "iconURL": "skin/IconButton_21E0F041_3716_88A8_41BF_CE94E26842D9.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_21E0F041_3716_88A8_41BF_CE94E26842D9_pressed.png",
  "minHeight": 0,
  "backgroundOpacity": 0,
  "right": "1.16%",
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_21E05041_3716_88A8_41C4_0559086F5B61",
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
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})