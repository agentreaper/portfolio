# Structure des Assets

## `/src/assets/` (recommandé pour la plupart des fichiers)
```
src/assets/
├── images/         # Photos, illustrations, screenshots
├── icons/          # Icônes SVG, PNG
└── fonts/          # Polices personnalisées
```

**Usage dans les composants :**
```vue
<script setup>
import logo from '@/assets/images/logo.png'
import avatar from '@/assets/images/avatar.jpg'
</script>

<template>
  <img :src="logo" alt="Logo">
  <img :src="avatar" alt="Avatar">
  
  <!-- Ou directement dans src -->
  <img src="@/assets/images/photo.jpg" alt="Photo">
</template>
```

## `/public/` (pour fichiers accessibles directement)
```
public/
├── favicon.ico
├── robots.txt
└── documents/      # PDFs, CV, etc.
```

**Usage :**
```vue
<template>
  <!-- Accessible via / -->
  <a href="/cv.pdf" download>Télécharger CV</a>
  <img src="/logo-public.png" alt="Logo">
</template>
```

## Avantages de `/src/assets/`
✓ Optimisation automatique (compression, redimensionnement)
✓ Hash dans les noms de fichiers (meilleur cache)
✓ Import avec autocomplétion
✓ Erreur si fichier manquant

## Quand utiliser `/public/`
- Fichiers avec noms fixes (SEO)
- Fichiers référencés dans index.html
- Fichiers téléchargeables (PDF, ZIP)
