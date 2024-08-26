let atStatus1 = true; // 初始状态位于第一个 status
let atStatus2 = false;

// 禁止文档滚动行为
document.body.style.overflowY = 'hidden';

document.addEventListener('wheel', function(event) {
    const status1 = document.getElementById('status1');
    const status2 = document.getElementById('status2');
    const rect1 = status1.getBoundingClientRect();
    const rect2 = status2.getBoundingClientRect();

    if (atStatus1 && event.deltaY > 0) {
        // 如果在 status1 且用户向下滚动，跳转到 status2
        window.scrollTo({ top: status2.offsetTop, behavior: 'smooth' });
        atStatus1 = false;
        atStatus2 = true;
        event.preventDefault(); // 阻止滚动行为直到跳转完成
    } else if (atStatus2 && event.deltaY < 0 && rect2.top === 0) {
        // 如果在 status2 且用户向上滚动，跳转回 status1
        window.scrollTo({ top: 0, behavior: 'smooth' });
        atStatus1 = true;
        atStatus2 = false;
        document.body.style.overflowY = 'hidden'; // 重新禁止滚动
        event.preventDefault(); // 阻止滚动行为直到跳转完成
    } else if (atStatus2 && event.deltaY > 0 && rect2.top === 0) {
        // 如果在 status2 且用户向下滚动，解除滚动禁令
        document.body.style.overflowY = 'auto';
    }
}, { passive: false });

window.addEventListener('scroll', function() {
    const status1 = document.getElementById('status1');
    const rect1 = status1.getBoundingClientRect();

    if (rect1.top === 0 && !atStatus1) {
        // 当 status1 从页面底部滚动到顶部时，启用滚动禁用
        document.body.style.overflowY = 'hidden';
        atStatus1 = true; // 更新状态，标记已在 status1
        atStatus2 = false;
    }
});