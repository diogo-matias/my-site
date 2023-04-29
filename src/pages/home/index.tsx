import { Header, Wrapper } from "../../components";
import { About } from "./sections/about";
import Presentation from "./sections/presentation/Presentation";
import { Projects } from "./sections/projects";

export function Home(): React.ReactElement {
    return (
        <Wrapper>
            <Header />
            <Presentation />
            <Projects />
            <About />
        </Wrapper>
    );
}
