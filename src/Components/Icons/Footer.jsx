function Footer() {
    return(
        <footer className="text-gray-600 body-font ">
            <div className=" flex  bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex justify-between flex-col flex-wrap px-5 py-10 mx-auto sm:flex-row">
                    <p className="text-sm text-center text-gray-500 sm:text-left">&copy; Hungry Foodie</p>
                 <div className="flex flex-row gap-2"><a href="">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    </a>
                    <a href=""><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
</div>                   </div>
               
            </div>
        </footer>
    )
}

export default Footer