import useWindowDimensions from "@hooks/windowDimentions";
import { Header, TechCanvas, Wrapper } from "../../components";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import Presentation from "./sections/presentation";
import { Projects } from "./sections/projects";
import "./styles.css";

export function Home(): React.ReactElement {
    const { width, height } = useWindowDimensions();

    function renderTechCanvas() {
        return (
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginInline: "auto",
                    width: "fit-content",
                    zIndex: 1,
                }}
            >
                <TechCanvas height={height} depth={2} />
            </div>
        );
    }

    return (
        <div>
            {renderTechCanvas()}
            <Wrapper>
                <Header />
                <Presentation />
                <Projects />
                <About />
                <Contact />
            </Wrapper>
        </div>
    );
}
