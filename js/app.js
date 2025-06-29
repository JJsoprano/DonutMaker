const game = new DonutMaker();


function openModel(modelElement){
  if(modelElement){
    modelElement.classList.add('is-visible');
  }
}
function closeModel(closeElement){
  if(modelElement){
    modelElement.closeList.remove("is-visible");
  }
  // These listeners will make the Developer Info modal functional again.
if (developerInfoBtn && developerInfoModal && closeDeveloperInfoModalBtn) {
    developerInfoBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        openModal(developerInfoModal);
    });

    closeDeveloperInfoModalBtn.addEventListener('click', () => {
        closeModal(developerInfoModal);
    });

    // Close modal if clicking outside
    developerInfoModal.addEventListener('click', (event) => {
        if (event.target === developerInfoModal) {
            closeModal(developerInfoModal);
        }
    });
}
}
// Game Button Handling Logic ---
const makeDonutButton = document.getElementById("makeDonutButton");
const buyAutoClickerButton = document.getElementById("buyAutoClickerButton");
const resetGameButton = document.getElementById("resetGameButton");
// game button
const donutCountDisplay = document.getElementById("donutCountDisplay");
const autoClickerCountDisplay = document.getElementById(
  "autoClickerCountDisplay"
);
const autoClickerCostDisplay = document.getElementById(
  "autoClickerCostDisplay"
);

// Function to update all displays
function updateDisplays() {
  if (donutCountDisplay) {
    donutCountDisplay.innerText = game.getDonutCount().toFixed(0);
  }
  if (autoClickerCountDisplay) {
    autoClickerCountDisplay.innerText = game.getAutoClickerCount();
  }
  if (autoClickerCostDisplay) {
    autoClickerCostDisplay.innerText = game.getAutoClickerCost().toFixed(0);
  }

  // Update button states (disabled/enabled
  if (buyAutoClickerButton) {
    // corected: Use existing getDonutCount and getAutoClickerCost methods
    if (game.getDonutCount() >= game.getAutoClickerCost()) {
      // Check if enough donuts
      buyAutoClickerButton.classList.remove("button--disabled");
      buyAutoClickerButton.disabled = false; // Ensure native button disabled state is false
    } else {
      buyAutoClickerButton.classList.add("button--disabled");
      buyAutoClickerButton.disabled = true; // Ensure native button disabled state is true
    }
  }
}
// Event listeners for game buttons
// Ensure makeDonutButton is found
if (makeDonutButton) {
  makeDonutButton.addEventListener("click", () => {
    game.addDonut();
    updateDisplays();
  });
}
// Ensure buyAutoClickerButton is found
if (buyAutoClickerButton) {
  buyAutoClickerButton.addEventListener("click", () => {
    // purchaseAutoClicker already returns true/false based on success
    game.purchaseAutoClicker();
    updateDisplays();
  });
}

// Ensure resetGameButton is found
if (resetGameButton) {
  resetGameButton.addEventListener("click", () => {
    game.resetGame();
    updateDisplays();
    // The auto-clicker interval needs to be managed on reset
    clearInterval(autoClickerInterval); // Stop existing interval
    startAutoClickerInterval(); // Restart a new interval
  });
}
//  Game Loop (Auto Clickers) 
let autoClickerInterval; // Declare it here so it can be cleared/restarted
function startAutoClickerInterval() {
  if (autoClickerInterval) {
    // Clear any existing interval to prevent duplicates
    clearInterval(autoClickerInterval);
  }
  autoClickerInterval = setInterval(() => {
    game.activateAutoClickers();
    updateDisplays();
  }, 1000); // Activate every second.
}
// Initial display update when the page loads.
updateDisplays();

// Start the auto-clicker interval when the page loads
startAutoClickerInterval();
