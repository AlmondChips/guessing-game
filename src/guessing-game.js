class GuessingGame {
    constructor() {
		this.array = [];
		this.left = 0
		this.right;
		this.mid;
	}

    setRange(min, max) {
		if((max%2) === 0){
			for(let i = min; i <= max; i++){
				this.array.push(i)
			}
		} else{
			for(let i = min+1; i <= max; i++){
				this.array.push(i)
			}
		}
		
		this.right = this.array.length - 1;
    }

    guess() {
		this.mid = Math.round((this.right-this.left)/2) + this.left;
		return this.array[this.mid];
		
    }

    lower() {
		this.right = this.mid - 1;
    }

    greater() {
		this.left = this.mid + 1;
    }
}

module.exports = GuessingGame;

