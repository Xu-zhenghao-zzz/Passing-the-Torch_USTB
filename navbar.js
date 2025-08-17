// 导航栏复用组件
document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    // 获取当前页面路径
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 导航栏HTML模板
    const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="北京科技大学赓续抗战精神烽炬承光社会调研实践团" height="40">
            北京科技大学赓续抗战精神烽炬承光社会调研实践团
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}" 
                   href="index.html" 
                   ${currentPage === 'index.html' || currentPage === '' ? 'aria-current="page"' : ''}>首页</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'about.html' ? 'active' : ''}" 
                   href="about.html"
                   ${currentPage === 'about.html' ? 'aria-current="page"' : ''}>关于我们</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'products.html' ? 'active' : ''}" 
                   href="products.html"
                   ${currentPage === 'products.html' ? 'aria-current="page"' : ''}>产品服务</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'news.html' || currentPage === 'news-detail.html' ? 'active' : ''}" 
                   href="news.html"
                   ${currentPage === 'news.html' || currentPage === 'news-detail.html' ? 'aria-current="page"' : ''}>新闻动态</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}" 
                   href="contact.html"
                   ${currentPage === 'contact.html' ? 'aria-current="page"' : ''}>联系我们</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    
    // 插入导航栏
    navbarContainer.innerHTML = navbarHTML;
  }
}); 