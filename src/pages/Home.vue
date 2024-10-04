<template>
    <Banner></Banner>
    <About></About>
    <Skill></Skill>
    <Resume></Resume>
    <Service></Service>
</template>

<script>
import Banner from "@/pages/Banner.vue"
import About from '@/pages/About.vue';
import Skill  from '@/components/Skill.vue'
import Resume from '@/pages/Resume.vue';
import Service from '@/pages/Service.vue';
export default {
    components: {
        Banner,
        About,
        Skill,
        Resume,
        Service
    }
}
</script>