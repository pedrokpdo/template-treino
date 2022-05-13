import { NavBar } from "./components/NavBar";
import { Page4Content1 } from "./components/Page3Content1";


export default function page3() {
    return (
        <div className="mainContainer">
            <NavBar />
            <div className="page3-contentContainer">
                <Page4Content1 />
            </div>
        </div>
    )
}