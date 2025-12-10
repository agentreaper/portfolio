<template>
<div class="experience-card bg-blanc rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 w-full h-full">
    <div class="bg-gradient-to-r from-noir1 to-noir2 p-6">
      <div class="flex items-center justify-between mb-4">
        <img 
          :src="experience.logo" 
          :alt="`Logo ${experience.entreprise}`" 
          class="h-16 md:h-20 w-auto border-2 border-bleu2 rounded-lg bg-blanc "
        />
        <span class="text-bleu2 font-semibold text-sm md:text-base">
          {{ experience.dateDebut }} - {{ experience.dateFin }}
        </span>
      </div>
      <h3 class="text-blanc text-2xl md:text-3xl font-bold mb-2">
        {{ experience.entreprise }}
      </h3>
      <p class="text-bleu2 text-lg md:text-xl">
        {{ experience.poste }}
      </p>
    </div>

    <!-- Corps avec activités et compétences -->
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Activités -->
        <div>
          <h4 class="text-noir1 text-xl font-bold mb-3 flex items-center">
            <img src = "@/assets/icons/clipboard.svg" alt="Activités Icon" class="w-5 h-5 mr-2"/>
            Activités
          </h4>
          <ul class="space-y-2">
            <li 
              v-for="(activite, index) in experience.activites" 
              :key="index"
              class="flex items-start text-noir2"
            >
              <span class="text-bleu2 mr-2">•</span>
              <span>{{ activite }}</span>
            </li>
          </ul>
        </div>

        <!-- Compétences -->
        <div>
          <h4 class="text-noir1 text-xl font-bold mb-3 flex items-center">
            <img src = "@/assets/icons/clipboard.svg" alt="Compétences Icon" class="w-5 h-5 mr-2"/>
            Compétences
          </h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(competence, index) in experience.competences" 
              :key="index"
              class="px-3 py-1 bg-bleu2 text-noi1 rounded-full text-sm font-medium"
            >
              {{ competence }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.experience-card {
  transition: all 0.3s ease;
}

.experience-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
