TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_367AF062_3ADD_92B5_41CA_813636B1C427",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_3790924C_3ADD_768D_41C0_00AFB414C48E",
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
           "height": 99,
           "width": 12,
           "url": "media/panorama_367AF062_3ADD_92B5_41CA_813636B1C427_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 168.31,
        "hfov": 6.26,
        "pitch": -27.12
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0, this.camera_51341E0D_4152_1D0E_41AB_6F0CD85988EE); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 168.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.26,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 198,
           "width": 25,
           "url": "media/panorama_367AF062_3ADD_92B5_41CA_813636B1C427_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -27.12
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_367AF062_3ADD_92B5_41CA_813636B1C427_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_367AF062_3ADD_92B5_41CA_813636B1C427_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_367AF062_3ADD_92B5_41CA_813636B1C427_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Municipality of Anao",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_34E6D247_3ADD_B6FB_41B4_ED309D53256C",
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
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -57.78,
           "hfov": 7,
           "pitch": -5.81
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427, this.camera_513EFDFF_4152_1F0A_41AE_A72602E79672); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -57.78,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -5.81
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_34C4D0E6_3AD2_93BA_41C3_2466C8EB2C32",
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
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 59.63,
           "hfov": 7,
           "pitch": -5.48
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
           "yaw": 59.63,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -5.48
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_34A0A467_3AD3_92BA_41C3_B6F57CFE3AC3",
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
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -107.59,
           "hfov": 6.97,
           "pitch": -7.75
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
           "yaw": -107.59,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.97,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -7.75
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_34301CA4_3AD2_93BD_41B3_FB72D1C9EA32",
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
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "yaw": 107.83,
           "hfov": 6.97,
           "pitch": -7.43
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
           "yaw": 107.83,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.97,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -7.43
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 639,
          "width": 1280,
          "url": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_hq.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "Municipality of Anao Right",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427",
       "backwardYaw": 168.31,
       "yaw": -57.78,
       "distance": 1
      }
     ]
    },
    "backwardYaw": -57.78,
    "yaw": 168.31,
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
   "id": "IconButton_36557A40_3AD7_96F5_41C8_9E1A9D61BE4B",
   "rollOverIconURL": "skin/IconButton_36557A40_3AD7_96F5_41C8_9E1A9D61BE4B_rollover.png",
   "iconURL": "skin/IconButton_36557A40_3AD7_96F5_41C8_9E1A9D61BE4B.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36557A40_3AD7_96F5_41C8_9E1A9D61BE4B_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_36AADA3F_3AD7_968B_41B8_46B8522349BE",
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
   "id": "IconButton_3655BA40_3AD7_96F5_41AB_6D2F47447532",
   "rollOverIconURL": "skin/IconButton_3655BA40_3AD7_96F5_41AB_6D2F47447532_rollover.png",
   "iconURL": "skin/IconButton_3655BA40_3AD7_96F5_41AB_6D2F47447532.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_3655BA40_3AD7_96F5_41AB_6D2F47447532_pressed.png",
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
   "id": "IconButton_36553A40_3AD7_96F5_41BC_4CFDD5ACA211",
   "rollOverIconURL": "skin/IconButton_36553A40_3AD7_96F5_41BC_4CFDD5ACA211_rollover.png",
   "iconURL": "skin/IconButton_36553A40_3AD7_96F5_41BC_4CFDD5ACA211.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36553A40_3AD7_96F5_41BC_4CFDD5ACA211_pressed.png",
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
   "id": "IconButton_36556A40_3AD7_96F5_41C4_ADCDC847EA57",
   "iconURL": "skin/IconButton_36556A40_3AD7_96F5_41C4_ADCDC847EA57.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36556A40_3AD7_96F5_41C4_ADCDC847EA57_pressed.png",
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
   "id": "IconButton_36555A40_3AD7_96F5_41B3_96E4519F6CDE",
   "rollOverIconURL": "skin/IconButton_36555A40_3AD7_96F5_41B3_96E4519F6CDE_rollover.png",
   "iconURL": "skin/IconButton_36555A40_3AD7_96F5_41B3_96E4519F6CDE.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36555A40_3AD7_96F5_41B3_96E4519F6CDE_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_3655DA40_3AD7_96F5_41C7_519F67947318",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_36AACA3F_3AD7_968B_41C3_F400D9D2736F",
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
   "id": "IconButton_36551A40_3AD7_96F5_41C1_1C71B89362A0",
   "rollOverIconURL": "skin/IconButton_36551A40_3AD7_96F5_41C1_1C71B89362A0_rollover.png",
   "iconURL": "skin/IconButton_36551A40_3AD7_96F5_41C1_1C71B89362A0.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36551A40_3AD7_96F5_41C1_1C71B89362A0_pressed.png",
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
   "id": "IconButton_36559A40_3AD7_96F5_4193_DDD03BD67946",
   "rollOverIconURL": "skin/IconButton_36559A40_3AD7_96F5_4193_DDD03BD67946_rollover.png",
   "iconURL": "skin/IconButton_36559A40_3AD7_96F5_4193_DDD03BD67946.png",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_36559A40_3AD7_96F5_4193_DDD03BD67946_pressed.png",
   "class": "IconButton",
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "id": "panorama_367AF062_3ADD_92B5_41CA_813636B1C427_camera",
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
 "this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0",
 {
  "id": "panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_camera",
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
  "id": "panorama_340E9186_3AD3_927D_41B0_1646A5E68745",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_34B9CCFE_3AD5_F38A_4180_ED2C9A954196",
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
           "url": "media/panorama_340E9186_3AD3_927D_41B0_1646A5E68745_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 67.4,
        "hfov": 6.92,
        "pitch": -10.02
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
        "yaw": 67.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_340E9186_3AD3_927D_41B0_1646A5E68745_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -10.02
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_340E9186_3AD3_927D_41B0_1646A5E68745_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_340E9186_3AD3_927D_41B0_1646A5E68745_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_340E9186_3AD3_927D_41B0_1646A5E68745_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Court",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "id": "panorama_340E9186_3AD3_927D_41B0_1646A5E68745_camera",
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
  "id": "panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_34A8DC25_3AD7_92BF_41C3_4F63BECCDDD3",
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
           "url": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 22.11,
        "hfov": 6.93,
        "pitch": -9.69
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "items": [
       {
        "yaw": 22.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.93,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -9.69
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_343E7C21_3AD7_72B6_41C0_123D64579564",
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
           "url": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": -115.35,
        "hfov": 6.93,
        "pitch": -9.69
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
        "yaw": -115.35,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.93,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -9.69
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Right Side Court",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "id": "panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_camera",
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
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_3444C4E9_3AD2_93B7_41C6_A4D490001758",
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
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -2.14,
        "hfov": 7,
        "pitch": -5.16
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "items": [
       {
        "yaw": -2.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -5.16
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_345C5481_3AD3_F277_41BB_416DA02F2B8E",
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
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": 95.86,
        "hfov": 6.87,
        "pitch": -12.29
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
        "yaw": 95.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 25,
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -12.29
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_34E463D9_3AD2_9597_41B3_7A55CF3F6845",
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
           "height": 27,
           "width": 12,
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "yaw": 175.43,
        "hfov": 6.82,
        "pitch": -14
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F, this.camera_5115EDD5_4152_1F1E_41B9_46EF235609A2); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "yaw": 175.43,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 55,
           "width": 25,
           "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -14
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 639,
       "width": 1280,
       "url": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_hq.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "Left Side Court",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_34C65CE4_3AEE_93BD_41B7_49DE64B58AF3",
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
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": 0.12,
           "hfov": 7,
           "pitch": -5.81
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A, this.camera_51D93E48_4152_1D76_4184_89C753C4834A); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "items": [
          {
           "yaw": 0.12,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -5.81
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_3578E885_3AF5_727F_41A8_C1B3E1A122E8",
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
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": -105.33,
           "hfov": 6.94,
           "pitch": -9.37
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922, this.camera_512C6E1A_4152_1D0A_41C4_6EA5A0C50760); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "items": [
          {
           "yaw": -105.33,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -9.37
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_353DEA1D_3AF2_968E_41A6_8446433A6EA7",
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
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -76.21,
           "hfov": 6.91,
           "pitch": -10.67
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528, this.camera_51227E33_4152_1D1A_41A4_5CD9165BB7C1); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "items": [
          {
           "yaw": -76.21,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 25,
              "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -10.67
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 639,
          "width": 1280,
          "url": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_hq.jpeg"
         }
        ]
       }
      }
     ],
     "thumbnailUrl": "media/panorama_35FDD545_3AED_92FF_41C5_87458E47163F_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "Front of Plaza",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_35278F52_3AF6_8E9A_41AD_D2A06FBE9D6C",
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
                 "url": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": 70.31,
              "hfov": 6.93,
              "pitch": -9.69
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134, this.camera_510FEDE3_4152_1F3A_41C4_D4C3BC696A97); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "items": [
             {
              "yaw": 70.31,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -9.69
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_2A668AAA_3AF5_77B5_41B7_0D77EC9E3788",
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
                 "url": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -118.59,
              "hfov": 6.99,
              "pitch": -6.13
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F, this.camera_5108FDF1_4152_1F16_41CE_3BCA00E69D1F); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": -118.59,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -6.13
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 639,
             "width": 1280,
             "url": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_hq.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "Front of Ylang Ylang",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "hfovMax": 120,
           "id": "panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_2AA8FF77_3AF6_8E9B_41B6_75D309F4CBED",
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
                    "url": "media/panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -104.68,
                 "hfov": 6.86,
                 "pitch": -12.61
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922, this.camera_511A6DC1_4152_1F76_41C0_37F5F92571D1); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "items": [
                {
                 "yaw": -104.68,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 119,
                    "width": 25,
                    "url": "media/panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -12.61
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 639,
                "width": 1280,
                "url": "media/panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_hq.jpeg"
               }
              ]
             }
            }
           ],
           "thumbnailUrl": "media/panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "Right Side",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922",
             "backwardYaw": 70.31,
             "yaw": -104.68,
             "distance": 1
            }
           ]
          },
          "backwardYaw": -104.68,
          "yaw": 70.31,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
          "backwardYaw": -105.33,
          "yaw": -118.59,
          "distance": 1
         }
        ]
       },
       "backwardYaw": -118.59,
       "yaw": -105.33,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528",
       "backwardYaw": 175.43,
       "yaw": -76.21,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_34CD86AC_3AEF_9F8D_4190_2F57C6061C36",
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
                 "url": "media/panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": 176.72,
              "hfov": 6.8,
              "pitch": -14.88
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F, this.camera_511FDDB3_4152_1F1A_41CD_245BD32B85E7); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "yaw": 176.72,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.8,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 25,
                 "url": "media/panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -14.88
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 639,
             "width": 1280,
             "url": "media/panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_hq.jpeg"
            }
           ]
          }
         }
        ],
        "thumbnailUrl": "media/panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "Inside",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
          "backwardYaw": 0.12,
          "yaw": 176.72,
          "distance": 1
         }
        ]
       },
       "backwardYaw": 176.72,
       "yaw": 0.12,
       "distance": 1
      }
     ]
    },
    "backwardYaw": -76.21,
    "yaw": 175.43,
    "distance": 1
   }
  ]
 },
 {
  "id": "panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_camera",
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
 "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
 {
  "id": "panorama_35FDD545_3AED_92FF_41C5_87458E47163F_camera",
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
 "this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A",
 {
  "id": "panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_camera",
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
 "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922",
 {
  "id": "panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_camera",
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
 "this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134",
 {
  "id": "panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_camera",
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
    "media": "this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_340E9186_3AD3_927D_41B0_1646A5E68745",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_340E9186_3AD3_927D_41B0_1646A5E68745_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_367AF062_3ADD_92B5_41CA_813636B1C427_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3678DDDE_3ADD_8D8D_41B2_F6796AD12DE0_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_340E9186_3AD3_927D_41B0_1646A5E68745",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_340E9186_3AD3_927D_41B0_1646A5E68745_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_34E10388_3AD6_F676_41C8_CB22D7CDB44C_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35E2592F_3AD5_928A_41C6_CB5DAF41C528_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35FDD545_3AED_92FF_41C5_87458E47163F_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_3412D34C_3AEF_B68D_41AB_11FDD52E072A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35572DB2_3AF5_8D95_4183_EBCAE75DF922_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35B60CD6_3AF6_B39D_41C3_640A343E5134_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 0)"
   }
  ]
 },
 {
  "id": "camera_511FDDB3_4152_1F1A_41CD_245BD32B85E7",
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
   "yaw": -179.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_511A6DC1_4152_1F76_41C0_37F5F92571D1",
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
   "yaw": -109.69,
   "pitch": 0
  }
 },
 {
  "id": "camera_5115EDD5_4152_1F1E_41B9_46EF235609A2",
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
   "yaw": 103.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_510FEDE3_4152_1F3A_41C4_D4C3BC696A97",
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
   "yaw": 75.32,
   "pitch": 0
  }
 },
 {
  "id": "camera_5108FDF1_4152_1F16_41CE_3BCA00E69D1F",
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
   "yaw": 74.67,
   "pitch": 0
  }
 },
 {
  "id": "camera_513EFDFF_4152_1F0A_41AE_A72602E79672",
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
   "yaw": -11.69,
   "pitch": 0
  }
 },
 {
  "id": "camera_51341E0D_4152_1D0E_41AB_6F0CD85988EE",
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
   "yaw": 122.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_512C6E1A_4152_1D0A_41C4_6EA5A0C50760",
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
   "yaw": 61.41,
   "pitch": 0
  }
 },
 {
  "id": "camera_51227E33_4152_1D1A_41A4_5CD9165BB7C1",
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
   "yaw": -4.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_51D93E48_4152_1D76_4184_89C753C4834A",
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
   "yaw": -3.28,
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
  "top": 9,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": 12,
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
  "width": 180,
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
  "top": 118,
  "itemBorderRadius": 0,
  "bottom": 66,
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
  "left": 3,
  "itemThumbnailShadowColor": "#000000"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "height": 153.05,
  "width": 216,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "gap": 4,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 20,
  "shadow": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "bottom": "3.87%",
  "paddingBottom": 0,
  "minWidth": 20,
  "backgroundOpacity": 0,
  "id": "Container_3655CA40_3AD7_96F5_41BF_B923587AFAA0",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "layout": "horizontal",
  "class": "Container",
  "contentOpaque": false,
  "right": "41.85%",
  "children": [
   "this.IconButton_36553A40_3AD7_96F5_41BC_4CFDD5ACA211",
   "this.IconButton_36551A40_3AD7_96F5_41C1_1C71B89362A0",
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
    "id": "Container_36550A40_3AD7_96F5_41CC_A6A95454E4F4",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "contentOpaque": false,
    "layout": "vertical",
    "class": "Container",
    "children": [
     "this.IconButton_36557A40_3AD7_96F5_41C8_9E1A9D61BE4B",
     "this.IconButton_36556A40_3AD7_96F5_41C4_ADCDC847EA57",
     "this.IconButton_36555A40_3AD7_96F5_41B3_96E4519F6CDE"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_3655BA40_3AD7_96F5_41AB_6D2F47447532",
   "this.IconButton_36559A40_3AD7_96F5_4193_DDD03BD67946"
  ],
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
  "bottom": "4.54%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_3655EA40_3AD7_96F5_41BE_1A6891A74E12",
  "iconURL": "skin/IconButton_3655EA40_3AD7_96F5_41BE_1A6891A74E12.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_3655EA40_3AD7_96F5_41BE_1A6891A74E12_pressed.png",
  "class": "IconButton",
  "right": "1.79%",
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
  "bottom": "20.27%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_3655DA40_3AD7_96F5_41C7_519F67947318",
  "rollOverIconURL": "skin/IconButton_3655DA40_3AD7_96F5_41C7_519F67947318_rollover.png",
  "iconURL": "skin/IconButton_3655DA40_3AD7_96F5_41C7_519F67947318.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_3655DA40_3AD7_96F5_41C7_519F67947318_pressed.png",
  "class": "IconButton",
  "right": "1.94%",
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
  "bottom": "12.81%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_36AADA3F_3AD7_968B_41B8_46B8522349BE",
  "rollOverIconURL": "skin/IconButton_36AADA3F_3AD7_968B_41B8_46B8522349BE_rollover.png",
  "iconURL": "skin/IconButton_36AADA3F_3AD7_968B_41B8_46B8522349BE.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_36AADA3F_3AD7_968B_41B8_46B8522349BE_pressed.png",
  "class": "IconButton",
  "right": "1.87%",
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
  "bottom": "29.87%",
  "paddingBottom": 0,
  "minWidth": 0,
  "backgroundOpacity": 0,
  "id": "IconButton_36AACA3F_3AD7_968B_41C3_F400D9D2736F",
  "rollOverIconURL": "skin/IconButton_36AACA3F_3AD7_968B_41C3_F400D9D2736F_rollover.png",
  "iconURL": "skin/IconButton_36AACA3F_3AD7_968B_41C3_F400D9D2736F.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_36AACA3F_3AD7_968B_41C3_F400D9D2736F_pressed.png",
  "class": "IconButton",
  "right": "2.02%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "fontSize": 30,
  "borderRadius": 0,
  "height": "9.867%",
  "fontFamily": "Times New Roman",
  "text": "Municipality of Anao",
  "textDecoration": "none",
  "fontStyle": "normal",
  "width": "23.617%",
  "paddingLeft": 0,
  "minHeight": 1,
  "shadow": false,
  "borderSize": 0,
  "horizontalAlign": "center",
  "top": "3.87%",
  "fontWeight": "bold",
  "paddingBottom": 0,
  "minWidth": 1,
  "fontColor": "#00FF66",
  "backgroundOpacity": 0,
  "id": "Label_2BD403C6_3AF2_95FD_41C7_B248C819D553",
  "paddingTop": 0,
  "class": "Label",
  "left": "0.9%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "maxWidth": 500,
  "maxHeight": 500,
  "borderRadius": 0,
  "height": "14.667%",
  "url": "skin/Image_519B772C_4156_EB0E_41BA_84F1C4F23AC5.png",
  "horizontalAlign": "center",
  "width": "9.791%",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "shadow": false,
  "scaleMode": "fit_inside",
  "top": "2.27%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "id": "Image_519B772C_4156_EB0E_41BA_84F1C4F23AC5",
  "paddingTop": 0,
  "class": "Image",
  "right": "0%",
  "verticalAlign": "middle"
 }
], 
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_3655EA40_3AD7_96F5_41BE_1A6891A74E12",
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