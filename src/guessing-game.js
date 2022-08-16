class GuessingGame {
    constructor() {
		this.array = [];
		this.left = 0
		this.right;
		this.mid;
	}

    setRange(min, max) {
			for(let i = min; i <= max; i++){
				this.array.push(i)
			}

		
		this.right = this.array.length - 1;
    }

    guess() {
		this.mid = Math.round((this.right+this.left)/2);
		return this.array[this.mid];
		
    }

    lower() {
		this.right = this.mid;
    }

    greater() {
		this.left = this.mid;
    }
}

module.exports = GuessingGame;

