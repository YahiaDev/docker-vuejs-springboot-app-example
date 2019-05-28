package com.books.com.books.controller;

import com.books.com.books.domain.Book;
import com.books.com.books.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/book")
public class BooksController {


    private BookService bookService;

    public BooksController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping(path = "/books")
    public ResponseEntity<List<Book>> books() {
        return ResponseEntity.ok(this.bookService.getBooks());
    }

    @PostMapping(path = "/add")
    public ResponseEntity<List<Book>> addBook(@RequestBody Book book) {
        return ResponseEntity.ok(this.bookService.addBook(book));
    }


}
