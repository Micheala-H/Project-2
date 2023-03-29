const postReview = async (event) => {
  console.log('in post');
    event.preventDefault();
    const character_id = window.location.pathname.split('/').pop();
    const rating = document.querySelector('#character-rating').value.trim();
    const comment = document.querySelector('#character-review').value.trim();
  
    if (rating && comment) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ character_id, rating, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create review.');
      }
    }
  };

  const deleteCharacter = async (event) => {
    console.log(`in character delete`);
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const deleteReview = async (event) => {
    console.log(`in review delete`);
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
  .querySelector('#delete-character-btn')
  .addEventListener('click', deleteCharacter);
  document
  .querySelector('.delete-review-btn')
  .addEventListener('click', deleteReview);
  document
  .querySelector('.new-review-form')
  .addEventListener('submit', postReview);

  //let deleteCharacterEl = document.querySelector(`#delete-character-btn`)
//let deleteReviewEl = document.querySelector(`.delete-review-btn`)
//reviewButtonEl = document.getElementById('#save-review')
//deleteReviewEl.addEventListener('click', deleteReview);
//deleteCharacterEl.addEventListener('click', deleteCharacter)
//reviewButtonEl.addEventListener('click', postReview);