var totalWins = 0;
   var totalTries = 10;
    var wordIndex=0;
    var GuessingWord = UpdateWord(wordIndex); //update word initally
    var charactersRemaining = GuessingWord.length;
    var charactersTyped= [];

    var remainingGuessCount = document.getElementById('remainingGuessCount');
    remainingGuessCount.innerHTML = totalTries;
    document.getElementById('charactersRemaining').textContent = charactersRemaining;
    document.addEventListener('keydown',function(event){
        var remainingGuessCount = document.getElementById('remainingGuessCount');
        remainingGuessCount.innerHTML = totalTries;
        var typedChar = String.fromCharCode(event.keyCode).toLowerCase();

        if(charactersTyped.indexOf(typedChar.toLowerCase()) == -1)
        {
            charactersTyped.push(typedChar);
            totalTries--;
        }
        
        for(var i=0; i < GuessingWord.length; i++)
        {
            console.log(GuessingWord[i]);
            if(GuessingWord[i].toLowerCase() === typedChar.toLowerCase())
            {
                charactersRemaining--;
                //show the guessed word
                var allGuessCharacters = document.getElementsByClassName('GuessLetter');
                console.log(allGuessCharacters);
                for(var j =0; j < allGuessCharacters.length; j++)
                {
                    var val = allGuessCharacters[j].getAttribute('value');
                    if(typedChar.toLowerCase() === val.toLowerCase()){
                        //show that element
                        allGuessCharacters[j].textContent = val;
                    }
                }
            }
        }
        document.getElementById('charactersRemaining').textContent = charactersRemaining;

        if(charactersRemaining <= 0 || totalTries <= 0){
            totalWins++;
            wordIndex++;
            GuessingWord = UpdateWord(wordIndex); //update word initally
            charactersRemaining = GuessingWord.length;
            charactersTyped= [];
            totalTries = 10;
            var remainingGuessCount = document.getElementById('remainingGuessCount');
            remainingGuessCount.innerHTML = totalTries;
        }
        UpdateGuessedWordList();
    });
    function UpdateGuessedWordList(){
        var typedchars = "";
        for(var i=0; i < charactersTyped.length; i++)
        {
            typedchars = charactersTyped[i]+"," + typedchars;
        }
        document.getElementById('guessedCharacters').textContent =typedchars ;

    }

    function UpdateWord(wordIndex) {
        var parentElement = document.getElementById('GuessWord');
        parentElement.innerHTML = "";
            var wordsArray = ["geeks", "for", "geeks", "a",
                "portal", "to", "learn", "can",
                "be", "computer", "science",
                "zoom", "yup", "fire", "in",
                "be", "data", "geeks"];

            var GuessingWord = wordsArray[wordIndex];
            console.log('before loop' + GuessingWord);
            console.log('guessingword length is ' + GuessingWord.length);
            for (var i = 0; i < GuessingWord.length; i++) {
                //create an element and add @ guessword
                var guessLetterElement = document.createElement('span'); //create span element 
                guessLetterElement.className = 'GuessLetter'; //update class
                guessLetterElement.setAttribute('value', GuessingWord[i])
                var textNode = document.createTextNode('_'); //the guess letter
                guessLetterElement.appendChild(textNode);
                var parentElement = document.getElementById('GuessWord');
                parentElement.appendChild(guessLetterElement);
            }
    return GuessingWord;
    }