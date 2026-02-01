var APP_DATA = {
  "scenes": [
    {
      "id": "0-lounge-area",
      "name": "LOUNGE AREA",
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
        "yaw": 2.9387169375252755,
        "pitch": 0.020354815857801967,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.1375138888598126,
          "pitch": 0.2796773884009358,
          "rotation": 3.141592653589793,
          "target": "1-corridor-to-executive-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor-to-executive-lounge",
      "name": "CORRIDOR TO EXECUTIVE LOUNGE",
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
        "yaw": 1.5424343271308691,
        "pitch": 0.0042994316703754976,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.609566954603462,
          "pitch": 0.2058871577886805,
          "rotation": 3.141592653589793,
          "target": "0-lounge-area"
        },
        {
          "yaw": 1.4250235823800539,
          "pitch": 0.24523176614575704,
          "rotation": 3.141592653589793,
          "target": "2-ceo-secretary--lounge-seating"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ceo-secretary--lounge-seating",
      "name": "CEO SECRETARY & LOUNGE SEATING",
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
        "yaw": 0.93833742439503,
        "pitch": 0.10286107977214698,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.7130253558600934,
          "pitch": 0.2721211826950327,
          "rotation": 3.141592653589793,
          "target": "1-corridor-to-executive-lounge"
        },
        {
          "yaw": 0.6843744541190624,
          "pitch": 0.27486593097272305,
          "rotation": 3.141592653589793,
          "target": "3-executive-meeting-room"
        },
        {
          "yaw": -0.21755502426635687,
          "pitch": 0.16593218300672063,
          "rotation": 4.71238898038469,
          "target": "5-corridor-to-founder--group-ceo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-executive-meeting-room",
      "name": "EXECUTIVE MEETING ROOM",
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
        "yaw": -2.312122540469698,
        "pitch": -0.0026062755646343305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.9484280171571982,
          "pitch": 0.2427469548166865,
          "rotation": 3.141592653589793,
          "target": "2-ceo-secretary--lounge-seating"
        },
        {
          "yaw": -1.9882794368102807,
          "pitch": 0.15537335645424122,
          "rotation": 3.9269908169872414,
          "target": "4-director--ceo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-director--ceo",
      "name": "DIRECTOR & CEO",
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
        "yaw": -2.657879299406627,
        "pitch": -0.007915236954339377,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.3123433580738677,
          "pitch": 0.1470984645280744,
          "rotation": 2.356194490192345,
          "target": "3-executive-meeting-room"
        },
        {
          "yaw": 2.9059984899900346,
          "pitch": 0.2700955827451086,
          "rotation": 3.141592653589793,
          "target": "5-corridor-to-founder--group-ceo"
        },
        {
          "yaw": 2.9345201717326006,
          "pitch": 0.1225288302484202,
          "rotation": 2.356194490192345,
          "target": "6-founder-and-group-ceo-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor-to-founder--group-ceo",
      "name": "CORRIDOR TO FOUNDER & GROUP CEO",
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
        "yaw": -1.4339661931349195,
        "pitch": 0.01589223357590086,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.6062428642133817,
          "pitch": 0.25105739512458136,
          "rotation": 3.141592653589793,
          "target": "4-director--ceo"
        },
        {
          "yaw": -3.0901071124703687,
          "pitch": 0.12308090525520221,
          "rotation": 3.141592653589793,
          "target": "2-ceo-secretary--lounge-seating"
        },
        {
          "yaw": -1.4073747621916084,
          "pitch": 0.21067525244032126,
          "rotation": 2.356194490192345,
          "target": "6-founder-and-group-ceo-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-founder-and-group-ceo-cabin",
      "name": "FOUNDER AND GROUP CEO CABIN",
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
        "yaw": -0.09008964072890535,
        "pitch": 0.1483614168773819,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5219006263941397,
          "pitch": 0.316574608508688,
          "rotation": 3.141592653589793,
          "target": "5-corridor-to-founder--group-ceo"
        },
        {
          "yaw": 1.3785556483148724,
          "pitch": 0.11996244244394383,
          "rotation": 3.141592653589793,
          "target": "4-director--ceo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "UNIMONI WIZZ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
