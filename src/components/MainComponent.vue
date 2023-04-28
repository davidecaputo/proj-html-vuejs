<template>
    <main>
        <section id="hero-image">
            <img src="public/img/home_slider_bg.jpg" alt="hero-image" class="w-100">
            <div class="content-hero text-white">
                <h1>Tech Forum!</h1>
                <span class="py-4 fs-4">Discuss all the lastest technology news and trends</span>
                <button class="btn dc-btn dc-btn-green text-uppercase mt-4">Get avada now!</button>
            </div>
        </section>
        <section id="place">
            <div class="place-content container d-flex flex-column align-items-center w-50">
                <span class="text-uppercase pb-4 fw-bold fs-5 text-secondary">Avada forum is the place to be</span>
                <span class="text-center text-black-50 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam quam cumque dolores asperiores quibusdam dolore et perferendis aliquid ex beatae est culpa error, unde ducimus quae dolorum veniam temporibus?</span>
            </div>
        </section>
        <section id="news">
            <div class="container p-5">
                <p class="fw-bold text-center text-uppercase text-secondary">Phasellus eget metus</p>
                <h2 class="text-center">All the latest news</h2>
                <div class="row py-5">
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_25-320x202.jpg" alt="">
                        <h5>Morbi vitae dui euismod vulputate sollicitudin</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | 2 Comments</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum minima reiciendis omnis assumenda perspiciatis! Deserunt adipisci nulla velit. Ut minus assumenda vero eos corrupti doloremque quam repudiandae nam dolorem dolores.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_24-320x202.jpg" alt="">
                        <h5>Vivamus pellenteque, felis quis varius</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | Comments Off</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo corrupti quisquam, reiciendis mollitia animi, expedita, eligendi distinctio repellat excepturi dolor numquam inventore? Maiores veritatis, distinctio et inventore magnam ullam at.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_23-320x202.jpg" alt="">
                        <h5>Donec ornare pretium eget scelisque</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | Comments Off</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi reprehenderit dolore minus sed itaque assumenda neque maiores quos praesentium soluta obcaecati vero cupiditate esse error quam et, ullam consequatur!</p>
                        </div>
                    </div>
                    <div class="col-12 position-relative py-5">
                        <img src="public/img/featured_article_1_bg.jpg" alt="article">
                        <div class="article text-white">
                            <h6 class="text-uppercase pb-2">Featured article</h6>
                            <h2>Cras malesuada et orci eget pharetra</h2>
                            <p class="w-75 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe cumque, quis assumenda tempore facilis totam quaerat! Voluptas commodi, reiciendis, nam natus laborum nostrum maiores, soluta sed asperiores reprehenderit quas!</p>
                            <button class="btn dc-btn dc-btn-black text-uppercase">Read more</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_22-320x202.jpg" alt="">
                        <h5>Fusce sollicitudin nunc sed placerat varius</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | Comments Off</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi reprehenderit dolore minus sed itaque assumenda neque maiores quos praesentium soluta obcaecati vero cupiditate esse error quam et, ullam consequatur!</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_21-320x202.jpg" alt="">
                        <h5>Donec facilis sodales leo sit amet laoreet</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | Comments Off</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi reprehenderit dolore minus sed itaque assumenda neque maiores quos praesentium soluta obcaecati vero cupiditate esse error quam et, ullam consequatur!</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <img src="../../public/img/post_feat_img_20-320x202.jpg" alt="">
                        <h5>Proin eu purus sed aru aliquet curabir vens</h5>
                        <div class="text-secondary">
                            <span>October 11th, 2015 | Comments Off</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi reprehenderit dolore minus sed itaque assumenda neque maiores quos praesentium soluta obcaecati vero cupiditate esse error quam et, ullam consequatur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    #place{
        background-color: var(--light-grey-color);
        .place-content{
            padding: 100px 80px;
        }
    }
    #news{
        img{
            width: 100%;
        }
        .article{
            position: absolute;
            top: 50%;
            left: 10%;
            h6{
                letter-spacing: 1rem;
            }
        }
    }

    .dc-btn{
        display: block;
        border-radius: 0;
        color: var(--white-color);
    }
    button.dc-btn-green{
        background-color: var(--azure-color);
        padding: 10px 40px;
        &:hover{
            background-color: var(--white-color);
            transition: 0.8s;
            color: var(--azure-color);
        }
    }
    button.dc-btn-black{
        background-color: var(--dark-color);
        padding: 10px 40px;
        &:hover{
            background-color: var(--white-color);
            transition: 0.8s;
            color: var(--dark-color);
        }
    }
</style>