<template>
    <header>
        <div class="d-flex justify-content-evenly align-items-center h-100 text-white fs-4">
            <img :src="headerElements.logo" alt="logo">
            <div class="d-flex gap-5">
                <ul class="d-flex align-items-center gap-4 m-0">
                    <li v-for="(element, index) of headerElements.elementList" :key="index"><a href="#">{{ element }}</a></li>
                </ul>
                <button class="btn btn-dark text-uppercase px-4 py-2">{{ headerElements.button }}</button>
                <a href="#"><i :class="headerElements.icon" style="color: #ffffff;"></i></a>
            </div>
        </div>
    </header>
</template>

<script>
    import { store } from '../store/store';
    export default {
        props: {
            headerElements: Object
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 100px;
        background-color: #28afc3;
    }

    a{
        color: white;
        &:hover{
            color: lightblue;
        }
    }

</style>