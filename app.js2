function generateCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  const products = [
    // 1 - 10
    { img: "img/2d6dd6f4-4911-4462-a9f5-42331c42b45e.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/2f085aab-93c9-47c6-b3bd-8d59b3ab6246.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/3ac2bc83-8d79-4857-95e0-30e19677c3b8.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/4a0b6d12-7c8c-4ee0-a19e-baed88feabd9.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/4b8a1674-37e9-4eaf-82ef-a88352d77bf6.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/4eeac6c8-5b53-463e-9f07-dcbea5285774.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/05aea2b8-21c1-4007-9b5e-360c009e8120.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/5c6f7a80-949c-4ba2-b60d-86e76e76461b.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/6ec7a934-8b22-4721-818e-b9b050a41707.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/7b832dfa-307d-4f7a-8884-18c8806722f2.jpg", title: "ჩვენი პროდუქტები" },

    // 11 - 
    { img: "img/07c39f3c-989c-4c24-bb51-c8c3ac746375.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/7fb97646-59e9-44e6-856c-597801644238.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/8c5aa126-98aa-4b91-9c4c-9f765c2b07d2.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/9d458e4c-e043-4c27-8766-1531069ff9da.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/9e579d27-dc26-4403-a0ee-ccf48aa7dfc0.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/18b450bf-8aea-41a5-9869-b59eb5d321ea.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/020aaa1e-3693-4f8f-9d3f-fae9af609bc7.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/030edd4c-910c-4bf5-9c27-bf5698153913.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/31aa01ad-c36a-424a-98f5-0657835834fe.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/39b58232-2d03-415e-bbb3-e66d21a6a752.jpg", title: "ჩვენი პროდუქტები" },

    // 21 - 
    { img: "img/045c8e15-63ab-4d03-a23b-ccc3e3d6df61.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/84e5f861-b9a1-4693-8a49-d0d9cd3cca53.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/88e7cabe-a0dc-4f6a-a052-6d4c2020331f.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/97dd84e3-d4d8-4e24-b7d6-9d30095fe231.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/99d8601c-cae8-4241-8e84-31d0c8b8f291.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/213eee57-3932-4791-90b2-aa7536554f4d.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/282f7df5-affa-44f4-9739-fa7121e9162e.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/305badfa-68de-49d2-9cce-fc80ada2a6c3.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/319e22ca-4dd2-4a8c-a292-efbc527d0610.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/371dade3-3f22-4b16-96d3-bf7cd212d059.jpeg", title: "ჩვენი პროდუქტები " },

    // 31 - 
    { img: "img/396cd3bf-2dc5-4ea7-9e9d-5733f191d0db.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/434fe95a-a013-4229-85e9-8501aebdde34.jpg", title: " ჩვენი პროდუქტები" },
    { img: "img/441e8d8b-0352-445d-b416-72cd67a6018d.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/447f7551-bd7f-425a-8f6b-b061e9748407.jpeg", title: "ჩვენი პროდუქტები" },
    { img: "img/564beed0-0000-4979-abb0-5f3e263e37b6.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/679ce7df-0341-4755-bbf1-0d23df94d6fa.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/854a84a5-8caa-4d24-ad06-0901274a1cec.jpg", title: " ჩვენი პროდუქტები" },
    { img: "img/1008c876-cc60-42ab-82ec-c65146cdfb19.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/2163bd0d-cded-4718-896c-c5f425154aa0.jpg", title: "ჩვენი პროდუქტები" },
    { img: "img/4707abdc-4452-4805-8d3a-7dbb243d367c.jpg", title: "ჩვენი პროდუქტები" }
  ];

  let html = "";
  products.forEach((item, i) => {
    html += `
      <div class="card glassmorph" data-aos="fade-up" data-aos-delay="${(i % 6) * 100}">
        <div class="card-img"><img src="${item.img}" alt="${item.title}"></div>
      
        <div class="card-content"><h3>${item.title}</h3></div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById('dark-mode-toggle');
  const navbar = document.getElementById('navbar');

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  generateCards();
  AOS.init({ duration: 700, easing: "ease-out-quart", once: true });
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
/////////////////////////////////////////////////////////////////////////.............
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
/* ===================== LIGHTBOX LOGIC ===================== */

let currentIndex = 0;

document.addEventListener("click", (e) => {
  // If clicked image inside card
  if (e.target.matches(".card-img img")) {
    
    const items = [...document.querySelectorAll(".card-img img")];
    currentIndex = items.indexOf(e.target);

    openLightbox(currentIndex);
  }

  if (e.target.classList.contains("lightbox-close")) closeLightbox();
  if (e.target.classList.contains("lightbox-next")) changeSlide(1);
  if (e.target.classList.contains("lightbox-prev")) changeSlide(-1);

  // clicking outside closes
  if (e.target.id === "lightbox") closeLightbox();
});

function openLightbox(i) {
  const items = [...document.querySelectorAll(".card-img img")];
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");

  img.src = items[i].src;
  title.textContent = items[i].alt || "ჩვენი პროდუქტები";

  lb.classList.add("show");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

function changeSlide(step) {
  const items = [...document.querySelectorAll(".card-img img")];

  currentIndex = (currentIndex + step + items.length) % items.length;
  openLightbox(currentIndex);
}
