// Neon Icons Library - Main Application
document.addEventListener('DOMContentLoaded', () => {
    const iconsGrid = document.getElementById('iconsGrid');
    const colorBtns = document.querySelectorAll('.color-btn');
    const modal = document.getElementById('iconModal');
    let currentFilter = 'all';

    // Render icons to the grid
    function renderIcons(filter = 'all') {
        iconsGrid.innerHTML = '';
        
        const filteredIcons = filter === 'all' 
            ? neonIcons 
            : neonIcons.filter(icon => icon.color === filter);

        filteredIcons.forEach((icon, index) => {
            const card = document.createElement('div');
            card.className = 'icon-card';
            card.dataset.color = icon.color;
            card.dataset.name = icon.name;
            
            card.innerHTML = `
                <span class="neon-icon neon-${icon.color}">
                    ${icon.svg}
                </span>
                <span class="icon-name">${icon.name}</span>
            `;
            
            // Open modal on click
            card.addEventListener('click', () => openModal(icon));
            
            // Add entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            iconsGrid.appendChild(card);
            
            // Trigger animation
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.transition = 'all 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 20);
            });
        });

        // Update counter
        updateCounter(filteredIcons.length);
    }

    // Update icons counter
    function updateCounter(count) {
        const counter = document.getElementById('iconsCounter');
        if (counter) {
            counter.textContent = `${count} iconos`;
        }
    }

    // Open modal with icon details
    function openModal(icon) {
        const modalIcon = document.getElementById('modalIcon');
        const modalName = document.getElementById('modalName');
        const iTagCode = document.getElementById('iTagCode');
        const svgCode = document.getElementById('svgCode');
        const spanCode = document.getElementById('spanCode');

        // Set icon preview
        modalIcon.innerHTML = icon.svg;
        modalIcon.className = `modal-icon-preview neon-${icon.color}`;
        modalName.textContent = icon.name;

        // Generate codes
        const iTag = `<i class="ni ni-${icon.name} neon-${icon.color}"></i>`;
        const spanTag = `<span class="neon-icon neon-${icon.color}">\n  ${icon.svg}\n</span>`;
        const svgOnly = icon.svg;

        iTagCode.textContent = iTag;
        svgCode.textContent = svgOnly;
        spanCode.textContent = spanTag;

        // Update color tabs
        updateColorOptions(icon);

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Update color options in modal
    function updateColorOptions(icon) {
        const colorOptions = document.getElementById('colorOptions');
        const colors = ['cyan', 'magenta', 'green', 'orange', 'purple', 'yellow', 'red'];
        
        colorOptions.innerHTML = colors.map(color => `
            <button class="color-option ${color === icon.color ? 'active' : ''}" 
                    data-color="${color}" 
                    style="--option-color: var(--neon-${color})">
            </button>
        `).join('');

        // Add click handlers for color options
        colorOptions.querySelectorAll('.color-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const newColor = btn.dataset.color;
                const modalIcon = document.getElementById('modalIcon');
                const iTagCode = document.getElementById('iTagCode');
                const spanCode = document.getElementById('spanCode');

                // Update preview
                modalIcon.className = `modal-icon-preview neon-${newColor}`;
                
                // Update codes
                const iconName = document.getElementById('modalName').textContent;
                iTagCode.textContent = `<i class="ni ni-${iconName} neon-${newColor}"></i>`;
                
                const currentIcon = neonIcons.find(i => i.name === iconName);
                if (currentIcon) {
                    spanCode.textContent = `<span class="neon-icon neon-${newColor}">\n  ${currentIcon.svg}\n</span>`;
                }

                // Update active state
                colorOptions.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Modal close handlers
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Copy functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const codeElement = document.getElementById(targetId);
            const code = codeElement.textContent;

            navigator.clipboard.writeText(code).then(() => {
                // Visual feedback
                const originalText = btn.innerHTML;
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> ¡Copiado!';
                btn.classList.add('copied');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('copied');
                }, 2000);

                showNotification('¡Código copiado al portapapeles!');
            });
        });
    });

    // Tab switching
    document.querySelectorAll('.code-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.tab;
            
            // Update tabs
            document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update panels
            document.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`${targetPanel}Panel`).classList.add('active');
        });
    });

    // Show notification
    function showNotification(message) {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 400);
        }, 2500);
    }

    // Filter button handlers
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.color;
            renderIcons(currentFilter);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query === '') {
                renderIcons(currentFilter);
                return;
            }

            const filtered = neonIcons.filter(icon => {
                const matchesName = icon.name.toLowerCase().includes(query);
                const matchesColor = currentFilter === 'all' || icon.color === currentFilter;
                return matchesName && matchesColor;
            });

            iconsGrid.innerHTML = '';
            filtered.forEach((icon, index) => {
                const card = document.createElement('div');
                card.className = 'icon-card';
                card.dataset.color = icon.color;
                card.innerHTML = `
                    <span class="neon-icon neon-${icon.color}">${icon.svg}</span>
                    <span class="icon-name">${icon.name}</span>
                `;
                card.addEventListener('click', () => openModal(icon));
                card.style.opacity = '0';
                iconsGrid.appendChild(card);
                
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '1';
                }, index * 30);
            });

            updateCounter(filtered.length);
        });
    }

    // Initial render
    renderIcons();

    console.log('🌟 Neon Icons Library loaded!');
    console.log(`📦 ${neonIcons.length} icons available`);
});
