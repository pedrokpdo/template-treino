import { NavBar } from "./components/NavBar";
import { Page1Content1 } from "./components/Page1Content1";

export default function page1() {
    return (
        <div className="mainContainer">
            <NavBar />
            <div className="page1-contentContainer">
                <Page1Content1 />
            </div>
        </div>
    )
}