class Adapter {
  static fetchGroups() {
    return fetch('http://localhost:3000/a_cappella_groups').then(r => r.json())
  }
}


document.addEventListener('DOMContentLoaded', () => {

  Adapter.fetchGroups().then( r => r.forEach(aCappellaGroup.renderGroup))

  
})