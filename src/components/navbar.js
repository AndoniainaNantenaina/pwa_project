const Navbar = () =>{
    return(
    <nav
        class="flex-no-wrap fixed z-50 top-0 flex w-full items-center justify-between bg-purple-900 py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref>
          <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div>
              <a class="text-xl text-neutral-50" href="#"
                >Task App.</a>
            </div>
          </div>
      </nav>
    )
}

export default Navbar;