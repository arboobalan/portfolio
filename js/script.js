const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const target = this.getAttribute('href').replace('#','');

    document.querySelectorAll('.hidden-section').forEach(sec => {
      sec.style.display = 'none';
    });

    if(target === 'about' || target === 'projects' || target === 'education'){
      document.getElementById(target).style.display = 'block';
    }
  });
});
