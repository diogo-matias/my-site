import { TECHNOLOGIES } from "@constants/technologies";
import useWindowDimensions from "@hooks/windowDimentions";
import { useTheme } from "@mui/material";

export function TechCanvas() {
    const technologies = TECHNOLOGIES;
    const theme = useTheme();
    const { width, height } = useWindowDimensions();

    $(document).ready(function () {
        if (
            // @ts-ignore
            !$("#myCanvas").tagcanvas(
                {
                    outlineColour: theme.palette.primary.main,
                    textColour: theme.palette.primary.main,
                    reverse: true,
                    depth: 0.8,
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
                    width={width / 2}
                    height={600}
                    id="myCanvas"
                    style={{
                        aspectRatio: "1/1",
                        // backgroundColor: "red",
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
