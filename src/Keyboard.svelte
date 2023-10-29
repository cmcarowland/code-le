<script lang="ts">

</script>

<div class="grid-container">
    <div class="column"> 
        <u><h2>Keywords</h2></u>
        <button class="keyboard-button">if</button>
        <button class="keyboard-button">while</button>
        <button class="keyboard-button">do</button>
        <button class="keyboard-button">out</button>
    </div>
    <div class="column">
        <u><h2>Types</h2></u>
        <button class="keyboard-button">int</button>
        <button class="keyboard-button">uint</button>
        <button class="keyboard-button">float</button>
        <button class="keyboard-button">double</button>
        <button class="keyboard-button">byte</button>
        <button class="keyboard-button">string</button>
        <button class="keyboard-button">bool</button>
        <button class="keyboard-button">void</button>
    </div>
    <div class="column"> 
        <u><h2>Compairson</h2></u>
        <button class="keyboard-button">&lt</button>
        <button class="keyboard-button">&lt=</button>
        <button class="keyboard-button">&gt</button>
        <button class="keyboard-button">&gt=</button>
        <button class="keyboard-button">==</button>
    </div>
    <div class="column"> 
        <u><h2>Operation</h2></u>
        <button class="keyboard-button">++</button>
        <button class="keyboard-button">--</button>
        <button class="keyboard-button">%</button>
        <button class="keyboard-button">+=</button>
        <button class="keyboard-button">-=</button>
        <button class="keyboard-button">%=</button>
        <button class="keyboard-button">/=</button>
        <button class="keyboard-button">+</button>
        <button class="keyboard-button">-</button>
        <button class="keyboard-button">*</button>
        <button class="keyboard-button">/</button>
        <button class="keyboard-button">%</button>
        <button class="keyboard-button">=</button>
    </div>        
    
    <button class="keyboard-button">Del</button>
    <button class="keyboard-button">Enter</button>
</div>

<style>
    .keyboard-button {
        font-size: 1rem;
        font-weight: 700;
        padding: 0.5rem;
        margin: 0 2px;
        cursor: pointer;
    }
    .column {
        float: left;
        width: 25%;
    }
    .grid-container {
        width: 75%;
        text-align: center;
        display: grid;
        grid-template-columns: 12fr 12fr 12fr 12fr;
    }
</style>
