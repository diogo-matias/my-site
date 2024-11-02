import { TECHNOLOGIES } from "@constants/technologies";
import useWindowDimensions from "@hooks/windowDimentions";
import { useTheme } from "@mui/material";
import { useCallback } from "react";
import { alphaToHexColor } from "utils/colors";
import { climb } from "utils/math";

export type TechCanvasPropTypes = {
    depth?: number;
    width?: number;
    height?: number;
};

export function TechCanvas(props: TechCanvasPropTypes) {
    const { width: _width, height: _height } = useWindowDimensions();

    const { height = 600, width = _width } = props;

    const technologies = TECHNOLOGIES;
    const theme = useTheme();

    const depth = useCallback(() => {
        return climb({
            min: {
                correspondingValue: 5,
                minValue: 500,
            },
            max: {
                correspondingValue: 2,
                maxValue: 1200,
            },
            currentValue: width,
        });
    }, [width]);

    $(document).ready(function () {
        if (
            // @ts-ignore
            !$("#myCanvas").tagcanvas(
                {
                    outlineColour: theme.palette.primary.main,
                    textColour: alphaToHexColor({
                        color: theme.palette.primary.main,
                        alpha: width > 700 ? 100 : 50,
                    }),
                    reverse: true,
                    depth: depth(),
                    maxSpeed: 0.02,
                    minSpeed: 0.001,
                    textFont: null,
                    weightMode: "both",
                    weight: true,
                    weightGradient: {
                        0: "#f00", // red
                        0.33: "#ff0", // yellow
                        0.66: "#0f0", // green
                        1: "#00f", // blue
                    },
                },
                "tags"
            )
        ) {
            $("#myCanvasContainer").hide();
        }
    });

    function tagToFront(e: any, id: string) {
        e.preventDefault();

        // @ts-ignore
        $("#myCanvas").tagcanvas("tagtofront", { id });
    }

    return (
        <div className="skills-ch0arts">
            <div id="myCanvasContainer">
                <canvas
                    width={width > 700 ? width - 100 : width}
                    height={height}
                    id="myCanvas"
                    style={{
                        aspectRatio: "1/1",
                    }}
                >
                    <ul id="tags">
                        {technologies.map((item, index) => {
                            return (
                                <li key={`${item.name}-${index}`}>
                                    <a
                                        href={"."}
                                        id={`tag${index}`}
                                        onClick={(e) =>
                                            tagToFront(e, `tag${index}`)
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </canvas>
            </div>
        </div>
    );
}
