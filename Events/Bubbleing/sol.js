//!event.target => target the element where the event is occer
//!this => (event.currentTarget) => target the current element


form.onclick = function(e) {
    e.target.style.backgroundColor = 'yellow';
    setTimeout(() => {
      alert(
        `Target Name is: ${e.target.tagName} Root: ${this.tagName}`
      );
      e.target.style.backgroundColor = '';
    }, 200);
}



