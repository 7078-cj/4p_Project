import React from 'react'

function NavBar() {
  return (
      <div class="bg-gray-900 text-white">
          <div class="flex items-center justify-between px-12 py-6">

              <div class="flex items-center">
                
                  <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-md active:translate-x-0.5 active:translate-y-0.5">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </button>

                  {/* dito yon part ng logo */}
                  {/* <img src="https://i.imgur.com/8J0C45b.png" alt="Rollercoin logo" class="ml-4 h-10"> */}

                  <h1 class="ml-4 text-2xl font-bold">NAVIGATION</h1>

              </div>

              <div class="flex space-x-8">

                  <button class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-[0.5rem_-0.5rem_rgba(244,67,54,0.5),-0.5rem_0.5rem_rgba(0,188,212,0.5)] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_rgba(244,67,54,0.5),-0.5rem_-0.5rem_rgba(0,188,212,0.5)]">
                      SIGN IN
                  </button>

                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-[0.5rem_-0.5rem_rgba(244,67,54,0.5),-0.5rem_0.5rem_rgba(0,188,212,0.5)] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_rgba(244,67,54,0.5),-0.5rem_-0.5rem_rgba(0,188,212,0.5)]">
                      SIGN UP
                  </button>

              </div>
          </div>
      </div>
  )
}

export default NavBar