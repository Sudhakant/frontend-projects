const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    // console.log('Submitted')
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data[0].show.image.medium);
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img);
})