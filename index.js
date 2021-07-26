const SearchTitle = document.querySelector(".SearchBar-Container .SearchBarContent .SearchTitle");

fetch("icons/icon.svg")
    .then(rawres => {
        rawres.text()
            .then(res => {
                SearchTitle.innerHTML = res;
            });
    }).catch(() => {
        SearchTitle.innerHTML = "Mafee All Search"
    })

setTimeout(() => {
    document.body.style.backgroundImage = "url(https://source.unsplash.com/collection/70801487/720x480)";
}, 600);

