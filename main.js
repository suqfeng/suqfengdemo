// 滚动动画
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 技能进度条动画
const skillBars = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            bar.style.width = bar.dataset.percent + '%';
        }
    });
});

// 作品卡片悬停效果
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.work-overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.work-overlay').style.opacity = '0';
    });
});