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
        lang:"ខ្មែរ",
        name:"Long Ratha",
        position: "Web Developer",
        dob:"Date of Birth",
        web:"Website",
        phone:"Phone",
        city:"City",
        age:"Age",
        degree:"Degree",
        email:"Email",
        free:"Freelance",
        sumary:"Sumary",
        education:"Education",
        bachelor:"Bachelor of Information Technology",
        short_course:"Short Coures",
        experience:"Experience",
        desktop:"Desktop Developer",
        official:"Technical Official",
        software:"Software Development",
        ict:"ICT Solotion",
        cloud:"Cloud Solotion",
        skill:"Skill",
        blog:"Blog"
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
        lang:"En",
        name:"ឡុង រដ្ឋា",
        position: "អ្នកអភិវឌ្ឍវេបសាយ",
        dob:"ថ្ងៃខែកំណើត",
        web:"វេបសាយ",
        phone:"លេខទូរស័ព្ទ",
        city:"ទីក្រុង",
        age:"អាយុ",
        degree:"កម្រិតសិក្សា",
        email:"អ៊ីម៉ែល",
        free:"ការងារឯករាជ",
        sumary:"សង្ខេប",
        education:"ការសិក្សា",
        bachelor:"បរិញ្ញាបត្រព័ត៌មានវិទ្យា",
        short_course:"វគ្គសិក្សាខ្លី",
        experience:"បទពីសោធ",
        desktop:"អ្នកអភិវឌ្ឍកម្មវិធីកុំព្យូទ័រ",
        official:"មន្រ្តីបច្ចេកទេស",
        software:"អ្នកអភិវឌ្ឍកម្មវិធី",
        ict:"ដំណោះស្រាយ ICT",
        cloud:"ដំណោះស្រាយ ក្លោដ",
        skill:"ជំនាញ",
        blog:"Blog"


    }
}
let  i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});
if(localStorage.getItem("lang")=="khm"){
     i18n = createI18n({
        locale: 'khm', // set locale
        fallbackLocale: 'khm', // set fallback locale
        messages, // set locale messages
    })
}




export default i18n