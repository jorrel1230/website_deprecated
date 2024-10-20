import Navbar from "./layout-components/navbar.tsx";
import SocialsBar from "./layout-components/socialsbar.tsx";
import Body from "./layout-components/body.tsx";
import PopupCard from "./layout-components/popupcard.tsx";

function App() {

  return (
    <>
        <PopupCard />
        <Body />
        <Navbar />
        <SocialsBar />

    </>
  )
}

export default App
