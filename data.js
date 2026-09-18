var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-reunio",
      "name": "Sala de Reunião",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.366376471345483
      },
      "linkHotspots": [
        {
          "yaw": -0.3711988051937922,
          "pitch": 0.610020607971757,
          "rotation": 0,
          "target": "1-banheiro-01"
        },
        {
          "yaw": -2.2266709398995754,
          "pitch": 1.0521387917919665,
          "rotation": 6.283185307179586,
          "target": "2-escritrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-banheiro-01",
      "name": "Banheiro 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7750089961322022,
          "pitch": 0.6792846795546907,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-escritrio",
      "name": "Escritório",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6569518590131445,
          "pitch": 0.9934788801337913,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        },
        {
          "yaw": 2.536837899731837,
          "pitch": 0.9342003996401811,
          "rotation": 0,
          "target": "1-banheiro-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro-02",
      "name": "Banheiro 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6115252206955688,
          "pitch": 0.9452008952769759,
          "rotation": 0,
          "target": "2-escritrio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "desk",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
