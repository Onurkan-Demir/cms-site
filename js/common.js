/* CMS Jant — Common JS for all pages */

// Scroll effect for navbar
window.addEventListener('scroll', function(){
    const nav = document.querySelector('.navbar');
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Search overlay
(function initSearch(){
    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    if(!searchBtn || !searchOverlay) return;

    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        searchOverlay.classList.add('active');
        setTimeout(function(){ searchInput.focus(); }, 300);
    });

    searchClose.addEventListener('click', function(){
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    });

    searchOverlay.addEventListener('click', function(e){
        if(e.target === searchOverlay){
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && searchOverlay.classList.contains('active')){
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }
    });

    var searchPages = [
        {title:'Ana Sayfa', titleEn:'Home Page', url:'index.html'},
        {title:'Hakkımızda', titleEn:'About Us', url:'corporate-company.html'},
        {title:'Sosyal Sorumluluk', titleEn:'Social Responsibility', url:'corporate-social-responsibility.html'},
        {title:'Politikalar', titleEn:'Policies', url:'corporate-policies.html'},
        {title:'Ürün Grupları', titleEn:'Product Groups', url:'product-groups.html'},
        {title:'Ürün Teknolojileri', titleEn:'Product Technologies', url:'product-technology.html'},
        {title:'Marka ve Referanslar', titleEn:'Brand and References', url:'product-brand-and-referance.html'},
        {title:'AR-GE Merkezi', titleEn:'R&D Center', url:'arge.html'},
        {title:'Kalite', titleEn:'Quality', url:'kalite.html'},
        {title:'Sürdürülebilirlik', titleEn:'Sustainability', url:'sustainability.html'},
        {title:'İletişim', titleEn:'Communication', url:'communication.html'}
    ];

    var submitBtn = document.getElementById('searchSubmit');
    if(submitBtn) submitBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', function(e){ if(e.key === 'Enter') doSearch(); });

    function doSearch(){
        var q = searchInput.value.trim().toLowerCase();
        if(!q) return;
        var found = searchPages.find(function(p){
            return p.title.toLowerCase().includes(q) || p.titleEn.toLowerCase().includes(q);
        });
        if(found) window.location.href = found.url;
    }
})();
