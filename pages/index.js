import { Content1 } from "./components/Content1";
import { Content2 } from "./components/Content2";
import { NavBar } from "./components/NavBar";


export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <NavBar />
        <div className="ContentContainer">
          <Content1/>
          <Content2/>
        </div>
      </div>
    </>
  )
}
