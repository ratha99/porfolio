<template>
    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title">
            <h2>Book</h2>
        </div><!-- End Section Title -->

        <div class="container">
            <div class="row">
                <Blog v-for="(book, index) in blog" :key="index" :title="book.title" :author="book.author"
                    :image="book.cover_image" :des="book.shortDescription" :year="book.publication_year">
                </Blog>
                <!-- <Card>
                </Card> -->
            </div>

        </div>

    </section><!-- /Contact Section -->

</template>

<script>
import Blog from "@/components/Blog.vue"
import axios from 'axios';
export default {
    components: {
        Blog
    },
    data() {
        return {
            blog: [],
            active: false
        }
    },
    async created() {
        const reponse = await axios.get("/v1/courses");
        const blog = reponse.data
        this.blog = blog;
        console.log(blog)
    }

}
</script>