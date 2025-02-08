const Mail=()=>{
    return(
        <div className="flex text-textColor items-center gap-10 fixed bottom-32 -right-[170px] rotate-90">
            <div data-aos="fade-down-left" data-aos-duration="800">
            <a href="mailto:pritumi.patel1984@gmail.com" className="font-mono text-lg hover:text-primaryColor
            tracking-wide hover:-translate-x-2 transition transform duration-300 ease-in-out">
                pritumi.patel1984@gmail.com
            </a>
            </div>
            <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
        </div>
    );
}

export default Mail;