<template>
    <!-- Resume Section -->
    <section id="resume" class="resume section" data-aos="fade-up">

        <!-- Section Title -->
        <div class="container section-title" >
            <h2>{{$t('resume')}}</h2>

        </div><!-- End Section Title -->

        <div class="container">

            <div class="row">

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="resume-title">{{ $t("sumary") }}</h3>

                    <div class="resume-item pb-0">
                        <h4>{{ $t("name") }}</h4>
                        <!-- <p><em>
                            Experienced Software Developer with expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                        </em></p> -->
                        <ul>
                            <li>Phnom Penh, Cambodia</li>
                            <li>092 876 679</li>
                            <li>ratha-long@mptc.gov.kh</li>
                        </ul>
                    </div><!-- Edn Resume Item -->

                    <h3 class="resume-title">{{ $t("education") }}</h3>
                    

                    <div class="resume-item">
                        <h4>{{ $t("bachelor") }}</h4>
                        <h5>2014 - 2018</h5>
                        <p><em>National University of Management</em></p>
                        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum nemo numquam molestias possimus soluta, deleniti sequi commodi unde eos minima ad debitis laudantium, vel veniam ullam et, modi ducimus!</p> -->
                    </div><!-- Edn Resume Item -->
                    <div class="resume-item">
                        <h4>{{ $t("short_course") }}</h4>
                      <li>
                        Digital Skills Essential at CATD
                      </li>
                      <li>
                        Web design with HTML and CSS at National University of Management  
                      </li>
                      <li>
                        Basic programming with C / C++ at Ant Training  
                      </li>
                      <li>
                        Studied C# beginner at Ant Training  
                      </li>
                      <li>
                         Studied C# database with SQL server at Ant Training
                      </li>
                     <li>
                        Studied PHP & Mysql at Itec Center
                     </li>
                     <li>
                        Studied android development (beginner) at CKCC
                     </li>
                     <li>
                        Studied laravel at Palm Technology
                     </li>
                    </div><!-- Edn Resume Item -->

                </div>

                <div class="col-lg-6" >
                    <h3 class="resume-title"> {{ $t("experience") }}</h3>
                    <div class="resume-item">
                        <h4>{{ $t("official") }}</h4>
                        <h5>2020 - Present</h5>
                        <p><em>MPTC, Phnom Penh, Cambodia </em></p>
                        <ul>
                            <li>Manangement Digital Public Service System</li>
                            <li>Tester</li>
                            <li>Technical Support</li>
                        </ul>
                    </div><!-- Edn Resume Item -->

                    <div class="resume-item">
                        <h4>{{ $t("position") }}(Laravel)</h4>
                        <h5>2019 - 2020</h5>
                        <p><em>Wattanak, Inc, Phnom Penh, Cambodia</em></p>
                        <ul>
                            <li>Analyze the database </li>
                            <li>Coding </li>
                            <li>Testing </li>
                            <li>Support customer</li>
                        </ul>
                    </div><!-- Edn Resume Item -->
                    <div class="resume-item">
                        <h4>{{ $t("desktop")}}(C#)</h4>
                        <h5>2017 - 2018</h5>
                        <p><em>Paml Technology, Phnom Penh, Cambodia</em></p>
                        <ul>
                            <li>Analyze the database </li>
                            <li>Coding </li>
                            <li>Testing </li>
                            <li>Support customer</li>
                        </ul>
                    </div><!-- Edn Resume Item -->

                </div>

            </div>

        </div>

    </section><!-- /Resume Section -->
</template>