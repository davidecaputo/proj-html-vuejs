import { reactive } from "vue";

export const store = reactive({
    header:{
        logo: '../../public/img/logo.png',
        elementList: ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact us'],
        button: 'join us',
        icon: 'fa-solid fa-magnifying-glass'
    },
    footer:[]
})