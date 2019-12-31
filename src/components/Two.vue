<template>
    <div>
        <div>Two</div>
        <div id="example-1">
            <button v-on:click="increase">Add 1</button>
            <button v-on:click="decrease">Remove 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
            <h3>{{ counter }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name:"Two",
    props:{},
    data(){
        return({
            counter:0
        })
    },
    methods:{
        increase: function(event){
            // `this` inside methods points to the Vue instance
            event.preventDefault();
            this.counter ++;
            return false;
        },
        decrease: function(event){
            // `this` inside methods points to the Vue instance
            event.preventDefault();
            this.counter --;
            return false;
        }
    }
}
</script>

<style scoped>
button{
    margin: 1em;
    width: 8em;
    height: 2em;
    background-color: rgb(227, 255, 71);
}
</style>