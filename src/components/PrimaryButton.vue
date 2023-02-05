<template>
    <div>
        <button class="button"> {{text}} </button>
    </div>
</template>

<script >
export default {
    name: 'PrimaryButton',
    props: {text}
}

</script>

<style  scoped>
.button {
    padding: 16px  10px;
    border-radius: 5px;
    background: transparent;
    color: var(--primary-white);
    border: 1px solid var(--primary-white);
    
}

</style>