<template>
    <div class="min-h-screen bg-noir1">
        <!-- Section Hero -->
        <div class="flex flex-col items-center justify-center py-20 px-4">
            <img src="@/assets/images/photo.jpeg" alt="Ethan Bertin" class="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto mb-6 border-4 border-bleu2 shadow-lg" />
            <h2 class="text-5xl md:text-7xl font-bold text-blanc mb-4 text-center">Bertin Ethan</h2>
            <p class="text-xl md:text-2xl text-bleu2 mb-8 text-center">Administration système et cloud <br /> cybersécurité axée défense</p>
        </div>

        <!-- Section Expériences Professionnelles -->
        <div class="max-w-7xl mx-auto px-4 pb-20">
            <!-- Expérience actuelle -->
            <div class="mb-12">
                <h2 class="text-blanc text-center text-4xl font-bold mb-8">
                    <span class="border-b-4 border-bleu2 pb-2">Parcours professionnel</span>
                </h2>
                <div v-for="experience in experiencesActuelles" :key="experience.id" class="mb-8">
                    <ExperienceCard :experience="experience" />
                </div>
            </div>

            <!-- Expériences passées -->
            <div v-if="experiencesPassees.length > 0">
                <h2 class="text-blanc text-center text-4xl font-bold mb-8 mt-16">
                    <span class="border-b-4 border-bleu2 pb-2">Expériences passées</span>
                </h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <ExperienceCard 
                        v-for="experience in experiencesPassees" 
                        :key="experience.id" 
                        :experience="experience" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import { experiences } from '@/data/experiences.js'

defineEmits(['navigate'])

// Séparer les expériences actuelles et passées et trier par id croissant
const experiencesActuelles = computed(() => 
    experiences
        .filter(exp => exp.type === 'actuel')
        .sort((a, b) => a.id - b.id)
)

const experiencesPassees = computed(() => 
    experiences
        .filter(exp => exp.type === 'passe')
        .sort((a, b) => a.id - b.id)
)
</script>
