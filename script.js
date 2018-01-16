var Mole;
var Score;
var Game;
var StringFunctions;

var holes = document.querySelectorAll('.hole');
var moles = document.querySelectorAll('.mole');

var startButton = document.querySelector('[data-action="startGame"]');

startButton.addEventListener('click', function () {
    Game.start();
});



(function() {
  Game = {
    intervalContainer: null,

    start: function() {
      Score.resetScore();
      for (var i = 0; i < holes.length; i++) {
        holes[i].addEventListener('click', function() {
          Game.handler(event, i);
        });
      }
      intervalContainer = setInterval(function() {
        Mole.hide();
        Mole.setPosition(Game.randomPosition(1, 6));
        Mole.show();
      }, 1000);
    },
    randomPosition: function(min, max) {
      min = parseInt(min);
      max = parseInt(max);
      let number = (Math.random() * max) + min;
      if (number == Mole.getPosition()) {
        let number = (Math.random() * max) + min;
      }
      number = Math.floor(number);
      return(number)
    },
    handler: function(event, position) {
      let holeNumberClassname = event.path[0].classList[1];
      console.log(event.path[0].classList);
      let holeNumber = holeNumberClassname.replace('hole', '');
      holeNumber = parseInt(holeNumber);
      console.log('Hole: ' + holeNumber);
      console.log('Mole ' + Mole.getPosition());
      if (holeNumber == Mole.getPosition()) {
        Score.addOne();
      }
      else if (holeNumber != Mole.getPosition()) {
        Score.removeOne();
      }
      Score.show();
    },
  }
})();

(function() {
  Score = {
    currentScore: 0,

    setScore: function(score) {
      this.currentScore = score
    },

    getScore: function() {
      return(this.currentScore);
    },
    addOne: function() {
      this.currentScore++;
    },
    removeOne: function() {
      this.currentScore--;
    },

    resetScore: function() {
      this.currentScore = 0;
    },
    show: function() {
      document.querySelector('.score').innerHTML = this.getScore();
    }
  }
})();

(function() {
  Mole = {
    position: 0,

    show: function() {
      for (var i = 0; i < holes.length; i++) {
        arrayPosition = this.position - 1;
        let teller = i + 1;
        if (i == arrayPosition) {
          holes[i].className = "hole hole" + teller + " up";
        }

      }
    },
    hide: function() {
      for (var i = 0; i < holes.length; i++) {
        let teller = i + 1;
        holes[i].className = "hole hole" + teller;
      }
    },

    getPosition: function() {
      return(this.position);
    },
    setPosition: function(newPosition) {
      this.position = newPosition;
    },
  }
})();

(function() {
  StringFunctions = {
    replaceString: function(string, searchWord, replacement) {

      return(string);
    }
  }
})();
