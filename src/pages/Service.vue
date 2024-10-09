<template>
    <!-- Services Section -->
    <section id="services" class="services section">

        <!-- Section Title -->
        <div class="container section-title">
            <h2>Services</h2>
        </div><!-- End Section Title -->

        <div class="container">
            <div class="row gy-4">

                <Service v-for="(item, index) in service" :key="index" :title="item.title" :img="item.img"
                    :description="item.description"></Service>
            </div>
        </div>

    </section><!-- /Services Section -->

</template>
<script>
import Service from "@/components/Service.vue"
export default {
    data() {
        return {
            service: [
                { title: "Software Development", img: "images/w1.png", description: "A business application is software designed to help organizations perform specific tasks or processes more efficiently. It supports core business functions such as finance, customer management, human resources, project management, and supply chain operations. Business applications streamline workflows, automate routine tasks, and provide data-driven insights, enabling better..." },
                { title: "ICT Solution", img: "images/w2.png", description: "We are transforming the cyber security landscape through a complete range of state of the art services and solutions for government security agencies all the way to businesses and individuals..." },
                { title: "Cloud Solution", img: "images/w3.png", description: "Cloud services and solutions refer to the delivery of computing resources—such as storage, servers, databases, software, and networking—over the internet. Instead of owning and maintaining physical infrastructure, organizations can access these resources on-demand from cloud providers like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud..." },
                
            ]
        }
    },
    components: {
        Service
    }
}
</script>