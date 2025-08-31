        document.addEventListener('DOMContentLoaded', function() {
            // Generate random number between 1 and 100
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let guessCount = 0;
            const guessHistory = document.getElementById('guessHistory');
            const feedback = document.getElementById('feedback');
            const result = document.getElementById('result');
            const guessInput = document.getElementById('guessInput');
            const guessButton = document.getElementById('guessButton');
            
            console.log("Random number (for testing):", randomNumber);
            
            function checkGuess() {
                const userGuess = parseInt(guessInput.value);
                
                // Validate input
                if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                    feedback.textContent = "Please enter a valid number between 1 and 100!";
                    feedback.style.color = "#dc3545";
                    guessInput.value = "";
                    return;
                }
                
                guessCount++;
                
                // Add to guess history
                const guessItem = document.createElement('div');
                guessItem.classList.add('guess-item');
                guessItem.textContent = `#${guessCount}: ${userGuess}`;
                guessHistory.appendChild(guessItem);
                
                // Scroll to bottom of guess history
                guessHistory.scrollTop = guessHistory.scrollHeight;
                
                // Check guess
                if (userGuess === randomNumber) {
                    feedback.textContent = "Congratulations! You guessed the correct number!";
                    feedback.style.color = "#155724";
                    feedback.classList.add('success');
                    result.textContent = `You found the number in ${guessCount} guesses!`;
                    endGame();
                } else if (userGuess < randomNumber) {
                    feedback.textContent = "Try a higher number!";
                    feedback.style.color = "#856404";
                } else {
                    feedback.textContent = "Try a lower number!";
                    feedback.style.color = "#856404";
                }
                
                // Clear input
                guessInput.value = "";
                guessInput.focus();
            }
            
            function endGame() {
                guessInput.disabled = true;
                guessButton.disabled = true;
                guessButton.textContent = "Game Over";
            }
            
            // Event listeners
            guessButton.addEventListener('click', checkGuess);
            
            guessInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkGuess();
                }
            });
        });
