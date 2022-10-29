TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_53B957CB_417E_EB0A_419F_65E574F6877B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 12,
           "url": "media/panorama_53115B28_417E_1B36_41C3_124D11A1CE95_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.06,
        "hfov": 6.96,
        "pitch": -8.26
       }
      ],
      "items": [
       {
        "yaw": 2.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.96,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 25,
           "url": "media/panorama_53115B28_417E_1B36_41C3_124D11A1CE95_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.26
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_53115B28_417E_1B36_41C3_124D11A1CE95_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 639,
       "width": 1280,
       "url": "media/panorama_53115B28_417E_1B36_41C3_124D11A1CE95_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "id": "panorama_53115B28_417E_1B36_41C3_124D11A1CE95",
  "thumbnailUrl": "media/panorama_53115B28_417E_1B36_41C3_124D11A1CE95_t.jpg",
  "pitch": 0,
  "partial": false,
  "label": "Entrance ",
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360
 },
 {
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomIn": "this.IconButton_32B4E3A8_3F4F_91C2_41C9_E5DD907705B2",
  "buttonPause": {
   "iconURL": "skin/IconButton_32B453A7_3F4F_91CE_41C3_1E1DE3DC8EA5.png",
   "paddingRight": 0,
   "mode": "toggle",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B453A7_3F4F_91CE_41C3_1E1DE3DC8EA5",
   "paddingTop": 0,
   "pressedIconURL": "skin/IconButton_32B453A7_3F4F_91CE_41C3_1E1DE3DC8EA5_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonPlayLeft": {
   "iconURL": "skin/IconButton_32B7A3A7_3F4F_91CE_41B6_59F9557EAE0F.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B7A3A7_3F4F_91CE_41B6_59F9557EAE0F",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B7A3A7_3F4F_91CE_41B6_59F9557EAE0F_rollover.png",
   "pressedIconURL": "skin/IconButton_32B7A3A7_3F4F_91CE_41B6_59F9557EAE0F_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "class": "PanoramaPlayer",
  "buttonZoomOut": "this.IconButton_32B7D3A7_3F4F_91CE_4197_26C7FDCF583F",
  "viewerArea": "this.MainViewer",
  "buttonMoveRight": {
   "iconURL": "skin/IconButton_32B433A7_3F4F_91CE_41BD_7D0FF14E688D.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B433A7_3F4F_91CE_41BD_7D0FF14E688D",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B433A7_3F4F_91CE_41BD_7D0FF14E688D_rollover.png",
   "pressedIconURL": "skin/IconButton_32B433A7_3F4F_91CE_41BD_7D0FF14E688D_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonRestart": "this.IconButton_32B7C3A7_3F4F_91CE_41BD_8FD8C8DB1238",
  "mouseControlMode": "drag_acceleration",
  "buttonMoveDown": {
   "iconURL": "skin/IconButton_32B443A7_3F4F_91CE_419D_7D7B78FC3ABE.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B443A7_3F4F_91CE_419D_7D7B78FC3ABE",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B443A7_3F4F_91CE_419D_7D7B78FC3ABE_rollover.png",
   "pressedIconURL": "skin/IconButton_32B443A7_3F4F_91CE_419D_7D7B78FC3ABE_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveUp": {
   "iconURL": "skin/IconButton_32B463A7_3F4F_91CE_41C2_5947E6BD1089.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B463A7_3F4F_91CE_41C2_5947E6BD1089",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B463A7_3F4F_91CE_41C2_5947E6BD1089_rollover.png",
   "pressedIconURL": "skin/IconButton_32B463A7_3F4F_91CE_41C2_5947E6BD1089_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveLeft": {
   "iconURL": "skin/IconButton_32B793A7_3F4F_91CE_41CA_C5CC260C42CB.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B793A7_3F4F_91CE_41CA_C5CC260C42CB",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B793A7_3F4F_91CE_41CA_C5CC260C42CB_rollover.png",
   "pressedIconURL": "skin/IconButton_32B793A7_3F4F_91CE_41CA_C5CC260C42CB_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonPlayRight": {
   "iconURL": "skin/IconButton_32B413A8_3F4F_91C2_4198_AADD7DAF47D8.png",
   "paddingRight": 0,
   "mode": "push",
   "borderRadius": 0,
   "paddingLeft": 0,
   "height": 40,
   "width": 20,
   "horizontalAlign": "center",
   "minHeight": 0,
   "borderSize": 0,
   "transparencyActive": false,
   "shadow": false,
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_32B413A8_3F4F_91C2_4198_AADD7DAF47D8",
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_32B413A8_3F4F_91C2_4198_AADD7DAF47D8_rollover.png",
   "pressedIconURL": "skin/IconButton_32B413A8_3F4F_91C2_4198_AADD7DAF47D8_pressed.png",
   "class": "IconButton",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_53115B28_417E_1B36_41C3_124D11A1CE95_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_52245415_417E_2D1E_41AD_DB8A9074C26A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3, this.camera_13EFADCD_1EC6_5F63_41B8_FAA944DB9266); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 12,
           "url": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -49.69,
        "hfov": 6.92,
        "pitch": -10.04
       }
      ],
      "items": [
       {
        "yaw": -49.69,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.92,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 25,
           "url": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_5282FD65_4172_3F3E_41BA_B02D37203F61",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 12,
           "url": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 84.86,
        "hfov": 6.98,
        "pitch": -6.81
       }
      ],
      "items": [
       {
        "yaw": 84.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.98,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 25,
           "url": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.81
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 640,
       "width": 1280,
       "url": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "hfovMax": 120,
  "id": "panorama_52741800_417F_E4F6_41CE_77963177C4E0",
  "thumbnailUrl": "media/panorama_52741800_417F_E4F6_41CE_77963177C4E0_t.jpg",
  "pitch": 0,
  "partial": false,
  "label": "Inside",
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_523799AE_4172_270A_41C8_9BD587CE9E1A",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_52741800_417F_E4F6_41CE_77963177C4E0, this.camera_13F00DE8_1EC6_5F21_41AA_68358F281682); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 13,
              "width": 12,
              "url": "media/panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -16.38,
           "hfov": 6.88,
           "pitch": -11.99
          }
         ],
         "items": [
          {
           "yaw": -16.38,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.88,
           "image": {
            "levels": [
             {
              "height": 26,
              "width": 25,
              "url": "media/panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -11.99
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 640,
          "width": 1280,
          "url": "media/panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "hfov": 360,
     "hfovMax": 120,
     "id": "panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3",
     "thumbnailUrl": "media/panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_t.jpg",
     "pitch": 0,
     "partial": false,
     "label": "Pool",
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_52741800_417F_E4F6_41CE_77963177C4E0",
       "class": "AdjacentPanorama",
       "yaw": -16.38,
       "backwardYaw": -49.69,
       "distance": 1
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": -49.69,
    "backwardYaw": -16.38,
    "distance": 1
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_52741800_417F_E4F6_41CE_77963177C4E0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_camera",
  "class": "PanoramaCamera",
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
    "media": "this.panorama_53115B28_417E_1B36_41C3_124D11A1CE95",
    "camera": "this.panorama_53115B28_417E_1B36_41C3_124D11A1CE95_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_52741800_417F_E4F6_41CE_77963177C4E0",
    "camera": "this.panorama_52741800_417F_E4F6_41CE_77963177C4E0_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3",
    "camera": "this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_53115B28_417E_1B36_41C3_124D11A1CE95",
    "camera": "this.panorama_53115B28_417E_1B36_41C3_124D11A1CE95_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_52741800_417F_E4F6_41CE_77963177C4E0",
    "camera": "this.panorama_52741800_417F_E4F6_41CE_77963177C4E0_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3",
    "camera": "this.panorama_53F14E9B_417E_7D0A_4194_911857CA8AB3_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 0)"
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_13EFADCD_1EC6_5F63_41B8_FAA944DB9266",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.62,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "duration": 11250,
     "yawDelta": 89.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "duration": 3750,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_13F00DE8_1EC6_5F21_41AA_68358F281682",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 130.31,
   "pitch": 0
  }
 },
 {
  "id": "audio_3A91CF0B_1DE7_C21B_41B6_4FF9BA8D8112",
  "audio": {
   "mp3Url": "media/audio_3A91CF0B_1DE7_C21B_41B6_4FF9BA8D8112.mp3",
   "oggUrl": "media/audio_3A91CF0B_1DE7_C21B_41B6_4FF9BA8D8112.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "playbackBarHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "paddingRight": 0,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontColor": "#606060",
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "progressBottom": 1,
  "progressBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 10,
  "transitionMode": "blending",
  "progressOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarLeft": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "progressHeight": 20,
  "class": "ViewerArea",
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
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBottom": 10,
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "minHeight": 50,
  "playbackBarOpacity": 1,
  "borderSize": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "bottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 4,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "left": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "right": 0,
  "playbackBarRight": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ]
 },
 {
  "backgroundOpacity": 0.2,
  "maxWidth": 800,
  "itemLabelPosition": "bottom",
  "itemLabelFontWeight": "normal",
  "backgroundColor": [
   "#000000"
  ],
  "itemVerticalAlign": "middle",
  "itemThumbnailOpacity": 1,
  "width": 153,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowSpread": 1,
  "paddingLeft": 20,
  "maxHeight": 800,
  "paddingRight": 20,
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "minHeight": 0,
  "itemLabelHorizontalAlign": "center",
  "borderRadius": 5,
  "borderSize": 0,
  "horizontalAlign": "left",
  "itemPaddingRight": 3,
  "itemLabelGap": 5,
  "shadow": false,
  "itemThumbnailWidth": 100,
  "itemThumbnailHeight": 75,
  "scrollBarWidth": 10,
  "itemBackgroundColor": [],
  "gap": 10,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "paddingBottom": 10,
  "top": 224,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "bottom": 157,
  "id": "thumbnaillist5245",
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadow": true,
  "itemMode": "normal",
  "paddingTop": 10,
  "itemPaddingLeft": 3,
  "scrollBarColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowBlurRadius": 4,
  "layout": "vertical",
  "scrollBarOpacity": 0.5,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailShadowOpacity": 0.8,
  "itemLabelFontStyle": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "class": "ThumbnailList",
  "left": 0,
  "itemThumbnailShadowColor": "#000000",
  "itemPaddingTop": 3,
  "itemLabelFontSize": 14,
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailBorderRadius": 5,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "itemBackgroundColorDirection": "vertical",
  "itemBackgroundOpacity": 0
 },
 {
  "textShadowBlurRadius": 3,
  "textShadowHorizontalLength": 3,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "fontSize": 40,
  "width": 233,
  "paddingLeft": 0,
  "height": 49,
  "fontFamily": "Times New Roman",
  "textShadowColor": "#000000",
  "text": "DM4J Resort",
  "minHeight": 16,
  "fontStyle": "normal",
  "borderRadius": 0,
  "textDecoration": "none",
  "shadow": false,
  "borderSize": 0,
  "horizontalAlign": "center",
  "top": 17,
  "fontWeight": "bold",
  "textShadowOpacity": 1,
  "paddingBottom": 0,
  "minWidth": 30,
  "fontColor": "#00FF00",
  "id": "label4056",
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
  "class": "Label",
  "left": 113,
  "backgroundOpacity": 0
 },
 {
  "children": [
   "this.IconButton_32B7A3A7_3F4F_91CE_41B6_59F9557EAE0F",
   "this.IconButton_32B793A7_3F4F_91CE_41CA_C5CC260C42CB",
   {
    "children": [
     "this.IconButton_32B463A7_3F4F_91CE_41C2_5947E6BD1089",
     "this.IconButton_32B453A7_3F4F_91CE_41C3_1E1DE3DC8EA5",
     "this.IconButton_32B443A7_3F4F_91CE_419D_7D7B78FC3ABE"
    ],
    "paddingRight": 0,
    "verticalAlign": "middle",
    "overflow": "hidden",
    "borderRadius": 0,
    "paddingLeft": 0,
    "width": 40,
    "height": "100%",
    "scrollBarMargin": 2,
    "minHeight": 20,
    "borderSize": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "gap": 4,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "minWidth": 20,
    "layout": "vertical",
    "id": "Container_32B783A7_3F4F_91CE_41C2_86DBF2D9DE24",
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "class": "Container",
    "backgroundOpacity": 0
   },
   "this.IconButton_32B433A7_3F4F_91CE_41BD_7D0FF14E688D",
   "this.IconButton_32B413A8_3F4F_91C2_4198_AADD7DAF47D8"
  ],
  "paddingRight": 0,
  "verticalAlign": "middle",
  "overflow": "hidden",
  "borderRadius": 0,
  "height": 137.05,
  "width": 136.01,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 20,
  "borderSize": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "gap": 4,
  "horizontalAlign": "center",
  "bottom": "0%",
  "paddingBottom": 0,
  "minWidth": 20,
  "layout": "horizontal",
  "id": "Container_32B4C3A8_3F4F_91C2_41C9_18D4F59007D4",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "contentOpaque": false,
  "class": "Container",
  "right": "43.8%",
  "backgroundOpacity": 0
 },
 {
  "iconURL": "skin/IconButton_32B7C3A7_3F4F_91CE_41BD_8FD8C8DB1238.png",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 32,
  "width": 20.02,
  "minHeight": 0,
  "borderSize": 0,
  "transparencyActive": false,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "bottom": "14%",
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "IconButton_32B7C3A7_3F4F_91CE_41BD_8FD8C8DB1238",
  "rollOverIconURL": "skin/IconButton_32B7C3A7_3F4F_91CE_41BD_8FD8C8DB1238_rollover.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_32B7C3A7_3F4F_91CE_41BD_8FD8C8DB1238_pressed.png",
  "class": "IconButton",
  "right": "1.94%",
  "backgroundOpacity": 0
 },
 {
  "iconURL": "skin/IconButton_32B4E3A8_3F4F_91C2_41C9_E5DD907705B2.png",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 30.05,
  "width": 20.02,
  "minHeight": 0,
  "borderSize": 0,
  "transparencyActive": false,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "bottom": "4.67%",
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "IconButton_32B4E3A8_3F4F_91C2_41C9_E5DD907705B2",
  "rollOverIconURL": "skin/IconButton_32B4E3A8_3F4F_91C2_41C9_E5DD907705B2_rollover.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_32B4E3A8_3F4F_91C2_41C9_E5DD907705B2_pressed.png",
  "class": "IconButton",
  "right": "1.94%",
  "backgroundOpacity": 0
 },
 {
  "iconURL": "skin/IconButton_32B7D3A7_3F4F_91CE_4197_26C7FDCF583F.png",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 32.05,
  "width": 20.04,
  "minHeight": 0,
  "borderSize": 0,
  "transparencyActive": false,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "bottom": "8.8%",
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "IconButton_32B7D3A7_3F4F_91CE_4197_26C7FDCF583F",
  "rollOverIconURL": "skin/IconButton_32B7D3A7_3F4F_91CE_4197_26C7FDCF583F_rollover.png",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_32B7D3A7_3F4F_91CE_4197_26C7FDCF583F_pressed.png",
  "class": "IconButton",
  "right": "1.94%",
  "backgroundOpacity": 0
 },
 {
  "iconURL": "skin/IconButton_32B4F3A8_3F4F_91C2_41C7_3C99FB12DBFB.png",
  "paddingRight": 0,
  "verticalAlign": "middle",
  "mode": "toggle",
  "borderRadius": 0,
  "paddingLeft": 0,
  "height": 28,
  "width": 20.02,
  "minHeight": 0,
  "borderSize": 0,
  "transparencyActive": false,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "bottom": "0.53%",
  "paddingBottom": 0,
  "minWidth": 0,
  "id": "IconButton_32B4F3A8_3F4F_91C2_41C7_3C99FB12DBFB",
  "paddingTop": 0,
  "pressedIconURL": "skin/IconButton_32B4F3A8_3F4F_91C2_41C7_3C99FB12DBFB_pressed.png",
  "class": "IconButton",
  "right": "1.94%",
  "backgroundOpacity": 0
 },
 {
  "maxWidth": 500,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "maxHeight": 500,
  "height": "10%",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "url": "skin/Image_553110E5_4176_253E_41CF_E57494788B87.png",
  "width": "6.129%",
  "shadow": false,
  "scaleMode": "fit_inside",
  "borderSize": 0,
  "top": "0.54%",
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Image_553110E5_4176_253E_41CF_E57494788B87",
  "paddingTop": 0,
  "class": "Image",
  "right": "0.15%",
  "backgroundOpacity": 0
 },
 {
  "maxWidth": 640,
  "paddingRight": 0,
  "verticalAlign": "middle",
  "paddingLeft": 0,
  "maxHeight": 640,
  "height": "10%",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "url": "skin/Image_C1034CAE_D062_9F3B_41C9_62F2F6317480.jpg",
  "width": "6.726%",
  "borderSize": 0,
  "shadow": false,
  "scaleMode": "fit_inside",
  "top": "0.8%",
  "paddingBottom": 0,
  "minWidth": 1,
  "id": "Image_C1034CAE_D062_9F3B_41C9_62F2F6317480",
  "paddingTop": 0,
  "class": "Image",
  "left": "0%",
  "backgroundOpacity": 0
 }
], 
 "verticalAlign": "top",
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_32B4F3A8_3F4F_91C2_41C7_3C99FB12DBFB",
 "paddingRight": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "width": "100%",
 "minHeight": 20,
 "borderSize": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "scripts": {
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "start": "this.playAudioList([this.audio_3A91CF0B_1DE7_C21B_41B6_4FF9BA8D8112]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)"
})