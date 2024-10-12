<template>
       <!-- About Section -->
       <section id="about" class="about section">

<!-- Section Title -->
<div class="container section-title"  data-aos="fade-up">
  <h2>{{ $t("about") }}</h2>
  <!-- <p>
    I'm  Ratha, I am Web developer with over 3 years of experience. At the crossroads of design, motion and web development, the diversity of my skills allows me to approach design challenges from multiple perspectives. I'm currently available for a full-time position.
  </p> -->
</div><!-- End Section Title -->

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4 justify-content-center">
    <div class="col-lg-4">
      <img src="assets/img/profile.jpg" class="img-fluid" alt="">
    </div>
    <div class="col-lg-8 content">
      <h2> {{ $t("position") }}</h2>

      <div class="row">
        <div class="col-lg-6">
          <ul>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("dob") }}:</strong> <span>30 Aug 1996</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("web") }}:</strong> <span>www.example.com</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("phone") }}:</strong> <span>092 876 678</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("city") }}:</strong> <span>Phnom Penh, Cambodia</span></li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("age") }}:</strong> <span>28</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("degree") }}:</strong> <span>Bachlor Degree</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("email") }}:</strong> <span>ratha-long@example.com</span></li>
            <li><i class="bi bi-chevron-right"></i> <strong>{{ $t("free") }}:</strong> <span>Available</span></li>
          </ul>
        </div>
      </div>
      <!-- <p class="py-3">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </p> -->
    </div>
  </div>

</div>

</section><!-- /About Section -->
</template>