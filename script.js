// ===== MOBILE MENU =====
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = '❌ Bütün xanaları doldurun!';
        formMessage.className = 'form-message error';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = '❌ Düzgün email daxil edin!';
        formMessage.className = 'form-message error';
        return;
    }

    formMessage.textContent = '✅ Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.';
    formMessage.className = 'form-message success';
    this.reset();

    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 5000);
});
