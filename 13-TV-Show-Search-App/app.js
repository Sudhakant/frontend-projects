const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('Submitted')
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.qurey.value;
})