<nav class=" fixed top-0 right-0 left-0 bg-primaryColor z-50">

    <!--CONTAINER -->
    <div class="relative max-w-screen-xl flex justify-between items-center mx-auto px-2 md:py-3 ">

        <!--LOGO LEFT -->
        <div
            class="logo-left transform -translate-x-[-250px] ml-[-245px] transition-transform duration-300 ease-in-out invisible">
            <a href="#">
                <img src="https://th.bing.com/th/id/OIG.yp_6UlkGM1f8PXwaQ3YM?pid=ImgGn&w=1024&h=1024&rs=1" alt="logo firmy TatraLight" width="45px">
            </a>
        </div>

        <!--LOGO CENTER -->
        <div
            class="logo-center absolute top-0 -bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center  px-4 bg-white  transition-transform duration-300 ease-in-out ">
            <a href="#">
                <img src="https://th.bing.com/th/id/OIG.yp_6UlkGM1f8PXwaQ3YM?pid=ImgGn&w=1024&h=1024&rs=1" alt="logo firmy Tatra Light" width="160px">
            </a>
        </div>

        <!--LIST ITEMS -->
        <div
            class="nav-list absolute top-0 bottom-0 left-1/2 hidden md:flex opacity-0 opacity-transition  transform -translate-x-1/2 text-black">
            <x-nav.listItems class="flex justify-center items-center gap-5 text-base uppercase font-semibold" />
        </div>


        <!--SOCIAL ITEMS -->
        <div
            class="nav-social hidden md:flex justify-center items-center gap-4 transform translate-x-[-250px] mr-[-245px] transition-transform duration-300 ease-in-out invisible">
            <x-socialItems />
        </div>

        <!--HAMBURGER -->
        <div class="ml-auto md:hidden">
            <button class="hamburger hamburger--elastic" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
</nav>
