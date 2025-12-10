<template>
  <div class="min-h-screen flex items-center justify-center bg-noir1 py-20">
    <div class="flex flex-wrap gap-6 justify-center px-4">
        <div class="bg-noir2 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
            <div class="flex flex-col items-center">
                <img src="@/assets/images/linkedin.jpg" alt="LinkedIn Icon" class="w-12 h-12 mb-4"/>
                <h3 class="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ethan-bertin/" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">
                    Voir mon profil
                </a>
            </div>
        </div>
        <div class="bg-noir2 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
            <div class="flex flex-col items-center">
                <img src="@/assets/images/gmail.png" alt="LinkedIn Icon" class="w-12 h-12 mb-4" />
                <h3 class="text-xl font-bold text-white mb-2">Email</h3>
                <a href="mailto:bertinethan.pro@gmail.com" class="text-red-400 hover:text-red-300 transition-colors">
                    bertinethan.pro@gmail.com
                </a>
            </div>
        </div>
        <div class="bg-noir2 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
            <div class="flex flex-col items-center">
                <svg class="w-12 h-12 mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <h3 class="text-xl font-bold text-white mb-2">Téléphone</h3>
                <a href="tel:+33123456789" class="text-green-400 hover:text-green-300 transition-colors">
                    +33 7 69 90 33 82
                </a>
            </div>
        </div>
    </div>
  </div>
</template>
