  // Initialize galaxy background
        function createGalaxy() {
            const galaxy = document.getElementById('galaxy');
            
            // Create stars
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = star.style.height = Math.random() * 3 + 'px';
                star.style.animationDelay = Math.random() * 3 + 's';
                galaxy.appendChild(star);
            }
            
            // Create nebulae
            const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'];
            for (let i = 0; i < 3; i++) {
                const nebula = document.createElement('div');
                nebula.className = 'nebula';
                nebula.style.left = Math.random() * 100 + '%';
                nebula.style.top = Math.random() * 100 + '%';
                nebula.style.width = nebula.style.height = Math.random() * 200 + 150 + 'px';
                nebula.style.background = colors[i];
                nebula.style.animationDelay = i * 5 + 's';
                galaxy.appendChild(nebula);
            }
        }

        // Smart Emotion Detection
        function detectEmotion() {
            const input = document.getElementById('emotionInput').value.toLowerCase();
            const responseDiv = document.getElementById('emotionResponse');
            
            if (input.length > 10) {
                // Simple emotion detection keywords
                if (input.includes('sad') || input.includes('depressed') || input.includes('unhappy')) {
                    responseDiv.innerHTML = `<div class="p-4 bg-blue-500/20 rounded-lg">
                        <p class="text-lg">I sense you're feeling down. Remember, this feeling is temporary.</p>
                        <p class="mt-2">You are stronger than you know. 💙</p>
                    </div>`;
                } else if (input.includes('anxious') || input.includes('worried') || input.includes('stress')) {
                    responseDiv.innerHTML = `<div class="p-4 bg-purple-500/20 rounded-lg">
                        <p class="text-lg">Anxiety is tough, but you're tougher.</p>
                        <p class="mt-2">Take a deep breath. You've got this. 🌈</p>
                    </div>`;
                } else if (input.includes('angry') || input.includes('mad') || input.includes('frustrated')) {
                    responseDiv.innerHTML = `<div class="p-4 bg-red-500/20 rounded-lg">
                        <p class="text-lg">Your feelings are valid. Let's channel this energy.</p>
                        <p class="mt-2">Transform anger into action. 🔥</p>
                    </div>`;
                }
            }
        }

        function analyzeEmotion() {
            const input = document.getElementById('emotionInput').value;
            if (!input) {
                showAchievement("Please share your feelings first. I'm here to listen.");
                return;
            }
            
            // Simulate processing
            const responseDiv = document.getElementById('emotionResponse');
            responseDiv.innerHTML = '<div class="text-white">Analyzing your feelings... <span class="loading-heart">❤️</span></div>';
            
            setTimeout(() => {
                const responses = [
                    "I hear you. Your feelings matter, and so do you. Every storm passes, and you'll emerge stronger.",
                    "Thank you for sharing. It takes courage to be vulnerable. You're on a journey of healing.",
                    "I understand. Remember, you've survived 100% of your worst days. You're incredibly resilient.",
                    "I feel your pain. This moment doesn't define you. Better days are coming, I promise.",
                    "You're not alone in this. Every step forward, no matter how small, is progress."
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                responseDiv.innerHTML = `<div class="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <p class="text-lg">${randomResponse}</p>
                    <p class="mt-3 text-sm">Try the breathing exercise or collect some energy orbs to feel better.</p>
                </div>`;
                
                // Auto-suggest breathing exercise
                setTimeout(() => {
                    document.getElementById('breathingCircle').scrollIntoView({ behavior: 'smooth' });
                }, 2000);
            }, 2000);
        }

        // Power quotes database
        const powerQuotes = [
            "You are capable of amazing things!",
            "Your potential is limitless!",
            "Every day is a new opportunity!",
            "You were born to stand out!",
            "Your dreams are valid and achievable!",
            "You have the power to change your story!",
            "Greatness is already within you!",
            "You are unstoppable and unbreakable!",
            "Your future is bright and beautiful!",
            "You are a champion in the making!"
        ];

        // Daily wisdom
        const wisdomQuotes = [
            "The darkest nights produce the brightest stars.",
            "Your current situation is not your final destination.",
            "Healing is not linear, but it is possible.",
            "You are stronger than you think.",
            "This too shall pass.",
            "Every breath is a new beginning.",
            "You are worthy of love and happiness.",
            "Progress, not perfection.",
            "Your feelings are valid.",
            "Tomorrow is a new chance to thrive."
        ];

        // Initialize energy orbs
        let energyCount = 0;
        
        function createEnergyOrbs() {
            const container = document.getElementById('energyContainer');
            container.innerHTML = '';
            
            for (let i = 0; i < 6; i++) {
                const orb = document.createElement('div');
                orb.className = 'energy-orb';
                orb.style.left = Math.random() * 70 + 15 + '%';
                orb.style.top = Math.random() * 70 + 15 + '%';
                orb.style.background = `radial-gradient(circle, 
                    hsl(${Math.random() * 360}, 100%, 70%) 0%, 
                    transparent 70%)`;
                orb.style.animationDelay = Math.random() * 5 + 's';
                orb.onclick = function() {
                    collectEnergy(this);
                };
                container.appendChild(orb);
            }
        }

        function collectEnergy(orb) {
            energyCount++;
            document.getElementById('energyCount').textContent = energyCount;
            
            // Update mood progress
            const progress = Math.min((energyCount / 20) * 100, 100);
            document.getElementById('moodBar').style.width = progress + '%';
            
            // Create particle effect
            createParticles(orb);
            
            // Remove orb and create new one
            orb.remove();
            setTimeout(() => {
                const container = document.getElementById('energyContainer');
                const newOrb = document.createElement('div');
                newOrb.className = 'energy-orb';
                newOrb.style.left = Math.random() * 70 + 15 + '%';
                newOrb.style.top = Math.random() * 70 + 15 + '%';
                newOrb.style.background = `radial-gradient(circle, 
                    hsl(${Math.random() * 360}, 100%, 70%) 0%, 
                    transparent 70%)`;
                newOrb.style.animationDelay = '0s';
                newOrb.onclick = function() {
                    collectEnergy(this);
                };
                container.appendChild(newOrb);
            }, 300);
            
            // Check for achievements
            if (energyCount === 10) {
                showAchievement("Energy Collector! You're building positive momentum!");
            } else if (energyCount === 25) {
                showAchievement("Energy Master! Your mood is lifting!");
            } else if (energyCount === 50) {
                showAchievement("Energy Legend! You're radiating positivity!");
            }
        }

        function createParticles(element) {
            const rect = element.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
                particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
                particle.style.borderRadius = '50%';
                particle.style.setProperty('--x', (Math.random() - 0.5) * 150 + 'px');
                particle.style.setProperty('--y', (Math.random() - 0.5) * 150 + 'px');
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 2000);
            }
        }

        function activateCube() {
            const faces = ['BELIEVE', 'ACHIEVE', 'CREATE', 'INSPIRE', 'DREAM', 'WIN'];
            const randomFace = faces[Math.floor(Math.random() * faces.length)];
            showAchievement(`Your power word is: ${randomFace}! You are unstoppable!`);
        }

        function generatePowerQuote() {
            const quote = powerQuotes[Math.floor(Math.random() * powerQuotes.length)];
            const quoteElement = document.getElementById('powerQuote');
            quoteElement.textContent = quote;
            quoteElement.style.animation = 'none';
            setTimeout(() => {
                quoteElement.style.animation = 'glitch 2s infinite';
            }, 10);
        }

        // Breathing exercise
        let breathingInterval;
        let breathingCount = 0;
        
        function startBreathing() {
            const circle = document.getElementById('breathingCircle');
            const text = document.getElementById('breathingText');
            
            if (breathingInterval) {
                clearInterval(breathingInterval);
                breathingInterval = null;
                circle.textContent = 'Click to Start';
                text.textContent = 'Click the circle to begin calming your mind';
                return;
            }
            
            let phase = 0;
            const phases = [
                { text: 'Breathe In...', scale: 1.3, duration: 4000 },
                { text: 'Hold...', scale: 1.3, duration: 4000 },
                { text: 'Breathe Out...', scale: 1, duration: 4000 },
                { text: 'Hold...', scale: 1, duration: 4000 }
            ];
            
            function runBreathing() {
                const currentPhase = phases[phase];
                circle.textContent = currentPhase.text;
                circle.style.transform = `scale(${currentPhase.scale})`;
                text.textContent = currentPhase.text;
                
                phase = (phase + 1) % phases.length;
                breathingCount++;
                
                // Update progress circle
                const circumference = 2 * Math.PI * 52;
                const progress = (breathingCount % 4) / 4;
                const offset = circumference - (progress * circumference);
                document.getElementById('progressCircle').style.strokeDasharray = `${circumference} ${circumference}`;
                document.getElementById('progressCircle').style.strokeDashoffset = offset;
                
                if (breathingCount % 8 === 0) {
                    showAchievement("Great job! You're mastering your breath!");
                }
            }
            
            runBreathing();
            breathingInterval = setInterval(runBreathing, 4000);
        }

        function transformSadness() {
            const emojis = ['🌧️', '⛈️', '☁️', '🌤️', '⛅', '☀️', '🌈', '✨'];
            const messages = [
                "Transforming your tears into strength...",
                "Converting pain into power...",
                "Turning shadows into light...",
                "Changing storms into rainbows...",
                "Your transformation is complete! You are amazing!"
            ];
            
            let index = 0;
            const emojiElement = document.getElementById('emotionEmoji');
            const messageElement = document.getElementById('transformationMessage');
            
            const transformation = setInterval(() => {
                if (index < emojis.length) {
                    emojiElement.textContent = emojis[index];
                    if (index < messages.length) {
                        messageElement.textContent = messages[index];
                    }
                    index++;
                } else {
                    clearInterval(transformation);
                    showAchievement("Transformation Complete! You've turned sadness into strength!");
                }
            }, 800);
        }

        function newWisdom() {
            const wisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
            const wisdomElement = document.getElementById('dailyWisdom');
            wisdomElement.textContent = `"${wisdom}"`;
            wisdomElement.style.animation = 'none';
            setTimeout(() => {
                wisdomElement.style.animation = 'neonFlicker 2s infinite alternate';
            }, 10);
        }

        function saveGratitude() {
            const input = document.getElementById('gratitudeInput');
            const gratitude = input.value.trim();
            
            if (!gratitude) {
                showAchievement("Please write something you're grateful for!");
                return;
            }
            
            let gratitudes = JSON.parse(localStorage.getItem('gratitudes') || '[]');
            gratitudes.push({
                text: gratitude,
                date: new Date().toLocaleDateString()
            });
            
            // Keep only last 5 gratitudes
            if (gratitudes.length > 5) {
                gratitudes = gratitudes.slice(-5);
            }
            
            localStorage.setItem('gratitudes', JSON.stringify(gratitudes));
            input.value = '';
            
            displayGratitudes();
            showAchievement("Gratitude saved! You're cultivating happiness!");
        }

        function displayGratitudes() {
            const gratitudes = JSON.parse(localStorage.getItem('gratitudes') || '[]');
            const listElement = document.getElementById('gratitudeList');
            
            if (gratitudes.length === 0) {
                listElement.innerHTML = '<p class="text-white/60">No gratitudes saved yet</p>';
            } else {
                listElement.innerHTML = gratitudes.map(g => 
                    `<div class="bg-white/10 p-2 rounded mb-2">
                        <p class="text-white">${g.text}</p>
                        <p class="text-white/60 text-xs">${g.date}</p>
                    </div>`
                ).join('');
            }
        }

        function showAchievement(text) {
            const popup = document.getElementById('achievementPopup');
            const textElement = document.getElementById('achievementText');
            textElement.textContent = text;
            popup.classList.remove('hidden');
            
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 3000);
        }

        function toggleMenu() {
            const menuItems = document.getElementById('menuItems');
            menuItems.classList.toggle('active');
        }

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
        }

        // Check if element is an input field
        function isInputElement(element) {
            const tagName = element.tagName.toLowerCase();
            const inputTypes = ['input', 'textarea', 'select'];
            return inputTypes.includes(tagName) || element.contentEditable === 'true';
        }

        // Initialize everything when page loads
        window.addEventListener('load', () => {
            createGalaxy();
            createEnergyOrbs();
            newWisdom();
            displayGratitudes();
            
            // Show welcome achievement
            setTimeout(() => {
                showAchievement("Welcome to Motivation Universe! Created by Hak Yany to help you shine!");
            }, 1000);
        });

        // Regenerate energy orbs periodically
        setInterval(createEnergyOrbs, 25000);

        // Add keyboard shortcuts (FIXED - Only work when not typing in inputs)
        document.addEventListener('keydown', (e) => {
            // Check if the active element is an input field
            const activeElement = document.activeElement;
            
            // Only trigger shortcuts if NOT typing in an input field
            if (!isInputElement(activeElement)) {
                if (e.key === ' ') {
                    e.preventDefault();
                    generatePowerQuote();
                } else if (e.key === 'b' || e.key === 'B') {
                    e.preventDefault();
                    startBreathing();
                } else if (e.key === 't' || e.key === 'T') {
                    e.preventDefault();
                    transformSadness();
                }
            }
        });

        // Auto-save emotion input
        setInterval(() => {
            const emotionInput = document.getElementById('emotionInput').value;
            if (emotionInput) {
                localStorage.setItem('lastEmotion', emotionInput);
            }
        }, 5000);

        // Load last emotion on page load
        window.addEventListener('DOMContentLoaded', () => {
            const lastEmotion = localStorage.getItem('lastEmotion');
            if (lastEmotion) {
                document.getElementById('emotionInput').value = lastEmotion;
            }
        });