function Testimonial() {
  const testimonials = [
    {
      quote: "Snapcart made online shopping super easy. Quick delivery and quality products.",
      author: "Rohan Mehta, Karachi",
      image: "/images/Rohan Mehta.jpg",
      rating: 5,
    },
    {
      quote: "I was impressed with the customer service. Highly recommend Snapcart!",
      author: "Ayesha Khan, Fasilabad",
      image: "/images/imgg.jpg",
      rating: 4,
    },
    {
      quote: "Great deals and smooth checkout. I’ll definitely shop again.",
      author: "Vinay Raj, Lahore",
      image: "/images/VinayRaj.jpeg",
      rating: 5,
    },
    {
      quote: "Snapcart delivers on time, every time. Love the variety of products!",
      author: "Neha Sharma, Islamabad",
      image: "/images/neha.jpeg",
      rating: 4,
    },
  ];

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <div className="testimonial-container">
      <h1>What Our Customers Are Saying</h1>
      <p className="testimonial-subtitle">
        Hear from real Snapcart shoppers and their experiences with our service.
      </p>

      <div className="testimonial">
        {testimonials.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.author} className="avatar" />
            <p className="quote">“{item.quote}”</p>
            <div className="stars">{renderStars(item.rating)}</div>
            <p className="author">— {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
