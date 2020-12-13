<template>
    <div class="container">       
        <h1>Books</h1>
        <input type="text" v-model="title" placeholder="Title" class="mr-2"/>
        <input type="text" v-model="author" placeholder="Author" class="ml-2"/>
        <ul>
            <li v-for="(b, index) in filteredBooks" :key='index'>{{b.title}} ({{b.author}})</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data:function(){
        return {
            books: [],
            title: '',
            author: ''
        }
    },
    async created() {
        let response = await axios.get('books.json');
        this.books = response.data;
    },
    computed: {
        filteredBooks:function() {
            let filtered = this.books.filter((eachBook)=>{
                return eachBook.title.toLowerCase().includes(this.title.toLowerCase())
            });

            filtered = filtered.filter((eachBook)=>{
                return eachBook.author.toLowerCase().includes(this.author.toLowerCase())
            });

            return filtered;
        }
    }
}
</script>