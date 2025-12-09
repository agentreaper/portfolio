<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-noir1">
        <div class="text-center px-4">
            <img src="@/assets/images/photo.jpeg" alt="Ethan Bertin" class="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto mb-6 border-4 border-bleu2 shadow-lg" />
            <h2 class="text-5xl md:text-7xl font-bold text-blanc mb-4">Bertin Ethan</h2>
            <p class="text-xl md:text-2xl text-bleu2 mb-8">Administration système et cloud <br /> cybersécurité axée défense</p>
        </div>
        <div class="flex flex-col items-center space-y-6 border-4 p-4 border-noir1 pt-6 mt-6 w-full max-w-md ">
            <h1 class="text-blanc text-center text-4xl underline font-bold">Entreprise actuelle</h1> 
            <div class="rounded-xl p-4 bg-blanc flex flex-col items-center shadow-lg">
                <img src="@/assets/images/thales.png" alt="logo Thales" class="h-20 md:h-35 w-auto border-4 border-bleu2 rounded-xl" />
                <h1 class="text-noir1 text-center text-2xl mt-4">Administrateur de sécurité / Responsable Sécurité Projet (RSP)</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['navigate'])
</script>
