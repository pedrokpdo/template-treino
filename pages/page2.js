import { NavBar } from "./components/NavBar";
import { Page2Content1 } from "./components/Page2Content1";


export default function page1() {
    return (
        <div className="mainContainer">
            <NavBar />
            <div className="page2-contentContainer">
                <Page2Content1 />
            </div>
        </div>
    )
}