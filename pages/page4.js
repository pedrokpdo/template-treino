import { NavBar } from "./components/NavBar";
import { Page4Content1 } from "./components/Page4Content1";


export default function page4() {
    return (
        <div className="mainContainer">
            <NavBar />
            <div className="page4-contentContainer">
                <Page4Content1 />
            </div>
        </div>
    )
}