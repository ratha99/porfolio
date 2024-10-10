<template>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3">
        <div class="card">
            <img src="https://picsum.photos/200" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title"><b>{{ title }}</b> </h6>
                <!-- <h6 class="card-title"><b>Author:</b> {{ author }}</h6> -->
            
                <p class="card-text">{{ des }}</p>
                <p><b>{{ year }}</b> </p>
                <!-- <router-link :to="`/courses/${link}`" class="btn btn-primary">More Detail</router-link> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title", "author", "image", "des", "year"],

}
</script>
