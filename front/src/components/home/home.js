import axios from 'axios';

export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {
      books: [],
      bookTitle: '',
      selectedBooksData: []
    }
  },
  computed: {
    selectedBooks(){
      this.selectedBooksData = [];
      if (this.bookTitle === ''){
        return this.books;
      } else {
        this.books.forEach(book => {
          if (book.title.toLowerCase().includes(this.bookTitle.toLowerCase())){
            this.selectedBooksData.push(book);
          }
        });
        return this.selectedBooksData;
      }
      
    }

  },
  mounted () {
    axios.get("http://localhost:8090/book/books").then(response => { 
     /* eslint-disable */ 
     this.books = response.data;
    });

  },
  methods: {
    

  }
}
