(function () {
  // Mobile nav (hamburger menu, present in the header on every page)
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    var menuIconOpen = document.getElementById('menuIconOpen');
    var menuIconClose = document.getElementById('menuIconClose');
    var setMenuOpen = function (open) {
      mobileMenu.classList.toggle('hidden', !open);
      menuIconOpen.classList.toggle('hidden', open);
      menuIconClose.classList.toggle('hidden', !open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuToggle.addEventListener('click', function () {
      setMenuOpen(mobileMenu.classList.contains('hidden'));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenuOpen(false); });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 640) setMenuOpen(false);
    });
  }

  // Photo lightbox (About page)
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('.photo-thumb'));
    var photos = thumbs.map(function (t) { return t.getAttribute('data-photo'); });
    var lightboxImg = document.getElementById('lightboxImg');
    var current = 0;
    var lastFocused = null;

    var show = function (index) {
      current = (index + photos.length) % photos.length;
      lightboxImg.src = photos[current];
    };
    var open = function (index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
      document.getElementById('lightboxClose').focus();
    };
    var close = function () {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    };

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { open(i); });
    });
    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxPrev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lightboxNext').addEventListener('click', function () { show(current + 1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', function (e) {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  // Scroll-triggered reveal for content below the fold (e.g. project cards).
  // Content is visible by default (see .reveal-scroll in tailwind.css), so
  // if any of this fails to run, nothing is ever left hidden. We only start
  // hiding elements after a sentinel self-test confirms IntersectionObserver
  // can actually detect the viewport in this environment, and a hard
  // timeout unconditionally clears any leftover hidden state regardless of
  // whether the observer ever fires again. Guarded so it only ever
  // initializes once per page, even if this script were to run more than
  // once (defensive; shouldn't normally happen).
  var scrollEls = document.querySelectorAll('.reveal-scroll');
  var prefersReducedMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!window.__revealScrollInit && scrollEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    window.__revealScrollInit = true;

    // Wait a couple of frames before testing anything. Right at
    // DOMContentLoaded the browser's layout/viewport isn't always fully
    // settled yet (this is what caused the original bug: viewport
    // dimensions read as 0 if checked too early), so give it a moment
    // before asking IntersectionObserver anything.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;pointer-events:none;opacity:0;';
        document.body.appendChild(sentinel);

        var testSettled = false;
        var testTimer = setTimeout(function () {
          testSettled = true;
          sentinel.remove();
          // Self-test never reported back in time; leave everything visible.
        }, 500);

        var testObserver = new IntersectionObserver(function (entries) {
          if (testSettled) return;
          testSettled = true;
          clearTimeout(testTimer);
          testObserver.disconnect();
          sentinel.remove();

          if (!(entries[0] && entries[0].isIntersecting)) {
            // Viewport detection still looks broken; skip scroll-reveal
            // entirely rather than risk hiding content that can't be shown.
            return;
          }

          var revealObserver = new IntersectionObserver(function (revealEntries) {
            revealEntries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.remove('reveal-pending');
                revealObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

          scrollEls.forEach(function (el) {
            el.classList.add('reveal-pending');
            revealObserver.observe(el);
          });

          // Absolute safety net: whatever happens with the observer after
          // this point, nothing stays hidden for more than a few seconds.
          setTimeout(function () {
            document.querySelectorAll('.reveal-pending').forEach(function (el) {
              el.classList.remove('reveal-pending');
            });
          }, 4000);
        });
        testObserver.observe(sentinel);
      });
    });
  }

  // Project filtering
  var buttons = document.querySelectorAll('.filter-btn');
  var projects = document.querySelectorAll('.project');
  if (!buttons.length || !projects.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      buttons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('text-ink', active);
        b.classList.toggle('font-medium', active);
        b.classList.toggle('text-soft', !active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      projects.forEach(function (item) {
        var show = filter === 'all' || item.getAttribute('data-category') === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
})();
