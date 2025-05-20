document.addEventListener('DOMContentLoaded', function() {
    // Scroll butonlarını oluştur
    const scrollButtons = document.createElement('div');
    scrollButtons.className = 'scroll-buttons';
    
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-btn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.title = 'Yukarı Çık';
    
    const scrollBottomBtn = document.createElement('button');
    scrollBottomBtn.className = 'scroll-btn';
    scrollBottomBtn.innerHTML = '↓';
    scrollBottomBtn.title = 'Aşağı İn';
    
    scrollButtons.appendChild(scrollTopBtn);
    scrollButtons.appendChild(scrollBottomBtn);
    document.body.appendChild(scrollButtons);

    // Scroll butonlarının görünürlüğünü kontrol et
    function toggleScrollButtons() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        scrollTopBtn.classList.toggle('visible', scrollTop > 100);
        scrollBottomBtn.classList.toggle('visible', scrollTop + windowHeight < documentHeight - 100);
    }

    // Scroll olayını dinle
    window.addEventListener('scroll', toggleScrollButtons);
    
    // Sayfa yüklendiğinde butonları kontrol et
    toggleScrollButtons();

    // Scroll butonlarına tıklama olaylarını ekle
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBottomBtn.addEventListener('click', function() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Sayfa geçişleri için
    const pageContent = document.querySelector('.page-transition');
    if (pageContent) {
        // Sayfa yüklendiğinde
        pageContent.classList.remove('loading');
        
        // Link tıklamalarını yakala
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href && link.href.startsWith(window.location.origin)) {
                e.preventDefault();
                pageContent.classList.add('loading');
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    }
}); 