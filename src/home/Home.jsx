import React, { useState } from 'react';
import BookCard from './BookCard';
import { BookContainer, ContainerStyle } from '../component/styles/ContainerStyle';
import { H1 , H5} from '../component/styles/ElementStyle';
import { FilterAndSortingContainer, Dropdown, FilterDropdownButton, DropdownItem, SelectedCategory, SortButton } from '../component/styles/FilterAndSortingStyle';
import { PaginationContainer, PaginationButton } from '../component/styles/PaginationStyle';
const books = [
    {
      "id": 1,
      "title": "The Enigmatic Island",
      "description": "An adventure novel set on a mysterious island.",
      "price": 12.99,
      "category": "Fiction",
      "image": "https://i.ibb.co/0V3nzwT/b13.png"
    },
    {
      "id": 2,
      "title": "The Path to Success",
      "description": "A guide to self-improvement and personal growth.",
      "price": 15.99,
      "category": "Non-Fiction",
      "image": "https://i.ibb.co/tZtDR8d/b2.jpg"
    },
    {
      "id": 3,
      "title": "Whispers in the Dark",
      "description": "A gripping mystery novel filled with suspense.",
      "price": 9.99,
      "category": "History",
      "image": "https://i.ibb.co/Cn3mDJr/b3.jpg"
    },
    {
      "id": 4,
      "title": "Galactic Odyssey",
      "description": "An epic space adventure in a distant galaxy.",
      "price": 19.99,
      "category": "Fiction",
      "image": "https://i.ibb.co/QcyS9gH/b4.png"
    },
    {
      "id": 5,
      "title": "Realm of Magic",
      "description": "A fantasy tale of magical realms and mythical creatures.",
      "price": 11.99,
      "category": "Fantasy",
      "image": "https://i.ibb.co/nL8Y1x9/b5.png"
    },
    {
      "id": 6,
      "title": "The Power Within",
      "description": "A self-help book for personal growth and empowerment.",
      "price": 14.99,
      "category": "History",
      "image": "https://i.ibb.co/XJBfJGM/b6.png"
    },
    {
      "id": 7,
      "title": "Unbroken Spirit",
      "description": "The inspiring life story of a remarkable individual.",
      "price": 10.99,
      "category": "Romance",
      "image": "https://i.ibb.co/0V3nzwT/b13.png"
    },
    {
      "id": 8,
      "title": "Footprints in History",
      "description": "A historical account of a pivotal moment in time.",
      "price": 16.99,
      "category": "History",
      "image": "https://i.ibb.co/BVhdbhk/b8.png"
    },
    {
      "id": 9,
      "title": "Hearts Entwined",
      "description": "A romantic novel of love and destiny.",
      "price": 13.99,
      "category": "Romance",
      "image": "https://i.ibb.co/3NfMw9h/b9.jpg"
    },
    {
      "id": 10,
      "title": "The Wonders of Science",
      "description": "An exploration of scientific wonders in our world.",
      "price": 17.99,
      "category": "Science",
      "image": "https://i.ibb.co/1fJk2n9/b10.jpg"
    },
    {
      "id": 11,
      "title": "The Enigmatic Island",
      "description": "An adventure novel set on a mysterious island.",
      "price": 12.99,
      "category": "Fiction",
      "image": "https://i.ibb.co/0V3nzwT/b13.png"
    },
    {
      "id": 12,
      "title": "The Path to Success",
      "description": "A guide to self-improvement and personal growth.",
      "price": 15.99,
      "category": "Non-Fiction",
      "image": "https://i.ibb.co/Fb2RdJ3/b12.jpg"
    },
    {
      "id": 13,
      "title": "Whispers in the Dark",
      "description": "A gripping mystery novel filled with suspense.",
      "price": 9.99,
      "category": "Fantasy",
      "image": "https://i.ibb.co/0V3nzwT/b13.png"
    },
    {
      "id": 14,
      "title": "Galactic Odyssey",
      "description": "An epic space adventure in a distant galaxy.",
      "price": 19.99,
      "category": "Science",
      "image": "https://i.ibb.co/sW7P9q1/b14.png"
    },
    {
      "id": 15,
      "title": "Realm of Magic",
      "description": "A fantasy tale of magical realms and mythical creatures.",
      "price": 11.99,
      "category": "Fantasy",
      "image": "https://i.ibb.co/MPjQmCN/b15.png"
    }
  ]
  
  const Home = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortByPrice, setSortByPrice] = useState('asc');
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
  
    const categories = [
      'All',
      'Fiction',
      'Non-Fiction',
      'Fantasy',
      'History',
      'Romance',
      'Science',
    ];
  
    const handleCategoryClick = (category) => {
      setActiveCategory(category);
      setShowDropdown(false);
      setCurrentPage(1); // Reset to the first page when changing category
    };
  
    const handlePaginationClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Filter books based on the active category
    const filteredBooks =
      activeCategory === 'All' ? books : books.filter((book) => book.category === activeCategory);
  
    // Sort books by price
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      if (sortByPrice === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  
    // Pagination Logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortedBooks.slice(indexOfFirstCard, indexOfLastCard);
  
    // Generate an array of page numbers for pagination buttons
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedBooks.length / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <BookContainer>
        <H1>Our All Books</H1>
        <H5>Filter by Category and Sorting by Price for All Books</H5>
        <FilterAndSortingContainer>
          <FilterDropdownButton onClick={() => setShowDropdown(!showDropdown)}>
            Filter by Category
            <SelectedCategory>{activeCategory}</SelectedCategory>
          </FilterDropdownButton>
          <Dropdown showDropdown={showDropdown}>
            {categories.map((category) => (
              <DropdownItem
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </DropdownItem>
            ))}
          </Dropdown>
          <SortButton
            onClick={() =>
              setSortByPrice(sortByPrice === 'asc' ? 'desc' : 'asc')
            }
            style={{
              backgroundColor:
                sortByPrice === 'asc' ? '#f39c12' : '#e67e22',
            }}
          >
            {sortByPrice === 'asc' ? 'Price ↑' : 'Price ↓'}
          </SortButton>
        </FilterAndSortingContainer>
        <ContainerStyle>
          {currentCards.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </ContainerStyle>
        <PaginationContainer>
          {pageNumbers.map((pageNumber) => (
            <PaginationButton
              key={pageNumber}
              onClick={() => handlePaginationClick(pageNumber)}
              style={{
                backgroundColor:
                  pageNumber === currentPage ? '#4a90e2' : '#3498db',
              }}
            >
              {pageNumber}
            </PaginationButton>
          ))}
        </PaginationContainer>
      </BookContainer>
    );
  };
  
  export default Home;
  
  
  
  
  
  