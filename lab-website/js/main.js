// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取联系表单
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // 监听表单提交事件
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 这里可以添加表单验证逻辑
            
            // 模拟表单提交
            console.log('表单数据:', formData);
            
            // 显示提交成功消息
            alert('消息已发送，我们会尽快回复您！');
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 轮播功能
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    // 显示指定幻灯片
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }

    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 上一张幻灯片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // 开始自动轮播
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // 设置3秒间隔
    }

    // 停止自动轮播
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // 添加按钮事件监听
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // 鼠标悬停时暂停轮播
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);

    // 初始化轮播
    showSlide(0);
    startAutoSlide();

    // 导航栏滚动效果
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // 向下滚动
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}); 