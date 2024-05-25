export default function MovieReviews ({ reviews }) {
  if (!reviews ||!reviews.length) {
    return <div>We don’t have any reviews for this movie</div>;
  }

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}

