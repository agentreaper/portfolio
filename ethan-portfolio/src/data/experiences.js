import thalesLogo from '@/assets/images/thales.png'
import cgiLogo from '@/assets/images/CGI.jpg'   

export const experiences = [
  {
    id: 1,
    entreprise: "Thales",
    logo: thalesLogo,
    poste: "Administrateur de sécurité / Responsable Sécurité Projet (RSP)",
    dateDebut: "Septembre 2025",
    dateFin: "Présent",
    type: "actuel",
    activites: [
      "Audit de sécurité de systèmes d'information",
      "Cartographie des systèmes et resencement des actifs",
      "Mise en confirmité ANSSI, IM-900 et IGI-13000",
      "Mise en place de solutions cyber adaptées aux besoins métier des équipes",
      "Anakyse de risques",
      "Hologuation de systèmes Diffusion Restreinte (DR)"
    ],
    competences: [
      "Cybersécurité",
        "Audit de sécurité",
        "Analyse de risques",
        "Normes ANSSI",
        "Règlementation IGI-13000",
        "Règlementation IM-900",
        "Hologuation DR",
        "Sécurité des systèmes d'information",
        "Gestion des actifs",


    ]
  },
  {
    id: 2,
    entreprise: "CGI",
    logo: cgiLogo,
    poste: "Administrateur systèmes et cloud",
    dateDebut: "Avril 2025",
    dateFin: "Juin 2025",
    type: "actuel",
    activites: [
      "Mise en place de pipelines Azure DevOps",
      "Séccurisations d'images docker",
      "Création d'un outil d'audit de sécurité cloud",
      "Automatisation de l'analyse finops de souscriptions Azure",
      "Mise en place d'un monitoring de sécurité cloud"
    ],
    competences: [
      "Azure Cloud",
      "Azure DevOps",
      "Docker",
      "Sécurité cloud",
      "Architecture cloud",
      "FinOps",
      "Grafana",
      "Cybersécurité"
    ]
  },
]
