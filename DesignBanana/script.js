function setActive(link) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
}