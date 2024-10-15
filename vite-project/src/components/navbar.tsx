const Navbar = () => {
    return (
        <div className="bg-theme-green p-5 flex items-center">
            <h1 className="font-playfair-display text-3xl text-theme-white">Jorrel Rajan</h1>

            <div className="flex ml-auto">
                <a className="ml-5 font-playfair-display text-xl text-theme-white" href="https://google.com">
                    <p>About Me</p>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white" href="https://google.com">
                    <p>About Me</p>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white" href="https://google.com">
                    <p>About Me</p>
                </a>
            </div>

        </div>
    )
}

export default Navbar;