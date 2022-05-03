```jsx
const comment = {
  rating: 4,
  commentNum: 100,
  individualRating: [50, 20, 15, 8, 7]
};

<div>
  <Progress rating={comment.rating} commentNum={comment.commentNum}individualRating={comment.individualRating} />
</div>
```