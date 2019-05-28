import axios from 'axios';

export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {
      books: [],
      bookTitle: '',
      selectedBooksData: [],
      newBook: {title: '', description: ''},
      bookTitleState: null,
      bookDescriptionState: null
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
    showAddBookModal() {
      this.$refs['add-book-modal'].show();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      console.log('book title is' + this.newBook.title);
      

      axios.post("http://localhost:8090/book/add", this.newBook).then(response => { 
        /* eslint-disable */ 
        console.log(response.data);
        this.books = response.data;
       });

      // Hide the modal manually
      this.$nextTick(() => {
        // this.$refs.modal.hide();
        this.$refs['add-book-modal'].hide();
      });
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    checkFormValidity() {
      this.bookTitleState  = this.newBook.title === '' ? 'invalid': 'valid';
      this.bookDescriptionState  = this.newBook.title === '' ? 'invalid': 'valid';
      return this.newBook.title !== '' && this.newBook.title !== '';
    },
    resetModal() {
      this.newBook.title = '';
      this.newBook.description = '';
      this.bookTitleState = null;
      this.bookDescriptionState  = null;
    },

  }
}
