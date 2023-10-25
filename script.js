
  const content = document.getElementById('content');
  const message = document.getElementById('message');
  const button = document.getElementById('submit');
  let spans = document.querySelectorAll('.rating');

button.addEventListener('click',()=>{

  let pMessage = document.getElementById('rating-selected-message');
  let rating = document.querySelector('[data-selected="true"]');

  pMessage.innerHTML = `You selected ${rating.innerHTML} out of 5`;

  content.dataset.status = 'inactive';
  message.dataset.status = 'active';
});

for (const span of spans) {
  span.addEventListener('click',()=>{
    for (const option of spans) {
      option.dataset.selected = 'false';
    }
    span.dataset.selected = 'true';
  });
}

