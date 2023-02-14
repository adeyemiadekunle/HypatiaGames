<template>
    <section class="errorpage">
        <div>
            <h2>404</h2>
            <h4>Opps Page Not Found</h4>
            <PrimaryButton>
                <router-link to='/'> Back Home <span></span></router-link>
            </PrimaryButton>
        </div>
    </section>
</template>

<script>
import PrimaryButton from '../components/Button/PrimaryButton.vue'
export default {
    components: {
        PrimaryButton
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

.errorpage {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;
}

.errorpage div {
    text-align: center;
    height: 100%;
    width: 100%;
    /* padding-top: 100px; */
}

.errorpage h2 {
    font-size: 8rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
}

.errorpage h4 {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    margin-top: 0;
}

.errorpage button {
    margin-top: 50px;
}

.errorpage button a {
    color: #fff;
    text-decoration: none;
}
.errorpage button a:hover {
    color: black;
    text-decoration: none;
}

</style>