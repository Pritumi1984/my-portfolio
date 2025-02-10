import { IconHexagonLetterP } from '@tabler/icons-react';
import SideBar from './SideBar';

const links=["About","Projects","Skills","Experience", "Contact"];
const navLinks=(col:Boolean)=>{
    return links.map((link, index)=>{
        return <a key={index} className= {`${col?'flex flex-col items-center':''}  text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`}>
            <span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

const Header = () => {
    return (
        <nav className="flex justify-between items-center px-10 h-[15vh] bg-bgColor">
            <IconHexagonLetterP className="z-10" size="60" color="#64FFDA" stroke="1.25"/>
            <div className="md:flex gap-4 md-mx:hidden">
              {navLinks(false)}
            </div>
            <SideBar/>
        </nav>
    );
}
export default Header;
export {navLinks};