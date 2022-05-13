import { NavBar } from "./components/NavBar";
import { Page1Content1 } from "./components/Page1Content1";
import { Page1Content2 } from "./components/Page1Content2";

export default function page1() {
    return (
        <div className="mainContainer">
            <NavBar />
            <div className="page1-contentContainer">
                <Page1Content1 />
                <Page1Content2 />
            </div>
        </div>
    )
}