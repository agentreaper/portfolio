<template>
  <div class="projects-container">
    <div class="header-section">
      <h1>Mes Réalisations</h1>
       <p class="subtitle">Une sélection de mes projets personnels et professionnels.</p>  
      <p class="subtitle">Vous pouvez cliquer sur les images pour naviguer parmi les captures d'écrans ainsi que zoomer.</p>
    </div>

    <div class="projects-grid">
      <ProjectCard 
        v-for="project in projectsList" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';


import projectsList from '@/data/projects.js';

export default {
  name: 'Projets',
  components: {
    ProjectCard
  },
  data() {
    return {
      projectsList
    }
  }
}
</script>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.header-section h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>