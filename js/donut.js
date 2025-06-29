class DonutMaker{
    constructor(){
        this.donutCount = 0; // This is the core storage for the donut count//
        this.autoClickerCount =0;
        this.autoClickerCost =100;
        this.autoClickerMultiplier = 1.1; 

        
    }
    addDonut(){
        this.donutCount++; // increments the donut count by 1///
    }
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
    getAutoClickerCount(){   //check method name
        return this.autoClickerCount;
    }
    getAutoClickerCost(){
        return this.autoClickerCost;
    }
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