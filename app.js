document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // ==========================================================================
  // PRELOADER
  // ==========================================================================
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  });

  // ==========================================================================
  // TYPING EFFECT
  // ==========================================================================
  const typed = new Typed('.typing-effect', {
    strings: ['რკინას', 'ხელოვნებას', 'მომავალს', 'უსაფრთხოებას', 'ხარისხს'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
  });

  // ==========================================================================
  // COUNTER ANIMATION
  // ==========================================================================
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = +counter.getAttribute('data-duration') || 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = Math.ceil(current);
          }
        }, 16);
        
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
//=============================================================================
  //ANOTHER ONE
  /* plain JS: toggle, set ARIA, keyboard support */
document.querySelectorAll('.collapsible').forEach(root => {
  const btn = root.querySelector('.collapsible__trigger');
  const content = root.querySelector('.collapsible__content');

  function open() {
    root.classList.add('collapsible--open');
    btn.setAttribute('aria-expanded', 'true');
    content.removeAttribute('hidden');

    // Optional: set precise max-height for a smoother, content-sized animation
    const full = content.scrollHeight + 'px';
    content.style.maxHeight = full;

    root.classList.add('collapse--open');
    btn.setAttribute('aria-expanded', 'true');
    const Full = content.background = 'rgba(255, 255, 255, 0.9)';
  }

  function close() {
    root.classList.remove('collapsible--open');
    btn.setAttribute('aria-expanded', 'false');
    // animate to zero then hide
    content.style.maxHeight = content.scrollHeight + 'px'; // ensure start value
    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';

       root.classList.add('collapse--open');
    btn.setAttribute('aria-expanded', 'false');
    const Full = content.background = '';
    });
    content.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'max-height') {
        content.setAttribute('hidden', '');
        content.removeEventListener('transitionend', handler);
      }
    });
  }

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) close(); else open();
  });

  // keyboard: Enter + Space already handled for button elements by default.
  // but if you use a non-button element, add a keydown handler here.
});
//=============================================================================
  counters.forEach(counter => counterObserver.observe(counter));
  // ==========================================================================
  // NAVBAR SCROLL EFFECT
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // MOBILE MENU
  // ==========================================================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ==========================================================================
  // SMOOTH SCROLL
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // GALLERY FILTER
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.tab');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter items
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================================================
  // LIGHTGALLERY
  // ==========================================================================
  lightGallery(document.getElementById('lightgallery'), {
    selector: '.gallery-item',
    thumbnail: true,
    animateThumb: false,
    zoom: true,
    actualSize: true,
    share: true,
    fullScreen: true,
    download: false,
    hash: false,
    autoplay: false,
    autoplayControls: false,
    counter: true,
    escKey: true,
    mousewheel: true,
    getCaptionFromTitleOrAlt: true
  });

  // ==========================================================================
  // SWIPER
  // ==========================================================================
  new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  // ==========================================================================
  // THREE.JS 3D MODEL
  // ==========================================================================
  let scene, camera, renderer, gate, controls;

  function init3D() {
    const container = document.getElementById('three-container');
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    camera = new THREE.PerspectiveCamera(60, container.clientWidth / 400, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, 400);
    container.appendChild(renderer.domElement);

    // Gate
    const geometry = new THREE.BoxGeometry(2, 3, 0.2);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x111111
    });
    gate = new THREE.Mesh(geometry, material);
    scene.add(gate);

    // Lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x0066cc, 0.5);
    light2.position.set(-5, 5, -5);
    scene.add(light2);

    const ambient = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambient);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    camera.position.z = 5;

    // Resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / 400;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, 400);
    });

    animate3D();
  }

  function animate3D() {
    requestAnimationFrame(animate3D);
    gate.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
  }

  init3D();

  // ==========================================================================
  // FORM VALIDATION & SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      
      if (!name || !phone) {
        alert('გთხოვთ შეავსოთ სახელი და ტელეფონი');
        return;
      }

      const btn = contactForm.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> იგზავნება...';
      btn.disabled = true;

      // Simulate API
      setTimeout(() => {
        alert(`გმადლობთ, ${name}! ჩვენ დაგიკავშირდებით მალე.`);
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }

  // ==========================================================================
  // BACK TO TOP
  // ==========================================================================
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================================================
  // DARK MODE
  // ==========================================================================
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // Load preference
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // ==========================================================================
  // SCROLL DOWN ARROW
  // ==========================================================================
  document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollTo({
      top: document.getElementById('products').offsetTop - 100,
      behavior: 'smooth'
    });
  });

});


// ==========================================================================
// 3D STAIRS – FULLY WORKING
// ==========================================================================
function initStairs3D() {
  const container = document.getElementById('stairs-3d-container');
  if (!container) return;

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  // Camera
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / 500, 0.1, 100);
  camera.position.set(4, 3, 6);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(container.clientWidth, 500);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0x404040, 0.7);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 8, 5);
  dirLight.castShadow = true;
  dirLight.shadow.camera.left = -10;
  dirLight.shadow.camera.right = 10;
  dirLight.shadow.camera.top = 10;
  dirLight.shadow.camera.bottom = -10;
  scene.add(dirLight);

  // Stairs Group
  const stairs = new THREE.Group();

  const stepCount = 12;
  const stepHeight = 0.18;
  const stepDepth = 0.3;
  const stepWidth = 1.2;

  // Materials
  const metalMat = new THREE.MeshPhongMaterial({
    color: 0x2c2c2c,
    metalness: 0.95,
    roughness: 0.15,
    emissive: 0x0a0a0a
  });

  const stepMat = new THREE.MeshPhongMaterial({
    color: 0x3a3a3a,
    roughness: 0.3
  });

  // Create Steps
  for (let i = 0; i < stepCount; i++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(stepWidth, 0.05, stepDepth),
      stepMat
    );
    step.position.y = i * stepHeight;
    step.position.z = (i - stepCount / 2) * stepDepth;
    step.castShadow = true;
    step.receiveShadow = true;
    stairs.add(step);

    // Rail supports
    if (i % 2 === 0) {
      const support = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, stepHeight * 2, 8),
        metalMat
      );
      support.position.y = stepHeight;
      support.position.x = -stepWidth / 2 - 0.05;
      support.position.z = step.position.z;
      stairs.add(support);

      const support2 = support.clone();
      support2.position.x = stepWidth / 2 + 0.05;
      stairs.add(support2);
    }
  }

  // Handrails
  const railGeo = new THREE.CylinderGeometry(0.02, 0.02, stepCount * stepDepth, 16);
  const leftRail = new THREE.Mesh(railGeo, metalMat);
  leftRail.position.set(-stepWidth / 2 - 0.1, stepHeight * 6, 0);
  leftRail.rotation.x = Math.PI / 2;
  stairs.add(leftRail);

  const rightRail = leftRail.clone();
  rightRail.position.x = stepWidth / 2 + 0.1;
  stairs.add(rightRail);

  scene.add(stairs);

  // Controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;
  controls.minDistance = 3;
  controls.maxDistance = 12;
  controls.maxPolarAngle = Math.PI / 2.2;

  // Resize
  const onResize = () => {
    camera.aspect = container.clientWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, 500);
  };
  window.addEventListener('resize', onResize);

  // Animation
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // Cleanup
  container._cleanup = () => {
    window.removeEventListener('resize', onResize);
    renderer.dispose();
  };
}

// Lazy Load – მხოლოდ როცა გადაახვევთ
const stairsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initStairs3D();
      stairsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const stairsContainer = document.getElementById('stairs-3d-container');
if (stairsContainer) {
  stairsObserver.observe(stairsContainer);
}

/////////////////////////////////////////////////////////////////////////////
// ==========================================================================
// GLASS + 10,000+ FLOWING BLUE LINES
// ==========================================================================
function initGlassLines() {
  const container = document.getElementById('glass-lines-bg');
  if (!container) return;

  const lineCount = 10000; // 
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    line.className = 'line';

    // Random position & animation
    const top = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = 6 + Math.random() * 6; // 6-12s
    const width = 100 + Math.random() * 300; // px

    line.style.top = `${top}%`;
    line.style.width = `${width}px`;
    line.style.animationDelay = `${delay}s`;
    line.style.animationDuration = `${duration}s`;

    fragment.appendChild(line);
  }

  container.appendChild(fragment);

  // Parallax on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    container.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initGlassLines, 1000); // after preloader
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
