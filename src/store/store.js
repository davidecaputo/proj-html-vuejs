import { reactive } from "vue";

export const store = reactive({
    header:{
        logo: 'public/img/logo.png',
        elementList: ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact us'],
        button: 'join us',
        icon: 'fa-solid fa-magnifying-glass'
    },
    footer:{
        listElement1:{
            title: 'Avada tech forum',
            content: 'Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.'
        },
        listElement2:{
            title: 'Popular topics',
            content: ['Nam a dolor volutpat massa auctor semper', 'Sed euismod nunc urna fermentum arcu dapibus fringilla.', 'Cras lacinia tellus id mauris finibus lacus molestie', 'Curabitur a scelerisque ligula']
        },
        listElement3:{
            title: 'Recent topics',
            content: ['Cras lacinia tellus id mauris finibus lacus molestie', 'Proin at ligula sagittis vestibulum nisi vitae', 'Sed nec metus at est tincidunt elementum', 'Nulla egestas nulla eu nulla suscipit molestie']
        },
        listElement4:{
            title: 'Latest replies',
            content: ['Cras lacinia tellus id mauris finibus lacus molestie', 'Cras lacinia tellus id mauris finibus lacus molestie', 'Nulla egestas nulla eu nulla suscipit molestie', 'Mauris ac nibh quis eros sagittis lacinia a et dui']
        }
    }
})