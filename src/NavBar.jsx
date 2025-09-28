
export function NavBar(){
    return(
        <>
            <div className="bg-black text-white flex gap-[25%] h-25 justify-center items-center">
                <h1>RAMTECH</h1>
                <nav className="flex gap-5">
                    <a href="#services">Services</a>
                    <a href="#">Pricing</a>
                    <a href="#">Company</a>
                </nav>
                <button className="bg-[#50529F] p-2 rounded-full flex gap-1 items-center cursor-pointer hover:bg-[#5052AF]">
                    <img src="./src/icons/Group.png" alt="" />
                    <p>Ask for help</p>
                </button>
            </div>
        </>
    )

}