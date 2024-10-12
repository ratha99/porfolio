import axios from "axios";
import { defineStore } from "pinia";

const useBlogStore = defineStore("blogpost", {
  state: () => ({
    posts: [],
    currentLanguage: "en", // Initialize with default language
  }),
  actions: {
    async getAllRepositories() {
      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? `${process.env.VUE_APP_BACKEND}${"c/0051-4a95-46ea-b2bd"}`
            : `${process.env.VUE_APP_BACKEND}${"c/f270-db0d-412f-a836"}`;

        const { data } = await axios.get(apiUrl);
        // console.log(data);
        this.posts = data;
      } catch (err) {
        console.log(err.message);
      }
    },
    setLanguage(language) {
      this.currentLanguage = language; // Update the language in state
      this.getAllRepositories(); // Fetch posts based on the new language
    },
  },
});

export default useBlogStore;
