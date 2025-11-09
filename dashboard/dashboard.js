
// Gestion de la navigation
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const headerTitle = document.querySelector('.header-title h1');

    // Navigation entre les sections
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les éléments
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            // Afficher la section correspondante
            const contentId = this.getAttribute('data-content') + '-content';
            const targetSection = document.getElementById(contentId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Mettre à jour le titre du header
                const sectionName = this.querySelector('span').textContent;
                headerTitle.textContent = sectionName;
            }
            
            // Fermer le sidebar sur mobile
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Toggle sidebar sur mobile
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    // Fermer le sidebar
    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Fermer le sidebar en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(e.target) && 
            !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('active');
        }
    });

    // Animation de chargement
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        activeSection.style.animation = 'fadeIn 0.3s ease';
    }
});

// Simulation de données (à remplacer par des appels API réels)
const dashboardData = {
    stats: {
        totalCars: 45,
        totalEmployees: 12,
        activeReservations: 28,
        occupancyRate: 85
    },
    recentActivities: [
        {
            type: 'car',
            message: 'Nouvelle voiture ajoutée - Porsche 911',
            time: 'Il y a 2 heures'
        },
        {
            type: 'reservation',
            message: 'Nouvelle réservation - Mercedes Classe S',
            time: 'Il y a 5 heures'
        },
        {
            type: 'employee',
            message: 'Nouvel employé ajouté',
            time: 'Il y a 1 jour'
        },

        {
            type: 'employee',
            message: 'Nouvel employé ajouté',
            time: 'Il y a 1 jour'
        }
    ]
};

// Fonction pour mettre à jour les statistiques
function updateStats() {
    document.querySelector('.stat-card:nth-child(1) h3').textContent = dashboardData.stats.totalCars;
    document.querySelector('.stat-card:nth-child(2) h3').textContent = dashboardData.stats.totalEmployees;
    document.querySelector('.stat-card:nth-child(3) h3').textContent = dashboardData.stats.activeReservations;
    document.querySelector('.stat-card:nth-child(4) h3').textContent = dashboardData.stats.occupancyRate + '%';
}

// Initialisation
updateStats();

// Gestion des notifications
document.querySelector('.notification-btn').addEventListener('click', function() {
    alert('Vous avez 3 nouvelles notifications');
    // Ici vous pouvez implémenter un système de notifications plus avancé
});

// Gestion de la déconnexion
document.querySelector('.logout-btn').addEventListener('click', function(e) {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        // Redirection vers la page de connexion
        window.location.href = 'login.html';
    }
});
