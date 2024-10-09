import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        book: 'Book',
        resume: 'Resume',
        contact:'Contact',
        services: 'Service',
        courses: 'Courses',
        register: 'Register',
        lang:"En"
    },
    khm: {
        home: 'ទំព័រដើម',
        about: 'អំពីយើង',
        book: 'សៀវភៅ',
        resume: 'ប្រវត្តិរូប',
        contact:'ទំនាក់ទំនង',
        services: 'សេវាកម្ម',
        courses: 'មេរៀន',
        register: 'ចុះឈ្មោះ',
        lang:"ខ្មែរ"

    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n