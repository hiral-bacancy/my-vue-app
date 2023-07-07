<template>
    <div :viewType="this.checkedView"><h1 v-highlight>This is my header</h1>
        <input type="text" :searchValue="this.searchVal" v-on:keyup="searchValueData(this.$data.name = $event.target.value)" placeholder="Search data..." />
        <div class="test" @click='toggle = !toggle'></div>
        <div v-show='toggle'>
            <li v-for="checkList in checkLists" @click="getValue(checkList)">{{ checkList }}</li>
        </div>
    </div>
    
</template>

<script>
    export default {
        name:"Header",
        data () {
            return {
                toggle: false,
                checkLists: [
                    "List View",
                    "Grid View",
                    "Thumbnail View"
                ],
            }        
        },
        props: ['viewType', 'searchValue'],
        methods:{
            getValue(event){
                this.$emit('checkedView', event)
            },
            searchValueData(event){
                console.log(event);
                this.$emit('searchVal', event)
            }
        }
    };
</script>