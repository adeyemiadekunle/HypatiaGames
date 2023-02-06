<template>
        <button class="secondarybutton"><slot>Button</slot></button>
</template>

<script >
export default {
    name: 'SecondaryButton',
}

</script>

<style  scoped>
.secondarybutton {
    padding: 15px  40px;
    border-radius: 5px;
    background: transparent;
    color: var(--primary-white);
    border: 1px solid var(--primary-white);; 
    font-size: var(--step-1);
    transition: all 0.3s ease-in-out;
}

.secondarybutton:hover {
    background: var(--primary-white);
    color: var(--secondary-black);
    border: 1px solid var(--primary-white);
}

</style>