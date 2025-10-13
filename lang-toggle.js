const LANG_KEY = 'site-language';

const translations = {
    en: {
        'nav.about': 'About me',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'about.title': 'About me',
        'about.p1': "I'm a video game developer with training in 2D and 3D game and character design and development.",
        'about.p2': "I have worked on several personal and academic projects where I’ve learned to design and implement engaging gameplay mechanics and interactive systems, primarily using Unreal Engine 4 and, to a lesser extent, Unity.",
        'about.p3': "Through these experiences, I’ve developed a strong understanding of game logic, player interaction, and the importance of creating smooth and immersive gameplay experiences.",
        'about.p4': "I’m passionate about continuous learning and constantly seek to expand my technical and creative skills in game development. My goal is to keep growing professionally while contributing my creativity, problem-solving mindset, and dedication to innovative and collaborative projects.",
        'projects.title': 'Projects',
        'proj.featured.title': '3D open world',
        'proj.featured.p1': 'This is a 3D open-world game where you have to complete a series of missions to advance the plot.',
        'proj.featured.p2': 'There are various things you can do, such as running, shooting, talking, and driving, among other things.',
        'proj.1.title': 'Car game',
        'proj.1.p': 'It is a small test on a closed circuit with a manageable car.',
        'proj.2.title': '2.5D platform game',
        'proj.2.p': "Classic ‘Super Mario’ style game with a 3D style.",
        'proj.3.title': 'Endless labyrinth',
        'proj.3.p': "An infinite maze in the style of the ‘Lost Woods’ from the game The Legend of Zelda: Ocarina of Time.",
        'proj.4.title': 'Camera game',
        'proj.4.p': 'A brief demonstration of the different uses of cameras.',
        'proj.5.title': 'Interactive dialogues',
        'proj.5.p': 'A conversation with different outcomes.',
        'proj.6.title': 'Boss fight',
        'proj.6.p': 'A boss fight with different attacks.',
        'proj.7.title': 'HUD implementation',
        'proj.7.p': 'We will add a HUD to the game with new mechanics such as stamina and health regeneration.',
        'proj.8.title': 'Long-range combat',
        'proj.8.p': 'Different weapons such as a rifle with a higher rate of fire and direct bullets, and a shotgun with multiple projectiles and a lower rate of fire.',
        'proj.8.p2': 'The enemy fires an auto-tracking projectile at the player.',
        'proj.9.title': 'Endless run',
        'proj.9.p': 'A Temple Run-style game where you advance endlessly in a randomly generated world.',
        'proj.10.title': 'Point and click',
        'proj.10.p': 'Point-and-click style game where the character moves to where you click with the mouse.',
        'video.fallback': 'Your browser does not support the video tag.',
        'contact.title': 'Contact',
        'contact.email': 'Email: luky2000bcn@gmail.com',
        'contact.phone': 'Phone: +34 674709303',
        'footer': '© 2025 Lucas Gómez Delgado'
    },
    es: {
        'nav.about': 'Sobre mí',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'about.title': 'Sobre mí',
        'about.p1': 'Soy desarrollador de videojuegos con formación en 2D y 3D, diseño de personajes y desarrollo.',
        'about.p2': 'He trabajado en varios proyectos personales y académicos donde aprendí a diseñar e implementar mecánicas de juego y sistemas interactivos, principalmente con Unreal Engine 4 y algo de Unity.',
        'about.p3': 'A través de estas experiencias, he desarrollado una sólida comprensión de la lógica del juego, la interacción del jugador y la importancia de crear experiencias de juego fluidas e inmersivas.',
        'about.p4': 'Me apasiona el aprendizaje continuo y busco ampliar mis habilidades técnicas y creativas en el desarrollo de juegos. Mi objetivo es seguir creciendo profesionalmente mientras aporto mi creatividad, mentalidad de resolución de problemas y dedicación a proyectos innovadores y colaborativos.',
        'projects.title': 'Proyectos',
        'proj.featured.title': '3D open world',
        'proj.featured.p1': 'Este es un juego 3D de mundo abierto donde debes completar una serie de misiones para avanzar la historia.',
        'proj.featured.p2': 'Hay varias cosas que puedes hacer, como correr, disparar, hablar y conducir, entre otras.',
        'proj.1.title': 'Car game',
        'proj.1.p': 'Es una pequeña prueba en un circuito cerrado con un coche manejable.',
        'proj.2.title': '2.5D platform game',
        'proj.2.p': 'Juego clásico de plataformas con estilo 2.5D.',
        'proj.3.title': 'Endless labyrinth',
        'proj.3.p': 'Un laberinto infinito al estilo de los "Lost Woods".',
        'proj.4.title': 'Camera game',
        'proj.4.p': 'Breve demostración de los diferentes usos de las cámaras.',
        'proj.5.title': 'Interactive dialogues',
        'proj.5.p': 'Una conversación con diferentes resultados.',
        'proj.6.title': 'Boss fight',
        'proj.6.p': 'Un combate contra jefe con diferentes ataques.',
        'proj.7.title': 'HUD implementation',
        'proj.7.p': 'Añadiremos un HUD al juego con nuevas mecánicas como resistencia y regeneración de vida.',
        'proj.8.title': 'Long-range combat',
        'proj.8.p': 'Diferentes armas como un rifle con mayor cadencia y balas directas, y una escopeta con múltiples proyectiles y menor cadencia.',
        'proj.8.p2': 'El enemigo dispara un proyectil con auto-seguimiento hacia el jugador.',
        'proj.9.title': 'Endless run',
        'proj.9.p': 'Juego estilo Temple Run donde avanzas infinitamente en un mundo generado aleatoriamente.',
        'proj.10.title': 'Point and click',
        'proj.10.p': 'Juego point-and-click donde el personaje se mueve a donde haces click.',
        'video.fallback': 'Tu navegador no soporta el elemento de video.',
        'contact.title': 'Contacto',
        'contact.email': 'Email: luky2000bcn@gmail.com',
        'contact.phone': 'Teléfono: +34 674709303',
        'footer': '© 2025 Lucas Gómez Delgado'
    }
};

function applyTranslations(lang) {
    document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(n => {
        const key = n.getAttribute('data-i18n');
        const text = translations[lang] && translations[lang][key];
        if (text !== undefined) {
            n.textContent = text;
        }
    });
    // Update contact and footer if present
    const contactEmail = translations[lang]['contact.email'];
    const contactPhone = translations[lang]['contact.phone'];
    const footerText = translations[lang]['footer'];
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        const ps = contactSection.querySelectorAll('p');
        if (ps[0]) ps[0].textContent = contactEmail;
        if (ps[1]) ps[1].textContent = contactPhone;
    }
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = footerText;
}

function getStoredLang() {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}
function storeLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { }
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('langSelect');
    const stored = getStoredLang();
    const initial = stored || (navigator.language && navigator.language.startsWith('es') ? 'es' : 'en');
    if (select) select.value = initial;
    applyTranslations(initial);

    if (select) {
        select.addEventListener('change', () => {
            const lang = select.value;
            applyTranslations(lang);
            storeLang(lang);
        });
    }
});
