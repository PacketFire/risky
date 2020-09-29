<script>
  import * as wasm from 'risky';

  function handleClick() {
    wasm.greet('visitor');
    const emu = wasm.Emu.init_emu();
    console.log(emu.get_id());
    emu.set_id(10);
    console.log(emu.get_id());
  }
</script>

<style>
	h1 {
		color: black;
	}
</style>

<h1>Risky - a virtual 6502 emulator</h1>

<button on:click={handleClick}>Run</button>
