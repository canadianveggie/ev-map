const config = {
    "version": "v1",
    "config":
    {
        "visState":
        {
            "filters":
            [],
            "layers":
            [
                {
                    "id": "2hcum2",
                    "type": "geojson",
                    "config":
                    {
                        "dataId": "g74jzybs",
                        "label": "Highways Canada",
                        "color":
                        [
                            183,
                            136,
                            94
                        ],
                        "highlightColor":
                        [
                            252,
                            242,
                            26,
                            255
                        ],
                        "columns":
                        {
                            "geojson": "_geojson"
                        },
                        "isVisible": true,
                        "visConfig":
                        {
                            "opacity": 0.8,
                            "strokeOpacity": 0.8,
                            "thickness": 0.5,
                            "strokeColor": null,
                            "colorRange":
                            {
                                "name": "Global Warming",
                                "type": "sequential",
                                "category": "Uber",
                                "colors":
                                [
                                    "#5A1846",
                                    "#900C3F",
                                    "#C70039",
                                    "#E3611C",
                                    "#F1920E",
                                    "#FFC300"
                                ]
                            },
                            "strokeColorRange":
                            {
                                "name": "ColorBrewer Blues-6",
                                "type": "singlehue",
                                "category": "ColorBrewer",
                                "colors":
                                [
                                    "#08519c",
                                    "#3182bd",
                                    "#6baed6",
                                    "#9ecae1",
                                    "#c6dbef",
                                    "#eff3ff"
                                ],
                                "reversed": true
                            },
                            "radius": 10,
                            "sizeRange":
                            [
                                0,
                                10
                            ],
                            "radiusRange":
                            [
                                0,
                                50
                            ],
                            "heightRange":
                            [
                                0,
                                500
                            ],
                            "elevationScale": 5,
                            "enableElevationZoomFactor": true,
                            "stroked": true,
                            "filled": false,
                            "enable3d": false,
                            "wireframe": false
                        },
                        "hidden": false,
                        "textLabel":
                        [
                            {
                                "field": null,
                                "color":
                                [
                                    255,
                                    255,
                                    255
                                ],
                                "size": 18,
                                "offset":
                                [
                                    0,
                                    0
                                ],
                                "anchor": "start",
                                "alignment": "center"
                            }
                        ]
                    },
                    "visualChannels":
                    {
                        "colorField": null,
                        "colorScale": "quantile",
                        "strokeColorField":
                        {
                            "name": "rank",
                            "type": "string"
                        },
                        "strokeColorScale": "ordinal",
                        "sizeField": null,
                        "sizeScale": "linear",
                        "heightField": null,
                        "heightScale": "linear",
                        "radiusField": null,
                        "radiusScale": "linear"
                    }
                },
                {
                    "id": "oqatk2r",
                    "type": "geojson",
                    "config":
                    {
                        "dataId": "vimsizih",
                        "label": "Stations Canada",
                        "color":
                        [
                            255,
                            203,
                            153
                        ],
                        "highlightColor":
                        [
                            252,
                            242,
                            26,
                            255
                        ],
                        "columns":
                        {
                            "geojson": "_geojson"
                        },
                        "isVisible": true,
                        "visConfig":
                        {
                            "opacity": 0.8,
                            "strokeOpacity": 0.8,
                            "thickness": 0.5,
                            "strokeColor": null,
                            "colorRange":
                            {
                                "name": "Uber Viz Qualitative 3",
                                "type": "qualitative",
                                "category": "Uber",
                                "colors":
                                [
                                    "#12939A",
                                    "#DDB27C",
                                    "#88572C",
                                    "#FF991F",
                                    "#F15C17",
                                    "#223F9A",
                                    "#DA70BF",
                                    "#125C77",
                                    "#4DC19C",
                                    "#776E57",
                                    "#17B8BE",
                                    "#F6D18A",
                                    "#B7885E",
                                    "#FFCB99",
                                    "#F89570"
                                ]
                            },
                            "strokeColorRange":
                            {
                                "name": "Global Warming",
                                "type": "sequential",
                                "category": "Uber",
                                "colors":
                                [
                                    "#5A1846",
                                    "#900C3F",
                                    "#C70039",
                                    "#E3611C",
                                    "#F1920E",
                                    "#FFC300"
                                ]
                            },
                            "radius": 6,
                            "sizeRange":
                            [
                                0,
                                10
                            ],
                            "radiusRange":
                            [
                                0,
                                50
                            ],
                            "heightRange":
                            [
                                0,
                                500
                            ],
                            "elevationScale": 5,
                            "enableElevationZoomFactor": true,
                            "stroked": false,
                            "filled": true,
                            "enable3d": false,
                            "wireframe": false
                        },
                        "hidden": false,
                        "textLabel":
                        [
                            {
                                "field": null,
                                "color":
                                [
                                    255,
                                    255,
                                    255
                                ],
                                "size": 18,
                                "offset":
                                [
                                    0,
                                    0
                                ],
                                "anchor": "start",
                                "alignment": "center"
                            }
                        ]
                    },
                    "visualChannels":
                    {
                        "colorField":
                        {
                            "name": "ev_network",
                            "type": "string"
                        },
                        "colorScale": "ordinal",
                        "strokeColorField": null,
                        "strokeColorScale": "quantile",
                        "sizeField": null,
                        "sizeScale": "linear",
                        "heightField": null,
                        "heightScale": "linear",
                        "radiusField": null,
                        "radiusScale": "linear"
                    }
                }
            ],
            "interactionConfig":
            {
                "tooltip":
                {
                    "fieldsToShow":
                    {
                        "vimsizih":
                        [
                            {
                                "name": "station_na",
                                "format": null
                            },
                            {
                                "name": "city",
                                "format": null
                            },
                            {
                                "name": "open_date",
                                "format": null
                            },
                            {
                                "name": "ev_network",
                                "format": null
                            }
                        ],
                        "g74jzybs":
                        [
                            {
                                "name": "Name",
                                "format": null
                            },
                            {
                                "name": "Place",
                                "format": null
                            },
                            {
                                "name": "rank",
                                "format": null
                            },
                            {
                                "name": "dist_km",
                                "format": null
                            }
                        ]
                    },
                    "compareMode": false,
                    "compareType": "absolute",
                    "enabled": true
                },
                "brush":
                {
                    "size": 0.5,
                    "enabled": false
                },
                "geocoder":
                {
                    "enabled": false
                },
                "coordinate":
                {
                    "enabled": false
                }
            },
            "layerBlending": "normal",
            "splitMaps":
            [],
            "animationConfig":
            {
                "currentTime": null,
                "speed": 1
            }
        },
        "mapState":
        {
            "bearing": 0,
            "dragRotate": false,
            "latitude": 54.060207563537496,
            "longitude": -107.4708724462321,
            "pitch": 0,
            "zoom": 5.311907977663704,
            "isSplit": false
        },
        "mapStyle":
        {
            "styleType": "dark",
            "topLayerGroups":
            {},
            "visibleLayerGroups":
            {
                "label": true,
                "road": false,
                "border": false,
                "building": false,
                "water": true,
                "land": true,
                "3d building": false
            },
            "threeDBuildingColor":
            [
                9.665468314072013,
                17.18305478057247,
                31.1442867897876
            ],
            "mapStyles":
            {}
        }
    }
};


if (typeof module !== "undefined") {
  module.exports = {
    config,
  };
}