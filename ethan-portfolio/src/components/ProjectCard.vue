<template>
  <div class="project-card">
    <div class="card-media-container" @mouseenter="hover = true" @mouseleave="hover = false">
      
      <img 
        v-if="hasImages"
        :src="project.images[currentIndex]" 
        :alt="project.title + ' image ' + (currentIndex + 1)" 
        class="card-image"
        @click="openZoom"
      />
      <div v-else class="no-image-placeholder">Pas d'image</div>

      <div v-if="hasMultipleImages" class="nav-controls" :class="{ 'visible': hover }">
        <button class="nav-btn prev" @click.stop="prevImage">&#10094;</button>
        <button class="nav-btn next" @click.stop="nextImage">&#10095;</button>
        <div class="image-counter">{{ currentIndex + 1 }}/{{ project.images.length }}</div>
      </div>

      <button v-if="hasImages" class="zoom-btn" @click.stop="openZoom" title="Agrandir">
        ⤢
      </button>
    </div>

    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <p class="description">{{ project.description }}</p>
      
      <div class="card-footer">
        <div class="tags">
           <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
        </div>
        </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isZoomOpen" class="zoom-modal-overlay" @click="closeZoom">
          <div class="zoom-modal-content" @click.stop>
            <img :src="project.images[currentIndex]" :alt="project.title" />
            <button class="modal-close-btn" @click="closeZoom">&times;</button>
            
            <button v-if="hasMultipleImages" class="modal-nav prev" @click="prevImage">&#10094;</button>
            <button v-if="hasMultipleImages" class="modal-nav next" @click="nextImage">&#10095;</button>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: { type: Object, required: true }
  },
  data() {
    return {
      currentIndex: 0, // L'index de l'image actuellement visible
      isZoomOpen: false, // État de la modale
      hover: false // Pour gérer l'affichage des flèches au survol
    }
  },
  computed: {
    hasImages() {
      return this.project.images && this.project.images.length > 0;
    },
    hasMultipleImages() {
      return this.project.images && this.project.images.length > 1;
    }
  },
  methods: {
    nextImage() {
      if (!this.hasMultipleImages) return;
      this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
    },
    prevImage() {
      if (!this.hasMultipleImages) return;
      this.currentIndex = (this.currentIndex - 1 + this.project.images.length) % this.project.images.length;
    },
    openZoom() {
      if (!this.hasImages) return;
      this.isZoomOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeZoom() {
      this.isZoomOpen = false;
      document.body.style.overflow = '';
    }
  },
  watch: {
    project() { this.currentIndex = 0; }
  }
}
</script>

<style scoped>
.project-card {
  border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;
  background: white; display: flex; flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover { transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.1); }

/* --- STYLES DU CARROUSEL (Partie haute) --- */
.card-media-container {
  position: relative;
  height: 220px; 
  background: #f8f9fa;
  overflow: hidden;
}
.card-image {
  width: 100%; height: 100%; object-fit: cover; cursor: pointer;
  transition: transform 0.3s;
}
.card-media-container:hover .card-image { transform: scale(1.02); }

.no-image-placeholder {
  height: 100%; display: flex; align-items: center; justify-content: center;
  color: #999; background: #eee;
}

.nav-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(0,0,0,0.3); color: white; border: none;
  font-size: 1.5rem; padding: 10px 15px; cursor: pointer;
  opacity: 0; transition: opacity 0.3s, background 0.2s;
  z-index: 2;
}
.nav-controls.visible .nav-btn { opacity: 1; }
.nav-btn:hover { background: rgba(0,0,0,0.7); }
.prev { left: 0; border-top-right-radius: 4px; border-bottom-right-radius: 4px; }
.next { right: 0; border-top-left-radius: 4px; border-bottom-left-radius: 4px; }

/* Indicateur 1/N */
.image-counter {
  position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,0.5); color: white; padding: 2px 8px;
  border-radius: 12px; font-size: 0.75rem; pointer-events: none;
}

.zoom-btn {
  position: absolute; bottom: 10px; right: 10px;
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,0.9); border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); cursor: pointer;
  font-size: 1.2rem; display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s, transform 0.2s; z-index: 3;
}
.card-media-container:hover .zoom-btn { opacity: 1; }
.zoom-btn:hover { transform: scale(1.1); background: white; }

/* --- STYLES DU CONTENU (Partie basse) --- */
.card-content { padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column; }
.card-content h3 { margin: 0 0 0.5rem 0; font-size: 1.25rem; }
.description { flex-grow: 1; color: #555; font-size: 0.95rem; line-height: 1.5; white-space: pre-line; text-align: justify;}
.card-footer { margin-top: 1rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.tag { background: #f0f2f5; color: #444; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;}

/* --- STYLES DE LA MODALE ZOOM (Teleport) --- */
.zoom-modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.85); z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(5px); /* Petit effet flou sympa */
}

.zoom-modal-content {
  position: relative; max-width: 90vw; max-height: 90vh;
  display: flex; justify-content: center; align-items: center;
}

.zoom-modal-content img {
  max-width: 100%; max-height: 90vh; object-fit: contain;
  border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.modal-close-btn {
  position: absolute; top: -40px; right: -10px;
  background: none; border: none; color: white;
  font-size: 2.5rem; cursor: pointer; transition: color 0.2s;
}
.modal-close-btn:hover { color: #ff6b6b; }

.modal-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.1); color: white; border: none;
    font-size: 3rem; padding: 20px; cursor: pointer;
    transition: background 0.3s;
}
.modal-nav:hover { background: rgba(255,255,255,0.2); }
.modal-nav.prev { left: -80px; }
.modal-nav.next { right: -80px; }

/* Animation de transition Vuejs */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>