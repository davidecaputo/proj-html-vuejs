<template>
    <main>
        <section id="hero-image">
            <img src="public/img/home_slider_bg.jpg" alt="hero-image" class="w-100">
            <div class="content-hero text-white">
                <h1>Tech Forum!</h1>
                <span class="py-4 fs-4">Discuss all the lastest technology news and trends</span>
                <button class="btn dc-btn-green rounded-0 text-uppercase d-block mt-4">Get avada now!</button>
            </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #hero-image{
        position: relative;
        .content-hero{
            position: absolute;
            top: 34%;
            left: 20%;
            h1{
                font-size: 8rem;
            }
        }
    }
    button.dc-btn-green{
        background-color: var(--azure-color);
        color: var(--white-color);
        padding: 10px 40px;
        &:hover{
            background-color: var(--white-color);
            transition: 0.8s;
            color: var(--azure-color);
        }
    }
</style>