import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("The Zelda controller is now loaded!");
  }

  play() {
    console.log("Button clicked! TODO: play a sound");
    const sound = new Audio('secret.mp3');
    sound.play();
  }
}
