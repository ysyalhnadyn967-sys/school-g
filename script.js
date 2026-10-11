// تحديد جميع الصور في السلايدر
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// تغيير الصورة تلقائياً كل 4 ثواني
setInterval(() => {
    // إخفاء الصورة الحالية
    slides[currentSlide].classList.remove('active');
    
    // الانتقال للصورة التالية (والعودة للأولى بعد الأخيرة)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // إظهار الصورة الجديدة
    slides[currentSlide].classList.add('active');
}, 4000);