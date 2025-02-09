import Projects from "./Projects";
import About from "./About";
import Header from "./Header"
import Mail from "./Mail"
import Social from "./Social";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";

const HomePage = () =>{

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return(
     <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
        {   loading!==true
            ?
            <>
                <Header />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
                <Footer/>
                <Mail />
                <Social />
            </>
            :
                <Loader/>}
            </div>
    )
}
export default HomePage;