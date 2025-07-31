class DonutMaker{
    /**
     * Creates a new DonutMaker object
     * 
     * @property {number} donutCount - The number of donuts the player has
     * @property {number} autoClickerCount - The number of auto-clickers the player owns
     * @property {number} autoClickerCost - The cost of the next auto-clicker
     * @property {number} autoClickerMultiplier - The multiplier for each auto-clicker
     */
    constructor(){
        this.donutCount = 0; // This is the core storage for the donut count//
        this.autoClickerCount =0;
        this.autoClickerCost =100;
        this.autoClickerMultiplier = 1.1; 

        
    }
    /**
     * Increment the donut count by 1
     * 
     * @return {void}
     */
    addDonut(){
        this.donutCount++; // increments the donut count by 1///
    }
    /**
     * Return the current number of donuts the player has
     * @return {number} the current number of donuts the player has
     */
    getDonutCount(){
        return this.donutCount; ///return the current value of donutCount
    }
    //* methods
    purchaseAutoClicker(){
        if(this.donutCount >= this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount += 1;
            this.autoClickerCost = Math.round(this.autoClickerCost * this.autoClickerMultiplier);
            return true; // indicate good purchase 
        }
        return false; /// failed purchase 
    }
    /**
     * Return the current number of auto-clickers the player owns
     * 
     * @return {number} the number of auto-clickers owned
     */

    getAutoClickerCount(){   //check method name
        return this.autoClickerCount;
    }

    /**
     * Returns the cost of the next auto-clicker that can be purchased
     * @return {number} the cost of the next auto-clicker
     */
    getAutoClickerCost(){
        return this.autoClickerCost;
/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Activates all auto-clickers to add their donuts to the donut count
     * @return {void}
     */
/*******  39131f99-2c13-45ba-b946-3cda63d4cfac  *******/    }

    activateAutoClickers(){
        this.donutCount += this.autoClickerCount; // each auto clicker add 1 
    }
    /// game reset method
    resetGame(){
        // Reset all game values to their initial state
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.autoClickerMultiplier = 1.1;
        console.log("Game has been reset.");
    }
}