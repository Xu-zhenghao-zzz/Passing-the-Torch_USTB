// 主要JavaScript文件

// 留言表单提交处理
document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.getElementById('messageForm');
  
  if (messageForm) {
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // 获取表单数据
      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // 在实际应用中，这里应该发送数据到服务器
      // 这里仅做演示，显示提交成功消息
      
      // 创建成功提示元素
      const successAlert = document.createElement('div');
      successAlert.className = 'alert alert-success mt-3';
      successAlert.innerHTML = `
        <h5>留言提交成功！</h5>
        <p>尊敬的 ${name}，感谢您的留言。我们会尽快与您联系。</p>
      `;
      
      // 清空表单
      messageForm.reset();
      
      // 显示成功消息
      messageForm.parentNode.appendChild(successAlert);
      
      // 5秒后移除成功消息
      setTimeout(() => {
        successAlert.remove();
      }, 5000);
    });
  }
  
  // 添加Bootstrap图标支持
  const iconLink = document.createElement('link');
  iconLink.rel = 'stylesheet';
  iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
  document.head.appendChild(iconLink);
});

// 轮播图自动播放设置
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000,
    wrap: true
  });
}); 