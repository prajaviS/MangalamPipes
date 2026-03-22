/* ============================================================
   script.js — Mangalam HDPE Pipes
   ============================================================ */

/* ── FAQ ACCORDION ── */
document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(function (el) {
            el.classList.remove('open');
        });

        if (!isOpen) {
            item.classList.add('open');
        }
    });
});


/* ── MANUFACTURING PROCESS TABS ── */
var processData = {
    raw: {
        title: 'High-Grade Raw Material Selection',
        desc: 'Virgin PE100 resin is selected and tested for melt flow index, density, and contamination levels. Only approved batches proceed to production.',
        b1: 'PE100 grade material',
        b2: 'Optimal molecular weight distribution',
        img: 'src/mangalam.jpg'
    },
    extrusion: {
        title: 'Precision Extrusion',
        desc: 'Our extruders operate at tightly controlled temperatures ensuring consistent melt flow and uniform wall thickness throughout the pipe length.',
        b1: 'Twin-screw extruder technology',
        b2: 'Real-time temperature monitoring',
        img: 'src/mangalam.jpg'
    },
    cooling: {
        title: 'Controlled Cooling Process',
        desc: 'Pipes pass through a precisely calibrated water cooling system to ensure dimensional stability and prevent warping or deformation.',
        b1: 'Water bath cooling tanks',
        b2: 'Controlled cooling rate',
        img: 'src/mangalam.jpg'
    },
    sizing: {
        title: 'Precision Sizing & Calibration',
        desc: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
        b1: 'Vacuum sizing technology',
        b2: 'Dimensional accuracy ±0.2mm',
        img: 'src/mangalam.jpg'
    },
    qc: {
        title: 'Rigorous Quality Control',
        desc: 'Every pipe undergoes hydrostatic pressure testing, dimensional checks, and visual inspection before leaving our facility.',
        b1: 'Hydrostatic pressure testing',
        b2: 'Dimensional verification',
        img: 'src/mangalam.jpg'
    },
    marking: {
        title: 'Permanent Identification Marking',
        desc: 'Pipes are marked with all required specifications using permanent ink jet printing for full traceability throughout their service life.',
        b1: 'Diameter, pressure rating, SDR',
        b2: 'Date and batch code stamping',
        img: 'src/mangalam.jpg'
    },
    cutting: {
        title: 'Precision Cutting',
        desc: 'Automated cutting systems ensure clean, square pipe ends ready for immediate installation or fusion welding on site.',
        b1: 'Automated length cutting',
        b2: 'Square-cut pipe ends',
        img: 'src/mangalam.jpg'
    },
    packaging: {
        title: 'Safe Packaging & Dispatch',
        desc: 'Pipes are carefully bundled and protected for safe transit, with all documentation included for customs and installation teams.',
        b1: 'Protective end caps fitted',
        b2: 'Bundled and labelled for dispatch',
        img: 'src/mangalam.jpg'
    }
};

document.querySelectorAll('.process-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        var data = processData[key];
        if (!data) return;

        document.querySelectorAll('.process-tab').forEach(function (t) {
            t.classList.remove('active');
        });
        btn.classList.add('active');

        document.getElementById('process-title').textContent = data.title;
        document.getElementById('process-desc').textContent = data.desc;
        document.getElementById('process-b1').textContent = data.b1;
        document.getElementById('process-b2').textContent = data.b2;

        var processImgEl = document.querySelector('#process-emoji img');
        if (processImgEl) processImgEl.src = data.img;
    });
});


/* ── GALLERY THUMBNAILS ── */
var thumbs = document.querySelectorAll('.thumb');
var currentThumb = 0;

thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        currentThumb = parseInt(thumb.getAttribute('data-index'));
    });
});

document.getElementById('gallery-prev').addEventListener('click', function () {
    thumbs[currentThumb].classList.remove('active');
    currentThumb = (currentThumb - 1 + thumbs.length) % thumbs.length;
    thumbs[currentThumb].classList.add('active');
});

document.getElementById('gallery-next').addEventListener('click', function () {
    thumbs[currentThumb].classList.remove('active');
    currentThumb = (currentThumb + 1) % thumbs.length;
    thumbs[currentThumb].classList.add('active');
});


/* ── CATALOGUE FORM ── */
document.getElementById('catalogue-btn').addEventListener('click', function () {
    var emailInput = document.getElementById('catalogue-email');
    var email = emailInput.value.trim();

    if (!email || !isValidEmail(email)) {
        showAlert(emailInput, 'Please enter a valid email address.');
        return;
    }

    var btn = document.getElementById('catalogue-btn');
    btn.textContent = 'Sent! ✓';
    btn.style.background = '#16a34a';
    emailInput.value = '';

    setTimeout(function () {
        btn.textContent = 'Request Catalogue';
        btn.style.background = '';
    }, 3000);
});


/* ── CTA CONTACT FORM ── */
document.getElementById('cta-submit').addEventListener('click', function () {
    var name = document.getElementById('cta-name').value.trim();
    var company = document.getElementById('cta-company').value.trim();
    var email = document.getElementById('cta-email').value.trim();
    var phone = document.getElementById('cta-phone').value.trim();

    if (!name) { showAlert(document.getElementById('cta-name'), 'Please enter your name.'); return; }
    if (!company) { showAlert(document.getElementById('cta-company'), 'Please enter your company name.'); return; }
    if (!email || !isValidEmail(email)) { showAlert(document.getElementById('cta-email'), 'Please enter a valid email.'); return; }
    if (!phone) { showAlert(document.getElementById('cta-phone'), 'Please enter your phone number.'); return; }

    var btn = document.getElementById('cta-submit');
    btn.textContent = 'Request Sent! ✓';
    btn.style.background = '#16a34a';

    ['cta-name', 'cta-company', 'cta-email', 'cta-phone'].forEach(function (id) {
        document.getElementById(id).value = '';
    });

    setTimeout(function () {
        btn.textContent = 'Request Custom Quote';
        btn.style.background = '';
    }, 4000);
});


/* ── INDUSTRIES CAROUSEL ── */
var indGrid = document.getElementById('industries-grid');

document.getElementById('ind-next').addEventListener('click', function () {
    indGrid.scrollBy({ left: 280, behavior: 'smooth' });
});
document.getElementById('ind-prev').addEventListener('click', function () {
    indGrid.scrollBy({ left: -280, behavior: 'smooth' });
});


/* ── UTILITY: EMAIL VALIDATION ── */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ── UTILITY: INPUT SHAKE ALERT ── */
function showAlert(input, message) {
    input.style.borderColor = '#ef4444';
    input.placeholder = message;
    input.classList.add('shake');

    setTimeout(function () {
        input.style.borderColor = '';
        input.classList.remove('shake');
    }, 2000);
}


/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


/* ── STICKY HEADER ── */
var stickyHeader = document.querySelector('.sticky-header');
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    var currentScrollY = window.scrollY;
    var heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 400;

    if (currentScrollY > heroHeight) {
        stickyHeader.classList.add('sticky-header--visible');
    } else {
        stickyHeader.classList.remove('sticky-header--visible');
        stickyHeader.classList.remove('sticky-header--hidden');
    }

    if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
        stickyHeader.classList.add('sticky-header--hidden');
    } else if (currentScrollY < lastScrollY) {
        stickyHeader.classList.remove('sticky-header--hidden');
    }

    lastScrollY = currentScrollY;
});


/* ── IMAGE CAROUSEL WITH ZOOM ── */
window.addEventListener('DOMContentLoaded', function () {
    var mainImg = document.querySelector('.hero-main-img img');
    if (!mainImg) return;

    var zoomLens = document.getElementById('zoom-lens');
    var zoomBox = document.getElementById('zoom-preview');
    var zoomImg = document.getElementById('zoom-preview-img');

    if (!zoomLens || !zoomBox || !zoomImg) return;

    var ZOOM = 2.5;
    var hoverTarget = document.querySelector('.hero-main-img');

    zoomImg.src = mainImg.src;

    hoverTarget.addEventListener('mousemove', function (e) {
        var rect = hoverTarget.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var lw = zoomLens.offsetWidth;
        var lh = zoomLens.offsetHeight;

        var lx = Math.max(0, Math.min(x - lw / 2, rect.width - lw));
        var ly = Math.max(0, Math.min(y - lh / 2, rect.height - lh));

        zoomLens.style.left = lx + 'px';
        zoomLens.style.top = ly + 'px';

        zoomImg.style.transformOrigin = '0 0';
        zoomImg.style.width = (rect.width * ZOOM) + 'px';
        zoomImg.style.height = (rect.height * ZOOM) + 'px';
        zoomImg.style.transform = 'translate(' + (-lx * ZOOM) + 'px, ' + (-ly * ZOOM) + 'px)';
    });

    hoverTarget.addEventListener('mouseenter', function () {
        zoomLens.style.display = 'block';
        zoomBox.style.display = 'block';
        zoomImg.src = mainImg.src;
    });

    hoverTarget.addEventListener('mouseleave', function () {
        zoomLens.style.display = 'none';
        zoomBox.style.display = 'none';
    });

    document.getElementById('gallery-next').addEventListener('click', function () {
        setTimeout(function () { zoomImg.src = mainImg.src; }, 60);
    });
    document.getElementById('gallery-prev').addEventListener('click', function () {
        setTimeout(function () { zoomImg.src = mainImg.src; }, 60);
    });
});
