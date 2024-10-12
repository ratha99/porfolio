<template>
    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title">
            <h2>Blog</h2>
        </div><!-- End Section Title -->

        <div class="container">
            <div class="row">
                <Blog   v-for="(book, index) in posts" :key="index" :title="book.title" :author="book.author"
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
import useBlogStore from "@/stores/blog.js";
import { mapActions, mapState } from "pinia";

export default{
    components: {
        Blog
    },
  async mounted() {
    await this.getAllRepositories();
  },
    async created() {
    await this.getAllRepositories();
    console.log("Get tests");
    console.log(this.posts);
  },
  computed: {
    ...mapState(useBlogStore, ["posts"]),
  },
  methods: {
    ...mapActions(useBlogStore, ["getAllRepositories"]),
  },
}
</script>