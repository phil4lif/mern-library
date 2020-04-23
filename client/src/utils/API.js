import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    search: function(query){
    console.log(BASEURL + query);
    return axios.get(BASEURL + query);
    },
    saveBook : function(newbook){
    return axios.post("/api/books", newbook)    
    },
    getBooks : function(){
        return axios.get("/api/books")
    },
    delBook : function(id){
        return axios.delete("api/books/" + id)
    }

};