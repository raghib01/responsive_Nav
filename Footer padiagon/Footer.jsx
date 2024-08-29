import React from 'react'
import Logo from '../assets/Logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

<FaYoutube />

export const Footer = () => {
  return (
    <footer class="w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a href="https://pagedone.io/"  class="flex justify-center lg:justify-start">
                   <img src={Logo} alt="" />
                </a>
                <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Make yourself at home with read </p>
                <a href="javascript:;"  class="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                    Contact us
                </a>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left ">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Featurs</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Home</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">About</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                </ul>
            </div>
            {/* <!--End Col-->
            <div class="lg:mx-auto text-left ">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Products</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                    <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Components Library</a></li>
                </ul>
            </div> */}
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                    <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                </ul>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">News</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                    <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Events</a></li>
                </ul>
            </div>
        </div>
        <div class="py-7 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span class="text-sm text-gray-500 ">©<a href="https://www.facebook.com/ragib01">RAGIB's</a> 2024, All rights reserved.</span>
                <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                    <FaFacebook className='text-white text-3xl'/>
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                    <FaXTwitter className='text-white text-2xl'/>
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                        <FaYoutube className='text-white text-2xl'/>
                            
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                      <FaInstagram className='text-white text-2xl'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
                                        
  )
}
