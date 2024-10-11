<template>
    <!-- Contact Section -->
    <section id="contact" class="contact section" data-aos="fade-up">

        <!-- Section Title -->
        <div class="container section-title" >
            <h2>{{ $t("contact") }}</h2>
        </div><!-- End Section Title -->

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-4">
                    <div class="info-item d-flex"  data-aos="fade-up" data-aos-delay="200">
                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh Phnom Penh, Cambodia, 120210</p>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="info-item d-flex"  >
                        <i class="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>Call Us</h3>
                            <p>092 876 679</p>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="info-item d-flex">
                        <i class="bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>Email Us</h3>
                            <p>ratha-long@mptc.gov.kh</p>
                        </div>
                    </div><!-- End Info Item -->

                </div>

                <div class="col-lg-8">
                    
                        <div class="row gy-4">

                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" placeholder="Your Name" >
                            </div>

                            <div class="col-md-6 ">
                                <input type="email" class="form-control" name="email" placeholder="Your Email"
                                    >
                            </div>

                            <div class="col-md-12">
                                <input type="text" class="form-control" name="subject" placeholder="Subject"
                                    >
                            </div>

                            <div class="col-md-12">
                                <textarea class="form-control" name="message" rows="6" placeholder="Message"
                                  ></textarea>
                            </div>

                            <div class="col-md-12 text-center">
                                <button class="btn btn-info" >Send Message</button>
                            </div>

                        </div>
                    
                </div><!-- End Contact Form -->

            </div>

        </div>

    </section><!-- /Contact Section -->
</template>