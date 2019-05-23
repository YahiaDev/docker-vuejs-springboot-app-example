package com.books.com.books.service;

import com.books.com.books.domain.Book;
import com.books.com.books.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public List<Book> getBooks(){
        return this.bookRepository.findAll();
    }

    public void addBook(Book book){
        this.bookRepository.save(book);
    }
}
