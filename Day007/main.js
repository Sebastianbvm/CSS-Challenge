var searchBar = document.getElementById('search');
var searchIcon = document.getElementById('search-icon');
var menu = document.getElementById('menu');
var page = document.getElementById('page');

function search() {
    searchBar.classList.toggle('search')
    searchBar.classList.toggle('no-search')
}

function menufunc() {
    document.getElementById('menu').classList.toggle('menu')
    document.getElementById('menu').classList.toggle('menu-open')
    document.getElementById('page').classList.toggle('page')
    document.getElementById('page').classList.toggle('page-open')
}