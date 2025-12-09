<script setup>
import { ref } from 'vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projets from './pages/Projets.vue'
import Competences from './pages/Competences.vue'
import Contact from './pages/Contact.vue'
const mobileMenuOpen = ref(false)
const currentView = ref('home')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const navigateToPage = (page) => {
  currentView.value = page
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-blanc">
    <!-- Navbar -->
    <nav class="bg-noir1 text-blanc fixed w-full top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <button @click="navigateToPage('home')" :class="currentView === 'home' ? 'text-blanc' : 'text-bleu2 hover:text-blanc'" class="transition-colors duration-200">
              Accueil
            </button>
            <button @click="navigateToPage('about')" :class="currentView === 'about' ? 'text-blanc' : 'text-bleu2 hover:text-blanc'" class="transition-colors duration-200">
              À propos
            </button>
            <button @click="navigateToPage('projets')" :class="currentView === 'projets' ? 'text-blanc' : 'text-bleu2 hover:text-blanc'" class="transition-colors duration-200">
              Projets
            </button>
            <button @click="navigateToPage('competences')" :class="currentView === 'competences' ? 'text-blanc' : 'text-bleu2 hover:text-blanc'" class="transition-colors duration-200">
              Compétences
            </button>
            <button @click="navigateToPage('contact')" :class="currentView === 'contact' ? 'text-blanc' : 'text-bleu2 hover:text-blanc'" class="transition-colors duration-200">
              Contact
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-bleu2 hover:text-blanc">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-noir2">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button @click="navigateToPage('home')" :class="currentView === 'home' ? 'bg-noir1 text-blanc' : 'text-bleu2 hover:text-blanc hover:bg-noir1'" class="block w-full text-left px-3 py-2 rounded transition-colors">
            Accueil
          </button>
          <button @click="navigateToPage('about')" :class="currentView === 'about' ? 'bg-noir1 text-blanc' : 'text-bleu2 hover:text-blanc hover:bg-noir1'" class="block w-full text-left px-3 py-2 rounded transition-colors">
            À propos
          </button>
          <button @click="navigateToPage('projets')" :class="currentView === 'projets' ? 'bg-noir1 text-blanc' : 'text-bleu2 hover:text-blanc hover:bg-noir1'" class="block w-full text-left px-3 py-2 rounded transition-colors">
            Projets
          </button>
          <button @click="navigateToPage('competences')" :class="currentView === 'competences' ? 'bg-noir1 text-blanc' : 'text-bleu2 hover:text-blanc hover:bg-noir1'" class="block w-full text-left px-3 py-2 rounded transition-colors">
            Compétences
          </button>
          <button @click="navigateToPage('contact')" :class="currentView === 'contact' ? 'bg-noir1 text-blanc' : 'text-bleu2 hover:text-blanc hover:bg-noir1'" class="block w-full text-left px-3 py-2 rounded transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <component :is="currentView === 'home' ? Home : currentView === 'about' ? About : currentView === 'projets' ? Projets : currentView === 'competences' ? Competences : Contact" />
    </main>
  </div>
</template>

<style scoped></style>
