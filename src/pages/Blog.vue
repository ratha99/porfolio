<template>
    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title">
            <h2>Blog</h2>
        </div><!-- End Section Title -->

        <div class="container">
            <div class="row">
                <Blog v-for="(book, index) in blog" :key="index" :title="book.title" :author="book.author"
                    :image="book.cover_image" :des="book.content" :year="book.date">
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
        var api = process.env.VUE_APP_BACKEND+"c/f270-db0d-412f-a836";
        if(this.$i18n.locale == "en"){
            api = process.env.VUE_APP_BACKEND+"c/f270-db0d-412f-a836"
        }else{
            api =process.env.VUE_APP_BACKEND+"c/0051-4a95-46ea-b2bd"
        }
        const reponse = await axios.get(api);
        const blog = reponse.data
        this.blog = blog;
        
         console.log(blog)
    },


}
</script>