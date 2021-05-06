import {controller} from '@github/catalyst'

@controller
export default class HelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello World!'
    console.log("hellllooooooooo 👋")
  }
}
