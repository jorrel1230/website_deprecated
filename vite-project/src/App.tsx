import Navbar from "./components/navbar.tsx";
import SocialsBar from "./components/socialsbar.tsx";
import Body from "./components/body.tsx";

function App() {

  return (
    <>
        <Navbar />
        <div className='flex'>
            <SocialsBar />
            <Body />
        </div>

    </>
  )
}

export default App
