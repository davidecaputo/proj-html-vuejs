<template>
    <footer>
        <div class="footer-top container">
            <div class="row">
                <div class="col-3">
                    <ul>
                        <li class="text-uppercase mb-4"><h5>{{ footerElements.listElement1.title}}</h5></li>
                        <li class="text-secondary">{{ footerElements.listElement1.content }}</li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li class="text-uppercase mb-4"><h5>{{ footerElements.listElement2.title }}</h5></li>
                        <li v-for="(element, index) of footerElements.listElement2.content"><a href="#">{{ element }}</a><hr></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li class="text-uppercase mb-4"><h5>{{ footerElements.listElement3.title }}</h5></li>
                        <li v-for="(element, index) of footerElements.listElement3.content"><a href="#">{{ element }}</a><hr></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul>
                        <li class="text-uppercase mb-4"><h5>{{ footerElements.listElement4.title }}</h5></li>
                        <li v-for="(element, index) of footerElements.listElement4.content"><a href="#">{{ element }}</a><hr></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom container">
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
        props: {
            footerElements: Object
        },
        data() {
            return {
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height: 500px;
        padding: 20px 0px;
        a{
        color: var(--dark-color);
        &:hover{
            text-decoration: underline;
        }
    }
    }
</style>