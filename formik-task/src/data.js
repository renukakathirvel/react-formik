const books = [
    {
    "image_url": "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288",
    "title": "On the Origin of Species",
    "author": "Charles Darwin",
    "publication_date": "November 24, 1859",
    "series": "N/A",
    "isbn_no": "0565095021",
    "plot": "t argues that the numerous traits and adaptations that differentiate species from each other also explain how species evolved over time and gradually diverged.",
    "id": "1"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/71kXYs4tCvL._AC_UF1000,1000_QL80_.jpg",
    "title": "1984",
    "author": "George Orwell",
    "publication_date": "June 8, 1949",
    "series": "N/A",
    "isbn_no": "978-0451524935",
    "plot": "1984 portrays a dystopian society ruled by a totalitarian regime led by Big Brother. It follows Winston Smith's struggle against the oppressive government and his quest for truth and freedom.",
    "id": "2"
    },
    {
    "image_url": "https://cdn.kobo.com/book-images/f980a412-6e90-4c0f-a495-9ef455e0edcb/1200/1200/False/the-great-gatsby-illustrated-2.jpg",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publication_date": "April 10, 1925",
    "series": "N/A",
    "isbn_no": "978-0743273565",
    "plot": "The Great Gatsby is set in the Roaring Twenties and follows the enigmatic Jay Gatsby's pursuit of wealth, status, and his lost love, Daisy Buchanan.",
    "id": "3"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publication_date": "July 16, 1951",
    "series": "N/A",
    "isbn_no": "978-0316769488",
    "plot": "The Catcher in the Rye is a coming-of-age novel narrated by Holden Caulfield, a disenchanted teenager who searches for authenticity and connection in a superficial world.",
    "id": "4"
    },
    {
    "image_url": "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "publication_date": "June 26, 1997",
    "series": "Harry Potter",
    "isbn_no": "978-0747532699",
    "plot": "The first book in the Harry Potter series introduces readers to the young wizard Harry Potter as he begins his magical education at Hogwarts School of Witchcraft and Wizardry.",
    "id": "5"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/71k--OLmZKL._AC_UF1000,1000_QL80_.jpg",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "publication_date": "September 21, 1937",
    "series": "Middle-Earth Universe",
    "isbn_no": "978-0547928227",
    "plot": "The Hobbit follows the journey of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest to reclaim the Lonely Mountain and its treasure from the dragon Smaug.",
    "id": "6"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg",
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "publication_date": "July 29, 1954",
    "series": "Middle-Earth Universe",
    "isbn_no": "978-0544003415",
    "plot": "The Lord of the Rings trilogy follows the quest to destroy the One Ring, which holds the power to control Middle-earth, and the journey of Frodo Baggins and the Fellowship of the Ring.",
    "id": "7"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/91uMrXq+4RL._AC_UF1000,1000_QL80_.jpg",
    "title": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "publication_date": "July 4, 1865",
    "series": "Alice's Adventures",
    "isbn_no": "978-1503290318",
    "plot": "Alice's Adventures in Wonderland follows the whimsical journey of Alice as she falls down a rabbit hole into a fantastical world filled with peculiar creatures and nonsensical events.",
    "id": "8"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/61jkWPqFk2L._AC_UF1000,1000_QL80_.jpg",
    "title": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "publication_date": "October 16, 1950",
    "series": "The Chronicles of Narnia",
    "isbn_no": "978-0066238500",
    "plot": "The Chronicles of Narnia is a series of seven fantasy novels that take readers to the magical land of Narnia, where they embark on adventures filled with mythical creatures, battles between good and evil, and themes of faith and redemption.",
    "id": "9"
    },
    {
    "image_url": "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publication_date": "January 28, 1813",
    "series": "N/A",
    "isbn_no": "978-0141439518",
    "plot": "Pride and Prejudice follows the story of Elizabeth Bennet, as she navigates issues of manners, morality, education, and marriage in the society of the landed gentry of early 19th-century England.",
    "id": "10"
    }
];

const authors = [
    {
    "author_name": "Leo Tolstoy",
    "birth_date": "September 9, 1828",
    "short_bio": "Leo Tolstoy was a Russian writer widely regarded as one of the greatest authors of all time. His novels War and Peace and Anna Karenina are often cited as pinnacles of realist fiction. Tolstoy's ideas on nonviolent resistance and moral living had a profound influence on figures such as Mahatma Gandhi and Martin Luther King Jr.",
    "famous_works": "War and Peace, Anna Karenina, The Death of Ivan Ilyich",
    "image_url": "https://cdn.pixabay.com/photo/2016/12/28/22/15/moscow-1937274_1280.jpg",
    "id": "1"
    },
    {
    "author_name": "Fyodor Dostoevsky",
    "birth_date": "November 11, 1821",
    "short_bio": "Fyodor Dostoevsky was a Russian novelist, philosopher, and journalist, best known for his novels exploring human psychology in the troubled political, social, and spiritual context of 19th-century Russia. His works, including Crime and Punishment and The Brothers Karamazov, have had a profound and lasting impact on literature and existential thought.",
    "famous_works": "Crime and Punishment, The Brothers Karamazov, The Idiot",
    "image_url": "https://cdn.britannica.com/45/181345-050-189BA6B8/Fyodor-Dostoyevsky-1876.jpg",
    "id": "2"
    },
    {
    "author_name": "Mark Twain",
    "birth_date": "November 30, 1835",
    "short_bio": "Mark Twain was an American writer, humorist, and lecturer best known for his novels The Adventures of Tom Sawyer and its sequel, Adventures of Huckleberry Finn. Twain is celebrated for his wit, satire, and keen observations of American society.",
    "famous_works": "The Adventures of Tom Sawyer, Adventures of Huckleberry Finn, The Prince and the Pauper",
    "image_url": "https://zicxa.com/vi/wp-content/uploads/2023/08/1691383386_428_Mark-Twain-Tieu-su-cuoc-doi-tac-pham-SACH.jpg",
    "id": "3"
    },
    {
    "author_name": "Charlotte Bronte",
    "birth_date": "April 21, 1816",
    "short_bio": "Charlotte Bronte was an English novelist and poet, the eldest of the three Bronte sisters whose novels became classics of English literature. Her best-known work, Jane Eyre, is considered one of the greatest romance novels ever written.",
    "famous_works": "Jane Eyre, Shirley, Villette",
    "image_url": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/29/14/5291916.jpg?width=1200",
    "id": "4"
    },
    {
    "author_name": "Herman Melville",
    "birth_date": "August 1, 1819",
    "short_bio": "Herman Melville was an American novelist, short story writer, and poet best known for his novel Moby-Dick. Melville's works explore themes of adventure, exploration, and the complexities of human nature.",
    "famous_works": "Moby-Dick, Typee, Bartleby, the Scrivener",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Herman_Melville_1860.jpg",
    "id": "5"
    },
    {
    "author_name": "Virginia Woolf",
    "birth_date": "January 25, 1882",
    "short_bio": "Virginia Woolf was an English writer and modernist whose works explore the inner lives of characters through stream-of-consciousness narrative techniques. She is best known for her novels Mrs. Dalloway and To the Lighthouse.",
    "famous_works": "Mrs. Dalloway, To the Lighthouse, Orlando",
    "image_url": "https://e0.pxfuel.com/wallpapers/152/727/desktop-wallpaper-books-in-52-weeks-bw13-virginia-woolf-thumbnail.jpg",
    "id": "6"
    },
    {
    "author_name": "Gabriel Garcia Marquez",
    "birth_date": "March 6, 1927",
    "short_bio": "Gabriel Garcia Marquez was a Colombian novelist, short-story writer, screenwriter, and journalist, known affectionately as Gabo throughout Latin America. He was awarded the Nobel Prize in Literature in 1982, primarily for his masterpiece One Hundred Years of Solitude.",
    "famous_works": "One Hundred Years of Solitude, Love in the Time of Cholera, Chronicle of a Death Foretold",
    "image_url": "https://miro.medium.com/v2/resize:fit:666/1*RcOzm9c8GrfM7oyamDyEag@2x.jpeg",
    "id": "7"
    },
    {
    "author_name": "Agatha Christie",
    "birth_date": "September 15, 1890",
    "short_bio": "Agatha Christie was an English writer known for her detective novels featuring Hercule Poirot and Miss Marple. She is considered the best-selling novelist of all time, with over two billion copies sold and her works translated into over 100 languages.",
    "famous_works": "Murder on the Orient Express, The Murder of Roger Ackroyd, And Then There Were None",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgYqT-ySQazc1Byo6wgI4bJd80rSjxVqqvEEoT07R13eZce1d-a-n09HOFOeVGmYu2Xw&usqp=CAU",
    "id": "8"
    },
    {
    "author_name": "Charles Dickens",
    "birth_date": "February 7, 1812",
    "short_bio": "Charles Dickens was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era. His works, such as Oliver Twist, David Copperfield, and Great Expectations, are classics of English literature.",
    "famous_works": "Oliver Twist, David Copperfield, Great Expectations",
    "image_url": "https://ichef.bbci.co.uk/news/976/cpsprodpb/850D/production/_112616043_mediaitem112616042.jpg",
    "id": "9"
    },
    {
    "author_name": "Jane Austen",
    "birth_date": "December 16, 1775",
    "short_bio": "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Her novels, including Pride and Prejudice and Emma, are classics of English literature.",
    "famous_works": "Pride and Prejudice, Sense and Sensibility, Emma",
    "image_url": "https://cdn.britannica.com/79/83679-050-08F0DFBA/Jane-Austen.jpg",
    "id": "10"
    }
];