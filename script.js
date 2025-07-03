// Dados do aplicativo
const appData = {
    currentStep: 1,
    currentScreen: 'home',
    weeklyMenu: {},
    shoppingList: {},
    preferences: ['Rápido (≤20min)', 'Saudável'],
    
    // Base de receitas
    recipes: {
        'Omelete de Espinafre': {
            time: '10 min',
            servings: '1 pessoa',
            type: 'Café da manhã',
            ingredients: [
                '2 ovos',
                '1 xícara de espinafre fresco',
                '2 colheres de sopa de queijo ralado',
                '1 colher de chá de azeite',
                'Sal e pimenta a gosto'
            ],
            steps: [
                'Lave bem o espinafre e pique grosseiramente',
                'Bata os ovos em uma tigela e tempere com sal e pimenta',
                'Aqueça o azeite em uma frigideira antiaderente',
                'Refogue o espinafre por 2 minutos até murchar',
                'Despeje os ovos batidos sobre o espinafre',
                'Adicione o queijo ralado por cima',
                'Cozinhe por 3-4 minutos até firmar',
                'Dobre ao meio e sirva imediatamente'
            ]
        },
        'Salada de Quinoa': {
            time: '15 min',
            servings: '2 pessoas',
            type: 'Almoço',
            ingredients: [
                '1 xícara de quinoa cozida',
                '1 tomate médio picado',
                '1/2 pepino picado',
                '1/4 de cebola roxa picada',
                '2 colheres de sopa de azeite',
                '1 colher de sopa de limão',
                'Folhas de hortelã',
                'Sal e pimenta a gosto'
            ],
            steps: [
                'Cozinhe a quinoa conforme instruções da embalagem e deixe esfriar',
                'Pique todos os vegetais em cubos pequenos',
                'Em uma tigela grande, misture a quinoa com os vegetais',
                'Prepare o molho misturando azeite, limão, sal e pimenta',
                'Regue a salada com o molho e misture bem',
                'Adicione as folhas de hortelã picadas',
                'Deixe descansar por 5 minutos antes de servir'
            ]
        },
        'Salmão Grelhado': {
            time: '20 min',
            servings: '2 pessoas',
            type: 'Jantar',
            ingredients: [
                '2 filés de salmão',
                '2 colheres de sopa de azeite',
                '1 limão (suco)',
                '2 dentes de alho picados',
                'Ervas finas a gosto',
                'Sal e pimenta a gosto',
                'Brócolis para acompanhar'
            ],
            steps: [
                'Tempere os filés de salmão com sal, pimenta e ervas',
                'Misture azeite, alho e suco de limão em uma tigela',
                'Marine o salmão nessa mistura por 10 minutos',
                'Aqueça uma grelha ou frigideira em fogo médio-alto',
                'Grelhe o salmão por 4-5 minutos de cada lado',
                'Cozinhe o brócolis no vapor por 5 minutos',
                'Sirva o salmão com o brócolis e regue com o molho restante'
            ]
        },
        'Smoothie Verde': {
            time: '5 min',
            servings: '1 pessoa',
            type: 'Lanche',
            ingredients: [
                '1 banana madura',
                '1 xícara de espinafre fresco',
                '1/2 maçã verde',
                '1 colher de sopa de aveia',
                '200ml de água de coco',
                '1 colher de chá de mel'
            ],
            steps: [
                'Lave bem o espinafre e a maçã',
                'Descasque a banana e corte em pedaços',
                'Corte a maçã em pedaços, removendo o caroço',
                'Coloque todos os ingredientes no liquidificador',
                'Bata por 1-2 minutos até ficar homogêneo',
                'Sirva imediatamente em um copo gelado'
            ]
        },
        'Wrap de Frango': {
            time: '15 min',
            servings: '1 pessoa',
            type: 'Almoço',
            ingredients: [
                '1 tortilla integral',
                '100g de peito de frango cozido',
                '2 folhas de alface',
                '1/2 tomate picado',
                '2 colheres de sopa de abacate',
                '1 colher de sopa de iogurte grego',
                'Temperos a gosto'
            ],
            steps: [
                'Aqueça a tortilla em uma frigideira seca por 30 segundos',
                'Desfie o frango cozido e tempere a gosto',
                'Espalhe o iogurte grego na tortilla',
                'Adicione as folhas de alface',
                'Distribua o frango, tomate e abacate',
                'Enrole firmemente, começando por uma das bordas',
                'Corte ao meio e sirva imediatamente'
            ]
        },
        'Iogurte com Granola': {
            time: '3 min',
            servings: '1 pessoa',
            type: 'Café da manhã',
            ingredients: [
                '1 pote de iogurte natural',
                '3 colheres de sopa de granola',
                '1/2 banana fatiada',
                '1 colher de sopa de mel',
                'Frutas vermelhas a gosto'
            ],
            steps: [
                'Coloque o iogurte em uma tigela',
                'Adicione a granola por cima',
                'Decore com fatias de banana',
                'Adicione as frutas vermelhas',
                'Regue com mel a gosto',
                'Sirva imediatamente'
            ]
        }
    },
    
    // Cardápios pré-definidos
    menuTemplates: {
        'segunda': {
            'Café da manhã': 'Omelete de Espinafre',
            'Lanche': 'Smoothie Verde',
            'Almoço': 'Salada de Quinoa',
            'Jantar': 'Salmão Grelhado'
        },
        'terca': {
            'Café da manhã': 'Iogurte com Granola',
            'Lanche': 'Smoothie Verde',
            'Almoço': 'Wrap de Frango',
            'Jantar': 'Salmão Grelhado'
        },
        'quarta': {
            'Café da manhã': 'Omelete de Espinafre',
            'Lanche': 'Iogurte com Granola',
            'Almoço': 'Salada de Quinoa',
            'Jantar': 'Wrap de Frango'
        },
        'quinta': {
            'Café da manhã': 'Iogurte com Granola',
            'Lanche': 'Smoothie Verde',
            'Almoço': 'Wrap de Frango',
            'Jantar': 'Salmão Grelhado'
        },
        'sexta': {
            'Café da manhã': 'Omelete de Espinafre',
            'Lanche': 'Smoothie Verde',
            'Almoço': 'Salada de Quinoa',
            'Jantar': 'Salmão Grelhado'
        },
        'sabado': {
            'Café da manhã': 'Iogurte com Granola',
            'Lanche': 'Smoothie Verde',
            'Almoço': 'Wrap de Frango',
            'Jantar': 'Salada de Quinoa'
        },
        'domingo': {
            'Café da manhã': 'Omelete de Espinafre',
            'Lanche': 'Iogurte com Granola',
            'Almoço': 'Salmão Grelhado',
            'Jantar': 'Wrap de Frango'
        }
    }
};

// Inicialização do app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    // Verificar se é a primeira visita
    const hasVisited = localStorage.getItem('nutriplan_visited');
    if (!hasVisited) {
        showOnboarding();
    } else {
        hideOnboarding();
        loadSavedData();
    }
}

function setupEventListeners() {
    // Navegação
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const screen = item.dataset.screen;
            showScreen(screen);
            updateNavigation(screen);
        });
    });
    
    // Tags de preferência
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
            updatePreferences();
        });
    });
}

// Onboarding
function showOnboarding() {
    document.getElementById('onboarding-modal').classList.add('active');
    showOnboardingStep(1);
}

function hideOnboarding() {
    document.getElementById('onboarding-modal').classList.remove('active');
}

function showOnboardingStep(step) {
    // Esconder todos os steps
    document.querySelectorAll('.onboarding-step').forEach(s => {
        s.classList.remove('active');
    });
    
    // Mostrar step atual
    document.getElementById(`step-${step}`).classList.add('active');
    appData.currentStep = step;
}

function nextStep() {
    if (appData.currentStep < 4) {
        showOnboardingStep(appData.currentStep + 1);
    }
}

function finishOnboarding() {
    localStorage.setItem('nutriplan_visited', 'true');
    hideOnboarding();
    generateMenu(); // Gerar menu inicial
}

// Navegação entre telas
function showScreen(screenName) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar tela selecionada
    document.getElementById(`${screenName}-screen`).classList.add('active');
    appData.currentScreen = screenName;
    
    // Carregar conteúdo específico da tela
    switch(screenName) {
        case 'menu':
            if (Object.keys(appData.weeklyMenu).length === 0) {
                generateMenu();
            }
            break;
        case 'shopping':
            if (Object.keys(appData.shoppingList).length === 0) {
                generateShoppingList();
            }
            break;
        case 'recipes':
            loadDayRecipes();
            break;
    }
}

function updateNavigation(activeScreen) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.querySelector(`[data-screen="${activeScreen}"]`).classList.add('active');
}

// Geração de cardápio
function generateMenu() {
    const menuContainer = document.getElementById('weekly-menu');
    menuContainer.innerHTML = '<div class="loading">Gerando cardápio...</div>';
    
    // Simular loading
    setTimeout(() => {
        appData.weeklyMenu = { ...appData.menuTemplates };
        renderWeeklyMenu();
        saveData();
    }, 1500);
}

function renderWeeklyMenu() {
    const menuContainer = document.getElementById('weekly-menu');
    const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
    const dayNames = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    
    let menuHTML = '';
    
    days.forEach((day, index) => {
        const dayMenu = appData.weeklyMenu[day];
        const date = getDateForDay(index);
        
        menuHTML += `
            <div class="day-menu">
                <div class="day-header">
                    <span class="day-name">${dayNames[index]}</span>
                    <span class="day-date">${date}</span>
                </div>
                <div class="meals-list">
        `;
        
        Object.entries(dayMenu).forEach(([mealType, recipeName]) => {
            const recipe = appData.recipes[recipeName];
            menuHTML += `
                <div class="meal-item" onclick="openRecipe('${recipeName}')">
                    <div class="meal-info">
                        <div class="meal-name">${recipeName}</div>
                        <div class="meal-time">
                            <i class="fas fa-clock"></i>
                            ${recipe.time} • ${mealType}
                        </div>
                    </div>
                    <button class="change-btn" onclick="event.stopPropagation(); changeRecipe('${day}', '${mealType}')">
                        Trocar
                    </button>
                </div>
            `;
        });
        
        menuHTML += `
                </div>
            </div>
        `;
    });
    
    document.getElementById('weekly-menu').innerHTML = menuHTML;
}

function getDateForDay(dayIndex) {
    const today = new Date();
    const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const targetDate = new Date(monday.setDate(monday.getDate() + dayIndex));
    
    return targetDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

function changeRecipe(day, mealType) {
    const recipes = Object.keys(appData.recipes);
    const currentRecipe = appData.weeklyMenu[day][mealType];
    const otherRecipes = recipes.filter(r => r !== currentRecipe);
    const newRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)];
    
    appData.weeklyMenu[day][mealType] = newRecipe;
    renderWeeklyMenu();
    saveData();
    
    // Mostrar feedback
    showNotification('Receita alterada com sucesso!');
}

// Lista de compras
function generateShoppingList() {
    if (Object.keys(appData.weeklyMenu).length === 0) {
        showNotification('Gere um cardápio primeiro!');
        return;
    }
    
    const shoppingContainer = document.getElementById('shopping-list');
    shoppingContainer.innerHTML = '<div class="loading">Gerando lista de compras...</div>';
    
    setTimeout(() => {
        const ingredients = {};
        
        // Coletar todos os ingredientes
        Object.values(appData.weeklyMenu).forEach(dayMenu => {
            Object.values(dayMenu).forEach(recipeName => {
                const recipe = appData.recipes[recipeName];
                recipe.ingredients.forEach(ingredient => {
                    if (ingredients[ingredient]) {
                        ingredients[ingredient]++;
                    } else {
                        ingredients[ingredient] = 1;
                    }
                });
            });
        });
        
        // Organizar por categorias
        appData.shoppingList = categorizeIngredients(ingredients);
        renderShoppingList();
        saveData();
    }, 1000);
}

function categorizeIngredients(ingredients) {
    const categories = {
        'Proteínas': [],
        'Vegetais e Frutas': [],
        'Grãos e Cereais': [],
        'Laticínios': [],
        'Temperos e Outros': []
    };
    
    Object.entries(ingredients).forEach(([ingredient, quantity]) => {
        const item = { name: ingredient, quantity: quantity };
        
        if (ingredient.includes('frango') || ingredient.includes('salmão') || ingredient.includes('ovo')) {
            categories['Proteínas'].push(item);
        } else if (ingredient.includes('tomate') || ingredient.includes('alface') || ingredient.includes('espinafre') || 
                   ingredient.includes('banana') || ingredient.includes('maçã') || ingredient.includes('pepino') || 
                   ingredient.includes('cebola') || ingredient.includes('brócolis') || ingredient.includes('abacate')) {
            categories['Vegetais e Frutas'].push(item);
        } else if (ingredient.includes('quinoa') || ingredient.includes('aveia') || ingredient.includes('granola') || 
                   ingredient.includes('tortilla')) {
            categories['Grãos e Cereais'].push(item);
        } else if (ingredient.includes('queijo') || ingredient.includes('iogurte')) {
            categories['Laticínios'].push(item);
        } else {
            categories['Temperos e Outros'].push(item);
        }
    });
    
    return categories;
}

function renderShoppingList() {
    const container = document.getElementById('shopping-list');
    const categoryIcons = {
        'Proteínas': 'fas fa-drumstick-bite',
        'Vegetais e Frutas': 'fas fa-apple-alt',
        'Grãos e Cereais': 'fas fa-seedling',
        'Laticínios': 'fas fa-cheese',
        'Temperos e Outros': 'fas fa-pepper-hot'
    };
    
    let listHTML = '';
    
    Object.entries(appData.shoppingList).forEach(([category, items]) => {
        if (items.length > 0) {
            listHTML += `
                <div class="category-section">
                    <div class="category-header">
                        <i class="${categoryIcons[category]}"></i>
                        <span>${category}</span>
                    </div>
                    <div class="items-list">
            `;
            
            items.forEach((item, index) => {
                listHTML += `
                    <div class="shopping-item">
                        <input type="checkbox" id="item-${category}-${index}">
                        <label for="item-${category}-${index}" class="item-name">${item.name}</label>
                        <span class="item-quantity">${item.quantity}x</span>
                    </div>
                `;
            });
            
            listHTML += `
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = listHTML;
}

function clearShoppingList() {
    appData.shoppingList = {};
    document.getElementById('shopping-list').innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Lista de compras vazia</p>';
    saveData();
}

// Receitas do dia
function loadDayRecipes() {
    const daySelector = document.getElementById('day-selector');
    const selectedDay = daySelector.value;
    const recipesContainer = document.getElementById('daily-recipes');
    
    if (!appData.weeklyMenu[selectedDay]) {
        recipesContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Gere um cardápio primeiro!</p>';
        return;
    }
    
    const dayMenu = appData.weeklyMenu[selectedDay];
    let recipesHTML = '';
    
    Object.entries(dayMenu).forEach(([mealType, recipeName]) => {
        const recipe = appData.recipes[recipeName];
        recipesHTML += `
            <div class="recipe-card" onclick="openRecipe('${recipeName}')">
                <div class="recipe-header">
                    <div>
                        <div class="recipe-title">${recipeName}</div>
                        <div class="recipe-type">${mealType}</div>
                    </div>
                </div>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings}</span>
                </div>
            </div>
        `;
    });
    
    recipesContainer.innerHTML = recipesHTML;
}

// Modal de receita
function openRecipe(recipeName) {
    const recipe = appData.recipes[recipeName];
    const modal = document.getElementById('recipe-modal');
    
    document.getElementById('recipe-title').textContent = recipeName;
    document.getElementById('recipe-time').textContent = recipe.time;
    document.getElementById('recipe-servings').textContent = recipe.servings;
    
    // Ingredientes
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    // Passos
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = recipe.steps.map(step => 
        `<li>${step}</li>`
    ).join('');
    
    modal.classList.add('active');
}

function closeRecipeModal() {
    document.getElementById('recipe-modal').classList.remove('active');
}

// Preferências
function updatePreferences() {
    const activeTags = document.querySelectorAll('.tag.active');
    appData.preferences = Array.from(activeTags).map(tag => tag.textContent);
    saveData();
}

// Notificações
function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 2000;
        animation: slideDown 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Persistência de dados
function saveData() {
    const dataToSave = {
        weeklyMenu: appData.weeklyMenu,
        shoppingList: appData.shoppingList,
        preferences: appData.preferences
    };
    localStorage.setItem('nutriplan_data', JSON.stringify(dataToSave));
}

function loadSavedData() {
    const savedData = localStorage.getItem('nutriplan_data');
    if (savedData) {
        const data = JSON.parse(savedData);
        appData.weeklyMenu = data.weeklyMenu || {};
        appData.shoppingList = data.shoppingList || {};
        appData.preferences = data.preferences || ['Rápido (≤20min)', 'Saudável'];
        
        // Atualizar interface
        updatePreferenceTags();
    }
}

function updatePreferenceTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        if (appData.preferences.includes(tag.textContent)) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    });
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); }
        to { transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); }
        to { transform: translateX(-50%) translateY(-100%); }
    }
`;
document.head.appendChild(style);

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Prevenir scroll do body quando modal estiver aberto
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('scroll', function(e) {
            e.stopPropagation();
        });
    });
});