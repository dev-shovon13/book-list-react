import React from 'react';

// ! i can define both ways
//? way 1
// directly in the parameter

// function Book({ img, title, author }) {

//? way 2
function Book(props) {
    const { img, title, author } = props.book;

    // const { img, title, author } = props;
    // if I use spread operator then i don't need to define props.object_name, i can use only props
    return (
        <section className="book">
            <img src={img} alt="" />
            <h2 className="title">{title}</h2>
            <p className="author">
                <i class="fas fa-angle-right"></i> {author}
            </p>
            <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span className="ratingNumber">37328</span>
                <p className="decription">
                    Board Book <br />
                    136 offers from <span>$1.36</span>
                </p>
            </div>
        </section>
    );
}
export default Book;
