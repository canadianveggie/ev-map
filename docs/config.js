// HighwaysCA - 504v11hrd
// HighwaysUS - m5lzmp8kk
// StationsCA - c7thb24
// StationsUS - cca5w8n

const config = {
    "version": "v1",
    "config":
    {
        "visState":
        {
            "layers":
            [
                {
                    "id": "2hcum2",
                    "type": "geojson",
                    "config":
                    {
                        "dataId": "504v11hrd",
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
                        "dataId": "c7thb24",
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
                },
                {
                    "id": "5jskd5",
                    "type": "geojson",
                    "config":
                    {
                        "dataId": "m5lzmp8kk",
                        "label": "Highways USA",
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
                    "id": "kasj2ro",
                    "type": "geojson",
                    "config":
                    {
                        "dataId": "cca5w8n",
                        "label": "Stations USA",
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
                        "504v11hrd":
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
                        ],
                        "m5lzmp8kk":
                        [
                            {
                                "name": "name",
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
                        ],
                        "c7thb24":
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
                        "cca5w8n":
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
                        ]
                    },
                    "compareMode": false,
                    "compareType": "absolute",
                    "enabled": true
                }
            }
        },
        "mapState":
        {
            "bearing": 0,
            "dragRotate": false,
            "latitude": 51.26931185896784,
            "longitude": -92.33522667754843,
            "pitch": 0,
            "zoom": 2.9706052140696215,
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
            }
        }
    }
};

if (typeof module !== "undefined") {
  module.exports = {
    config,
  };
}