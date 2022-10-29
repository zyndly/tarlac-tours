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
       "url": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_119C10C0_1D4B_9B4F_41A8_197167D718F4",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
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
           "url": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 109.12,
        "hfov": 6.96,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.44
       }
      ],
      "items": [
       {
        "yaw": 109.12,
        "hfov": 6.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -8.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_10F88D8C_1D4B_85D7_41B1_0B381F16057B",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640, this.camera_3F59C10A_1E3E_A644_41B8_96D44A10AE9B); this.mainPlayList.set('selectedIndex', 1)",
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
           "url": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -102.41,
        "hfov": 6.98,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.82
       }
      ],
      "items": [
       {
        "yaw": -102.41,
        "hfov": 6.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_t.jpg"
   }
  ],
  "hfov": 360,
  "partial": false,
  "hfovMax": 150,
  "id": "panorama_17E98566_1D45_8550_4192_DF72A3D3E89D",
  "thumbnailUrl": "media/panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_t.jpg",
  "pitch": 0,
  "label": "Town hall",
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
          "url": "media/panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_135202A6_1D4D_9FD0_41A7_9DEC1D3D1492",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D, this.camera_3F5C412C_1E3E_A65C_41BC_72365EC0857B); this.mainPlayList.set('selectedIndex', 0)",
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
              "url": "media/panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 15,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.55
          }
         ],
         "items": [
          {
           "yaw": 15,
           "hfov": 7.01,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 25,
              "width": 25,
              "url": "media/panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -4.55
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_t.jpg"
      }
     ],
     "hfov": 360,
     "partial": false,
     "hfovMax": 150,
     "id": "panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640",
     "thumbnailUrl": "media/panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_t.jpg",
     "pitch": 0,
     "label": "Left side Gate",
     "class": "Panorama",
     "hfovMin": 150,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D",
       "backwardYaw": -102.41,
       "yaw": 15,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 15,
    "yaw": -102.41,
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
   "rollOverIconURL": "skin/IconButton_1334149D_1D4D_FBF0_41B3_7C732920200C_rollover.png",
   "id": "IconButton_1334149D_1D4D_FBF0_41B3_7C732920200C",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334149D_1D4D_FBF0_41B3_7C732920200C.png",
   "pressedIconURL": "skin/IconButton_1334149D_1D4D_FBF0_41B3_7C732920200C_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomIn": "this.IconButton_1334B49D_1D4D_FBF0_41BA_32DCB604CAE3",
  "buttonRestart": "this.IconButton_1334649D_1D4D_FBF0_4195_CC02EC1A1451",
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
   "id": "IconButton_1334D49D_1D4D_FBF0_41AC_106DE65EDF86",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334D49D_1D4D_FBF0_41AC_106DE65EDF86.png",
   "pressedIconURL": "skin/IconButton_1334D49D_1D4D_FBF0_41AC_106DE65EDF86_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_1334749D_1D4D_FBF0_41A4_65D39E42B755_rollover.png",
   "id": "IconButton_1334749D_1D4D_FBF0_41A4_65D39E42B755",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334749D_1D4D_FBF0_41A4_65D39E42B755.png",
   "pressedIconURL": "skin/IconButton_1334749D_1D4D_FBF0_41A4_65D39E42B755_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_1334E49D_1D4D_FBF0_41B0_CD47835DD31E_rollover.png",
   "id": "IconButton_1334E49D_1D4D_FBF0_41B0_CD47835DD31E",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334E49D_1D4D_FBF0_41B0_CD47835DD31E.png",
   "pressedIconURL": "skin/IconButton_1334E49D_1D4D_FBF0_41B0_CD47835DD31E_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle"
  },
  "buttonZoomOut": "this.IconButton_1334549D_1D4D_FBF0_41B4_3A39215B8227",
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
   "rollOverIconURL": "skin/IconButton_1334F49D_1D4D_FBF0_41B6_0C374761D0A1_rollover.png",
   "id": "IconButton_1334F49D_1D4D_FBF0_41B6_0C374761D0A1",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334F49D_1D4D_FBF0_41B6_0C374761D0A1.png",
   "pressedIconURL": "skin/IconButton_1334F49D_1D4D_FBF0_41B6_0C374761D0A1_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_1334C49D_1D4D_FBF0_41A2_420DBAE2931C_rollover.png",
   "id": "IconButton_1334C49D_1D4D_FBF0_41A2_420DBAE2931C",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334C49D_1D4D_FBF0_41A2_420DBAE2931C.png",
   "pressedIconURL": "skin/IconButton_1334C49D_1D4D_FBF0_41A2_420DBAE2931C_pressed.png",
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
   "rollOverIconURL": "skin/IconButton_1334849D_1D4D_FBF0_4185_3018921AE337_rollover.png",
   "id": "IconButton_1334849D_1D4D_FBF0_4185_3018921AE337",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1334849D_1D4D_FBF0_4185_3018921AE337.png",
   "pressedIconURL": "skin/IconButton_1334849D_1D4D_FBF0_4185_3018921AE337_pressed.png",
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
  "id": "panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640",
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
  "id": "panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_camera",
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
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_17579E54_1D44_8770_4194_B6DB22FF104C_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_1363B5CA_1D4C_8553_41AA_3EF7F9A7F3FD",
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
           "height": 12,
           "width": 12,
           "url": "media/panorama_17579E54_1D44_8770_4194_B6DB22FF104C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -25.43,
        "hfov": 6.97,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.47
       }
      ],
      "items": [
       {
        "yaw": -25.43,
        "hfov": 6.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "width": 25,
           "url": "media/panorama_17579E54_1D44_8770_4194_B6DB22FF104C_0_HS_0_0.png",
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
    "thumbnailUrl": "media/panorama_17579E54_1D44_8770_4194_B6DB22FF104C_t.jpg"
   }
  ],
  "hfovMax": 150,
  "partial": false,
  "id": "panorama_17579E54_1D44_8770_4194_B6DB22FF104C",
  "thumbnailUrl": "media/panorama_17579E54_1D44_8770_4194_B6DB22FF104C_t.jpg",
  "pitch": 0,
  "label": "Right side Gate",
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
  "id": "panorama_17579E54_1D44_8770_4194_B6DB22FF104C_camera",
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
    "media": "this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_17579E54_1D44_8770_4194_B6DB22FF104C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17579E54_1D44_8770_4194_B6DB22FF104C_camera",
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
    "media": "this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17E98566_1D45_8550_4192_DF72A3D3E89D_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17777BBE_1D45_8D30_41B6_F4BDF4A5E640_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_17579E54_1D44_8770_4194_B6DB22FF104C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_17579E54_1D44_8770_4194_B6DB22FF104C_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 0)"
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
  "id": "camera_3F59C10A_1E3E_A644_41B8_96D44A10AE9B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": -165,
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
  "id": "camera_3F5C412C_1E3E_A65C_41BC_72365EC0857B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 150,
   "yaw": 77.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_0923DD97_1DE3_460B_41B6_D935B496C45F",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_0923DD97_1DE3_460B_41B6_D935B496C45F.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_0923DD97_1DE3_460B_41B6_D935B496C45F.mp3"
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
  "itemVerticalAlign": "middle",
  "verticalAlign": "top",
  "itemLabelFontWeight": "normal",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailOpacity": 1,
  "playList": "this.thumbnaillist5245_playlist",
  "paddingRight": 20,
  "paddingLeft": 20,
  "scrollBarMargin": 2,
  "width": 151,
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "itemThumbnailShadowVerticalLength": 3,
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
  "top": 184,
  "itemBorderRadius": 0,
  "borderRadius": 5,
  "bottom": 196,
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
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "scrollBarOpacity": 0.5,
  "itemThumbnailHeight": 75,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowBlurRadius": 4,
  "itemPaddingTop": 3,
  "itemLabelFontSize": 14,
  "left": 2,
  "paddingTop": 10,
  "itemPaddingLeft": 3,
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontStyle": "normal",
  "maxWidth": 800,
  "backgroundColorDirection": "vertical"
 },
 {
  "textShadowBlurRadius": 3,
  "paddingRight": 0,
  "fontSize": 40,
  "width": 284,
  "paddingLeft": 0,
  "height": 49,
  "textDecoration": "none",
  "fontFamily": "Times New Roman",
  "textShadowColor": "#000000",
  "text": "Paniqui Center",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "textShadowVerticalLength": 1,
  "top": 16,
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
  "left": 89,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "overflow": "hidden",
  "width": 156.05,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "height": 143,
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
  "id": "Container_13CB449E_1D4D_FBF0_41AC_FD309279039E",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "horizontalAlign": "center",
  "left": "44.02%",
  "children": [
   "this.IconButton_1334749D_1D4D_FBF0_41A4_65D39E42B755",
   "this.IconButton_1334149D_1D4D_FBF0_41B3_7C732920200C",
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
    "id": "Container_1334349D_1D4D_FBF0_41B4_593EA982B432",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "children": [
     "this.IconButton_1334C49D_1D4D_FBF0_41A2_420DBAE2931C",
     "this.IconButton_1334D49D_1D4D_FBF0_41AC_106DE65EDF86",
     "this.IconButton_1334E49D_1D4D_FBF0_41B0_CD47835DD31E"
    ],
    "verticalAlign": "middle"
   },
   "this.IconButton_1334F49D_1D4D_FBF0_41B6_0C374761D0A1",
   "this.IconButton_1334849D_1D4D_FBF0_4185_3018921AE337"
  ],
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "width": "5.755%",
  "backgroundOpacity": 0,
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "horizontalAlign": "center",
  "height": "10%",
  "top": "0%",
  "borderRadius": 0,
  "paddingBottom": 0,
  "maxHeight": 182,
  "minWidth": 1,
  "minHeight": 1,
  "id": "Image_12283009_1D4C_FAD0_41A1_E722D4FCD37F",
  "paddingTop": 0,
  "left": "0.07%",
  "url": "skin/Image_12283009_1D4C_FAD0_41A1_E722D4FCD37F.png",
  "maxWidth": 185,
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
  "id": "Image_13A806AB_1D44_87D1_41A4_0195708D9A96",
  "url": "skin/Image_13A806AB_1D44_87D1_41A4_0195708D9A96.png",
  "paddingTop": 0,
  "maxWidth": 500,
  "verticalAlign": "middle",
  "right": "0.22%"
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
  "bottom": "0%",
  "rollOverIconURL": "skin/IconButton_1334649D_1D4D_FBF0_4195_CC02EC1A1451_rollover.png",
  "id": "IconButton_1334649D_1D4D_FBF0_4195_CC02EC1A1451",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_1334649D_1D4D_FBF0_4195_CC02EC1A1451.png",
  "pressedIconURL": "skin/IconButton_1334649D_1D4D_FBF0_4195_CC02EC1A1451_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "2.02%"
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
  "bottom": "3.87%",
  "rollOverIconURL": "skin/IconButton_1334549D_1D4D_FBF0_41B4_3A39215B8227_rollover.png",
  "id": "IconButton_1334549D_1D4D_FBF0_41B4_3A39215B8227",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_1334549D_1D4D_FBF0_41B4_3A39215B8227.png",
  "pressedIconURL": "skin/IconButton_1334549D_1D4D_FBF0_41B4_3A39215B8227_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "2.1%"
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
  "bottom": "8.27%",
  "rollOverIconURL": "skin/IconButton_1334B49D_1D4D_FBF0_41BA_32DCB604CAE3_rollover.png",
  "id": "IconButton_1334B49D_1D4D_FBF0_41BA_32DCB604CAE3",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_1334B49D_1D4D_FBF0_41BA_32DCB604CAE3.png",
  "pressedIconURL": "skin/IconButton_1334B49D_1D4D_FBF0_41BA_32DCB604CAE3_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "2.02%"
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
  "bottom": "13.33%",
  "id": "IconButton_1334A49D_1D4D_FBF0_41AF_F049199220B7",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_1334A49D_1D4D_FBF0_41AF_F049199220B7.png",
  "pressedIconURL": "skin/IconButton_1334A49D_1D4D_FBF0_41AF_F049199220B7_pressed.png",
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "right": "2.1%"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_1334A49D_1D4D_FBF0_41AF_F049199220B7",
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
 "start": "this.playAudioList([this.audio_0923DD97_1DE3_460B_41B6_D935B496C45F]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})