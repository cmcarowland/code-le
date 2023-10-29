<script lang="ts">
  import Box from "./Box.svelte" 
  const green = '#80ae80'
  const yellow = '#ffff80'
  const NUMBER_OF_GUESSES = 5;
  let guessesRemaining = NUMBER_OF_GUESSES;
  let currentGuess = [];
  let nextLetter = 0;
  let rightGuessString = `int,int,=,+=,+=
//This function will take 2 numbers and return their sum
@int@ Sum(int x, int y)
{
    @int@ z @=@ 0
    z @+=@ x;
    z @+=@ y;

    return z;
}`;

  let rightGuess = rightGuessString.split('\n')[0].split(',');
  
  const r = /@{1}[^>\s]*@{1}/g;
  let question : String = rightGuessString.split('\n').slice(1).join("\n").replace(r, "____");

  function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return
    }

    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    currentGuess.push(pressedKey)
    UpdateString();
    nextLetter ++;
  }

  function UpdateString() {
    question = rightGuessString.split('\n').slice(1).join("\n").replace(r, "____");
    for(const guess of currentGuess)
    {
      console.log(guess);
      question = question.replace("____", guess);
    }
  }

  function deleteLetter () {
      if(nextLetter == 0)
        return;

      let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining]
      let box = row.children[nextLetter - 1]
      box.textContent = ""
      box.classList.remove("filled-box")
      currentGuess.pop()
      UpdateString();
      nextLetter --;
  }

  function checkGuess () {
      let row = document.getElementsByClassName("letter-row")[5 - guessesRemaining]
      let guessString = ''
      

      for (const val of currentGuess) {
          guessString += val
      }

      if (currentGuess.length != 5) {
          //toastr.error("Not enough items!")
          return
      }

      
      for (let i = 0; i < 5; i++) {
          let bgColor = 'transparent'
          let textColor = 'white';
          let box = row.children[i] as HTMLElement
          let letter = currentGuess[i]
          
          let letterPosition = rightGuess.indexOf(currentGuess[i])
          // is letter in the correct guess
          if (letterPosition === -1) {
              bgColor = 'grey';
          } else {
              // now, letter is definitely in word
              // if letter index and right guess index are the same
              // letter is in the right position 
              if (currentGuess[i] === rightGuess[i]) {
                  // shade green 
                  bgColor = green;
                  textColor = 'black';
              } else {
                  // shade box yellow
                  bgColor = yellow;
                  textColor = 'black';
              }
          }

          let delay = 250 * i
          setTimeout(()=> {
              //shade box              
              box.style.backgroundColor = bgColor
              box.style.color = textColor;
              shadeKeyBoard(letter, bgColor)
          }, delay)
      }

      if (compareGuesses()) {
          //toastr.success("You guessed right! Game over!")
          alert("You guessed right! Game over!");
          document.getElementById("code").textContent = rightGuessString.split('\n').slice(1).join("\n").replaceAll('@', '');
          guessesRemaining = 0
          return
      } else {
          guessesRemaining -= 1;
          currentGuess = [];
          nextLetter = 0;
          if (guessesRemaining === 0) {
              alert("You've run out of guesses! Game over!");
              //toastr.error("You've run out of guesses! Game over!")
              //toastr.info(`The correct answer has been revealed..`)
              document.getElementById("code").textContent = rightGuessString.split('\n').slice(1).join("\n").replaceAll('@', '');
          }
      }
  }

  function compareGuesses() {
    var outBool = true;
    for(var i = 0; i < 5; i++ ) {
      if(currentGuess[i] != rightGuess[i])
        outBool = false;
    }

    return outBool;
  }

  function shadeKeyBoard(letter, color) {
    for (const b of document.getElementsByClassName("keyboard-button")) {
        const elem = b as HTMLElement;
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === green) {
                return
            } 

            if (oldColor === yellow && color !== green) {
                return
            }
            
            elem.style.backgroundColor = color
            elem.style.color = 'black';
            break
        }
    }
  }
</script>

<main>
  <h1>Code-le</h1>
  <div id="code-div" class="center-text">
    <pre><p id="code" style="color:white;">{question}</p></pre>
  </div>
  <div class='game-board'>
    {#each {length: 5} as i}
      <div class="letter-row">
        {#each {length: 5} as j}
        <Box />
        {/each}
      </div>
    {/each}
  </div>
  <div class="center">
    <button class="keyboard-button" style="width: 100px;" on:click={deleteLetter}>Del</button>
    <button class="keyboard-button" style="width: 100px;" on:click={checkGuess}>Enter</button>
  </div>
  <div class="grid-container">
    <div class="column"> 
        <u><h2>Keywords</h2></u>
        <button class="keyboard-button" on:click={() => insertLetter("if")}>if</button>
        <button class="keyboard-button" on:click={() => insertLetter("while")}>while</button>
        <button class="keyboard-button" on:click={() => insertLetter("do")}>do</button>
        <button class="keyboard-button" on:click={() => insertLetter("out")}>out</button>
    </div>
    <div class="column">
        <u><h2>Types</h2></u>
        <button class="keyboard-button" on:click={() => insertLetter("int")}>int</button>
        <button class="keyboard-button" on:click={() => insertLetter("uint")}>uint</button>
        <button class="keyboard-button" on:click={() => insertLetter("float")}>float</button>
        <button class="keyboard-button" on:click={() => insertLetter("double")}>double</button>
        <button class="keyboard-button" on:click={() => insertLetter("byte")}>byte</button>
        <button class="keyboard-button" on:click={() => insertLetter("string")}>string</button>
        <button class="keyboard-button" on:click={() => insertLetter("bool")}>bool</button>
        <button class="keyboard-button" on:click={() => insertLetter("void")}>void</button>
    </div>
    <div class="column"> 
        <u><h2>Compairson</h2></u>
        <button class="keyboard-button" on:click={() => insertLetter("<")}>&lt</button>
        <button class="keyboard-button" on:click={() => insertLetter("<=")}>&lt=</button>
        <button class="keyboard-button" on:click={() => insertLetter(">")}>&gt</button>
        <button class="keyboard-button" on:click={() => insertLetter(">=")}>&gt=</button>
        <button class="keyboard-button" on:click={() => insertLetter("==")}>==</button>
    </div>
    <div class="column"> 
        <u><h2>Operation</h2></u>
        <button class="keyboard-button" on:click={() => insertLetter("++")}>++</button>
        <button class="keyboard-button" on:click={() => insertLetter("--")}>--</button>
        <button class="keyboard-button" on:click={() => insertLetter("+=")}>+=</button>
        <button class="keyboard-button" on:click={() => insertLetter("-=")}>-=</button>
        <button class="keyboard-button" on:click={() => insertLetter("%=")}>%=</button>
        <button class="keyboard-button" on:click={() => insertLetter("/=")}>/=</button>
        <button class="keyboard-button" on:click={() => insertLetter("+")}>+</button>
        <button class="keyboard-button" on:click={() => insertLetter("-")}>-</button>
        <button class="keyboard-button" on:click={() => insertLetter("*")}>*</button>
        <button class="keyboard-button" on:click={() => insertLetter("/")}>/</button>
        <button class="keyboard-button" on:click={() => insertLetter("%")}>%</button>
        <button class="keyboard-button" on:click={() => insertLetter("=")}>=</button>
    </div>        
  </div>
</main>

<style>
  .game-board {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .letter-row {
    display: flex;
  }
  .center {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
  }
  .center-text {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: left;
  }
  .grid-container {
      width: 100%;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-row-gap: 10px;
      align-content: flex-start;
  }
  .column {
    display: flexbox;
    width: 100%;
    grid-row-gap: 10px;
  }
  .keyboard-button {
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem;
    margin: 0 2px;
    cursor: pointer;
  }
</style>
